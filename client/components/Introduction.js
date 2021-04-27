import React, {useState} from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function Introduction() {
	const [selectedId, setSelectedId] = useState(null);
	return (
		<div className='textContainer'>
    <div className='leftCard'>
						<motion.div className='textCard'>
							<h1 style={{ color : '#FFFFFF'}}>Was ist der Citratzyklus</h1>
							  <p></p>
						</motion.div>
						<div className='textCard'>
							<h1 style={{ color : '#FFFFFF'}}>Anderes</h1>
							<p></p>
						</div>
					</div>
					<div className='rightCard'>
						<div className='textCard '>
							<h1 style={{ color : '#FFFFFF'}}>Warum ist er wichtig?</h1>
							<p></p>
						</div>
					</div>
		</div>
	);
}

export default Introduction;
