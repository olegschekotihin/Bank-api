import { Request } from 'express';
import { UserInterface } from '../../user/interface/user.interface';

export interface RequestWithUser extends Request {
  user: UserInterface;
}
