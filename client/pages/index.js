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
  const [title, setTitle] = useState()

  const mDiv = useRef()

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (mDiv.current) {
            setTitle();
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [mDiv]);



	return (
		<>
			<div className='container' ref={mDiv}>
        <div className='textCard'>
          <h1>Test</h1>
          <p></p>
        </div>
        <div className='graphContainer'>
          <div className='svg'>
            <CitratZyklusGraph hover={hover} setHover={setHover} setTitle={setTitle}/>
          </div>
          <InfoCard title={title}/>
        </div>
			</div>
		</>
	);
}
