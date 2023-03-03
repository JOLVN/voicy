import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { LikeService } from './like.service'
import { CreateLikeDto } from './dto/create-like.dto'

@Controller('likes')
export class LikeController {

	constructor(private readonly likeService: LikeService) { }

	@Get()
	findAll() {
		return this.likeService.findAll()
	}

	@Get(':id')
	findOne(
		@Param('id', ParseIntPipe) id: number) {
		return this.likeService.findOne(id)
	}

	@Post()
	create(
		@Body() data: CreateLikeDto
	) {
		return this.likeService.create(data)
	}

	@Delete(':id')
	softDelete(
		@Param('id', ParseIntPipe) id: number
	) {
		return this.likeService.softDelete(id)
	}
}
