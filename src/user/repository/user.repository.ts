import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserAttrsInterface } from '../interface/user-attrs.interface';
import { UserUpdateAttrsInterface } from '../interface/user-update-attrs.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private baseRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.baseRepository.find();
  }

  async findOne(attrs): Promise<User> {
    return await this.baseRepository.findOneBy({ ...attrs });
  }

  async findOneBy(id: string): Promise<User> {
    return await this.baseRepository.findOneBy({ id });
  }

  async create(user: UserAttrsInterface): Promise<User> {
    const newUser = this.baseRepository.create(user);
    return await this.baseRepository.save(newUser);
  }

  async update(
    id: string,
    user: UserUpdateAttrsInterface,
  ): Promise<UpdateResult> {
    return await this.baseRepository.update(id, user);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.baseRepository.delete(id);
  }
}
