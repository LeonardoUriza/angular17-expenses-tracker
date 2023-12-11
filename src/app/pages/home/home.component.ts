import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Componentes
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

// Models
import { Balance } from '../../models/balance.model';
import { Transaction } from '../../models/transaction.model';

// Services
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BalanceComponent, TransactionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  transactions!: Transaction[];
  
  balance: Balance = {
    amount: 0,
    income: 0,
    expenses: 0,
  };

  // provee el servicio al componente usando DependencyInyection
constructor(private transactionService: TransactionsService ){}

ngOnInit(): void {
  console.log("componente inicializado");
  this.transactionService.get().subscribe((response: Transaction[]) => {
    this.transactions = response;

    // Recalcula los Saldos 
    this.calculateBalance();
  });
  
}

  

  // transactions: Transaction[] = [
  //   {
  //     id: "1",
  //     type: "expense",
  //     amount: 45,
  //     category: "Food",
  //     date: new Date(2023,11,1)
  //   },
  //   {
  //     id: "2",
  //     type: "expense",
  //     amount: 280,
  //     category: "Shoping",
  //     date: new Date(2023,11,2)
  //   },
  //   {
  //     id: "3",
  //     type: "expense",
  //     amount: 60,
  //     category: "Entertaiment",
  //     date: new Date(2023,11,3)
  //   },
  //   {
  //     id: "4",
  //     type: "income",
  //     amount: 500,
  //     category: "Payroll",
  //     date: new Date(2023,11,4)
  //   },

  // ];

  removeTransaction(id: string){
    console.log(`Eliminando la transacción ${id} ...`);
    
    // Elimina la transacciòn del backend
    this.transactionService.remove(id).subscribe((response:Transaction) =>{console.log(response);
    
      // elimina la transacción del arreglo del frontend
    this.transactions = this.transactions.filter((transaction) => transaction.id !== id);

    // Recalcula los Saldos 
    this.calculateBalance();
    })

  }
  /**
   * Recalcula los saldos para el componente balance
   */
  calculateBalance():void{
    console.log("Recalculando...");
    let income: number = 0;
    let expenses: number = 0;
    // Recorre las transacciones para calcular los saldos
    this.transactions.forEach(transaction =>{
      if(transaction.type === "expense") expenses += transaction.amount;
      if(transaction.type === "income") income += transaction.amount;

    });
    // Calcula el saldo total
    const amount = income - expenses;
    // Actualiza los saldos
    this.balance = {amount, income,expenses}
    
  };
}
