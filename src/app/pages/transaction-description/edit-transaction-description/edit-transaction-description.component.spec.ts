import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransactionDescriptionComponent } from './edit-transaction-description.component';

describe('EditTransactionDescriptionComponent', () => {
  let component: EditTransactionDescriptionComponent;
  let fixture: ComponentFixture<EditTransactionDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTransactionDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransactionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
