import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
closeSpinner() {
throw new Error('Method not implemented.');
}
openDialog() {
throw new Error('Method not implemented.');
}



  constructor(private dialogRef : MatDialog, private spinner: NgxSpinnerService){}

  openSpinner() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  openDialog2(){
    this.dialogRef.open(PopUpComponent);
  }





}
