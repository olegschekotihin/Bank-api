import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import UserService from '../service/user.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccountDto } from '../../account/dto/account.dto';
import { UserDto } from '../dto/user.dto';
import { UserAttrsDto } from '../dto/user-attrs.dto';
import { DeleteResult } from 'typeorm';
import { UserUpdateAttrsDto } from '../dto/user-update-attrs.dto';
import JwtAuthenticationGuard from '../../authentication/guard/jwt-authentication.guard';

@ApiTags('User API')
@Controller('users')
@UseGuards(JwtAuthenticationGuard)
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Get all users',
  })
  @ApiOkResponse({ type: [UserDto] })
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({
    summary: 'Get user by id',
    description: 'Get user by id',
  })
  @Get(':userId')
  @ApiOkResponse({ type: UserDto })
  getUserById(@Param('userId') id: string) {
    return this.userService.getUserById(id);
  }

  @Put(':userId')
  @ApiOperation({
    summary: 'Update user',
    description: 'Update user',
  })
  @ApiBody({ type: UserUpdateAttrsDto })
  @ApiOkResponse({ type: UserDto })
  async updateUser(
    @Param('userId') id: string,
    @Body() user: UserUpdateAttrsDto,
  ) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':userId')
  @ApiOperation({
    summary: 'Remove user',
    description: 'Remove user',
  })
  @ApiOkResponse({ type: DeleteResult })
  async deleteUser(@Param('userId') id: string) {
    await this.userService.deleteUser(id);
  }
}
