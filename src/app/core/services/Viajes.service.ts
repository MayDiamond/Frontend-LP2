import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentsProduct } from 'src/environments/environments.product';
import { Viajes } from '../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private BUSESURL = EnvironmentsProduct.baseURL + '/Viajes';

  ////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { }

  crearViaje (viaje: Viajes): Observable<Viajes> {

    return this.http.post<Viajes>(`${this.BUSESURL}/add`, viaje); // cambiar ruta por el backend
  }

  listarViajes (): Observable<Viajes[]> {

    return this.http.get<Viajes[]>(`${this.BUSESURL}/list`); //cambiar ruta por el back end
  }

  buscarViajePorId (vi_numevuelta: number): Observable<Viajes> {

    const url = `${this.BUSESURL}/get/${vi_numevuelta}`;

    return this.http.get<Viajes>(url);

  }

  editarViaje (viaje: Viajes): Observable<Viajes> {

    const url = `${this.BUSESURL}/update`;

    return this.http.put<Viajes>(url, viaje);

  }

  borrarViaje (vi_numevuelta: number): Observable<void> {

    const url = `${this.BUSESURL}/delete/${vi_numevuelta}`;

    return this.http.delete<void>(url).pipe(map((res) => res));

  }


}
