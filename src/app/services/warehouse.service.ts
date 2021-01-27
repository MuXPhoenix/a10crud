import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //访问API一般都放在service服务里
import { Observable, of } from 'rxjs'; //异步接收API内容
import { IWarehouseAPI, IWarehouseElement } from 'src/app/model/warehouse';
import { catchError, map, tap } from 'rxjs/operators';//Error handling出错观察

@Injectable({
  providedIn: 'root'
})

export class WarehouseService {

  private baseURL = 'http://localhost:3000/warehouse';  // URL to api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

 

  /**
   *
   *
   * @return {*}  {Observable<IWarehouseAPI>}
   * @memberof WarehouseService
   */
  getWarehouseAll(): Observable<IWarehouseAPI> {
    return this.httpClient.get<IWarehouseAPI>(this.baseURL)
    // .pipe(
    //   catchError(this.handleError<IDepartmentAPI>('getPeopleAll',))

    // );
  }


  /** GET hero by id. Return `undefined` when id not found */
  // getDepartmentNo404<Data>(id: number): Observable<IDepartmentAPI> {
  //   const url = `${this.baseURL}/?id=${id}`;
  //   return this.httpClient.get<IDepartmentAPI[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array,
  //       catchError(this.handleError<IDepartmentAPI>(`getHero id=${id}`))
  //     );
  // }

  // getDepartment(id: number): Observable<IDepartmentAPI> {
  //   const url = `${this.baseURL}/${id}`;
  //   return this.httpClient.get<IDepartmentAPI>(url).pipe(
  //     catchError(this.handleError<IDepartmentAPI>(`getPeople id=${id}`))
  //   );
}