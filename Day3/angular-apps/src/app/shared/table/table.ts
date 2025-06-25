import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Creditur } from '../../../model/crediture.interface';
import { CommonModule } from '@angular/common';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class TableComponent {

  @Input() childrenData: Creditur[] = []
  @Output() onDelete = new EventEmitter<number>();

  hapusData(index:number) {
    this.onDelete.emit(index);
  } 
}
