import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UserInterface } from '../interface/user.interface';
import { UserRepository } from '../repository/user.repository';
import { UserUpdateAttrsInterface } from '../interface/user-update-attrs.interface';
import { UserAttrsInterface } from '../interface/user-attrs.interface';

@Injectable()
export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<UserInterface[]> {
    return await this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<UserInterface> {
    const user = await this.userRepository.findOneBy(id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async getUserByLogin(login: string): Promise<UserInterface> {
    return await this.userRepository.findOne({ login });
  }

  async createUser(user: UserAttrsInterface): Promise<UserInterface> {
    return await this.userRepository.create(user);
  }

  async updateUser(
    id: string,
    user: UserUpdateAttrsInterface,
  ): Promise<UserInterface> {
    await this.userRepository.update(id, user);
    const updatedUser = await this.userRepository.findOneBy(id);

    if (!updatedUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return updatedUser;
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    const deleteResponse = await this.userRepository.delete(id);

    if (!deleteResponse.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return deleteResponse;
  }
}
