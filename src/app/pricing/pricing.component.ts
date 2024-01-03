import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  
  constructor(private spinner: NgxSpinnerService) { }

openSpinner() {
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 5000);
}

}
