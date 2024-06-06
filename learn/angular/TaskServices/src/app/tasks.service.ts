import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../data/task';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  private _url:string = "assets/task.json";

  constructor(private http: HttpClient) {
    console.log(" TasksService constructor");
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._url)
    .pipe( map((data:any) => data.tasks as Task[]  ) );
  }

}
