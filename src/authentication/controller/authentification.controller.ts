import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Res,
  Get,
} from '@nestjs/common';
import { AuthenticationService } from '../service/authentication.service';
import { RequestWithUser } from '../interface/request-with-user.interface';
import { LocalAuthenticationGuard } from '../guard/localAuthentication.guard';
import JwtAuthenticationGuard from '../guard/jwt-authentication.guard';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserAttrsDto } from '../../user/dto/user-attrs.dto';
import { RegisterDto } from '../dto/authentification.dto';

@ApiTags('Authentication API')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register new user',
    description: 'Register new user',
  })
  async register(@Body() registrationData: UserAttrsDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  @ApiOperation({
    summary: 'Login',
    description: 'Login',
  })
  async logIn(
    @Body() loginDto: RegisterDto,
    @Req() request: RequestWithUser,
    @Res() response: Response,
  ) {
    const { user } = request;
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;

    return response.send(user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('log-out')
  @ApiOperation({
    summary: 'Log out',
    description: 'Log out',
  })
  async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    return response.sendStatus(200);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  @ApiOperation({
    summary: 'Check is authenticate',
    description: 'Check is authenticate',
  })
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
