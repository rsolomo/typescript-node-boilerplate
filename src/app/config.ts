import {equal, ok} from 'assert'

export interface Config {
  readonly log: string | number
}

export function createConfig(obj: any): Config {
  equal(typeof obj, 'object')
  ok(typeof obj.log === 'string' || typeof obj.log === 'number')

  return {
    log: obj.log,
  }
}
