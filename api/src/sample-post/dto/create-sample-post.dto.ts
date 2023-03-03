import { CreateUserDto } from "src/user/dto/create-user.dto"

export class CreateSamplePostDto {
    id: number
    name: string
    lyrics?: string
    user: CreateUserDto
}
