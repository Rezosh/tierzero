"use client";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export default function ApexChart({ series }: { series: any }) {
  const options: ApexOptions = {
    chart: {
      height: 380,
      width: "100%",
      type: "area",
      zoom: {
        autoScaleYaxis: true,
      },
    },

    colors: ["rgb(234,91,20)"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["rgb(234,91,20)"],

        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    noData: {
      text: "You have no MMR data to display",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#a1a1aa",
        fontSize: "1em",
        fontFamily: "Inter, sans-serif",
      },
    },
    tooltip: {
      x: {
        format: "yyyy-mm-dd HH:mm:ss",
      },
      theme: "dark",
    },
    grid: {
      borderColor: "rgba(113,113,122,0.3)",
      strokeDashArray: 5,
    },

    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: ["rgba(234,91,20)"],
      width: 2,
      dashArray: 0,
    },

    xaxis: {
      type: "datetime",

      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
        style: {
          colors: "#a1a1aa",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#a1a1aa"],
        },
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" />
        </div>
      </div>
    </div>
  );
}
