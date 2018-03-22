import { trigger, state, animate, transition, style, query, animateChild, stagger } from '@angular/animations';

export const SlideOutAnimation =
    trigger('SlideOutAnimation', [
        // route 'enter' transition
        transition('* => *', [
            query(':enter',
                style({ opacity: 0 }),
                { optional: true }
            ),

            query(':enter', stagger(200, [
                style({ opacity: 0 }),

                animate('.8s ease-in-out', style({ opacity: 1 })),

            ]), { optional: true }),

            query(':leave',
                style({ opacity: 1 }),
                { optional: true }
            ),

            query(':leave', [
                style({ opacity: 1 }),
                animate('1s ease-in-out', style({ opacity: 0 }))],
                { optional: true }
            )

        ])
    ])