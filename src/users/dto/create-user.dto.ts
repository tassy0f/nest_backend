import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {  // Простой объект, который не содержит в себе никакой логики. Нужен для обмена данными типа: клиент - сервер или сервер - сервер.

    @ApiProperty({example: 'user@mail.ru', description: 'Почта как юзернейм - не нулевая'})
    readonly email: string;

    @ApiProperty({example: '1234567890', description: 'Пароль - не нулевой'})
    readonly password: string;
}