import { useState, useEffect } from 'preact/hooks';
import { gsap } from 'gsap';

export const Label = (props) => {
	const [yearStart, setStart] = useState(props.yearStart);
	const [yearEnd, setEnd] = useState(props.yearEnd);


	useEffect(() => {
		// Запускаем анимацию при изменении числа
		// const duration = Math.abs(targetNumber - number); // Определяем длительность анимации

		gsap.to({ value: yearStart }, {
		value: props.yearStart,
		duration: 0.3,
		roundProps: "value", // Округляем до целого
		onUpdate: function() {
            setStart(Math.round(this.targets()[0].value)); // Обновляем состояние, округляем
          },
		});

		gsap.to({ value: yearEnd }, {
			value: props.yearEnd,
			duration: 0.3,
			roundProps: "value", // Округляем до целого
			onUpdate: function() {
				setEnd(Math.round(this.targets()[0].value)); // Обновляем состояние, округляем
			  },
			});
	}, [props.yearStart, props.yearEnd]);
	return (<div className={"wrapper__years"}>

		<span className={"blue"}>
			{yearStart}
		</span>
		<span className={"pink"}>
			{yearEnd}
		</span>
	</div>)
}