import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularWebsite';

  toggleDarkMode(event: any) {
    if (event.target.checked) {
      document.getElementsByTagName('body').item(0).setAttribute('data-theme', 'dark');
    } else {
      document.getElementsByTagName('body').item(0).removeAttribute('data-theme');
    }
  }
}
