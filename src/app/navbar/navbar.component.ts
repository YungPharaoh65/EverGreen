import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent {
  about: any;
  us: any;

  openDialog() {
    throw new Error('Method not implemented.');
  }

  constructor(private dialogRef: MatDialog) {}

  openDialog2() {
    this.dialogRef.open(PopUpComponent);
  }

  //openModel(){
  //let modelDiv = document.getElementById('myModel');
  //if (modelDiv = null){
  //modelDiv.style.display = 'block';
  //}
  //}

  //closeModel(){
  //let modelDiv = document.getElementById('myModel');
  //if (modelDiv = null){
  //modelDiv.style.display = 'none';
  //}

  //}
}
