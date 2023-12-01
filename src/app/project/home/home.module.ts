import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViajesComponent } from './dashboard/sucursal/viajes.component';
import { RutasComponent } from './dashboard/cliente/rutas.component';
import { ConductoresComponent } from './dashboard/reservas/conductores.component';
import { HomeRoutingModule } from './home-routing.module';
import { BusesComponent } from './dashboard/hotel/buses.component';

@NgModule({
  declarations: [
    BusesComponent,
    DashboardComponent,
    ViajesComponent,
    RutasComponent,
    ConductoresComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
