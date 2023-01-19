import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import TransactionService from '../service/transaction.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransactionDto } from '../dto/transaction.dto';
import { TransactionAttrsDto } from '../dto/transaction-attrs.dto';
import JwtAuthenticationGuard from '../../authentication/guard/jwt-authentication.guard';

@ApiTags('Transaction API')
@Controller('transactions')
@UseGuards(JwtAuthenticationGuard)
export default class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @ApiOperation({
    summary: 'Get transaction by id',
    description: 'Get transaction by id',
  })
  @Get(':transactionId')
  @ApiOkResponse({ type: TransactionDto })
  getTransactionById(@Param('transactionId') id: string) {
    return this.transactionService.getTransactionById(id);
  }

  @ApiOperation({
    summary: 'Get transactions by account id',
    description: 'Get transactions by account id',
  })
  @Get(':accountId/transactions')
  @ApiOkResponse({ type: TransactionDto })
  getTransactionsByAccountId(@Param('accountId') id: string) {
    return this.transactionService.getTransactionsByAccountId(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Add new transaction',
    description: 'Add new transaction',
  })
  @ApiBody({ type: TransactionAttrsDto })
  @ApiOkResponse({ type: TransactionDto })
  createTransaction(@Body() transaction: TransactionAttrsDto) {
    return this.transactionService.createTransaction(transaction);
  }
}
