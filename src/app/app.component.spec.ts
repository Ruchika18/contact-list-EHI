import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import {DataService} from './services/data.service';
import { MatDialog } from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';


class MatDialogMock {
  open() {
    return {
      afterClosed: () => typeof Observable
    };
  }
};

describe('AppComponent', () => {
  let app: AppComponent;
  let dialog: MatDialogMock;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let dataService: DataService;
  let httpClientMock;

  beforeEach(async(() => {
  httpClientMock = jasmine.createSpyObj(['get', 'post', 'delete', 'put']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
              {
                provide: MatDialog, useClass: MatDialogMock
              },
              {
                provide: DataService, useClass: DataService
              },
              {
                provide: HttpClient, useClass: httpClientMock
              }
            ]
    }).compileComponents()
    .then(()=> {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;

        dataService = TestBed.get(DataService);
        dialog = TestBed.get(MatDialog);;
    });
}));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'contact-list'`, () => {
    spyOn(dialog, 'open').and.callThrough();
    spyOn(dataService
    , 'deleteContact').and.callThrough();

        const deleteButton = debugElement.query(By.css('aria-label="Delete"'));
        deleteButton.triggerEventHandler('click', null);

        expect(dialog.open).toHaveBeenCalled();
        expect(dataService.deleteContact).toHaveBeenCalled;
  });
});
