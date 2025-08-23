export interface User {
  id: string;
  username: string;
  email: string;
  balance: number; // баланс в коинах
  avatar?: string;
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt: Date;
}

export interface UserBalance {
  balance: number;
  lastUpdated: Date;
}
