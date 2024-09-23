import { render } from 'preact';
import './style.css';
import { Circle } from './components/Circle';
import { Label } from './components/Label';
import { useState } from 'preact/hooks';
import { Slider } from './components/Slider';
import { TimestampButtons } from './components/TimestampButtons';
import { useEffect } from 'preact/hooks';
import { Icon } from './components/Icon';

const jsonData = {
	timestamps: [
		{
			start: 1991,
			end: 1996,
			content: [
				{
					head: "Заголовок 1",
					text: "Lorem ipsum1"
				},
				{
					head: "Заголовок 2",
					text: "Lorem ipsum2"
				},
				{
					head: "Заголовок 3",
					text: "Lorem ipsum3"
				},
				{
					head: "Заголовок 4",
					text: "Lorem ipsum4"
				},
				{
					head: "Заголовок 5",
					text: "Lorem ipsum5"
				}
			]
		},
		{
			start: 1997,
			end: 2004,
			content: [
				{
					head: "Заголовок 11",
					text: "Lorem ipsum6"
				},
				{
					head: "Заголовок 22",
					text: "Lorem ipsum7"
				},
				{
					head: "Заголовок 3",
					text: "Lorem ipsum8"
				},
				{
					head: "Заголовок 4",
					text: "Lorem ipsum9"
				},
				{
					head: "Заголовок 5",
					text: "Lorem ipsum10"
				}
			]
		},
		{
			start: 2005,
			end: 2009,
			content: [
				{
					head: "Заголовок 1",
					text: "Lorem ipsum11"
				},
				{
					head: "Заголовок 2",
					text: "Lorem ipsum12"
				},
				{
					head: "Заголовок 3",
					text: "Lorem ipsum13"
				},
				{
					head: "Заголовок 4",
					text: "Lorem ipsum14"
				},
				{
					head: "Заголовок 5",
					text: "Lorem ipsum15"
				}
			]
		},
		{
			start: 2010,
			end: 2015,
			content: [
				{
					head: "Заголовок 1",
					text: "Lorem ipsum61"
				},
				{
					head: "Заголовок 21",
					text: "Lorem ipsum71"
				},
				{
					head: "Заголовок 3",
					text: "Lorem ipsum81"
				},
				{
					head: "Заголовок 4",
					text: "Lorem ipsum91"
				},
				{
					head: "Заголовок 5",
					text: "Lorem ipsum101"
				}
			]
		},
		{
			start: 2016,
			end: 2020,
			content: [
				{
					head: "Заголовок 1",
					text: "Lorem ipsum5"
				},
				{
					head: "Заголовок 2",
					text: "Lorem ipsum75"
				},
				{
					head: "Заголовок 3",
					text: "Lorem ipsum85"
				},
				{
					head: "Заголовок 45",
					text: "Lorem ipsum9"
				},
				{
					head: "Заголовок 5",
					text: "Lorem ipsum105"
				}
			]
		},
		{
			start: 2021,
			end: 2024,
			content: [
				{
					head: "Заголовок 9",
					text: "Lorem ipsum6"
				},
				{
					head: "Заголовок 29",
					text: "Lorem ipsum7"
				},
				{
					head: "Заголовок 39",
					text: "Lorem ipsum8"
				},
				{
					head: "Заголовок 49",
					text: "Lorem ipsum99"
				},
				{
					head: "Заголовок 95",
					text: "Lorem ipsum109"
				}
			]
		},
	]
}

const LinerWrapper = (props) => {
	return (
		<>
			<div className={"line_horizontal"}></div>
			<div className={"line_vertical"}></div>
			{props.children}
		</>
	)
}



export function App() {
	const data = jsonData.timestamps;
	const [prev, setPrev] = useState(1999);
	const [next, setNext] = useState(1999);
	const [current, setCurrent] = useState(0);
	const [slides, setSlides] = useState([]);

	useEffect(() => {
		const curObj = data[current]
		setPrev(curObj.start)
		setNext(curObj.end)
	}, [])

	useEffect(() => {
		setSlides(data[current].content);
	}, [current])

	const setDataHandler = () => {
		const curObj = data[current]
		setPrev(curObj.start)
		setNext(curObj.end)
	}

	return (
		<main>
			<div className={"component__wrapper"}>
				<Icon />
				<div class={"line"}>
					<LinerWrapper>
						<Circle dots={data.length} active={current} setCurrent={setCurrent}/>
						<Label yearStart={prev} yearEnd={next} />
					</LinerWrapper>
				</div>
				<TimestampButtons setPrev={setDataHandler} setNext={setDataHandler} current={current} setCurrent={setCurrent} total={data.length} />
				<Slider data={slides}/>
			</div>
		</main>
	);
}

render(<App />, document.getElementById('app'));
