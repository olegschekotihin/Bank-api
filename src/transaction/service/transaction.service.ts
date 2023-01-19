import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import AccountService from '../../account/service/account.service';
import { TransactionInterface } from '../interface/transaction.interface';
import * as dayjs from 'dayjs';
import { TransactionRepository } from '../repository/transaction.repository';
import { TransactionAttrsInterface } from '../interface/transaction-attrs.interface';

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
    transaction: TransactionAttrsInterface,
  ): Promise<TransactionInterface> {
    const account = await this.accountService.getAccountById(
      transaction.accountId,
    );

    if (!account.active) {
      throw new HttpException(
        'You have blocked account',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      account.lastTransactionDate === transaction.transactionDate &&
      account.transactionCount >
        parseInt(process.env.TRANSACTION_ATTEMPTS_COUNT, 10)
    ) {
      throw new HttpException(
        'You have exceeded the number of transactions for today',
        HttpStatus.BAD_REQUEST,
      );
    }

    const today = dayjs().format('YYYY-MM-DD');

    const isNewTransitionDay =
      account.lastTransactionDate === transaction.transactionDate;
    const transactionCount = isNewTransitionDay ? account.transactionCount : 0;

    // await this.transactionRepository.save(transaction);

    const newTransaction = this.transactionRepository.create(transaction);

    await this.accountService.updateAccount(transaction.accountId, {
      ...account,
      balance: account.balance + transaction.value,
      transactionCount: transactionCount + 1,
      lastTransactionDate: today,
    });

    return newTransaction;
  }
}
