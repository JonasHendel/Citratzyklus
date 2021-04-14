// Packages
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
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
  const [click, setClick] = useState(false)
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('Der Citrat Zyklus')

  const mDiv = useRef()

  const handleClick = () => {
    setClick(false)
  }
  
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

	return (
		<>
			<div className='container' ref={mDiv}>
				<div className='svg'>
					<CitratZyklusGraph hover={hover} setHover={setHover} setClick={setClick} setTitle={setTitle}/>
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
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. "</p>
						</motion.div>
				)}
        {click && (
						<motion.div
							className='card'
							animate={{
								scale: [0.9, 1.1, 1],
							}}
							transition={{ duration: 0.3 }}
						>
							<h1>{title}</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. "</p>
						</motion.div>
				)}
			</div>
		</>
	);
}
