import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionDescriptionComponent } from './add-transaction-description.component';

describe('AddTransactionDescriptionComponent', () => {
  let component: AddTransactionDescriptionComponent;
  let fixture: ComponentFixture<AddTransactionDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransactionDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
