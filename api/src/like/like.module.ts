import { Module } from '@nestjs/common'
import { LikeService } from './like.service'
import { LikeController } from './like.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LikeEntity } from './entities/like.entity'
import { NotificationModule } from 'src/notification/notification.module'
import { SamplePostModule } from 'src/sample-post/sample-post.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([LikeEntity]),
    NotificationModule,
    SamplePostModule
  ],
  controllers: [LikeController],
  providers: [LikeService]
})

export class LikeModule { }
