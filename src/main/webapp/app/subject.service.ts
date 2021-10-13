import { Injectable } from '@angular/core';
import { Subjects } from './subject';
import { SUBJECTS } from './mock-subjects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { 
    // do nothing
  }

  getSubjects(): Observable<Subjects[]> {
    const subjects = of(SUBJECTS);
    return subjects;
  }
}
