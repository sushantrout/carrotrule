import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxDialogComponent } from './message-box-dialog.component';

describe('MessageBoxDialogComponent', () => {
  let component: MessageBoxDialogComponent;
  let fixture: ComponentFixture<MessageBoxDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBoxDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
