import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    UserModule,
    AccountModule,
    TransactionModule,
    AuthenticationModule,
    ConfigModule.forRoot({}),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
