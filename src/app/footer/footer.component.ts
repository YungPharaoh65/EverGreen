import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
valid: any;
openSpinner() {
throw new Error('Method not implemented.');
}

email: string = '';
submitted: boolean = false;

submitForm() {
  // Display a message when the button is clicked if the form is valid
  if (this.email) {
    this.submitted = true;
  }
}



}
