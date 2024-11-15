import React, { useState } from "react";
import { useBonus } from "../../context/BonusesContext/BonusContext"; // Import the custom hook
import ConfirmationModal from "../../components/Modals/ConfirmationModal";
import SuccessModal from "../../components/Modals/SuccessModal";

function YourBonuses() {
  const { userBonuses, setUserBonuses, history, setHistory } = useBonus(); // Access context

  const [selectedBonus, setSelectedBonus] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const bonusOptions = [
    {
      cost: 30,
      description: "Отмена домашней работы за один предмет на один день",
    },
    {
      cost: 40,
      description: "Подсказка от учителя на контрольной/самостоятельной",
    },
    { cost: 50, description: "Поменять вариант на контрольной" },
    { cost: 60, description: "+1 бал за контрольеную" },
    { cost: 125, description: "Бесплатная пицца в столовой (единоразово)" },
    { cost: 100, description: "Отмена выхода к доске" },
    {
      cost: 300,
      description: "Повышение оценки в четверти на 1 бал за один предмет",
    },
  ];

  const handleConfirmSpendBonuses = () => {
    if (selectedBonus && userBonuses >= selectedBonus.cost) {
      setUserBonuses(userBonuses - selectedBonus.cost);
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          amount: selectedBonus.cost,
          description: selectedBonus.description,
          date: new Date().toLocaleString(),
          code:
            bonusOptions.findIndex((b) => b.cost === selectedBonus.cost) + 1,
        },
      ]);
      setSelectedBonus(null);
      setShowSuccess(true); // Show success modal
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="table-h2">Ваши бонусы: {userBonuses}</h2>
        <div className="row">
          <div className="col">
            <table id="bonus-table" className="table">
              <thead>
                <tr>
                  <th>Бонусы</th>
                  <th>Описание</th>
                </tr>
              </thead>
              <tbody>
                {bonusOptions.map((bonus, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "light-row" : "dark-row"}
                    onClick={() => setSelectedBonus(bonus)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{bonus.cost}</td>
                    <td>{bonus.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              style={{
                backgroundColor: selectedBonus ? "#775da6" : "#ccc", // Gray background if no bonus is selected
                color: "white",
                marginTop: "20px",
              }}
              onClick={() => setShowConfirmation(true)}
              disabled={!selectedBonus} // Disable button if no bonus is selected
            >
              Потратить бонусы
            </button>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationModal
          onClose={() => setShowConfirmation(false)}
          onConfirm={() => {
            handleConfirmSpendBonuses();
            setShowConfirmation(false);
          }}
        />
      )}

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </div>
  );
}

export default YourBonuses;
