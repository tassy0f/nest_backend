import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAtrrs{
    value:string;
    description:string;
}


// Класс, как таблица, созданная на основе себя же и интерфейса в который мы передаем значение
@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAtrrs> {

    @ApiProperty({example: 1, description: 'Уникальный номер роли пользователя инкрементируемый, первичный'})
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) 
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное значение роли пользователя'})
    @Column({type:DataType.STRING, unique: true, allowNull: false}) 
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type:DataType.STRING, allowNull: false})  
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: [User]
}