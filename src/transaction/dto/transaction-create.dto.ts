import { ApiProperty } from '@nestjs/swagger';

export class TransactionCreateDto {
  @ApiProperty({ description: 'Transaction account id', format: 'uuid' })
  accountId: string;

  @ApiProperty({ description: 'Transaction amount', format: 'float' })
  value: number;
}
