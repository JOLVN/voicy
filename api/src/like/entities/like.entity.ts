import { Timestamp } from "src/Generic/timestamp.entity";
import { NotificationEntity } from "src/notification/entities/notification.entity";
import { SamplePostEntity } from "src/sample-post/entities/sample-post.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('like')
export class LikeEntity extends Timestamp {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, user => user.likes)
    sourceUser: UserEntity

    @ManyToOne(() => SamplePostEntity, samplePost => samplePost.likes)
    samplePost: SamplePostEntity

    @OneToOne(() => NotificationEntity, notification => notification.like, {
        cascade: ['insert']
    })
    notification: NotificationEntity

}
