import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() :void {
    console.log("thnkas for your order");
  }
}
