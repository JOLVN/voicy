import { Timestamp } from "src/Generic/timestamp.entity"
import { SamplePostEntity } from "src/sample-post/entities/sample-post.entity"
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm"

@Entity('uploadFile')
export class UploadFileEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true
    })
    ETag: string

    @Column()
    Location: string

    @Column({
        nullable: true
    })
    key: string

    @Column({
        nullable: true
    })
    Key: string

    @Column({
        nullable: true
    })
    Bucket: string

    // @OneToOne(() => SamplePostEntity, post => post.uploadFile)
    // post: SamplePostEntity
}
