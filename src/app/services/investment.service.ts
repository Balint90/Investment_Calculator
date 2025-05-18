import { Injectable } from "@angular/core";
import { UserFormInvestmentData, type Investment } from "../investment-results/investment.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {

    private annualData: Investment[] = [];

    calculateInvestmentResults(userFormData: UserFormInvestmentData) {
        this.annualData = [];
        let investmentValue = userFormData.initialInvestment;

        for (let i = 0; i < userFormData.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (userFormData.expectedReturn / 100);
            investmentValue += interestEarnedInYear + userFormData.annualInvestment;
            const totalInterest =
                investmentValue - userFormData.annualInvestment * year - userFormData.initialInvestment;
            this.annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: userFormData.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: userFormData.initialInvestment + userFormData.annualInvestment * year,
            });
        }
    }

    get getAnnualData() {
        return this.annualData;
    }
}