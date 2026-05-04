export enum EventType {
  Meeting = 'meeting',
  Task = 'task',
  Reminder = 'reminder',
}

export interface BaseEvent {
  readonly id: string;
  readonly type: EventType;
  title: string;
  description: string;
  createdAt: Date;
}

export interface MeetingEvent extends BaseEvent {
  readonly type: EventType.Meeting;
  location: string;
  participants: string[];
  startTime: Date;
  endTime: Date;
}

export interface TaskEvent extends BaseEvent {
  readonly type: EventType.Task;
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  isCompleted: boolean;
}

export interface ReminderEvent extends BaseEvent {
  readonly type: EventType.Reminder;
  remindAt: Date;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'none';
}

export type AppEvent = MeetingEvent | TaskEvent | ReminderEvent;

// Utility types
export type CreateEventDTO<T extends AppEvent> = Omit<T, 'id' | 'createdAt'>;
export type UpdateEventDTO<T extends AppEvent> = Partial<Omit<T, 'id' | 'type' | 'createdAt'>>;

// Mapped type for grouped events
export type GroupedEvents = {
  [K in EventType]: AppEvent[];
};

// Conditional type to extract event by type (example usage for generic methods)
export type ExtractEvent<T extends EventType> = Extract<AppEvent, { type: T }>;
