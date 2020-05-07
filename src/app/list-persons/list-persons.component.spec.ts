import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonsComponent } from './list-persons.component';

describe('ListPersonsComponent', () => {
  let component: ListPersonsComponent;
  let fixture: ComponentFixture<ListPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
