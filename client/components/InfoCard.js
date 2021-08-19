import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import styles from '../styles/InfoCard.module.css';

import { description, enzym, reaktion, reaktionsGleichung, produkt, inhibitor, aktivator } from '../utils/desc';

const InfoCard = ({ title }) => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			scale: [1, 1.03, 1],
		});
	}, [title]);

	return (
		<>
			<motion.div className='card' animate={controls} transition={{ duration: 0.3 }}>
				<h3 className={styles.heading}>{reaktionsGleichung(title)}</h3>

				<br />
				<div className={styles.infoDiv}>
					{!title && (
						<div className={styles.noTitle}>
							<h1>Citratzyklus</h1>
							<p>Bewegen Sie den Mauszeiger über den Reaktionsschritt für mehr Informationen</p>
							<h3>Jonas Hendel</h3>
						</div>
					)}
					{title && (
						<div className={styles.infoText}>
							<h5 className={styles.heading}>ENZYM:</h5>
							<p>{enzym(title)}</p>
						</div>
					)}
					{title && (
						<div className={styles.infoText}>
							<h5 className={styles.heading}>REAKTION: </h5>
							<p>{reaktion(title)}</p>
						</div>
					)}
					{aktivator(title) && (
						<div className={styles.infoText}>
							<h5 className={styles.heading}>AKTIVATOR: </h5>
							<p>{aktivator(title)}</p>
						</div>
					)}
					{aktivator(title) && (
						<div className={styles.infoText}>
							<h5 className={styles.heading}>INHIBITOR: </h5>
							<p>{inhibitor(title)}</p>
						</div>
					)}
				</div>

				<p className={styles.description} style={{ fontSize: 14 }}>
					{description(title)}
				</p>
			</motion.div>
		</>
	);
};

export default InfoCard;
