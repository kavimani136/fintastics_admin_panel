import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTransactionTypeFormComponent } from './add-edit-transaction-type-form.component';

describe('AddEditTransactionTypeFormComponent', () => {
  let component: AddEditTransactionTypeFormComponent;
  let fixture: ComponentFixture<AddEditTransactionTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTransactionTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTransactionTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
