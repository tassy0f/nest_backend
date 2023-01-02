import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";

interface PostCreationAtrrs{
    title: string;
    content: string;
    userId: number;
    image: string;
}


// Класс, как таблица, созданная на основе себя же и интерфейса в который мы передаем значение
@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAtrrs> {

    @ApiProperty({example: 1, description: 'Уникальный номер пользователя, инкрементируемый, первичный'})
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true}) 
    id: number;

    @ApiProperty({example: 'Заголовок статьи', description: 'Заголовок статьи, не может быть пустым'})
    @Column({type:DataType.STRING, allowNull: false}) 
    title: string;

    @ApiProperty({example: 'Вышел заяц на крыльцо...', description: 'Текст статьи, стринговый и не пустой'})
    @Column({type:DataType.STRING, allowNull: false})  
    conrent: string;
    
    @ApiProperty({example: '.jpeg', description: 'Картинка в статье'})
    @Column({type:DataType.STRING})  
    image: string;

    @ApiProperty({example: 1, description: 'Id пользователя, Автор поста'})
    @ForeignKey(() => User)
    @Column({type:DataType.INTEGER}) 
    userId: number;

    @BelongsTo(() => User)
    aythor: User;
}