import { motion } from 'framer-motion';

function MotionCircles() {
	return (
		<>
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
		</>
	);
}

export default MotionCircles;
