import { FollowEntity } from "src/follow/entities/follow.entity"
import { LikeEntity } from "src/like/entities/like.entity"
import { NotificationEntity } from "src/notification/entities/notification.entity"
import { SamplePostEntity } from "src/sample-post/entities/sample-post.entity"
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string

    @Column({
        nullable: true
    })
    firstName: string

    @Column({
        nullable: true
    })
    lastName: string

    @Column({
        unique: true
    })
    username: string

    @Column({
        nullable: true
    })
    pictureUrl: string

    @Column({
        nullable: true
    })
    phone: string

    @OneToMany(() => SamplePostEntity, post => post.user)
    samplePosts: SamplePostEntity[]

    @OneToMany(() => FollowEntity, follow => follow.following)
    followings: UserEntity[]

    @OneToMany(() => FollowEntity, follow => follow.follower)
    followers: UserEntity[]

    @OneToMany(() => LikeEntity, like => like.sourceUser)
    likes: LikeEntity[]

    @OneToMany(() => NotificationEntity, notification => notification.user)
    notifications: NotificationEntity[]

}
