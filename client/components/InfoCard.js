import {
	motion,
	useViewportScroll,
	useSpring,
	useTransform,
	AnimatePresence,
} from 'framer-motion';

import styles from '../styles/InfoCard.module.css';

import {
	description,
	enzym,
	reaktion,
	reaktionsGleichung,
	produkt,
  inhibitor,
  aktivator
} from '../utils/desc';

const InfoCard = ({ title }) => {
	return (
		<>
			<motion.div
				className='card'
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.3 }}
			>
				<h3 className={styles.heading}>{reaktionsGleichung(title)}</h3>

        <br/>

				<h5 className={styles.heading}>Substrat: {title}</h5>
				<h5 className={styles.heading}>Produkt: {produkt(title)}</h5>

				<br />

				<h5 className={styles.heading}>Enzym: {enzym(title)}</h5>

				<h5 className={styles.heading}>Reaktion: {reaktion(title)}</h5>

        {aktivator(title) && <h5 className={styles.heading}>Aktivator: {inhibitor(title)}</h5>}

        {inhibitor(title) && <h5 className={styles.heading}>Inhibitor: {inhibitor(title)}</h5>}

				<p>{description(title)}</p>
			</motion.div>
		</>
	);
};

export default InfoCard;
