import {Component, OnInit} from '@angular/core';
import {FetchService} from '../fetch.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  comp2Value: any;
  comp1Value: any;
  comp1Values$: Observable<any[]>;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  sendToComp3() {
    this.router.navigateByUrl(`/comp3`, {skipLocationChange: true});
  }

  sendToComp1() {
    this.router.navigateByUrl(`/`);
  }

}
