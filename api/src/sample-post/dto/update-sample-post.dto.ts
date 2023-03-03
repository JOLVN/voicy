import { PartialType } from '@nestjs/mapped-types';
import { CreateSamplePostDto } from './create-sample-post.dto';

export class UpdateSamplePostDto extends PartialType(CreateSamplePostDto) {}
