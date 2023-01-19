import { ApiProperty } from '@nestjs/swagger';

export class TransactionAttrsDto {
  @ApiProperty({ description: 'Transaction account id', format: 'uuid' })
  readonly accountId: string;

  @ApiProperty({ description: 'Transaction amount', format: 'float' })
  readonly value: number;

  @ApiProperty({ description: 'Transaction date', format: 'date' })
  readonly transactionDate: string;
}
