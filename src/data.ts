export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  verified: boolean;
  createdAt: string;
};
export type Account = {
  id: string;
  userId: string;
  accountNumber: string;
  accountName: string;
  balance: number;
  currency: string;
  type: "savings" | "current" | "wallet";
  isDefault: boolean;
};
export type Transaction = {
  id: string;
  accountId: string;
  type: "credit" | "debit";
  category:
    | "transfer"
    | "airtime"
    | "data"
    | "bills"
    | "shopping"
    | "salary"
    | "refund";
  amount: number;
  currency: string;
  description: string;
  recipient?: string;
  sender?: string;
  reference: string;
  status: "success" | "pending" | "failed";
  date: string;
};
// ============================================
// MOCK USER
// ============================================
export const mockUser: User = {
  id: "usr_001",
  firstName: "Kanma",
  lastName: "Chizea",
  email: "kanmachizeaa@email.com",
  phone: "+234 812 345 6789",
  avatar: "https://i.pravatar.cc/150?img=47",
  verified: true,
  createdAt: "2024-01-15T10:30:00Z",
};
// ============================================
// MOCK ACCOUNT
// ============================================
export const mockAccount: Account = {
  id: "acc_001",
  userId: "usr_001",
  accountNumber: "0123456789",
  accountName: "Kanma Chizea",
  balance: 458750.5,
  currency: "NGN",
  type: "savings",
  isDefault: true,
};
// Additional accounts for multi-account layouts
export const mockAccounts: Account[] = [
  mockAccount,
  {
    id: "acc_002",
    userId: "usr_001",
    accountNumber: "9876543210",
    accountName: "Kanma Chizea",
    balance: 125000.0,
    currency: "NGN",
    type: "current",
    isDefault: true,
  },
  {
    id: "acc_003",
    userId: "usr_001",
    accountNumber: "WALLET-001",
    accountName: "Adaeze Wallet",
    balance: 15420.75,
    currency: "NGN",
    type: "wallet",
    isDefault: false,
  },
];
// ============================================
// MOCK TRANSACTIONS
// ============================================
export const mockTransactions: Transaction[] = [
  {
    id: "txn_001",
    accountId: "acc_001",
    type: "debit",
    category: "airtime",
    amount: 2000,
    currency: "NGN",
    description: "MTN Airtime Purchase",
    recipient: "08123456789",
    reference: "TXN20240228001",
    status: "success",
    date: "2024-02-28T14:30:00Z",
  },
  {
    id: "txn_002",
    accountId: "acc_001",
    type: "credit",
    category: "transfer",
    amount: 150000,
    currency: "NGN",
    description: "Transfer from Chinedu Eze",
    sender: "Chinedu Eze",
    reference: "TXN20240228002",
    status: "success",
    date: "2024-02-28T11:15:00Z",
  },
  {
    id: "txn_003",
    accountId: "acc_001",
    type: "debit",
    category: "bills",
    amount: 25000,
    currency: "NGN",
    description: "IKEDC Electricity Bill",
    recipient: "IKEDC",
    reference: "TXN20240227003",
    status: "success",
    date: "2024-02-27T09:45:00Z",
  },
  {
    id: "txn_004",
    accountId: "acc_001",
    type: "debit",
    category: "data",
    amount: 5000,
    currency: "NGN",
    description: "Airtel 10GB Data Bundle",
    recipient: "08098765432",
    reference: "TXN20240227004",
    status: "success",
    date: "2024-02-27T08:20:00Z",
  },
  {
    id: "txn_005",
    accountId: "acc_001",
    type: "debit",
    category: "transfer",
    amount: 75000,
    currency: "NGN",
    description: "Transfer to Amaka Johnson",
    recipient: "Amaka Johnson",
    reference: "TXN20240226005",
    status: "success",
    date: "2024-02-26T16:30:00Z",
  },
  {
    id: "txn_006",
    accountId: "acc_001",
    type: "credit",
    category: "salary",
    amount: 450000,
    currency: "NGN",
    description: "February Salary - TechCorp Ltd",
    sender: "TechCorp Ltd",
    reference: "TXN20240225006",
    status: "success",
    date: "2024-02-25T10:00:00Z",
  },
  {
    id: "txn_007",
    accountId: "acc_001",
    type: "debit",
    category: "shopping",
    amount: 32500,
    currency: "NGN",
    description: "Jumia - Electronics Purchase",
    recipient: "Jumia Nigeria",
    reference: "TXN20240224007",
    status: "success",
    date: "2024-02-24T13:45:00Z",
  },
  {
    id: "txn_008",
    accountId: "acc_001",
    type: "debit",
    category: "bills",
    amount: 15000,
    currency: "NGN",
    description: "DSTV Subscription Renewal",
    recipient: "MultiChoice",
    reference: "TXN20240223008",
    status: "success",
    date: "2024-02-23T11:30:00Z",
  },
  {
    id: "txn_009",
    accountId: "acc_001",
    type: "credit",
    category: "refund",
    amount: 8500,
    currency: "NGN",
    description: "Refund - Cancelled Order",
    sender: "Konga",
    reference: "TXN20240222009",
    status: "success",
    date: "2024-02-22T15:20:00Z",
  },
  {
    id: "txn_010",
    accountId: "acc_001",
    type: "debit",
    category: "transfer",
    amount: 50000,
    currency: "NGN",
    description: "Transfer to Emeka Nwosu",
    recipient: "Emeka Nwosu",
    reference: "TXN20240221010",
    status: "pending",
    date: "2024-02-21T17:00:00Z",
  },
  {
    id: "txn_011",
    accountId: "acc_001",
    type: "debit",
    category: "airtime",
    amount: 1000,
    currency: "NGN",
    description: "Glo Airtime Purchase",
    recipient: "08055555555",
    reference: "TXN20240220011",
    status: "failed",
    date: "2024-02-20T09:10:00Z",
  },
  {
    id: "txn_012",
    accountId: "acc_001",
    type: "debit",
    category: "bills",
    amount: 45000,
    currency: "NGN",
    description: "Lagos Water Corporation",
    recipient: "LWC",
    reference: "TXN20240219012",
    status: "success",
    date: "2024-02-19T14:25:00Z",
  },
];
export const mockSpendingByCategory = [
  {
    id: "shopping",
    label: "Shopping",
    amount: 10000,
  },
  {
    id: "transfer",
    label: "Transfer",
    amount: 45000,
  },
  {
    id: "bills",
    label: "Bills",
    amount: 5000,
  },
];