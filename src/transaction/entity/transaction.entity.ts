import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'account_id',
    type: 'uuid',
    nullable: false,
  })
  accountId: string;

  @Column({
    name: 'value',
    type: 'float',
    nullable: false,
  })
  value: number;

  @Column({
    name: 'transaction date',
    type: 'date',
    nullable: false,
  })
  transactionDate: string;
}
