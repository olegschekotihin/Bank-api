import { ApiPropertyOptional } from '@nestjs/swagger';

export class UserUpdateAttrsDto {
  @ApiPropertyOptional({ description: 'User name', format: 'text' })
  readonly name: string;

  @ApiPropertyOptional({ description: 'Birth date' })
  readonly birthDate: string;
}
