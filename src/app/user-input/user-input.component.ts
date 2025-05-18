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

  @Output() userDataSubmit = new EventEmitter<void>();

  constructor(private investmentService: InvestmentService) { }

  enteredInitialInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturn: number = 0;
  enteredDuration: number = 0;

  onSubmit() {
    const userFormData: UserFormInvestmentData = {
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    }

    this.investmentService.calculateInvestmentResults(userFormData);
    this.userDataSubmit.emit();
  }
}
