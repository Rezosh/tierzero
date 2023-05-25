"use client";

import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
  TimeScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns"; // import adapter
import { useRef } from "react";

Chart.register(
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip,
  zoomPlugin
);

interface DataType {
  date: Date;
  value: number;
}

const LineChart = ({ data }: { data: DataType[] }) => {
  const chartRef = useRef<any>(null);

  // New function for resetting zoom
  const resetZoom = () => {
    if (chartRef.current) {
      const chartInstance = chartRef.current;
      chartInstance.resetZoom && chartInstance.resetZoom();
    }
  };

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "MMR",
        data: data.map((item) => item.value),
        fill: false,
        backgroundColor: "rgb(234,91,20)",
        borderColor: "rgba(234,91,20,0.2)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        type: "time",
        grid: {
          color: "rgba(113,113,122,0.1)",
        },
        time: {
          unit: "day",
        },
      },
      y: {
        grid: {
          color: "rgba(113,113,122,0.1)",
        },
        beginAtZero: false,
      },
    },
    plugins: {
      zoom: {
        zoom: {
          mode: "x",
          drag: {
            enabled: true,
          },
        },
      },
    },

    maintainAspectRatio: false, // added this line
  };
  // TODO: get chart instance and call zoom.reset() on unmount

  return (
    <div className="flex h-[600px] w-full flex-col items-end">
      <button
        className="w-fit rounded-md bg-zinc-800 px-4 py-2"
        onClick={resetZoom}
      >
        Reset Zoom
      </button>
      <Line data={chartData} options={options} ref={chartRef} />
    </div>
  );
};

export default LineChart;
