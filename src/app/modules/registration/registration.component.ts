import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  // Tallas para el atributo size del modelo Person
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Datos de ejemplo para la persona
  model = new Person(1, 'Daniel', 'Verano', 'alum.dveranom.2021@iesalixar.org', this.sizes[1], 'Imperial');

  // Control de formulario enviado por defecto a falso
  submitted = false;

  // Una vez se envía el formulario se establece a true
  onSubmit() {
    this.submitted = true;
  }

  // Método para inicializar una nueva persona
  newPerson() {
    this.model = new Person(2, '', '', '', '');
  }
}
