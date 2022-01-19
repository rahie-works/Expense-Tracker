import React from 'react';
import '../../css/Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {

    const allValues = props.chartData.map(values => values.value)
    const maxAmountValue = Math.max(...allValues)

    return (
        <div className='chart'>
            {props.chartData.map((dataPoints) => (
                <ChartBar
                key={dataPoints.label}
                value={dataPoints.value}
                maxValue={maxAmountValue}
                label={dataPoints.label}
                />
            ))}

        </div>
    )
}

export default Chart; 