import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Account } from '../../account/entity/account.entity';

@Entity()
@Unique(['name'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'login',
    type: 'text',
    nullable: false,
  })
  login: string;

  @Column({
    name: 'password',
    type: 'text',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'name',
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'document',
    type: 'text',
    nullable: false,
  })
  document: string;

  @Column({
    name: 'birth_date',
    type: 'date',
    nullable: false,
  })
  birthDate: string;

  @OneToMany(() => Account, (account) => account.personId, { nullable: true })
  accounts: Account[];
}
