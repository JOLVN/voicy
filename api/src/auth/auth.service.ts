import { Injectable } from '@nestjs/common'
import { SignupAuthDto } from './dto/signup-auth.dto'
import { SigninAuthDto } from './dto/signin-auth.dto'
import { UserService } from 'src/user/user.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  signup(data: SignupAuthDto) {
    return this.userService.create(data)
  }

  async signin(data: SigninAuthDto) {
    const user = await this.validateUser(data)

    const payload = {
      email: user.email,
      id: user.id
    }

    return {
      access_token: this.generateJwtToken(payload)
    }
  }

  async validateUser(data: SigninAuthDto) {
    const user = await this.userService.findUserByEmail(data.email)
    if (!user) throw new Error('User not found')
    const validPassword = await bcrypt.compare(data.password, user.password)
    if (!validPassword) throw new Error('Invalid password')
    return user
  }

  generateJwtToken(payload) {
    return this.jwtService.sign(payload)
  }
}
