import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AddItemsComponent } from './add-items/add-items.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car_loan';
  constructor(private router: Router,
    private dialog: MatDialog) { }
  carloan() {
    this.router.navigate(['/car-loan'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemsComponent,{
        width:'30%'
    }
    );
    
  }
}
