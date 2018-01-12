const Rx = require('rxjs/Observable');
require('rxjs/add/observable/interval');

const log = console.log.bind(console.log);

log('# unsubscribe');
const oneToInfinite$ = Rx.Observable.create(function subscribe(observer) {
    let i = 1;
    const intervalID = setInterval(() => {
        i = i+1;
        observer.next(i);
    }, 100);

    return function unsubscribe() {
        clearInterval(intervalID);
    };
});
const oneToInfiniteSubscription = oneToInfinite$.subscribe(i => log('unsub', i));
setTimeout(() => oneToInfiniteSubscription.unsubscribe(), 1000);

log('# unsubscribe multiple');
const every100ms$ = Rx.Observable.interval(100);
const firstSub = every100ms$.subscribe(i => log('first observer', i));
const secondSub  = every100ms$.subscribe(i => log('second observer', i));

firstSub.add(secondSub);

setTimeout(() => firstSub.unsubscribe(), 1000);
