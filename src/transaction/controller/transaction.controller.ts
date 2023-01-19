import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import TransactionService from '../service/transaction.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransactionDto } from '../dto/transaction.dto';
import JwtAuthenticationGuard from '../../authentication/guard/jwt-authentication.guard';
import { TransactionCreateDto } from '../dto/transaction-create.dto';

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
  @ApiBody({ type: TransactionCreateDto })
  @ApiOkResponse({ type: TransactionDto })
  createTransaction(@Body() transaction: TransactionCreateDto) {
    return this.transactionService.createTransaction(transaction);
  }
}
