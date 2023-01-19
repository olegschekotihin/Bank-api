export interface AccountAttrsInterface {
  personId: string;
  balance: number;
  dailyWithdrawalLimit: number;
  active: boolean;
  accountType: string;
  lastTransactionDate?: string;
  transactionCount?: number;
}
