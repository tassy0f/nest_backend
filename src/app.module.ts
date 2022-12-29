import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/role.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({  // Подключение конфигурацтонных файлов в зависимости от режима разработки
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({  // Подключение к БД (Все данные беруться из конфигурационных файлов)
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],  // Добавление таблицы по модели юзер
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule, // Модуль для работы с пользователями
  ],
  controllers: [],
  providers: [],
  
})
export class AppModule {}
