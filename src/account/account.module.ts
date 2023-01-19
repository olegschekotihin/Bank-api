import { Module } from '@nestjs/common';
import AccountService from './service/account.service';
import AccountController from './controller/account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';
import { UserModule } from '../user/user.module';
import { AccountRepository } from './repository/account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), UserModule],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
  exports: [AccountService],
})
export class AccountModule {}
