import { ApiProperty } from '@nestjs/swagger';

export class UserAttrsDto {
  @ApiProperty({ description: 'User name', format: 'text' })
  readonly name: string;

  @ApiProperty({ description: 'User login', format: 'text' })
  readonly login: string;

  @ApiProperty({ description: 'User password', format: 'text' })
  readonly password: string;

  @ApiProperty({ description: 'Balance', format: 'text' })
  readonly document: string;

  @ApiProperty({ description: 'Birth date' })
  readonly birthDate: string;
}
