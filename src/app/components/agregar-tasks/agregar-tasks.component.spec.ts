import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTasksComponent } from './agregar-tasks.component';

describe('AgregarTasksComponent', () => {
  let component: AgregarTasksComponent;
  let fixture: ComponentFixture<AgregarTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
