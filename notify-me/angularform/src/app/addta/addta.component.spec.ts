import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaComponent } from './addta.component';

describe('AddtaComponent', () => {
  let component: AddtaComponent;
  let fixture: ComponentFixture<AddtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
