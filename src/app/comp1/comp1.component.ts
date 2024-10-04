import {Component, OnInit} from '@angular/core';
import {FetchService} from '../fetch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  comp1Value: any;
  mode = {'name': '', 'email': '', 'ph': ''};

  constructor(private router: Router) {

  }

  sendToComp2() {
    this.router.navigateByUrl(`/comp2`, this.comp1Value);
  }


  ngOnInit() {
  }

}
