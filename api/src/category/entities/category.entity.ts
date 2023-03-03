import { Timestamp } from "src/Generic/timestamp.entity"
import { SamplePostEntity } from "src/sample-post/entities/sample-post.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('category')
export class CategoryEntity extends Timestamp {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    name: string

    @ManyToMany(() => SamplePostEntity, samplePost => samplePost.categories)
    samplePosts: SamplePostEntity[]

}