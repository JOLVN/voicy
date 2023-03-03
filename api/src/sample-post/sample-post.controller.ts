import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common'
import { SamplePostService } from './sample-post.service'
import { CreateSamplePostDto } from './dto/create-sample-post.dto'
import { UpdateSamplePostDto } from './dto/update-sample-post.dto'
// import { User } from 'src/decorator/user.decorator'

@Controller('sample-posts')
export class SamplePostController {

  constructor(private readonly samplePostService: SamplePostService) { }

  @Get()
  findAll(
    @Query() queries
  ) {
    return this.samplePostService.findAll(queries)
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.samplePostService.findOne(id)
  }

  @Post()
  create(
    @Body() data: CreateSamplePostDto
    // @User() user,
    // @UploadedFiles() files,
  ) {
    return this.samplePostService.create(data)
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateSamplePostDto
  ) {
    return this.samplePostService.update(id, data)
  }

  @Delete(':id')
  softDelete(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.samplePostService.softDelete(id)
  }
}
