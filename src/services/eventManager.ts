import { 
  AppEvent, 
  EventType, 
  CreateEventDTO, 
  UpdateEventDTO, 
  ExtractEvent, 
  GroupedEvents 
} from '../models/events';
import { findById } from '../utils/search';

export class EventManager {
  private events: AppEvent[] = [];

  /**
   * Adds a new event.
   * Service fields 'id' and 'createdAt' are generated automatically.
   */
  public addEvent<T extends AppEvent>(eventData: CreateEventDTO<T>): T {
    const newEvent = {
      ...eventData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    } as unknown as T;

    // Simple validation
    if (!newEvent.title || newEvent.title.trim() === '') {
      throw new Error('Event title is required');
    }

    this.events.push(newEvent as unknown as AppEvent);
    return newEvent;
  }

  /**
   * Deletes an event by ID.
   * Throws error if event not found.
   */
  public deleteEvent(id: string): void {
    const index = this.events.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error(`Event with ID ${id} not found`);
    }
    this.events.splice(index, 1);
  }

  /**
   * Updates an existing event.
   * Throws error if event not found.
   */
  public updateEvent<T extends AppEvent>(id: string, updateData: UpdateEventDTO<T>): T {
    const event = findById(this.events, id);
    if (!event) {
      throw new Error(`Event with ID ${id} not found`);
    }

    const updatedEvent = {
      ...event,
      ...updateData,
    } as T;

    const index = this.events.indexOf(event);
    this.events[index] = updatedEvent as unknown as AppEvent;

    return updatedEvent;
  }

  /**
   * Returns all managed events.
   */
  public getAllEvents(): ReadonlyArray<AppEvent> {
    return this.events;
  }

  /**
   * Returns events of a specific type.
   * Demonstrates generic method and conditional type usage.
   */
  public getEventsByType<T extends EventType>(type: T): ExtractEvent<T>[] {
    return this.events.filter((e) => e.type === type) as ExtractEvent<T>[];
  }

  /**
   * Filters events based on a custom predicate.
   */
  public filterEvents(predicate: (event: AppEvent) => boolean): AppEvent[] {
    return this.events.filter(predicate);
  }

  /**
   * Returns a dictionary of events grouped by their type.
   * Demonstrates Mapped Type usage.
   */
  public getGroupedEvents(): GroupedEvents {
    const grouped: GroupedEvents = {
      [EventType.Meeting]: [],
      [EventType.Task]: [],
      [EventType.Reminder]: [],
    };

    this.events.forEach((event) => {
      grouped[event.type].push(event);
    });

    return grouped;
  }
}
