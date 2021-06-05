import { MondayLog } from './MondayLog.js'

window.test = test
function test() {
    let md = new MondayLog('http://localhost:8080/add_log', 'UTF-8', 'foo.com/info');
    md.beginCheckpoint('log test case');
    md.variable('变量1', '值1');
    md.input('var2', 'value2');
    md.output('var3', 'value3');
    md.error('error message');
    md.warn('warn message');
    md.info('info message');
    md.debug('debug message');
    md.trace('trace message');
    md.endCheckpoint('log test case');
}