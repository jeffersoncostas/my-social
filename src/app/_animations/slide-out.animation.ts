import { trigger, state, animate, transition, style, query, stagger, keyframes } from '@angular/animations';


export const SlideOutAnimation =
    trigger('SlideOutAnimation', [
        // route 'enter' transition
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'absolute',
            width:'100%'

        })),

        transition(':enter', [
            style({
                position: 'absolute',
                transform: 'translateX(-100%)',
                opacity: 0,
            }),
            animate('.5s ease-in-out', style({
                position: 'absolute',
                transform: 'translateX(0%)',
                opacity: 1
            }))

        ]),


        transition(':leave', [
            animate('.5s ease-in-out', style({
                transform: 'translateX(-100%)',
                opacity: 1
            }))

        ])

        // transition(':enter', [

        //     query(':enter', style({opacity:0, transform: 'translate(-100%,0)' }) ),

        //     query(':enter',stagger('400ms',[
        //         animate('200ms ease-in',keyframes([
        //             style({opacity: 0, transform: 'translate(-100%,0)', offset: 0}),
        //             style({opacity: 0.4, transform: 'translate(10px,00)', offset: 0.3}),
        //             style({opacity:1, transform: 'translate(0px,0px)', offset:1})
        //         ]))
        //     ])),

        // ])




        // transition(':enter', [
        //     style({
        //         transform: 'translateX(-30%)',
        //         opacity: 0,
        //     }),
        //     animate('.5s ease-in-out', style({
        //         transform: 'translateX(0%)',
        //         opacity: 1
        //     }))
        // ]),



        // transition('* => *', [
        //     query(':enter',
        //         style({ opacity: 0, transform: 'translateX(-100%)' }),
        //         { optional: true }
        //     ),

        //     query(':enter', stagger(200, [
        //         style({ opacity: 0 ,transform: 'translateX(-100%)' }),

        //         animate('.8s ease-in-out', style({ opacity:1, transform: 'translateX(0%)' }) )

        //     ]), { optional: true }),


        // ]),


    ])