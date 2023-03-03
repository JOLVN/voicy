import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignupAuthDto } from './dto/signup-auth.dto'
import { SigninAuthDto } from './dto/signin-auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() data: SignupAuthDto) {
    return this.authService.signup(data)
  }

  @Post('signin')
  signin(@Body() data: SigninAuthDto) {
    return this.authService.signin(data)
  }
}
