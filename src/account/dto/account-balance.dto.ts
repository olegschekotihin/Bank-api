import { ApiProperty } from '@nestjs/swagger';

export class AccountBalanceDto {
  @ApiProperty({ description: 'Balance' })
  readonly balance: number;
}
