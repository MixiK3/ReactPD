import React from "react";
import { useBonus } from "../../context/BonusesContext/BonusContext";

function HistoryBonuses() {
  const { history } = useBonus(); // Access context

  return (
    <div>
      <div className="container">
        <h2 className="table-h2">История потраченных бонусов</h2>
        <div className="row">
          <div className="col">
            <table id="user-table" className="table">
              <thead>
                <tr>
                  <th>Код</th>
                  <th>Потраченные бонусы</th>
                  <th>Когда</th>
                  <th>Код потраченного бонуса (1-7)</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "light-row" : "dark-row"}
                  >
                    <td>{index + 1}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td>{item.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryBonuses;
