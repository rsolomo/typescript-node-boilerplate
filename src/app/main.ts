import * as bunyan from 'bunyan'
import {createConfig, Config} from './config'

process.on('uncaughtException', unhandled)
process.on('unhandledRejection', unhandled)

function unhandled(err: any) {
  bunyan.createLogger({name: 'typescript-node-boilerplate'}).fatal(err)
  process.exit(1)
}

function main() {
  const filepath = process.argv[2] || '../../settings'
  const config = createConfig(require(filepath))
  run(config)
}

export function run(config: Config) {
  const log = bunyan.createLogger({
    name: 'typescript-node-boilerplate',
    level: config.log,
    serializers: bunyan.stdSerializers,
    stream: process.stdout,
    src: config.log === 'trace'
  })
  log.info('start')
  // Do stuff
  log.info('stop')
}

if (require.main === module) {
  main()
}
