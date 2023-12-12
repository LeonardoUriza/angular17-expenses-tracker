import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    // Detecta Cambios
    fixture.detectChanges();
    // Obtiene el html del componente
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it ("should have the right amount, expenses and income", ()=> {
    // Modifica los datos del componente
    component.balance = {
      amount: 30,
      expenses: 15,
      income: 45,
    };
    // Detecta los cambios del componente
    fixture.detectChanges();
    // Obtiene los elementos del dom tree
    const amountElement = compiled.querySelector(".balance__header h2");
    expect(amountElement?.textContent).toBe("$30.00");

    const incomeElement = compiled.querySelector(".balance__info div:nth-child(1) h3");
    expect(incomeElement?.textContent).toBe("$45.00");

    const expensesElement = compiled.querySelector(".balance__info div:nth-child(2) h3");
    expect(expensesElement?.textContent).toBe("$15.00");
    
  });
});
