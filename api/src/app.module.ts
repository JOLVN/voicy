import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { CategoryModule } from './category/category.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { UploadFileModule } from './upload-file/upload-file.module'
import { SamplePostModule } from './sample-post/sample-post.module';
import { FollowModule } from './follow/follow.module';
import { NotificationModule } from './notification/notification.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [

    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),

    CategoryModule,
    UserModule,
    AuthModule,
    UploadFileModule,
    SamplePostModule,
    FollowModule,
    NotificationModule,
    LikeModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
