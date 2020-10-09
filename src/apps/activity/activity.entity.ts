import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Max, IsNotEmpty } from "class-validator";
/**
 * activity
 * @Date 2020-9-30 13:51:05
 * @author YXL
 * @export
 * @class Activity
 */
@Entity({
    name: 'activity'
})
export class Activity {
    /**
     * 主键 id
     *
     * @type { number }
     * @memberof Activity
     */
    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;
    /**
     * Cost
     *
     * @type { number }
     * @memberof Activity
     */
    @Column({ name: 'Cost' })
    @IsNotEmpty({ message: '【Cost】不能为空' })
    @Max(11, { message: '【Cost】长度不能超过11' })
    cost: number;
    /**
     * NumberLimit
     *
     * @type { number }
     * @memberof Activity
     */
    @Column({ name: 'NumberLimit' })
    @IsNotEmpty({ message: '【NumberLimit】不能为空' })
    @Max(11, { message: '【NumberLimit】长度不能超过11' })
    numberLimit: number;
    /**
     * Creater
     *
     * @type { number }
     * @memberof Activity
     */
    @Column({ name: 'Creater' })
    @IsNotEmpty({ message: '【Creater】不能为空' })
    @Max(11, { message: '【Creater】长度不能超过11' })
    creater: number;
    /**
     * Name
     *
     * @type { string }
     * @memberof Activity
     */
    @Column({ name: 'Name' })
    @IsNotEmpty({ message: '【Name】不能为空' })
    @Max(255, { message: '【Name】长度不能超过255' })
    name: string;
    /**
     * Posters
     *
     * @type { string }
     * @memberof Activity
     */
    @Column({ name: 'Posters' })
    @IsNotEmpty({ message: '【Posters】不能为空' })
    @Max(255, { message: '【Posters】长度不能超过255' })
    posters: string;
    /**
     * StartTime
     *
     * @type { string }
     * @memberof Activity
     */
    @Column({ name: 'StartTime' })
    @IsNotEmpty({ message: '【StartTime】不能为空' })
    @Max(255, { message: '【StartTime】长度不能超过255' })
    startTime: string;
    /**
     * EndTime
     *
     * @type { string }
     * @memberof Activity
     */
    @Column({ name: 'EndTime' })
    @IsNotEmpty({ message: '【EndTime】不能为空' })
    @Max(255, { message: '【EndTime】长度不能超过255' })
    endTime: string;
    /**
     * Content
     *
     * @type { string }
     * @memberof Activity
     */
    @Column({ name: 'Content' })
    @IsNotEmpty({ message: '【Content】不能为空' })
    @Max(255, { message: '【Content】长度不能超过255' })
    content: string;
}