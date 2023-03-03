import { Timestamp } from "src/Generic/timestamp.entity"
import { NotificationEntity } from "src/notification/entities/notification.entity"
import { UserEntity } from "src/user/entities/user.entity"
import { Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('follow')
export class FollowEntity extends Timestamp {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, user => user.followings)
    @JoinTable()
    follower: number

    @ManyToOne(() => UserEntity, user => user.followers)
    @JoinTable()
    following: number

    @OneToOne(() => NotificationEntity, notification => notification.follow)
    notification: NotificationEntity

}
