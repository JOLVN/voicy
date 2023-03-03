import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { FollowService } from './follow.service'
import { CreateFollowDto } from './dto/create-follow.dto'

@Controller('follows')
export class FollowController {

  constructor(private readonly followService: FollowService) { }

  @Get()
  findAll() {
    return this.followService.findAll()
  }

  @Get('followers/:idUser')
  findFollowersByIdUser(
    @Param('idUser', ParseIntPipe) idUser: number
  ) {
    return this.followService.findFollowersByIdUser(idUser)
  }

  @Get('followings/:idUser')
  findFollowingsByIdUser(
    @Param('idUser', ParseIntPipe) idUser: number
  ) {
    return this.followService.findFollowingsByIdUser(idUser)
  }

  @Post()
  create(
    @Body() data: CreateFollowDto
  ) {
    return this.followService.create(data)
  }

  @Delete(':id')
  softDelete(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.followService.softDelete(id)
  }
}
