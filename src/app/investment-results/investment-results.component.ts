import { Component } from '@angular/core';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(public investmentService: InvestmentService) { }


}
