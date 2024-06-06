//@ts-check
const { Subject } = require("./Subject");
const { Observable } = require("./Observable");
let observerFn = (observer) => {
    let timer = 0
    for(let i = 1; i <= 10; i++){
        timer += 1000;
        setTimeout(() => {
            if(i === 5){
                observer.error('Error');
            }else{
                observer.next(i);
            }
        }, timer );
    }
    

}

let observable$ = new Observable(observerFn);

let observer1 = {
    next: (value) => console.log(`A: ${value}`),
    error: (error) => console.log(`A: ${error}`),
    complete: () => console.log(`A: complete`)
}
let observer2 = {
    next: (value) => console.log(`B: ${value}`),
    error: (error) => console.log(`B: ${error}`),
    complete: () => console.log(`B: complete`)
}

let observer3 = {
    next: (value) => console.log(`C: ${value}`),
    error: (error) => console.log(`C: ${error}`),
    complete: () => console.log(`C: complete`)
}




//observable$.subscribe( observer1);
//observable$.subscribe( observer2);



let subject$ = new Subject();
let $subscription1 = subject$.subscribe(observer1);


let timer = 0;
for(let i = 1; i <= 10; i++){
    timer += 1000;
    setTimeout(() => {
        subject$.next(i);
    }, timer);
}

setTimeout(() => {
    $subscription1.unsubscribe();
}, 6000)

let $subscriber2;
setTimeout(() => {
    $subscriber2 = subject$.subscribe(observer2);
}, 5000)

let $subscriber3;
setTimeout(() => {
    $subscriber3 = subject$.subscribe(observer3);
}, 10000)

// while subject will nly pass the emited value without storing the state, bejavior subject will store the last emited value