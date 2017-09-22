export declare type TSumanToString = () => string;
export interface ISumanEvent {
    explanation: string;
    toString: TSumanToString;
}
export interface ISumanEvents {
    [key: string]: ISumanEvent;
}
export declare const events: ISumanEvents;
