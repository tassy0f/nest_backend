import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {  // Простой объект, который не содержит в себе никакой логики. Нужен для обмена данными типа: клиент - сервер или сервер - сервер.

    @ApiProperty({example: 'user@mail.ru', description: 'Почта как юзернейм - не нулевая'})
    @IsString({message: "Must be a string"})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: '1234567890', description: 'Пароль - не нулевой'})
    @IsString({message: "Must be a string"})
    @Length(5, 16, {message: "Не меньше 4 и не больше 16"})
    readonly password: string;
}