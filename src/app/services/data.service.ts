import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../models/contact';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  private readonly API_URL = 'http://localhost:3000/api/contacts';

  /** CRUD METHODS */
  public getAllContacts(): any {
    return this.httpClient.get<Contact[]>(this.API_URL);
  }

  public deleteContact(id: number): any {
      return this.httpClient.delete<Contact[]>(this.API_URL + "/" + id);
  }

   public createContact(contactData: Contact): any {
       return this.httpClient.post<Contact[]>(this.API_URL, contactData);
   }

   public editContact(id: string, data: Contact): any {
       return this.httpClient.put<Contact[]>(this.API_URL + "/" + id, data);
   }

  }




