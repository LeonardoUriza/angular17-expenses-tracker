import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

//Models
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
@Input() transaction!: Transaction;
@Output() removeTransactionEvent = new EventEmitter<string> ();

// Objeto de estilos dinamicos
dateStyles: Record<string,string> ={
  "border-bottom": '1px dashed gray',
};

removeHandler= () => {
  console.log("Click...");
  // Modifica el estilo programáticamente
  this.dateStyles["font-style"] = "italic";

  // Emite un evento al componente padre
  this.removeTransactionEvent.emit(this.transaction.id);
  
};
}
