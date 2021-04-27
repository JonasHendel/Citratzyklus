// Packages
import Head from 'next/head';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Components
import CitratZyklusGraph from '../components/CitratZyklusGraph';
import InfoCard from '../components/InfoCard';
import Introduction from '../components/Introduction';
import Welcome from '../components/Welcome';

export default function Home() {
	const color = 'black';
	const [hover, setHover] = useState(false);
	const [click, setClick] = useState(false);
	const [title, setTitle] = useState();

	return (
		<>
			<div className='container'>
        <Welcome/>
        <Introduction/>
				<div className='graphContainer'>
					<div className='svg'>
						<CitratZyklusGraph
							hover={hover}
							setHover={setHover}
							setClick={setClick}
							setTitle={setTitle}
						/>
					</div>
					<InfoCard title={title} />
				</div>
			</div>
		</>
	);
}
