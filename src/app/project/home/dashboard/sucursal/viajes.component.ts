import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viajes } from 'src/app/core/models';
import { ViajesService } from 'src/app/core/services/Viajes.service';

@Component({
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css'],
})
export class ViajesComponent implements OnInit {

  viajes: Viajes[] = [];
  ViajesId!: number;

  constructor(
    private ViajesService: ViajesService,
    private router: Router
  ) {

    //listar
    this.ViajesService.listarViajes().subscribe((data: Viajes[]) => {
        console.log(data);
        this.viajes = data;
    })

  }

  ngOnInit(): void {

  }

  deleteViaje (vi_numevuelta: number) {
    this.ViajesService.borrarViaje(vi_numevuelta).subscribe(() => {
      this.router.navigate(['/home/viajes']);
    })
  }
}
