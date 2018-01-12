const Rx = require('rxjs/Observable');

const log = console.log.bind(console.log);

log('# observe next values only');
const oneToTen$ = Rx.Observable.create(function subscribe(observer) {
    [1,2,3,4,5,6,7,8,9,10].forEach((i) => observer.next(i));
    observer.complete();
});
oneToTen$.subscribe(i => log('next', i));

log('# partial observe');
const elevenToTwenty = Rx.Observable.create(function subscribe(observer) {
    [11,12,13,14,15,16,17,18,19,10].forEach((i) => observer.next(i));
    observer.complete();
});
oneToTen$.subscribe({
    next: (i) => log('next partial observe: ', i),
    complete: () => log('complete partial observe'),
})
