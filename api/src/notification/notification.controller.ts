import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common'
import { NotificationService } from './notification.service'
import { CreateNotificationDto } from './dto/create-notification.dto'

@Controller('notifications')
export class NotificationController {

  constructor(private readonly notificationService: NotificationService) { }

  @Get()
  findAll() {
    return this.notificationService.findAll()
  }

  @Get(':idUser')
  getUserNotifications(
    @Param('idUser', ParseIntPipe) idUser: number
  ) {
    return this.notificationService.getUserNotifications(idUser)
  }

  @Post()
  create(
    @Body() data: CreateNotificationDto
  ) {
    return this.notificationService.create(data)
  }

  @Delete(':id')
  softDelete(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.notificationService.softDelete(id)
  }
}
