import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// Services
import { TransactionsService } from './transactions.service';
//Modules
import { Transaction } from '../models/transaction.model';
import { transition } from '@angular/animations';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should be 4 transactions", (done) =>{
    service.get().subscribe((transactions: Transaction[]) =>{
      expect(transactions.length).toBe(4);
      done();
    })
  });

  it("Should get the right categories", (done) => {
    service.get().subscribe((transactions: Transaction[]) =>{
      const incomes: Transaction[] = transactions.filter(transaction => transaction.type === "income");
      // Verifica la cantidad de incomes
      expect(incomes.length).toBe(2);
      // Verifica la categoria  del income
      expect(incomes[0].category).toBe("Payroll");
      // Verifica las categorias obtenidas
      expect(transactions[0].category).toBe("Entertaiment")
      //expect(transactions[1].category).toBe("Food")
      done();
    })
  })
});
