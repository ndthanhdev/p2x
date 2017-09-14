import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskListComponent } from './kiosk-list.component';

describe('KioskListComponent', () => {
  let component: KioskListComponent;
  let fixture: ComponentFixture<KioskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
