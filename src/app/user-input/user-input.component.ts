import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserFormInvestmentData } from '../investment-results/investment.model';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) { }

  enteredInitialInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturn: number = 5;
  enteredDuration: number = 10;

  onSubmit() {
    const userFormData: UserFormInvestmentData = {
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    }

    this.investmentService.calculateInvestmentResults(userFormData);
    this.enteredInitialInvestment = 0;
    this.enteredAnnualInvestment = 0;
    this.enteredExpectedReturn = 5;
    this.enteredDuration = 10;
  }
}
