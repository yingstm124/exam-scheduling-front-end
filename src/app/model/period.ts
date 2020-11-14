import { Exam } from './exam';
import { Exroom } from './exRoom';
import { Room } from './room';

export class Period {
    id: number;
    p1: Exroom[];
    p2: Exroom[];
    p3: Exroom[];
    date: Date;
}