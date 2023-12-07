import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Transaction } from '../../models/transaction.model';

// Components
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
@Input() transactions!: Transaction[];
@Output() removeTransactionEvent = new EventEmitter<string>();

removeTransaction(id: string){
  this.removeTransactionEvent.emit(id);  
}
}
