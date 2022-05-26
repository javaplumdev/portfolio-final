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

import { motion } from 'framer-motion';

export default function App() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

	return (
		<ScrollContainer>
			<div style={{ backgroundColor: 'white' }}>
				<ScrollPage page={0}>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
						<div className="text-container">
							<h1 style={{ fontSize: '8em' }}>Heyo.</h1>
							<p style={{ fontSize: '22px' }}>Providing nice websites.</p>
						</div>
						<div className="circle-container">
							<motion.div
								className="circle"
								animate={{ x: [0, 200, 150, 0], y: [0, 200, 200, 0] }}
								transition={{ repeat: Infinity, duration: 5 }}
							></motion.div>
							<motion.div
								className="circle"
								animate={{ x: [0, 26, 20, 0], y: [0, -23, 33, 0] }}
								transition={{ repeat: Infinity, duration: 2 }}
							></motion.div>
							<motion.div
								className="circle"
								animate={{ x: [0, -400, -30, 0], y: [0, 11, 66, 0] }}
								transition={{ repeat: Infinity, duration: 3 }}
							></motion.div>
							<motion.div
								className="circle"
								animate={{ x: [26, 99, 48, 60], y: [70, 200, -88, 82] }}
								transition={{ repeat: Infinity, duration: 4 }}
							></motion.div>
						</div>
					</Animator>
				</ScrollPage>
			</div>
			<div style={{ color: 'white' }}>
				<ScrollPage page={1}>
					<Animator animation={ZoomInScrollOut}>
						<h1
							style={{
								fontSize: '6em',
							}}
						>
							I'm Charlito
						</h1>
						<p>A aspiring frontend developer</p>
					</Animator>
				</ScrollPage>
			</div>

			<ScrollPage page={3}>
				<Animator animation={FadeUp}>
					<span style={{ fontSize: '3.5em', color: '#ffff99' }}>Skills ?</span>
				</Animator>
			</ScrollPage>
			<ScrollPage page={4}>
				<Animator animation={FadeIn}>
					<span style={{ fontSize: '2em', color: 'white' }}>Node Js</span>
				</Animator>
			</ScrollPage>
			<ScrollPage page={5}>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
					<span style={{ fontSize: '1.5em', color: '#db4dff' }}>Express</span>
				</Animator>
			</ScrollPage>
		</ScrollContainer>
	);
}
