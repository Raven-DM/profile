import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Creditur } from '../../../model/crediture.interface';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss'
})
export class InputComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    job: new FormControl('',[Validators.required])
  });

  submit(){
    if(this.userForm.valid) {
      this.formSubmitted.emit(this.userForm.value);
      this.userForm.reset();
    }
  }

}
  