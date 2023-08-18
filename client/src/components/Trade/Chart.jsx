import { useRef, useEffect } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";

export default function Chart({ company }) {
  const chartContainerRef = useRef(null);
  useEffect(() => {
    const formatters = {
      Dollar: function (price) {
        return "$" + price.toFixed(2);
      },
    };
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#ffffff",
        textColor: "#333333",
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },

      leftPriceScale: {
        borderColor: "#888888",
      },
      timeScale: {
        borderColor: "#888888",
        fixRightEdge: true,
        fixLeftEdge: true,
        barSpacing: 6,
      },
      grid: { vertLines: false },
      leftPriceScalePriceScale: {
        autoScale: true,
        scaleMargins: {
          top: 0.2,
          bottom: 0.05,
        },
      },
      handleScale: { axisPressedMouseMove: false },
      handleScroll: { horzTouchDrag: false },
      localization: {
        priceFormatter: formatters["Dollar"],
      },
    });
    const { stockPriceHistory } = company;
    const data = stockPriceHistory.map((price) => ({
      time: price.date,
      value: price.closePrice,
    }));
    const areaSeries = chart.addAreaSeries({
      topColor: "rgba(0, 0, 255, 0.1)",
      bottomColor: "white",
      lineColor: "rgba(0, 0, 255, 0.6)",
    });
    areaSeries.setData(data);
    return () => {
      chart.remove();
    };
  }, [company]);
  return <div ref={chartContainerRef} style={{ width: "100%", height: "400px" }} />;
}
