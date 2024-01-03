import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  username: string = 'PrinceRocks';
  password: string = 'GreenIsGood';

  @ViewChild('registrationForm') form: NgForm;
  registrationForm: any;
  Uname: any;
  pass: any;

  OnFormSubmitted() {
    console.log(this.form);
    console.log(this.form.value.username);
    console.log(this.form.value.password);
  }

  gifUrl: any;

  constructor(private dialogRef: MatDialog, private sanitizer: DomSanitizer) {
    // Constructor body
    // Replace 'assets/giphy.gif' with the actual path to your GIF file.
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/plant growing.gif'
    ); //this is the gif img function
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog2() {
    this.dialogRef.open(PopUpComponent);
  }
}
