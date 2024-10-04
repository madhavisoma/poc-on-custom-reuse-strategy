import {Component, OnInit} from '@angular/core';
import {FetchService} from '../fetch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  comp3Value: any;
  comp1Value: any;
  comp2Value: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  sendToComp2() {
    this.router.navigateByUrl(`/comp2`);
  }

  submit() {
    this.router.navigateByUrl(`/`);
  }
}
