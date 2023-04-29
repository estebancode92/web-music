import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  screenHeight: any;


  constructor() {
    this.getScreenSize();
   }
   @HostListener('window:resize', ['$event'])

   getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight);

 }
 ngOnInit(): void {
}

}
