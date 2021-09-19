export enum Priority {
  Error,
  Warning,
  Info,
}

export interface IMessage {
  id: string;
  message: string;
  priority: Priority;
}
