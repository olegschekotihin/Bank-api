export interface AccountInterface {
  id: string;
  personId: string;
  balance: number;
  dailyWithdrawalLimit: number;
  active: boolean;
  accountType: string;
  createDate: string;
  lastTransactionDate?: string;
  transactionCount?: number;
}
