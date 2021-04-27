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
					<Link href='https://docs.google.com/document/d/1IcOHua0btCcIxDC4L0R1cazdSkjPYELP_toNITxqBjY/edit'>
          <motion.div style={{ display: 'flex', alignItems: 'center', marginTop: 100}} >
            <ArrowRight size={15}/>
						<a style={{ marginLeft: 10 }}>Projektbeschreibung </a>
          </motion.div>
					</Link>
				</div>
				<div className='right'>
					<motion.img
						src='./biology.png'
					></motion.img>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
