import {Component} from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularWebsite';

  Datum : Date;

  toggleDarkMode(event: any) {
    if (event.target.checked) {
      document.getElementsByTagName('body').item(0).setAttribute('data-theme', 'dark');
    } else {
      document.getElementsByTagName('body').item(0).removeAttribute('data-theme');
    }
  }
  showWeather(){
    document.getElementById("overlayWeer").style.display = "block";
  }
  hideWeather(){
    document.getElementById("overlayWeer").style.display = "none";
  }
  constructor(){
    this.Datum = new Date();
  }
}
