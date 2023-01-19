import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entity/transaction.entity';
import { TransactionInterface } from '../interface/transaction.interface';
import { TransactionAttrsInterface } from '../interface/transaction-attrs.interface';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private baseRepository: Repository<Transaction>,
  ) {}

  async findAllById(id: {
    accountId: string;
  }): Promise<TransactionInterface[]> {
    return await this.baseRepository.find({ where: { ...id } });
  }

  async findOneById(id: string): Promise<TransactionInterface> {
    return await this.baseRepository.findOneBy({ id });
  }

  async create(
    transaction: TransactionAttrsInterface,
  ): Promise<TransactionInterface> {
    return await this.baseRepository.save(transaction);
  }
}
