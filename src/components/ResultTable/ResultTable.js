import React, { Component } from "react";

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
              <td>{d.savingsEndOfYear}</td>
              <td>{d.yearlyInterest}</td>
              <td>
                {d.savingsEndOfYear -
                  props.initialInvestment -
                  d.yearlyContribution * d.year}
              </td>
              <td>{props.initialInvestment + d.yearlyContribution * d.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default ResultTable;
