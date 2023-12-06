import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Componentes
import { BalanceComponent } from './components/balance/balance.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

// Models
import { Balance } from './models/balance.model';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BalanceComponent, TransactionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
}
