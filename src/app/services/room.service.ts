import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from '../types/login.interface';
import { ResponseLogin } from '../types/response-login.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private readonly http = inject(HttpClient);
  private readonly apiEndPoint: string =
    'https://freeapi.miniprojectideas.com/api/HotelBooking';

  login(obj: Login): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`${this.apiEndPoint}/Login`, obj);
  }
}
