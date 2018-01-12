const Rx = require('rxjs/Subject');

const log = console.log.bind(console.log);

const subject = new Rx.Subject();

subject.subscribe(i => log('1st observer', i));
subject.subscribe(i => log('2nd observer', i));
subject.subscribe(i => log('3rd observer', i));

subject.next(42);
