import { Course } from './course';
import { Exam } from './exam';

export class Exroom{
    id: string;
    numSeats: number;
    isEmpty: boolean;
    exam: Exam;
}