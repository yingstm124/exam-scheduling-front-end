import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Course } from '../model/course';
import { Exam } from '../model/exam';
import { Examiner } from '../model/examiner';
import { Period }  from '../model/period';
import { Student } from '../model/student';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDbServiceService implements InMemoryDbService {

 

  createDb(){

    const dates: Date[] = [
      new Date(2020,10,1), 
      new Date(2020,10,2), 
      new Date(2020,10,3), 
      new Date(2020,10,4), 
      new Date(2020,10,5),
      new Date(2020,10,6),
      new Date(2020,10,7)
    ]
    
    const rooms: Room[] = [
      {
        id: 'csb100',
        numSeats: 30,
        isEmpty: true
      },
      {
        id: 'csb207',
        numSeats: 20,
        isEmpty: true
      },
      {
        id: 'csb308',
        numSeats: 40,
        isEmpty: true
      },
      {
        id: 'csb209',
        numSeats: 15,
        isEmpty: true
      }
    ];

    const students: Student[] = [
      {
        id: 590510137,
        fname: 'sutimar',
        lname: 'pengpinij',
        email: 'ying@hotmail.com'
      }
    ];

    const examiners: Examiner[] = [
      {
        id: 1,
        fname: 'robert',
        lname: 'downy',
        email: 'robert@hotmail.com'
      },
      {
        id: 2,
        fname: 'sutimar',
        lname: 'pengpinij',
        email: 'yingstm@hotmail.com'
      },
      {
        id: 3,
        fname: 'bella',
        lname: 'lavy',
        email: 'bello123@hotmail.com'
      }
    ];

    const courses: Course[] = [
      {
        id: '204113',
        name: 'basic programing',
        stdlists: students
      },
      {
        id: '204221',
        name: 'network',
        stdlists: students
      },
      {
        id: '204331',
        name: 'operating system',
        stdlists: students
      }
    ];
    const exams: Exam[] = [
      {
        id: 1,
        course: courses[0],
        examiner: examiners[0],
        room: rooms[0],
        date: new Date(2020,10,3),
        period: 1
      }
    
    ];

    const periods: Period[] = [
      {
        id: 1,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,1)
      },
      {
        id: 2,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,2)
      },
      {
        id: 3,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: false,
            exam: exams[0]
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,3)
      },
      {
        id: 4,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,4)
      },
      {
        id: 5,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,5)
      },
      {
        id: 6,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,6)
      },
      {
        id: 7,
        p1: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p2: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        p3: [
          {
            id: 'csb100',
            numSeats: 30,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb207',
            numSeats: 20,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb308',
            numSeats: 40,
            isEmpty: true,
            exam: undefined
          },
          {
            id: 'csb209',
            numSeats: 15,
            isEmpty: true,
            exam: undefined
          }
        ],
        date: new Date(2020,10,7)
      }
    ];

    return {rooms, examiners, students, courses, exams, periods}
  }


}
