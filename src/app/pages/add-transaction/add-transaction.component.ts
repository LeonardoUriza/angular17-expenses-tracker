import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// Formularios
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
// Services
import { TransactionsService } from '../../services/transactions.service';
// Models
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss',
})
export class AddTransactionComponent implements OnInit {
  // Objeto que administra la información del formulario
  addTransactionForm!: FormGroup;

  constructor(
    private transactionService: TransactionsService,
    private router: Router
  ) {}

  // Se ejecuta en el montaje del componente en el DOM tree
  ngOnInit(): void {
    // Inicialización del formulario
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      type: new FormControl('expense', Validators.required),
      category: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    // Verifica si el formulario es válido
    if (this.addTransactionForm.valid) {
      console.log('Formulario Valido');

      // Obtiene el objeto del formulario con los datos de la transaccion
      const transaction = this.addTransactionForm.value;

      //Accede al servicio del backend para crear la transaccion
      this.transactionService
        .create(transaction)
        .subscribe((response: Transaction) => {
          console.log('Transacciòn Creada');
          // Navega al home de la aplicación
          this.router.navigate(["/"])
        });
    }

    // const data = {
    //   ...this.addTransactionForm.value,
    //   amount: parseInt(this.addTransactionForm.controls["amount"].value),
    // };
    // console.log(data);
  }
}
