import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoSobrenomeComponent } from './texto-sobrenome.component';

describe('TextoSobrenomeComponent', () => {
  let component: TextoSobrenomeComponent;
  let fixture: ComponentFixture<TextoSobrenomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoSobrenomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoSobrenomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
