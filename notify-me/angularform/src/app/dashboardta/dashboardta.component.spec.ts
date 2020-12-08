import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtaComponent } from './dashboardta.component';

describe('DashboardtaComponent', () => {
  let component: DashboardtaComponent;
  let fixture: ComponentFixture<DashboardtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
