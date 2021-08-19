import React from 'react';
import Link from 'next/link';

import { ArrowRight, FileX } from  'phosphor-react'

import { animate, motion } from 'framer-motion';

function Welcome() {
	return (
		<div className='welcomeContainer'>
			<div className='contentArea'>
				<div className='left'>
					<h1>Citratzyklus</h1>
					<h3>Jonas Hendel</h3>
					<a href='https://github.com/JonasHendel/Citratzyklus' target='_blank'>
          <motion.div className="projektBeschreibung" >
            <ArrowRight size={15}/>
						<a style={{ marginLeft: 10 }}>GitHub </a>
          </motion.div>
					</a>
				</div>
				<div className='right'>
					<img
						src='./biology.png'
					></img>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
