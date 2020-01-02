import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
 users = {};
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe( d=> {
      this.users['arr'] = d ;
      alert(this.users['arr'].length);
    })
  }

}
