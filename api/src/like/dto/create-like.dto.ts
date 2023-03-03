import { CreateNotificationDto } from "src/notification/dto/create-notification.dto";
import { CreateSamplePostDto } from "src/sample-post/dto/create-sample-post.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateLikeDto {
    sourceUser: CreateUserDto
    targetUser: CreateUserDto
    samplePost: CreateSamplePostDto
    notification: CreateNotificationDto
}
