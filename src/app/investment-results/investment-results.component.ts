import { Component, Input } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
import { Investment } from './investment.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(public investmentService: InvestmentService) { }

  get results() {
    return this.investmentService.resultData;
  }
}
