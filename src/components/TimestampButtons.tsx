import './TimestampButtons.css';

export const TimestampButtons = ({ setPrev, setNext, current, setCurrent, total }) => {
    const handlerPrev = () => {
        if (current === 0) {
            setPrev();
            setCurrent(total - 1);
            return;
        }
        setCurrent(current - 1);
        setPrev();
    }
    const handlerNext = () => {
        if (current === total - 1) {
            setNext();
            setCurrent(0);
            return;
        }
        setCurrent(current + 1);
        setNext();
    }
    return (
        <div className={"timestamps"}>
            <div className="counter">{current + 1}/{total}</div>
            <div className={"button-prev"} onClick={handlerPrev}><span>{"<"}</span></div>
            <div className={"button-next"} onClick={handlerNext}><span>{">"}</span></div>
        </div>
    )
}