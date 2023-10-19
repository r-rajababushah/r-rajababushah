import './Progress_bar.scss';
const ProgressBar = ({ value, bgColor }) => {
    return (
        <>
            <div className="progress-parent" style={{border: `1px solid ${bgColor}`}}>
                <div className="progress-child" style={{width: value, backgroundColor: bgColor}}>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;