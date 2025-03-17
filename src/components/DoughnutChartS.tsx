import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import styles from "./DoughnutChartS.module.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export type DoughnutChartSType = {
  className?: string;
  data?: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
  title?: string;
};

const DoughnutChartS: FunctionComponent<DoughnutChartSType> = ({
  className = "",
  data,
  options,
  title = "Distribution Chart",
}: {
  className?: string;
  data?: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
  title?: string;
}) => {
  // Default chart data if not provided
  const defaultData: ChartData<"doughnut"> = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"],
    datasets: [
      {
        label: "Dataset",
        data: [12, 19, 8, 15, 10, 7],
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Green
          "#9966FF", // Purple
          "#FF9F40", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Default chart options if not provided
  const defaultOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "Poppins",
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          family: "Poppins",
          size: 12,
          weight: "500",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: "60%",
  };

  // Use provided data/options or fallback to defaults
  const chartData = data || defaultData;
  const chartOptions = options || defaultOptions;

  return (
    <Box className={[styles.doughnutChartS, className].join(" ")}>
      <Box className={styles.barchartS}>
        <Doughnut data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default DoughnutChartS;