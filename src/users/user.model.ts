import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/role.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAtrrs{
    email:string;
    password:string;
}


// Класс, как таблица, созданная на основе себя же и интерфейса в который мы передаем значение
@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAtrrs> {

    @ApiProperty({example: 1, description: 'Уникальный номер пользователя, инкрементируемый, первичный'})
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) 
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почта как юзернейм - не нулевая'})
    @Column({type:DataType.STRING, unique: true, allowNull: false}) 
    email: string;

    @ApiProperty({example: '1234567890', description: 'Пароль - не нулевой'})
    @Column({type:DataType.STRING, allowNull: false})  
    password: string;

    @ApiProperty({example: true, description: 'По умолчанию не забанен'})
    @Column({type:DataType.BOOLEAN, defaultValue: false}) 
    banned: boolean;

    @ApiProperty({example: 'Неполиткорректно излагает свои мысли', description: 'Причина бана может быть не указана'})
    @Column({type:DataType.STRING, allowNull: true})  
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: [Role]
    
}