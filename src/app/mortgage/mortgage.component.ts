import { Component, OnInit } from '@angular/core';
import { InterestService} from '../Service/interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private interestService:InterestService) { }

  Total: number;
  years: number;
  
  calaulateinterest(): void {
    this.Total = this.interestService.calculateinterest(this.years)
  
  
  
}

  ngOnInit() {
  }

}
