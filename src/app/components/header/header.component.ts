import { Component, OnInit} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

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
