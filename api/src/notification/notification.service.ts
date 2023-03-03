import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateNotificationDto } from './dto/create-notification.dto'
import { NotificationEntity } from './entities/notification.entity'

@Injectable()
export class NotificationService {

	constructor(
		@InjectRepository(NotificationEntity)
		private readonly notificationRepository: Repository<NotificationEntity>
	) { }

	async findAll() {
		const notifications = await this.notificationRepository
			.createQueryBuilder('notification')
			.leftJoinAndSelect('notification.like', 'like')
			.leftJoinAndSelect('notification.follow', 'follow')
			.leftJoinAndSelect('notification.user', 'user')
			.getMany()

		return notifications
	}

	async create(data: CreateNotificationDto) {
		return await this.notificationRepository.save(data)
	}

	async getUserNotifications(idUser: number) {
		const notifications = await this.notificationRepository
			.createQueryBuilder('notification')
			.leftJoinAndSelect('notification.like', 'like')
			.leftJoinAndSelect('notification.follow', 'follow')
			.leftJoinAndSelect('notification.user', 'user')
			.where('notification.user = :idUser', { idUser })
			.getMany()

		return notifications
	}

	async softDelete(id: number) {
		return await this.notificationRepository.softDelete(id)
	}
}
