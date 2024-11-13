// src/components/MorrisChart.js
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "./MorrisChart.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  LineController,
  BarElement,
  BarController,
  DoughnutController,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
} from "chart.js";

// Регистрация необходимых компонентов Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  LineController,
  BarElement,
  BarController,
  DoughnutController,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
);

const MorrisChart = () => {
  const data = {
    labels: [
      "1 час",
      "2 часа ",
      "3 часа",
      "4 часа",
      "5 часов",
      "6 часов",
      "7 часов",
      "8 часов",
      "9 часов",
      "10 часов",
      "11 часов",
    ],
    datasets: [
      {
        label: "Количество телефонов",
        data: [50, 40, 50, 75, 80, 90, 130, 60, 40, 20, 10],
        borderColor: "gray",
        backgroundColor: "#E383EC",
        fill: true,
      },
    ],
  };

  // Настройка опций графика
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Это позволяет графику принимать размер родителя
    elements: {
      point: {
        radius: 4, // Уменьшение радиуса точек
      },
    },
  };

  return (
    <div className="morrisChart">
      {" "}
      {/* Указываем фиксированные размеры для контейнера графика */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default MorrisChart;
