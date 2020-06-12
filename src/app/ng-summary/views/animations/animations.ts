import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const donghua = trigger("donghua", [
    state("left", style({ transform: 'translate3d(0,0,0)' })),
    state("right", style({ transform: 'translate3d(400px,0,0)', width: '100px' })),
    transition('left=>right', animate(2000, keyframes([
        style({ transform: 'translate3d(400px,0,0)' })
    ]))),
    transition('right=>left', animate(2000, keyframes([
        style({ transform: 'translate3d(0,0,0)' })
    ])))
]);
