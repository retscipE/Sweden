import { Event } from '../../types'
import ready from './ready'
import guildCreate from './guildCreate'

const events: Event<any>[] = [
  guildCreate,
  ready,
]

export default events