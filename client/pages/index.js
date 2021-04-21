// Packages
import Head from 'next/head';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

// Components
import CitratZyklusGraph from '../components/CitratZyklusGraph'
import InfoCard from '../components/InfoCard'

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
  

	return (
		<>
			<div className='container' ref={mDiv}>
				<div className='svg'>
					<CitratZyklusGraph hover={hover} setHover={setHover} setClick={setClick} setTitle={setTitle}/>
				</div>
				{hover && (
						<InfoCard title={title}/>
				)}
        {click && (
						<InfoCard title={title}/>
				)}
			</div>
		</>
	);
}
