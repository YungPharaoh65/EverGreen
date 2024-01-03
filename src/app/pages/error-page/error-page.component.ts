import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  gifUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService) {
    // Replace 'assets/giphy.gif' with the actual path to your GIF file.
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Cant-retrieve-page.gif'); //this is the gif img function
  }


}
