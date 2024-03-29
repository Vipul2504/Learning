import ChartBar from "./Chartbar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues);
    console.log(totalMaximum);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoints => <ChartBar 
            key={dataPoints.label} 
            value={dataPoints.value} 
            maxValue={totalMaximum} 
            label={dataPoints.label}/>)}
        </div>
    )
}

export default Chart