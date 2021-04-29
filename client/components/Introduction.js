import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Introduction() {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<div className='textContainer'>
			<motion.div
				className='textCard'
				whileHover={{ scale: 1.05, duration: 1 }}
			>
				<h1>Was ist der Citratzyklus</h1>
				<p>
					Der Citratzyklus ist ein zyklischer Stoffwechselweg welcher
					im Matrixraum der{' '}
					<a href='https://de.wikipedia.org/wiki/Mitochondrium' target="_blank">
						Mitchondrien
					</a>{' '}
					stattfindet. Hier treffen die Abbauwege des Kohlenhydrat-,
					Protein- und Fettstoffwechsels in From von{' '}
					<a href='https://de.wikipedia.org/wiki/Acetyl-Coenzym_A' target="_blank">
						Acetyl-CoA
					</a>{' '}
					zusammen. Seine Hauptaufgabe ist es, Elektronen von
					Acetylresten zu gewinnen in dem er diese{' '}
					<a href='https://de.wikipedia.org/wiki/Oxidation' target="_blank">
						Oxidiert
					</a>
					. Die Acetylreste werden zu CO2 und H2O abgebaut. Dabei
					werden sowohl für den Aufbau organischer Körperbestandteile
					des Lebewesens nutzbare Zwischenprodukte gebildet wie auch
					Energie in Form von 3{' '}
					<a href='https://de.wikipedia.org/wiki/Nicotinamidadenindinukleotid' target="_blank">
						NADH/H+
					</a>
					, 1{' '}
					<a href='https://de.wikipedia.org/wiki/Flavin-Adenin-Dinukleotid' target="_blank">
						FADH2
					</a>{' '}
					und 1{' '}
					<a href='https://de.wikipedia.org/wiki/Guanosintriphosphat' target="_blank">
						GTP
					</a>
					. Die Elektronen von NADH/H+ und FADH2 werden in der{' '}
					<a href='https://de.wikipedia.org/wiki/Atmungskette' target="_blank">
						Atmungskette
					</a>{' '}
					benötigt.
				</p>
			</motion.div>
			<motion.div
				className='textCard'
				whileHover={{ scale: 1.04, duration: 1 }}
			>
				<h1>Regulation</h1>
				<p>
					Der Citratzyklus unterliegt starken regulatorischen
					Einflüssen, da er eine zentrale Rolle im{' '}
					<a href='https://de.wikipedia.org/wiki/Aerobie' target="_blank">
						aeroben Metabolismus
					</a>{' '}
					hat. Zwischenverbindungen wie NAD+/NADH, ADP/ATP und Ca2+
					spielen als Effektoren eine große Rolle. Besonders{' '}
					<a href='https://de.wikipedia.org/wiki/Exergone_und_endergone_Reaktion' target="_blank">
						exergone
					</a>{' '}
					Teilschritte werden reguliert.
					<br />
					Darunter die Citrat-Synthese, Ketoglutarat- und Succinyl-
					CoA bildung. Ist viel NADH vorzufinden werden diese
					Teilschritte gehemmt. Dies kann zum Beispiel durch
					Sauerstoffmangel passieren, da die Atmungskette weniger NADH
					verbraucht.
					<br />
					Auch bei hoher{' '}
					<a href='https://de.wikipedia.org/wiki/Adenosintriphosphat' target="_blank">
						ATP-Konzentration
					</a>{' '}
					wird der Zyklus gebremst. Die ATP-Konzentration steigt zum
					Beispiel während des Schlafes, da man weniger Energie
					benötigt. Auch wird der Citrazyklus vom Angebot der
					Substrate und der hemmung durch Rückkopplung reguliert.
				</p>
			</motion.div>
			<motion.div
				className='textCard order2'
				whileHover={{ scale: 1.04, duration: 1 }}
			>
				<h1>Rolle im Stoffwechsel</h1>
				<p>
					Acetyl-CoA ist das Abbauprodukt verschiedener
					Nährstoffklassen. So wird zum Beispiel aus Fettsäuren
					mithilfe der{' '}
					<a href='https://de.wikipedia.org/wiki/%CE%92-Oxidation' target="_blank">
						β-Oxidation
					</a>{' '}
					Acetyl-CoA Moleküle gebildet.
					<br />
					In der{' '}
					<a href='https://de.wikipedia.org/wiki/Glykolyse' target="_blank">
						Glykolyse
					</a>{' '}
					werden Kohlenhydrate zu{' '}
					<a href='https://de.wikipedia.org/wiki/Pyruvate'></a>Pyruvat
					abgebaut, welches dann durch den{' '}
					<a href='https://de.wikipedia.org/wiki/Pyruvatdehydrogenase-Komplex' target="_blank">
						Pyruvatdehydrogenase-Komplex
					</a>{' '}
					Decarboxyliert wird. Es entsteht eine Bindung (
					<a href='https://de.wikipedia.org/wiki/Thioester' target="_blank">
						Thiosterbindung
					</a>
					) zwischen dem{' '}
					<a href='https://de.wikipedia.org/wiki/Acetate' target="_blank">
						Acetatrest
					</a>{' '}
					und dem{' '}
					<a href='https://de.wikipedia.org/wiki/Coenzym_A' target="_blank">
						Coenzym A
					</a>
					.
					<br />
					Auch Proteine werden zu Aminosäuren wie Oxalacetat oder
					α-Ketoglutarat hydrolisiert. Diese{' '}
					<a href='https://de.wikipedia.org/wiki/Ketos%C3%A4uren' target="_blank">
						Ketosäuren
					</a>{' '}
					sind häufig Zwischenprodukte des Citratzyklus und fließen
					direkt darin ein. .
				</p>
			</motion.div>
		</div>
	);
}

export default Introduction;
