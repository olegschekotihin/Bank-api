import { Module } from '@nestjs/common';
import TransactionController from './controller/transaction.controller';
import TransactionService from './service/transaction.service';
import { Transaction } from './entity/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from '../account/account.module';
import { TransactionRepository } from './repository/transaction.repository';

@Module({
  imports: [AccountModule, TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionRepository],
})
export class TransactionModule {}
