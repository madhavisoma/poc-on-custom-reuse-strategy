import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FetchService {
  public sendDatatoComp2 = new BehaviorSubject('');
  public sendDatatoComp3 = new BehaviorSubject('');

}
