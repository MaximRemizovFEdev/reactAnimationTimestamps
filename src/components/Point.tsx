import { useRef } from 'preact/hooks';
import "./point.css";

export const Point = ({ style, num, isActive, onClick }) => {
	const pointRef = useRef(null);

	return (
		<div className={`point ${isActive ? 'active' : ''}`} style={style} onClick={() => onClick(pointRef)}>
			<span ref={pointRef}>{num}</span>
		</div>
	)
}