import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTransactionDescriptionFormComponent } from './add-edit-transaction-description-form.component';

describe('AddEditTransactionDescriptionFormComponent', () => {
  let component: AddEditTransactionDescriptionFormComponent;
  let fixture: ComponentFixture<AddEditTransactionDescriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTransactionDescriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTransactionDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
