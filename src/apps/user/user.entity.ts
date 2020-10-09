import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Max, IsNotEmpty } from "class-validator";
/**
 * user
 * @Date 2020-9-30 13:51:05
 * @author YXL
 * @export
 * @class User
 */
@Entity({
    name: 'user'
})
export class User {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof User
     */
    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;
    /**
     * Unionid
     *
     * @type { string }
     * @memberof User
     */
    @Column({ name: 'Unionid' })
    @IsNotEmpty({ message: '【Unionid】不能为空' })
    @Max(255, { message: '【Unionid】长度不能超过255' })
    unionid: string;
    /**
     * Phone
     *
     * @type { string }
     * @memberof User
     */
    @Column({ name: 'Phone' })
    @IsNotEmpty({ message: '【Phone】不能为空' })
    @Max(255, { message: '【Phone】长度不能超过255' })
    phone: string;
    /**
     * Email
     *
     * @type { string }
     * @memberof User
     */
    @Column({ name: 'Email' })
    @IsNotEmpty({ message: '【Email】不能为空' })
    @Max(255, { message: '【Email】长度不能超过255' })
    email: string;
}