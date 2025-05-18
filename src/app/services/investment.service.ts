import { Injectable } from "@angular/core";
import { UserFormInvestmentData, type Investment } from "../investment-results/investment.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {

    resultData?: Investment[];

    calculateInvestmentResults(userFormData: UserFormInvestmentData) {

        const { initialInvestment, expectedReturn, annualInvestment, duration } = userFormData;
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.resultData = annualData;
    }
}