import { CategoryEntity } from "src/category/entities/category.entity"
import { Timestamp } from "src/Generic/timestamp.entity"
import { LikeEntity } from "src/like/entities/like.entity"
import { UserEntity } from "src/user/entities/user.entity"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('sample_post')
export class SamplePostEntity extends Timestamp {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    name: string

    @Column({
        nullable: true
    })
    lyrics: string

    @ManyToMany(() => CategoryEntity, category => category.samplePosts, {
        cascade: ['insert']
    })
    @JoinTable()
    categories: CategoryEntity[]

    @ManyToOne(() => UserEntity, user => user.samplePosts)
    @JoinTable()
    user: UserEntity

    @OneToMany(() => LikeEntity, like => like.samplePost)
    @JoinTable()
    likes: LikeEntity[]

    // @OneToOne(() => UploadFileEntity, uploadFile => uploadFile.post)
    // @JoinColumn()
    // uploadFile: UploadFileEntity;

}
