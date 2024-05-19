import React from "react";
import Tooltip from "../../components/Tooltip";
import BarChart from "../../charts/BarChart02";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard09() {
  const chartData = {
    labels: [
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5",
      "Product 6",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Stack 1",
        data: [62, 92, 66, 88, 52, 92],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Stack 2",
        data: [-40, -26, -53, -40, -75, -20],
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Reviews sentiment
        </h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit.
          </div>
        </Tooltip>
      </header>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default DashboardCard09;
