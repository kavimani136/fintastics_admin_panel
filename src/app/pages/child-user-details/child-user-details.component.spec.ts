import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUserDetailsComponent } from './child-user-details.component';

describe('ChildUserDetailsComponent', () => {
  let component: ChildUserDetailsComponent;
  let fixture: ComponentFixture<ChildUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
