// Packages
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
	motion,
	useViewportScroll,
	useSpring,
	useTransform,
	AnimatePresence,
} from 'framer-motion';

// Components
import CitratZyklusGraph from '../components/CitratZyklusGraph'

export default function Home() {
	const color = 'black';
	const [hover, setHover] = useState(false);
  const [title, setTitle] = useState('Der Citrat Zyklus')

	return (
		<>
			<div className='container'>
				<div className='svg'>
					<CitratZyklusGraph hover={hover} setHover={setHover} setTitle={setTitle}/>
				</div>
				{hover && (
						<motion.div
							className='card'
							animate={{
								scale: [0.9, 1.1, 1],
							}}
							transition={{ duration: 0.3 }}
						>
							<h1>{title}</h1>
						</motion.div>
				)}
			</div>
		</>
	);
}
