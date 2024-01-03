import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog-pages',
  templateUrl: './blog-pages.component.html',
  styleUrls: ['./blog-pages.component.css'],
})
export class BlogPagesComponent {
  constructor(private spinner: NgxSpinnerService) {}

  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
