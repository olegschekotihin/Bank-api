import { ApiProperty } from '@nestjs/swagger';

export class AccountUpdateAttrsDto {
  @ApiProperty({ description: 'Daily withdrawal limit', format: 'float' })
  readonly dailyWithdrawalLimit: number;
}
