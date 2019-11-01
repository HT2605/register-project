import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgConfirmComponent } from './ag-confirm.component';

describe('AgConfirmComponent', () => {
  let component: AgConfirmComponent;
  let fixture: ComponentFixture<AgConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
