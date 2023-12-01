import { Buses } from "./Buses.interface";
import { Conductores } from "./Conductores.interface";
import { Rutas } from "./Rutas.interface";

export interface Viajes {
  buses: Buses,
  rutas: Rutas,
  vi_numePasajero: number,
  vi_fechViaje: Date,
  conductores: Conductores,
  vi_numevuelta ?: number,
  vi_valopasaj: Rutas
}
