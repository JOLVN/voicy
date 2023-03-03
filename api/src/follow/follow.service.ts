import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { NotificationService } from 'src/notification/notification.service'
import { Repository } from 'typeorm'
import { CreateFollowDto } from './dto/create-follow.dto'
import { FollowEntity } from './entities/follow.entity'

@Injectable()
export class FollowService {

	constructor(
		@InjectRepository(FollowEntity)
		private readonly followRepository: Repository<FollowEntity>,
		private readonly notificationService: NotificationService,
	) { }

	async findAll() {
		const follows = await this.followRepository
			.createQueryBuilder('follow')
			.leftJoinAndSelect('follow.follower', 'follower')
			.leftJoinAndSelect('follow.following', 'following')
			.getMany()

		return follows
	}

	async findFollowersByIdUser(idUser: number) {
		const followers = await this.followRepository
			.createQueryBuilder('follow')
			.leftJoinAndSelect('follow.follower', 'follower')
			.where('follow.following = :id', { id: idUser })
			.getMany()

		return followers
	}

	async findFollowingsByIdUser(idUser: number) {
		const followings = await this.followRepository
			.createQueryBuilder('follow')
			.leftJoinAndSelect('follow.following', 'following')
			.where('follow.follower = :id', { id: idUser })
			.getMany()

		return followings
	}

	async create(data: CreateFollowDto) {

		const follow = await this.createFollow(data)
		await this.notificationService.create({
			follow: follow,
			user: follow.following
		})

		return follow
	}

	async createFollow(data: CreateFollowDto) {
		return await this.followRepository.save(data)
	}

	softDelete(id: number) {
		return this.followRepository.softDelete(id)
	}
}
