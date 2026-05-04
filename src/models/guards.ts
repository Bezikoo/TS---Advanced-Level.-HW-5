import { AppEvent, EventType, MeetingEvent, TaskEvent, ReminderEvent } from './events';

export function isMeetingEvent(event: AppEvent): event is MeetingEvent {
  return event.type === EventType.Meeting;
}

export function isTaskEvent(event: AppEvent): event is TaskEvent {
  return event.type === EventType.Task;
}

export function isReminderEvent(event: AppEvent): event is ReminderEvent {
  return event.type === EventType.Reminder;
}
