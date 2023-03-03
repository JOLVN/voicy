import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { log } from 'console'
import { NotificationEntity } from 'src/notification/entities/notification.entity'
import { NotificationService } from 'src/notification/notification.service'
import { SamplePostService } from 'src/sample-post/sample-post.service'
import { Repository } from 'typeorm'
import { CreateLikeDto } from './dto/create-like.dto'
import { LikeEntity } from './entities/like.entity'

@Injectable()
export class LikeService {

	constructor(
		@InjectRepository(LikeEntity)
		private readonly likeRepository: Repository<LikeEntity>,
		private readonly notificationService: NotificationService,
		private readonly samplePostService: SamplePostService
	) { }

	async findAll() {
		const likes = await this.likeRepository
			.createQueryBuilder('like')
			.leftJoinAndSelect('like.sourceUser', 'user')
			.leftJoinAndSelect('like.samplePost', 'samplePost')
			.getMany()

		return likes
	}

	async findOne(id: number) {
		return await this.likeRepository.findOneBy({ id })
	}

	async create(data: CreateLikeDto) {

		const like = await this.createLike(data)
		const samplePost = await this.samplePostService.findOne(data.samplePost.id)
		await this.notificationService.create({
			like: like,
			user: samplePost.user
		})

		return like
	}

	async createLike(data: CreateLikeDto) {
		return await this.likeRepository.save(data)
	}

	async softDelete(id: number) {
		return await this.likeRepository.softDelete(id)
	}
}
