import { Component } from '@angular/core';
import { DomSanitizer,  SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-weather-features',
  templateUrl: './weather-features.component.html',
  styleUrls: ['./weather-features.component.css'],
})
export class WeatherFeaturesComponent {
  
  gifUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService) {
    // Replace 'assets/giphy.gif' with the actual path to your GIF file.
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/rain.gif'
    ); //this is the gif img function
  }
}
