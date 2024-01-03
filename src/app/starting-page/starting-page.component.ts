import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.css'],
})
export class StartingPageComponent {
  gifUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) {
    // Replace 'assets/giphy.gif' with the actual path to your GIF file.
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/evergreen logo.gif'
    ); //this is the gif img function
  }

  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
