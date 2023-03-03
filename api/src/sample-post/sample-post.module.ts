import { Module } from '@nestjs/common'
import { SamplePostService } from './sample-post.service'
import { SamplePostController } from './sample-post.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SamplePostEntity } from './entities/sample-post.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([SamplePostEntity]),
    // UploadFileModule
  ],
  controllers: [SamplePostController],
  providers: [SamplePostService],
  exports: [SamplePostService]
})
export class SamplePostModule { }
