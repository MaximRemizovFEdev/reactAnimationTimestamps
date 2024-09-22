import { useRef } from 'preact/hooks';
import "./point.css";

export const Point = ({ style, num, isActive, onClick }) => {
	// const [isActive, setActive] = useState(false);
    const pointRef = useRef(null);
	// useEffect(() => {
	// 	if (num === 1) setActive(true);
	// }, []);

	return (
		<div className={`point ${isActive ? 'active' : ''}`} style={style} onClick={() => onClick(pointRef)}>
			<span ref={pointRef}>{num}</span>
		</div>
	)
}