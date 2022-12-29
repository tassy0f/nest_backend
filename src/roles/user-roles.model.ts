import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { Role } from "./role.model";


// Класс, как таблица, созданная на основе себя же и интерфейса в который мы передаем значение
@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @ApiProperty({example: 1, description: 'Айдишник как в любой бд, уникальный, инкрементируемый, первичный'})
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) 
    id: number;

    @ApiProperty({example: 1, description: 'Уникальное значение роли пользователя'})
    @ForeignKey( () => Role)
    @Column({type:DataType.INTEGER}) 
    roleId: number;

    @ApiProperty({example: 1, description: 'Уникальное значение пользователя'})
    @ForeignKey( () => User)
    @Column({type:DataType.INTEGER})  
    userId: number;


}