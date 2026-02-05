export function calculateCompoundInterest(principal, monthlyContribution, years, annualRatePercent) {
  const P = parseFloat(principal) || 0;
  const PMT = parseFloat(monthlyContribution) || 0;
  const t = parseFloat(years) || 0;
  const annualRate = parseFloat(annualRatePercent) || 0;
  const r = annualRate / 100 / 12;
  const n = 12;
  if (t <= 0 || isNaN(P) || isNaN(PMT) || isNaN(t) || isNaN(annualRate)) {
    return { futureValue: 0, totalContributions: 0, totalInterest: 0 };
  }
  const compoundFactor = Math.pow(1 + r, n * t);
  const fvPrincipal = P * compoundFactor;
  const fvAnnuity = r === 0 ? PMT * 12 * t : PMT * ((compoundFactor - 1) / r);
  const futureValue = fvPrincipal + fvAnnuity;
  const totalContributions = P + PMT * 12 * t;
  const totalInterest = futureValue - totalContributions;
  return {
    futureValue,
    totalContributions,
    totalInterest,
  };
}
