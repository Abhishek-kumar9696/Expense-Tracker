import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransactions }) => {
  // Categories for transactions
  const categories = ["salary", "food", "bills", "movie", "medical", "tax"];

  // Total transactions
  const totalTransactions = allTransactions.length;
  const totalIncomeTransactions = allTransactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactions = allTransactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalIncomePercent =
    totalTransactions > 0
      ? (totalIncomeTransactions.length / totalTransactions) * 100
      : 0;
  const totalExpensePercent =
    totalTransactions > 0
      ? (totalExpenseTransactions.length / totalTransactions) * 100
      : 0;

  // Total turnover
  const totalTurnover = allTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnover = allTransactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomePercentTurnover =
    totalTurnover > 0 ? (totalIncomeTurnover / totalTurnover) * 100 : 0;
  const totalExpensePercentTurnover =
    totalTurnover > 0 ? (totalExpenseTurnover / totalTurnover) * 100 : 0;

  return (
    <>
      <div className="row m-3">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              Total Transactions: {totalTransactions}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Income: {totalIncomeTransactions.length}
              </h5>
              <h5 className="text-danger">
                Expense: {totalExpenseTransactions.length}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor="green"
                  className="mx-2"
                  percent={totalIncomePercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor="red"
                  className="mx-2"
                  percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              Total Turnover: {totalTurnover.toFixed(2)}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Income: {totalIncomeTurnover.toFixed(2)}
              </h5>
              <h5 className="text-danger">
                Expense: {totalExpenseTurnover.toFixed(2)}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor="green"
                  className="mx-2"
                  percent={totalIncomePercentTurnover.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor="red"
                  className="mx-2"
                  percent={totalExpensePercentTurnover.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <h1>Category-wise Expense</h1>
          {categories.map((category) => {
            const amount = allTransactions
              .filter(
                (transaction) =>
                  transaction.type === "expense" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);

            const percent =
              totalExpenseTurnover > 0
                ? ((amount / totalExpenseTurnover) * 100).toFixed(0)
                : 0;

            return (
              <div className="card" key={category}>
                <div className="card-body">
                  <h5>{category}</h5>
                  <Progress percent={percent} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-3">
          <h1>Category-wise Income</h1>
          {categories.map((category) => {
            const amount = allTransactions
              .filter(
                (transaction) =>
                  transaction.type === "income" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);

            const percent =
              totalIncomeTurnover > 0
                ? ((amount / totalIncomeTurnover) * 100).toFixed(0)
                : 0;

            return (
              <div className="card" key={category}>
                <div className="card-body">
                  <h5>{category}</h5>
                  <Progress percent={percent} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Analytics;
