import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ description: 'User login', format: 'text' })
  readonly login: string;

  @ApiProperty({ description: 'User password', format: 'text' })
  readonly password: string;
}
