import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Introduction() {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<div className='textContainer'>
			<div className='leftCard'>
				<motion.div
					className='textCard'
					whileHover={{ scale: 1.05, duration: 1 }}
				>
					<h1>Was ist der Citratzyklus</h1>
					<p>
						Der Citratzyklus ist ein zyklischer Stoffwechselweg
						welcher im Matrixraum der Mitchondrien stattfindet. Hier
						treffen die Abbauwege des Kohlenhydrat-, Protein- und
						Fettstoffwechsels in From von Acetyl-CoA zusammen. Seine
						Hauptaufgabe ist es, Elektronen von Acetylresten zu
						gewinnen in dem er diese Oxidiert. Die Acetylreste
						werden zu CO2 und H2O abgebaut. Dabei werden sowohl für
						den Aufbau organischer Körperbestandteile des Lebewesens
						nutzbare Zwischenprodukte gebildet wie auch Energie in
						Form von 3 NADH/H+, 1 FADH2 und 1 GTP. Die Elektronen
						von NADH/H+ und FADH2 werden in der Atmungskette benötigt.
					</p>
				</motion.div>
				<motion.div
					className='textCard'
					whileHover={{ scale: 1.04, duration: 1 }}
				>
					<h1>Energieausbeute</h1>
					<p></p>
				</motion.div>
			</div>
			<div className='rightCard'>
				<motion.div
					className='textCard '
					whileHover={{ scale: 1.04, duration: 1 }}
				>
					<h1>Rolle im Stoffwechsel</h1>
					<p></p>
				</motion.div>
			</div>
		</div>
	);
}

export default Introduction;
