import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://localhost:3000/api/contacts';

  dataChange: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Contact[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  public getAllContacts(): any {
    return this.httpClient.get<Contact[]>(this.API_URL);
  }

  public deleteContact(id): any {
      return this.httpClient.delete<any>(this.API_URL + "/" + id);
  }

   public createContact(contactData): any {
        return this.httpClient.post<any>(this.API_URL, contactData);
   }

   public editContact(id, data): any {
            return this.httpClient.put<any>(this.API_URL + "/" + id, data);
   }

  }




