import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgModalComponent } from './ag-modal.component';

describe('AgModalComponent', () => {
  let component: AgModalComponent;
  let fixture: ComponentFixture<AgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
