import  * as Highcharts from 'highcharts/highcharts'
import HighchartsReact , { HighchartsReactProps } from 'highcharts-react-official'
import heatmapModule from "highcharts/modules/heatmap";
import { useEffect, useState } from 'react';

heatmapModule(Highcharts)

const options: Highcharts.Options = {
    title: {
      text: 'Highcharts Heatmap',
      style: {
        fontSize: '1em'
      }
    },
    chart: {
      marginTop: 100,
      marginBottom: 80,
      plotBorderWidth: 1
    },
    xAxis: {
      categories: [],
      opposite: true,
    },
    yAxis: {
      categories: [],
      reversed: true,
      title: {
        text: ''
      }
    },
    colorAxis: {
      minColor: '#fcb79b',
      maxColor: Highcharts.getOptions().colors?.[7]
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 10,
      verticalAlign: 'top',
      y: 90,
      symbolHeight: 280
    },
    tooltip: {
      format: '<b>{series.xAxis.categories.(point.x)} <br>' +
          '<b>{point.value} <br>' +
          '<b>{series.yAxis.categories.(point.y)}</b>'
    },
    series: [],
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              yAxis: {
                  labels: {
                      format: '{substr value 0 1}'
                  }
              }
          }
      }]
    }
}

interface HeatmapChartProps extends HighchartsReactProps {
  columns: string[],
  rows: string[],
  data: Array<(Array<number>|Highcharts.PointOptionsObject)>
}

export default function HeatmapChart({rows, columns, data}: HeatmapChartProps) {
  const [opt, setOpt] = useState(options)

  useEffect(() => {
    setOpt((oldState) => {
      return {
        ...oldState, 
        xAxis: { categories: columns},
        yAxis: { categories: rows },
        series: [{ 
          type: 'heatmap',
          dataLabels: {
            enabled: true,
            color: '#000000'
          },
          data: data
        }]
      }
    })
  }, [rows, columns, data])

  return (
      <HighchartsReact 
        highcharts={Highcharts} 
        options={opt}
      />
  )
} 