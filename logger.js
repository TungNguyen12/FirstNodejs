const EventEmitter = require('events')
const uuid = require('uuid') // UUID = Universal Unique Identifier, use UUID as an identifier for objects. UUID is indexable and can be used as a primary key

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

// module.exports = Logger

const logger = new Logger

logger.on('message', data => console.log('Called Listener:', data))

logger.log('Hello World'); // here we have to call the method
logger.log('Vai ca lon'); 
logger.log('Mita vittu'); 