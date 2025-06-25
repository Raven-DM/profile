import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from '../model/animal.interface';
import { TableComponent } from './shared/table/table';
import { Creditur } from '../model/crediture.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from './shared/input-component/input-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    CommonModule,
    TableComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
testFromChildren: string = '';

parentData: Creditur[] = [
  
    {
      name: "Dr. Levi Russel",
      age: 96,
      job: "Direct Data Producer"
    },
    {
      name: "Jimmy Gusikowski",
      age: 59,
      job: "Chief Quality Supervisor"
    },
    {
      name: "Mandy Hartmann II",
      age: 9,
      job: "Senior Response Assistant"
    },
    {
      name: "Naomi Marvin",
      age: 69,
      job: "District Assurance Agent"
    },
    {
      name: "Abraham Stanton",
      age: 93,
      job: "Response Assstant"
     
    }
  
];

  onFormSubmit(data:any) {
    this.parentData.push(data)
  }

  hapusData(index: number) {
    this.parentData.splice(index, 1);
    this.parentData = [...this.parentData];
  }



}

