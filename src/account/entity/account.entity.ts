import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'person_id',
    type: 'uuid',
    nullable: false,
  })
  personId: string;

  @Column({
    name: 'balance',
    type: 'float',
    nullable: false,
    default: 0,
  })
  balance: number;

  @Column({
    name: 'daily_withdrawal_limit',
    type: 'float',
    nullable: false,
  })
  dailyWithdrawalLimit: number;

  @Column({
    name: 'active',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  active: boolean;

  @Column({
    name: 'account_type',
    type: 'text',
    nullable: false,
  })
  accountType: string;

  @Column({
    name: 'create_date',
    type: 'date',
    nullable: false,
  })
  createDate: string;

  @Column({
    name: 'last_transaction_date',
    type: 'date',
    nullable: true,
  })
  lastTransactionDate?: string;

  @Column({
    type: 'smallint',
    nullable: false,
    default: 0,
  })
  transactionCount: number;
}
