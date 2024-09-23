import { useState, useRef, useEffect } from 'preact/hooks';
import { Point } from './Point';
import { gsap } from 'gsap';
import st from "./circle.module.css";

interface ICircle {
    dots: number,
    active: number,
    setCurrent: () => void
}

export const Circle = (props: ICircle) => {
    const circle = st.circle;
    const radius = 250; // Полу-диаметр
    const points = props.dots; // Количество точек
    const angleStep = (2 * Math.PI) / points; // Угол между точками в радианах
    const initialAngle = Math.PI / 4; // Начальный угол (45 градусов)

    const pointsStyle = Array.from({ length: points }, (_, idx) => {
        const angle = initialAngle + idx * angleStep; // Вычисляем угол для каждой точки, с учетом начального угла
        const x = radius + radius * Math.cos(angle); // X координата точки. -3px чтобы точка лежала на границе ровно. Из макета - радиус  точки 6рх
        const y = radius - radius * Math.sin(angle); // Y координата точки (инвертируем Y для корректного положения)
        return { left: `${x}px`, top: `${y}px` }; // Возвращаем стили для каждой точки
    });

    const circleRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(props.active);
    const handlePointClick = (index, pointRef, cb?: (index) => void) => {
        setActiveIndex(index);
        const angle = (index * (360 / points)); // Поворачиваем круг, чтобы активная точка была в верхнем правом секторе
        gsap.to(circleRef.current, {
            rotation: angle,
            duration: 0.5,
            transformOrigin: '50% 50%',
        });
        gsap.to(pointRef.current, {
            rotation: -angle,
            duration: 0.1,
            transformOrigin: '50% 50%',
        });
        cb && cb(index);
    };

    useEffect(() => {
        handlePointClick(props.active, { current: ".point" })
    }, [props.active]);

    return (
        <div className={circle} ref={circleRef}>
            {pointsStyle.map((style, idx) => (
                <Point key={idx} style={style} num={idx + 1} onClick={(pointRef) => handlePointClick(idx, pointRef, props.setCurrent)} isActive={idx === activeIndex} />
            ))}
        </div>
    );
};