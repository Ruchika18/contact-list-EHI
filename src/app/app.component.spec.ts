import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import {DataService} from './services/data.service';
import { MdDialog, MdDialogRef, OverlayRef } from '@angular/material';

class MdDialogMock {
  open() {
    return {
      afterClosed: () => Observable.of('')
    };
  }
};

describe('AppComponent', () => {
  let dialog: MdDialogMock;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
              {
                provide: MdDialog, useClass: MdDialogMock
              },
             DataService
            ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
     debugElement = fixture.debugElement;
     element = debugElement.nativeElement;

        dataService = TestBed.get(DataService);
        dialog = TestBed.get(MdDialog);

  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'contact-list'`, () => {
    spyOn(dialog, 'open').and.callThrough();
    spyOn(dataService, 'deleteContact').and.callThrough();

        const deleteButton = debugElement.query(By.css('aria-label="Delete"'));
        deleteButton.triggerEventHandler('click', null);

        expect(dialog.open).toHaveBeenCalled();
        expect(dataService.deleteContact).toHaveBeenCalledWith('');
  });
});
