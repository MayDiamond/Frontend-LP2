import { Flota } from "./Flota.interface";

export interface Buses {
  bu_placa ?: number,
  bu_codiflot: Flota,
  bu_capacidad: number
  bu_fechfabri: Date,
  bu_tipo: string,
}
