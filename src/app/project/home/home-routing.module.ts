import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusesComponent } from './dashboard/hotel/buses.component';
import { ViajesComponent } from './dashboard/sucursal/viajes.component';
import { ConductoresComponent } from './dashboard/reservas/conductores.component';
import { RutasComponent } from './dashboard/cliente/rutas.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'buses', component: BusesComponent },
      { path: 'viajes', component: ViajesComponent },
      { path: 'conductores', component: ConductoresComponent },
      { path: 'rutas', component: RutasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
