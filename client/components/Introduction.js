import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function Introduction() {
	const [selectedId, setSelectedId] = useState(null);
	return (
		<div className='textContainer'>
			<div className='leftCard'>
				<motion.div className='textCard'whileHover={{scale: 1.04, duration: 1}}>
					<h1>
						Was ist der Citratzyklus
					</h1>
					<p></p>
				</motion.div>
				<motion.div className='textCard' whileHover={{scale: 1.04, duration: 1}}>
					<h1>Anderes</h1>
					<p></p>
				</motion.div>
			</div>
			<div className='rightCard'>
				<motion.div className='textCard ' whileHover={{scale: 1.04, duration: 1}}>
					<h1>Warum ist er wichtig?</h1>
					<p></p>
				</motion.div>
			</div>
		</div>
	);
}

export default Introduction;
