import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showLoader: boolean = true;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.closeLoader();
    }, 2000);

    this.viewportScroller.scrollToPosition([0, 0]);

  }

  
  closeLoader() {
    this.showLoader = false;
    this.router.navigate(['/home']);
  }
  

  
}
