import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateSamplePostDto } from './dto/create-sample-post.dto'
import { UpdateSamplePostDto } from './dto/update-sample-post.dto'
import { SamplePostEntity } from './entities/sample-post.entity'

@Injectable()
export class SamplePostService {

	constructor(
		@InjectRepository(SamplePostEntity)
		private readonly samplePostRepository: Repository<SamplePostEntity>,
		// private readonly uploadFileService: UploadFileService
	) { }

	async findAll(queries) {
		let { page, limit, search, order, published, categories } = queries

		categories = categories ? categories.split(',') : []

		limit = limit ? parseInt(limit) : 10

		const query = await this.samplePostRepository
			.createQueryBuilder('post')
			.leftJoinAndSelect('post.categories', 'categories')
			.leftJoinAndSelect('post.user', 'user')
		// .leftJoinAndSelect('post.uploadFile', 'uploadFile')

		if (categories.length > 0) {
			query.andWhere('categories.id IN (:...categories)', { categories })
		}

		const postList = query
			.limit(limit)
			.getMany()

		return postList
	}

	async findOne(id: number) {
		const post = await this.samplePostRepository
			.createQueryBuilder('post')
			.leftJoinAndSelect('post.categories', 'categories')
			.leftJoinAndSelect('post.user', 'user')
			.where('post.id = :id', { id })
			// .leftJoinAndSelect('post.uploadFile', 'uploadFile')
			.getOne()

		return post
	}

	async create(data: CreateSamplePostDto) {
		// const uploadFile = await this.uploadFileService.create(files[0], user)
		// data.author = parseInt(user.id)
		// data.uploadFile = uploadFile
		return await this.samplePostRepository.save(data)
	}

	async update(id: number, data: UpdateSamplePostDto) {
		const post = await this.samplePostRepository.findOneBy({ id })
		const postUpdate = { ...post, ...data }
		await this.samplePostRepository.save(postUpdate)

		return postUpdate
	}

	async softDelete(id: number) {
		return await this.samplePostRepository.softDelete(id)
	}
}
