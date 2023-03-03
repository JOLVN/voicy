import { FollowEntity } from "src/follow/entities/follow.entity"
import { Timestamp } from "src/Generic/timestamp.entity"
import { LikeEntity } from "src/like/entities/like.entity"
import { UserEntity } from "src/user/entities/user.entity"
import { Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('notification')
export class NotificationEntity extends Timestamp {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, user => user.notifications)
    @JoinTable()
    user: UserEntity

    @OneToOne(() => LikeEntity, like => like.notification)
    @JoinColumn()
    like: LikeEntity

    @OneToOne(() => FollowEntity, follow => follow.notification)
    @JoinColumn()
    follow: FollowEntity

}
