import { Event, EventExec, EventKeys } from '../types'
import SwedenClient from '../client/SwedenClient'

export function event<T extends EventKeys>(id: T, exec: EventExec<T>): Event<T> {
  return {
    id,
    exec,
  }
}

// Use a function to register events into the bot
export function registerEvents(client: SwedenClient, events: Event<any>[]): void {
  for (const event of events)
    client.on(event.id, event.exec.bind(null, {
      client,
      log: (...args) =>
        console.log(`[${event.id}]`, ...args) 
    }))
}