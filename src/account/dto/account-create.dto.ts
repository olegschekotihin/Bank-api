import { ApiProperty } from '@nestjs/swagger';

export class AccountCreateDto {
  @ApiProperty({ description: 'Person id', format: 'uuid' })
  personId: string;

  @ApiProperty({ description: 'Balance' })
  balance: number;

  @ApiProperty({ description: 'Daily withdrawal limit', format: 'float' })
  dailyWithdrawalLimit: number;

  @ApiProperty({ description: 'Active account' })
  active: boolean;

  @ApiProperty({ description: 'Account type' })
  accountType: string;
}
