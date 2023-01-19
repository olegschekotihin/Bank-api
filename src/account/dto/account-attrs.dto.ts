import { ApiProperty } from '@nestjs/swagger';

export class AccountAttrsDto {
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

  @ApiProperty({ description: 'Last transaction date' })
  readonly lastTransactionDate?: string;

  @ApiProperty({ description: 'Transaction count' })
  readonly transactionCount?: number;
}
