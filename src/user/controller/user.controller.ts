import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import UserService from '../service/user.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dto/user.dto';
import { UserUpdateAttrsDto } from '../dto/user-update-attrs.dto';
import JwtAuthenticationGuard from '../../authentication/guard/jwt-authentication.guard';

@ApiTags('User API')
@Controller('users')
@UseGuards(JwtAuthenticationGuard)
export default class UserController {
  constructor(private readonly userService: UserService) {}

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
}
