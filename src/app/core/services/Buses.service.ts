import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Buses } from '../models';
import { Observable, map } from 'rxjs';
import { EnvironmentsProduct } from 'src/environments/environments.product';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  private BUSESURL = EnvironmentsProduct.baseURL + '/buses';

  ////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { }

  crearBus (bus: Buses): Observable<Buses> {

    return this.http.post<Buses>(`${this.BUSESURL}/add`, bus); // cambiar ruta por el backend
  }

  listarBuses (): Observable<Buses[]> {

    return this.http.get<Buses[]>(`${this.BUSESURL}/listar`); //cambiar ruta por el back end
  }

  buscarBusPorId (bu_placa: number): Observable<Buses> {

    const url = `${this.BUSESURL}/get/${bu_placa}`;

    return this.http.get<Buses>(url);

  }

  editarBus (bus: Buses): Observable<Buses> {

    return this.http.put<Buses>(this.BUSESURL, bus);

  }

  borrarBus (bu_placa: number): Observable<void> {

    return this.http.delete<void>(`${this.BUSESURL}/${bu_placa}`).pipe(map((res) => res));

  }




}
