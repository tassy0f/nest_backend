import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }


    @ApiOperation({summary: 'Получение всех пользователей в БД'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getUsers() {
        return this.usersService.getAllUsers();
    }
}
