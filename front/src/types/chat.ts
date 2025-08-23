export interface Chat {
  id: string;
  userId: string;
  botId: string;
  messages: Message[];
  startedAt: Date;
  lastActivityAt: Date;
  isActive: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string; // userId или botId
  senderType: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ChatStatus {
  isTyping: boolean;
  lastSeen?: Date;
  messageCost: number; // стоимость сообщения в коинах
}
