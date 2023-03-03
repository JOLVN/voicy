import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) { }

	async create(data: CreateUserDto) {
		data.password = await bcrypt.hash(data.password, 10)
		return await this.userRepository.save(data)
	}

	async findAll() {
		return await this.userRepository.find()
	}

	async findOne(id: number) {
		return await this.userRepository.findOneBy({ id })
	}

	async update(id: number, data: UpdateUserDto) {
		const user = await this.findOne(id)

		if (!user) {
			throw new NotFoundException(`User #${id} not found`)
		}
		if (data.password) {
			data.password = await bcrypt.hash(data.password, 10)
		}
		return await this.userRepository.update(id, data)
	}

	async sofDelete(id: number) {
		return await this.userRepository.softDelete(id)
	}

	async findUserByEmail(email: string): Promise<UserEntity> {
		return await this.userRepository.findOneBy({ email })
	}
}
