import { FormBuilder, Validators } from '@angular/forms';
import { Habitaciones, Personas } from 'src/app/core/interfaces/IHotel';

import { Component } from '@angular/core';
import { CustomSnackComponent } from '../../components/custom-snack/custom-snack.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  listaHabitaciones : Habitaciones[] = [
    {
      tipoHabitacion : "Individual",
      value: "Ind"
    },
    {
      tipoHabitacion : "Doble",
      value: "Dob"
    },
    {
      tipoHabitacion : "Triple",
      value: "Tri"
    },
    {
      tipoHabitacion : "Quad",
      value: "Qua"
    },
    {
      tipoHabitacion : "Queen",
      value: "Que"
    },
    {
      tipoHabitacion : "King",
      value: "Kin"
    },
    {
      tipoHabitacion : "Twin",
      value: "Twi"
    },
    {
      tipoHabitacion : "Doble-doble",
      value: "Db-Db"
    },
    {
      tipoHabitacion : "Estudio",
      value: "Est"
    },
  ]
    numeroPersonas : Personas[] = [
    {
      numPersonas : 1,
      value: 1
    },
    {
      numPersonas : 2,
      value: 2
    },
    {
      numPersonas :3,
      value: 3
    },
    {
      numPersonas : 4,
      value: 4
    },
    {
      numPersonas : 5,
      value: 5
    },
    {
      numPersonas : 6,
      value: 6
    },
    {
      numPersonas : 7,
      value: 7
    },
    {
      numPersonas : 8,
      value: 8
    },
    {
      numPersonas : 9,
      value: 9
    },
    {
      numPersonas : 10,
      value: 10
    },
  ]
  // reserva : any = {
  //   nombre: null,
  //   apellidos: null,
  //   telefono: null,
  //   tipoHabitacion: null,
  //   numPersonas: null,
  //   fechaLlegada: null,
  //   fechaSalida: null,
  //   comentarios: null
  // }
regex = /^[a-zA-z]{3,50}$/
telRegex = /^[0-9 ]{10}$/

  fReserva = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3), Validators.pattern(this.regex)]],
    apellidos: [null, [Validators.required, Validators.minLength(3), Validators.pattern(this.regex)]],
    telefono: [null, [Validators.maxLength(10), Validators.pattern(this.telRegex)]],
    tipoHabitacion: [null, [Validators.required]],
    numPersonas: [null, [Validators.required]],
    fechaLlegada: [null, [Validators.required]],
    fechaSalida: [null, [Validators.required]],
    comentarios: [null, [Validators.minLength(20)]],
  })
  constructor(private fb : FormBuilder){

  }
  guardarReserva(){
    if (this.fReserva.invalid) {
      alert("Completa el formulario")
    } else {
      alert("Registro Exitoso")
    }
  }
}
