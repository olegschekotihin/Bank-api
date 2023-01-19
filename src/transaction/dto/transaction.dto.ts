import { ApiProperty } from '@nestjs/swagger';

export class TransactionDto {
  @ApiProperty({ description: 'Transaction id', format: 'uuid' })
  readonly id: string;

  @ApiProperty({ description: 'Transaction account id', format: 'uuid' })
  readonly accountId: string;

  @ApiProperty({ description: 'Transaction value', format: 'float' })
  readonly value: number;

  @ApiProperty({ description: 'Transaction date', format: 'date' })
  readonly transactionDate: string;
}
