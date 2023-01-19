import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import AccountService from '../service/account.service';
import { AccountAttrsDto } from '../dto/account-attrs.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccountDto } from '../dto/account.dto';
import { AccountUpdateAttrsDto } from '../dto/account-update-attrs.dto';
import JwtAuthenticationGuard from '../../authentication/guard/jwt-authentication.guard';

@ApiTags('Account API')
@Controller('accounts')
@UseGuards(JwtAuthenticationGuard)
export default class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all accounts',
    description: 'Get all accounts',
  })
  @ApiOkResponse({ type: [AccountDto] })
  getAllAccounts() {
    return this.accountService.getAllAccounts();
  }

  @ApiOperation({
    summary: 'Get account by id',
    description: 'Get account by id',
  })
  @Get(':accountId')
  @ApiOkResponse({ type: AccountDto })
  getAccountById(@Param('accountId') id: string) {
    return this.accountService.getAccountById(id);
  }

  @ApiOperation({
    summary: 'Block account by id',
    description: 'Block account by id',
  })
  @Get(':accountId/block')
  @ApiOkResponse({ type: AccountDto })
  blockAccountById(@Param('accountId') id: string) {
    return this.accountService.blockAccountById(id);
  }

  @ApiOperation({
    summary: 'Activate account by id',
    description: 'Activate account by id',
  })
  @Get(':accountId/activate')
  @ApiOkResponse({ type: AccountDto })
  activateAccountById(@Param('accountId') id: string) {
    return this.accountService.activateAccountById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Add new account',
    description: 'Add new account',
  })
  @ApiBody({ type: AccountAttrsDto })
  @ApiOkResponse({ type: AccountDto })
  async createAccount(@Body() account: AccountAttrsDto) {
    return this.accountService.createAccount(account);
  }

  @Patch(':accountId')
  @ApiOperation({
    summary: 'Update account',
    description: 'Update account',
  })
  @ApiBody({ type: AccountUpdateAttrsDto })
  @ApiOkResponse({ type: AccountDto })
  async updateAccount(
    @Param('accountId') id: string,
    @Body() accountAttrs: AccountUpdateAttrsDto,
  ) {
    return this.accountService.updatePartOfAccount(id, accountAttrs);
  }

  @ApiOperation({
    summary: 'Get account balance',
    description: 'Get account balance',
  })
  @Get(':accountId/balance')
  @ApiOkResponse({ type: Number })
  getAccountBalance(@Param('accountId') id: string) {
    return this.accountService.getAccountBalance(id);
  }
}
