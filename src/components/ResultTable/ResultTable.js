import React, { Component } from "react";

const formmater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const ResultTable = props => {

    return (
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((d) => (
            <tr key={d.year}>
              <td>{d.year}</td>
              <td>{formmater.format(d.savingsEndOfYear)}</td>
              <td>{formmater.format(d.yearlyInterest)}</td>
              <td>
                {formmater.format(
                  d.savingsEndOfYear -
                    props.initialInvestment -
                    d.yearlyContribution * d.year
                )}
              </td>
              <td>
                {formmater.format(
                  props.initialInvestment + d.yearlyContribution * d.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default ResultTable;
