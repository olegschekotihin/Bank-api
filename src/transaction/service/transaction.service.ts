import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import AccountService from '../../account/service/account.service';
import { TransactionInterface } from '../interface/transaction.interface';
import * as dayjs from 'dayjs';
import { TransactionRepository } from '../repository/transaction.repository';
import { TransactionCreateInterface } from '../interface/transaction-create.interface';

@Injectable()
export default class TransactionService {
  constructor(
    @Inject(AccountService)
    private readonly accountService: AccountService,
    private transactionRepository: TransactionRepository,
  ) {}

  async getTransactionsByAccountId(
    id: string,
  ): Promise<TransactionInterface[]> {
    return await this.transactionRepository.findAllById({ accountId: id });
  }

  async getTransactionById(id: string): Promise<TransactionInterface> {
    const transaction = await this.transactionRepository.findOneById(id);
    if (transaction) {
      return transaction;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async createTransaction(
    transaction: TransactionCreateInterface,
  ): Promise<TransactionInterface> {
    const account = await this.accountService.getAccountById(
      transaction.accountId,
    );
    const today = dayjs().format('YYYY-MM-DD');

    if (!account.active) {
      throw new HttpException(
        'You have blocked account',
        HttpStatus.BAD_REQUEST,
      );
    }

    const extendedTransaction = { ...transaction, transactionDate: today };

    const newTransaction =
      this.transactionRepository.create(extendedTransaction);

    await this.accountService.updateAccount(transaction.accountId, {
      ...account,
      balance: account.balance + transaction.value,
      lastTransactionDate: today,
    });

    return newTransaction;
  }
}
