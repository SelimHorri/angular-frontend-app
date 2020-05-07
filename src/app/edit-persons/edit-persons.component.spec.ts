import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonsComponent } from './edit-persons.component';

describe('EditPersonsComponent', () => {
  let component: EditPersonsComponent;
  let fixture: ComponentFixture<EditPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
