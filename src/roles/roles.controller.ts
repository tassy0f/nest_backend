import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {

    }

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({summary: 'Получение всех ролей в БД по значению'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
