import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransactionTypeComponent } from './edit-transaction-type.component';

describe('EditTransactionTypeComponent', () => {
  let component: EditTransactionTypeComponent;
  let fixture: ComponentFixture<EditTransactionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTransactionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
