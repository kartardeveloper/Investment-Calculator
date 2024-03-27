import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ userInput }) {
  const resultValues = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultValues[0].valueEndOfYear -
    resultValues[0].interest -
    resultValues[0].annualInvestment;

  return (
    <div className="result-wrapper">
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultValues.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;
            const totalAmountInvested = result.valueEndOfYear - totalInterest;

            return (
              <tr className={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
