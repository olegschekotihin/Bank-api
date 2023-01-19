import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { AccountInterface } from '../interface/account.interface';
import { AccountAttrsInterface } from '../interface/account-attrs.interface';
import UserService from '../../user/service/user.service';
import { AccountRepository } from '../repository/account.repository';
import { AccountUpdateAttrsInterface } from '../interface/account-update-attrs.interface';

@Injectable()
export default class AccountService {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    private readonly accountRepository: AccountRepository,
  ) {}

  async getAllAccounts(): Promise<AccountInterface[]> {
    return await this.accountRepository.findAll();
  }

  async getAccountById(id: string): Promise<AccountInterface> {
    const account = await this.accountRepository.findOneById(id);

    if (!account) {
      throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
    }

    return account;
  }

  async blockAccountById(id: string): Promise<AccountInterface> {
    return await this.updateAccountStatus(id, { active: false });
  }

  async activateAccountById(id: string): Promise<AccountInterface> {
    return await this.updateAccountStatus(id, { active: true });
  }

  async createAccount(
    account: Partial<AccountInterface>,
  ): Promise<AccountInterface> {
    const user = await this.userService.getUserById(account.personId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const today = dayjs().format('YYYY-MM-DD');
    const extendedAccount = { ...account, createDate: today };

    return this.accountRepository.createAccount(extendedAccount);
  }

  async updatePartOfAccount(
    id: string,
    accountAttrs: AccountUpdateAttrsInterface,
  ): Promise<AccountInterface> {
    const account = await this.getAccountById(id);
    const updatedAccount = {
      ...account,
      dailyWithdrawalLimit: accountAttrs.dailyWithdrawalLimit,
    };

    return await this.updateAccount(id, updatedAccount);
  }

  async getAccountBalance(id: string): Promise<{ balance: number }> {
    const account = await this.getAccountById(id);
    const today = dayjs().format('YYYY-MM-DD');

    if (
      account.lastTransactionDate === today &&
      account.transactionCount > account.dailyWithdrawalLimit
    ) {
      throw new HttpException(
        'You have exceeded the number of transactions for today',
        HttpStatus.BAD_REQUEST,
      );
    }

    const isNewTransitionDay = account.lastTransactionDate === today;
    const transactionCount = isNewTransitionDay ? account.transactionCount : 0;

    await this.updateAccount(id, {
      ...account,
      transactionCount: transactionCount + 1,
      lastTransactionDate: today,
    });

    return { balance: account?.balance };
  }

  async updateAccount(
    id: string,
    account: AccountAttrsInterface,
  ): Promise<AccountInterface> {
    await this.accountRepository.updateAccount(id, account);

    const updatedAccount = await this.accountRepository.findOneById(id);

    if (!updatedAccount) {
      throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
    }

    return updatedAccount;
  }

  private async updateAccountStatus(
    id: string,
    active: { active: boolean },
  ): Promise<AccountInterface> {
    const account = await this.getAccountById(id);

    await this.accountRepository.updateAccount(id, {
      ...account,
      ...active,
    });

    return await this.getAccountById(id);
  }
}
