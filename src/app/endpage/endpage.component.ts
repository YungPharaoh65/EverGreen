import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css'],
})
export class EndpageComponent {
  [x: string]: any;

  purchase = 'Premium';

  gifUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) {
    // Replace 'assets/giphy.gif' with the actual path to your GIF file.
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/S-animated.gif'
    ); //this is the gif img function
  }

  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
}
