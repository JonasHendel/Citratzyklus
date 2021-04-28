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
					im Matrixraum der Mitchondrien stattfindet. Hier treffen die
					Abbauwege des Kohlenhydrat-, Protein- und Fettstoffwechsels
					in From von Acetyl-CoA zusammen. Seine Hauptaufgabe ist es,
					Elektronen von Acetylresten zu gewinnen in dem er diese
					Oxidiert. Die Acetylreste werden zu CO2 und H2O abgebaut.
					Dabei werden sowohl für den Aufbau organischer
					Körperbestandteile des Lebewesens nutzbare Zwischenprodukte
					gebildet wie auch Energie in Form von 3 NADH/H+, 1 FADH2 und
					1 GTP. Die Elektronen von NADH/H+ und FADH2 werden in der
					Atmungskette benötigt.
				</p>
			</motion.div>
			<motion.div
				className='textCard'
				whileHover={{ scale: 1.04, duration: 1 }}
			>
				<h1>Regulation</h1>
				<p>
					Der Citratzyklus unterliegt starken regulatorischen
					Einflüssen, da er eine zentrale Rolle im aeroben
					Metabolismus hat. Zwischenverbindungen wie NAD+/NADH,
					ADP/ATP und Ca2+ spielen als Effektoren eine große Rolle.
					Besonders exergone Teilschritte werden reguliert.
					<br />
					Darunter die Citrat-Synthese, Ketoglutarat- und Succinyl-
					CoA bildung. Ist viel NADH vorzufinden werden diese
					Teilschritte gehemmt. Dies kann zum Beispiel durch
					Sauerstoffmangel passieren, da die Atmungskette weniger NADH
					verbraucht.
					<br />
					Auch bei hoher ATP-Konzentration wird der Zyklus gebremst.
					Die ATP-Konzentration steigt zum Beispiel während des
					Schlafes, da man weniger Energie benötigt. Auch wird der
					Citrazyklus vom Angebot der Substrate und der hemmung durch
					Rückkopplung reguliert.
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
					mithilfe der β-Oxidation Acetyl-CoA Moleküle gebildet.
					<br />
					In der Glykolyse werden Kohlenhydrate zu Pyruvat abgebaut,
					welches dann durch den Pyruvatdehydrogenase-Komplex
					Decarboxyliert wird. Es entsteht eine Bindung
					(Thiosterbindung) zwischen dem Acetatrest und dem Coenzym A.
					<br />
					Auch Proteine werden zu Aminosäuren wie Oxalacetat oder
					α-Ketoglutarat hydrolisiert. Diese Ketosäuren sind häufig
					Intermediate des Citratzyklus und fließen direkt darin ein.
					.
				</p>
			</motion.div>
		</div>
	);
}

export default Introduction;
