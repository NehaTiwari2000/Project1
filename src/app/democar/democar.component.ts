import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-democar',
  templateUrl: './democar.component.html',
  styleUrls: ['./democar.component.css']
})
export class DemocarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });
  firstName:string;
  lastName:string;
  age:number;

  
}
