import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../entity/account.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectRepository(Account)
    private baseRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return await this.baseRepository.find();
  }

  async findOneById(id: string): Promise<Account> {
    return await this.baseRepository.findOneBy({ id });
  }

  async createAccount(newAccount): Promise<Account> {
    return await this.baseRepository.save(newAccount);
  }

  async updateAccount(id, account): Promise<UpdateResult> {
    return await this.baseRepository.update(id, account);
  }
}
