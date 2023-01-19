import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty({ description: 'Account id', format: 'uuid' })
  readonly id: string;

  @ApiProperty({ description: 'Person id', format: 'uuid' })
  readonly personId: string;

  @ApiProperty({ description: 'Balance' })
  readonly balance: number;

  @ApiProperty({ description: 'Daily withdrawal limit', format: 'float' })
  readonly dailyWithdrawalLimit: number;

  @ApiProperty({ description: 'Active account' })
  readonly active: boolean;

  @ApiProperty({ description: 'Account type' })
  readonly accountType: string;

  @ApiProperty({ description: 'Created date' })
  readonly createDate: string;

  @ApiProperty({ description: 'Last transaction date' })
  readonly lastTransactionDate?: string;

  @ApiProperty({ description: 'Transaction count' })
  readonly transactionCount?: number;
}
