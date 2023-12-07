import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Componentes
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

// Models
import { Balance } from '../../models/balance.model';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BalanceComponent, TransactionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  balance: Balance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };
  transactions: Transaction[] = [
    {
      id: "1",
      type: "expense",
      amount: 45,
      category: "Food",
      date: new Date(2023,11,1)
    },
    {
      id: "2",
      type: "expense",
      amount: 280,
      category: "Shoping",
      date: new Date(2023,11,2)
    },
    {
      id: "3",
      type: "expense",
      amount: 60,
      category: "Entertaiment",
      date: new Date(2023,11,3)
    },
    {
      id: "4",
      type: "income",
      amount: 500,
      category: "Payroll",
      date: new Date(2023,11,4)
    },

  ];

  removeTransaction(id: string){
    console.log(`Eliminando la transacción ${id} ...`);
    // elimina la transacción del arreglo
    this.transactions = this.transactions.filter((transaction) => transaction.id !== id);
  }
}
