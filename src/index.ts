import { EventManager } from './services/eventManager';
import { EventType, MeetingEvent, TaskEvent, ReminderEvent } from './models/events';
import { isMeetingEvent, isTaskEvent, isReminderEvent } from './models/guards';

const manager = new EventManager();

console.log('--- Creating 9 Test Events ---');

// 3 Meetings
const m1 = manager.addEvent<MeetingEvent>({
  type: EventType.Meeting,
  title: 'Project Kickoff',
  description: 'Initial meeting for the new project',
  location: 'Room A',
  participants: ['Alice', 'Bob'],
  startTime: new Date('2026-05-10T10:00:00'),
  endTime: new Date('2026-05-10T11:00:00'),
});

const m2 = manager.addEvent<MeetingEvent>({
  type: EventType.Meeting,
  title: 'Weekly Sync',
  description: 'Team status update',
  location: 'Zoom',
  participants: ['Alice', 'Bob', 'Charlie'],
  startTime: new Date('2026-05-12T15:00:00'),
  endTime: new Date('2026-05-12T16:00:00'),
});

const m3 = manager.addEvent<MeetingEvent>({
  type: EventType.Meeting,
  title: 'Client Review',
  description: 'Review milestones with client',
  location: 'Client Office',
  participants: ['Alice', 'Client X'],
  startTime: new Date('2026-05-15T14:00:00'),
  endTime: new Date('2026-05-15T15:30:00'),
});

// 3 Tasks
const t1 = manager.addEvent<TaskEvent>({
  type: EventType.Task,
  title: 'Refactor Models',
  description: 'Apply advanced TS types to models',
  priority: 'high',
  dueDate: new Date('2026-05-05'),
  isCompleted: false,
});

const t2 = manager.addEvent<TaskEvent>({
  type: EventType.Task,
  title: 'Write Unit Tests',
  description: 'Increase coverage for EventManager',
  priority: 'medium',
  dueDate: new Date('2026-05-07'),
  isCompleted: false,
});

const t3 = manager.addEvent<TaskEvent>({
  type: EventType.Task,
  title: 'Update Documentation',
  description: 'Update README with latest changes',
  priority: 'low',
  dueDate: new Date('2026-05-08'),
  isCompleted: true,
});

// 3 Reminders
const r1 = manager.addEvent<ReminderEvent>({
  type: EventType.Reminder,
  title: 'Take a break',
  description: 'Stretch your legs',
  remindAt: new Date('2026-05-04T12:00:00'),
  repeat: 'daily',
});

const r2 = manager.addEvent<ReminderEvent>({
  type: EventType.Reminder,
  title: 'Submit Report',
  description: 'Monthly performance report',
  remindAt: new Date('2026-05-31T09:00:00'),
  repeat: 'monthly',
});

const r3 = manager.addEvent<ReminderEvent>({
  type: EventType.Reminder,
  title: 'Buy Groceries',
  description: 'Milk, Eggs, Bread',
  remindAt: new Date('2026-05-06T18:00:00'),
});

console.log(`Created ${manager.getAllEvents().length} events.`);

console.log('\n--- 1. List All Events ---');
manager.getAllEvents().forEach((e) => {
  console.log(`[${e.type.toUpperCase()}] ID: ${e.id} | Title: ${e.title}`);
});

console.log('\n--- 2. Filter Events (High Priority Tasks) ---');
const highPriorityTasks = manager.filterEvents((e) => isTaskEvent(e) && e.priority === 'high');
highPriorityTasks.forEach((t) => console.log(`High Priority Task: ${t.title}`));

console.log('\n--- 3. Get Events By Type (Meetings) ---');
const meetings = manager.getEventsByType(EventType.Meeting);
meetings.forEach((m) => console.log(`Meeting at ${m.location}: ${m.title}`));

console.log('\n--- 4. Update Event (Complete Task 1) ---');
const updatedT1 = manager.updateEvent<TaskEvent>(t1.id, { isCompleted: true, title: 'Refactor Models (DONE)' });
console.log(`Updated Task: ${updatedT1.title}, Completed: ${updatedT1.isCompleted}`);

console.log('\n--- 5. Delete Event (Reminder 3) ---');
manager.deleteEvent(r3.id);
console.log(`Events remaining: ${manager.getAllEvents().length}`);

console.log('\n--- 6. Grouped Events ---');
const grouped = manager.getGroupedEvents();
Object.entries(grouped).forEach(([type, events]) => {
  console.log(`${type}: ${events.length} events`);
});

console.log('\n--- 7. Error Handling (Update non-existent) ---');
try {
  manager.updateEvent('invalid-id', { title: 'New Title' });
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught expected error: ${error.message}`);
  }
}

console.log('\n--- 8. Error Handling (Delete non-existent) ---');
try {
  manager.deleteEvent('invalid-id');
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught expected error: ${error.message}`);
  }
}

console.log('\n--- 9. Error Handling (Invalid Create Data) ---');
try {
  manager.addEvent<TaskEvent>({
    type: EventType.Task,
    title: '', // Invalid empty title
    description: 'Empty title task',
    priority: 'low',
    dueDate: new Date(),
    isCompleted: false,
  });
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught expected error: ${error.message}`);
  }
}
