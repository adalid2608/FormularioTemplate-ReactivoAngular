import { Habitaciones, Personas } from 'src/app/core/interfaces/IHotel';

import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
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

reserva : any = {
  nombre: null,
  apellidos: null,
  telefono: null,
  tipoHabitacion: null,
  numPersonas: null,
  fechaLlegada: null,
  fechaSalida: null,
  comentarios: null
}
message: any;
action: any;

guardarReserva(form : any){
  console.log(form);
  if (form.invalid) {
    alert("Todos los campos del formulario deben estar llenos")
  } else {
    alert(`${form.value.nombre} ${form.value.apellido} tu reservación se ah registrado correctamente para el dia ${form.value.fechaLlegada}. El tipo de habitación seleccionada es: ${form.value.tipoHabitacion} para ${form.controls.numPersonas.value} personas`)
  }
}
}

