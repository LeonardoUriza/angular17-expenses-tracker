import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    // Donfigura el modulo de pruebas
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();
    
    // crea el componente
    fixture = TestBed.createComponent(AboutComponent);
    // obtiene el componente
    component = fixture.componentInstance;
    // Detecta cambios en el componente
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
