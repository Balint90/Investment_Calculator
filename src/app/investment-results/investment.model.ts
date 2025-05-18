export interface Investment {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}

export interface UserFormInvestmentData {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number,
}