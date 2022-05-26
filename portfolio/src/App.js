import React from 'react';

import { motion } from 'framer-motion';

import './App.css';

function Square({ xAnimation, yAnimation }) {
	return (
		<motion.div
			animate={{ x: xAnimation, y: yAnimation }}
			transition={{
				repeat: Infinity,
				repeatDelay: 1,
				delay: 1,
				x: { type: 'spring', stiffness: 100 },

				default: { duration: 4 },
			}}
			style={{
				backgroundColor: 'red',
				height: '100px',
				width: '100px',
				borderRadius: '50%',
			}}
		></motion.div>
	);
}

function App() {
	return (
		<div className="App">
			<div className="square-container">
				<Square xAnimation={[0, 200, 200, 0]} yAnimation={[0, 200, 200, 0]} />
				<Square xAnimation={[0, -200, -75, 0]} yAnimation={[0, -200, -75, 0]} />
				<Square xAnimation={[0, 300, 25, 0]} yAnimation={[0, 300, 25, 0]} />
				<Square xAnimation={[0, 26, -77, 0]} yAnimation={[0, 26, -77, 0]} />
			</div>
		</div>
	);
}

export default App;
