import { Examiner } from './examiner';
import { Course } from './course';
import { Room } from './room';
import { Period } from './period';

export class Exam {

    id: number;
    course: Course;
    examiner: Examiner;
    room: Room;
    date: Date;
    period: number

}