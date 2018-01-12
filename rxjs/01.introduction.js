const Rx = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/observable/from');

const log = console.log.bind(console.log);

log('# create with a subscriber function');
const upToTen$ = Rx.Observable.create(function subscribe(observer) {
    [1,2,3,4,5,6,7,8,9,10].forEach((i) => {
        observer.next(i);
    });
    observer.complete();
});
upToTen$.subscribe(log);


log('# create with a single value');
const single$ = Rx.Observable.of('single');
single$.subscribe(log);


log('# create with an string/array');
const aToE$ = Rx.Observable.from('abcdef');
aToE$.subscribe(log);


log('# each observer has its own setup');
const fooBarQuz$ = Rx.Observable.from(['foo', 'bar', 'quz']);
fooBarQuz$.subscribe(v => log('first observer', v));
fooBarQuz$.subscribe(v => log('second observer', v));
