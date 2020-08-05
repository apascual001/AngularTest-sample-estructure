import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(private http: HttpClient) { }
  public getStatistics(){
    return this.http.get('http://217.76.158.200:8090/api/students/')
  }
}
