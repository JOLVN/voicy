import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { CategoryEntity } from './entities/category.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) { }

  async findAll() {
    return await this.categoryRepository.find()
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id })
  }

  async create(data: CreateCategoryDto) {
    return await this.categoryRepository.save(data)
  }

  async update(id: number, data: UpdateCategoryDto) {
    const category = await this.findOne(id)

    if (!category) {
      throw new NotFoundException(`Category #${id} not found`)
    }

    const categoryUpdate = { ...category, ...data }

    await this.categoryRepository.save(categoryUpdate)

    return categoryUpdate
  }

  async softDelete(id: number) {
    return await this.categoryRepository.softDelete(id)
  }
}
