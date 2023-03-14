import './Chartbar.css'

const ChartBar = (props) => {
    let barFillHieght = '0%';

    if(props.maxValue > 0){
        barFillHieght = Math.random((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar_-fill' style={{height:barFillHieght}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;