import { Injectable } from '@angular/core';
import { Exercise } from '../Views/student-file/student-file-view/tables/model/exercise';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(private httpClient: HttpClient) { }
  Student_id = '04d523b6-d176-4acb-a823-93b23f6a5f54';
  public getExercises (){
    //return this.httpClient.get ('http://217.76.158.200:8090/api/userExercise/?id=04d523b6-d176-4acb-a823-93b23f6a5f54');
    //return this.httpClient.get (`http://217.76.158.200:8090/api/userExercise/Student_id/?id=${this.Student_id}`);
    //return this.httpClient.get (`http://217.76.158.200:8090/api/userExercise/2/`);
    return this.httpClient.get ('http://217.76.158.200:8090/api/Exercise/');

    //return this.httpClient.get (`http://217.76.158.200:8090/api/userExercise/Student_id/04d523b6-d176-4acb-a823-93b23f6a5f54`);
  }
}
  // private exercises: Exercise[] = [
  //   {
  //     id: 0,
  //     name: "GitHub",
  //     state: "Corregido",
  //     date: new Date(2019, 7, 2)
  //   },
  //   {
  //     id: 1,
  //     name: "USFlights",
  //     state: "A revisar",
  //     date: new Date(2019, 7, 10)
  //   },
  //   {
  //     id: 2,
  //     name: "Projecte Fase 1-2 (HTML)",
  //     state: "Entregado",
  //     date: new Date(2019, 7, 12)
  //   },
  //   {
  //     id: 3,
  //     name: "Projecte Fase 2 (Funcionalidad)",
  //     state: "Corregido",
  //     date: new Date(2019, 7, 19)
  //   }
  // ];


  // constructor() { }

  // getExercises(): Exercise[] {
  //   return this.exercises;
  // }

  // getExercise(index: number): Exercise {
  //   for (let i = 0; i < this.exercises.length; i++) {
  //     if (index === this.exercises[i].id) {
  //       return this.exercises[i];
  //     }
  //   }

  //}
//}

