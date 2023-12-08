import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Formularios
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent implements OnInit {
  // Objeto que administra la información del formulario
  addTransactionForm!: FormGroup;

  // Se ejecuta en el montaje del componente en el DOM tree
  ngOnInit(): void {
    // Inicialización del formulario
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0,[
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      type: new FormControl("expense", Validators.required),
      category: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
    });
  }

  onSubmit(){
    // Verifica si el formulario es válido
    if (this.addTransactionForm.valid){
      console.log("Formulario Valido");
      
    }else {
      console.log("Formulario no Válido");
      
    }

    // const data = {
    //   ...this.addTransactionForm.value,
    //   amount: parseInt(this.addTransactionForm.controls["amount"].value),
    // };

    console.log(this.addTransactionForm.value);
    // console.log(data);
    
    
  }

}
