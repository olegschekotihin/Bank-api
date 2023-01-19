import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserInterface } from '../../user/interface/user.interface';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'login',
    });
  }
  async validate(login: string, password: string): Promise<UserInterface> {
    return this.authenticationService.getAuthenticatedUser(login, password);
  }
}
