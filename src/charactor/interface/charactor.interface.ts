import { Document } from 'mongoose';
export interface Charactor extends Document {
    readonly _id: any;
    readonly name: string;
    readonly lvl: number;
    readonly race: string;
    readonly school: string;
    readonly cls: string;
    readonly value: string;
}

const get = <T>(params: T): T => params

get(1)
