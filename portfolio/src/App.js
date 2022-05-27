import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveOut,
	Sticky,
	StickyIn,
	ZoomIn,
} from 'react-scroll-motion';

import MotionCircles from './components/MotionCircles';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function App() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const variants = {
		default: {
			y: mousePosition.y - 16,
			x: mousePosition.x - 16,
		},
		text: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			backgroundColor: 'purple',
		},
	};

	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect(() => {
		function mouseMove(e) {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		}

		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const textEnter = () => setCursorVariant('text');
	const textLeave = () => setCursorVariant('default');

	return (
		<ScrollContainer>
			<motion.div
				variants={variants}
				animate={cursorVariant}
				className="cursor"
			></motion.div>
			<div style={{ backgroundColor: 'white' }}>
				<ScrollPage page={0}>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
						<div className="text-container">
							<h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
								Heyo.
							</h1>
							<p
								onMouseEnter={textEnter}
								onMouseLeave={textLeave}
								style={{ fontSize: '22px' }}
							>
								Providing nice websites.
							</p>
						</div>
						<div className="circle-container">
							<MotionCircles />
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '4em',
							}}
						>
							<motion.div className="mouse"></motion.div>
							<motion.div
								initial={{ y: 10 }}
								animate={{ y: 25, opacity: 0.1 }}
								transition={{ duration: 1, repeat: Infinity }}
								className="wheel"
							></motion.div>
						</div>
						<motion.p
							initial={{ opacity: 1 }}
							animate={{ opacity: 0.1 }}
							transition={{ duration: 1, repeat: Infinity }}
							style={{
								textAlign: 'center',
								fontSize: '1.2em',
								marginTop: '1em',
							}}
						>
							Scroll down
						</motion.p>
					</Animator>
				</ScrollPage>
			</div>
			<div style={{ color: 'white' }}>
				<ScrollPage page={1}>
					<Animator animation={ZoomInScrollOut}>
						{/* <h1
							onMouseEnter={textEnter}
							onMouseLeave={textLeave}
							style={{
								fontSize: '6em',
							}}
						>
							I'm Charlito
						</h1> */}
						{/* <p>A aspiring frontend developer</p> */}
					</Animator>
				</ScrollPage>
			</div>
		</ScrollContainer>
	);
}
