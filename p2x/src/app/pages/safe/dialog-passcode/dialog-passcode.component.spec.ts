import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPasscodeComponent } from './dialog-passcode.component';

describe('DialogPasscodeComponent', () => {
  let component: DialogPasscodeComponent;
  let fixture: ComponentFixture<DialogPasscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPasscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
