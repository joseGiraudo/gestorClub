import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-member-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DatePickerModule,
    MessageModule
  ],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.css'
})
export class MemberFormComponent {

  memberForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthdate: new FormControl('', [Validators.required, ]), // falta agregar el pattern
  })

  sendForm() {
    console.log(this.memberForm);
  }
}
