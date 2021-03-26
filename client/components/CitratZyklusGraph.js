import React from 'react';
import { motion } from 'framer-motion';

const CitratZyklusGraph = (props) => {
	const showInfo = (title) => {
		props.setHover(true);
		props.setTitle(title);
	};

	return (
		<svg width='1000' height='1000' xmlns='http://www.w3.org/2000/svg'>
			{/* Cards */}
			<motion.g
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Acetzyl-CoA');
				}}
				onMouseOver={() => {
					showInfo('Acetzyl-CoA');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M426.43,5h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10V15   C416.43,9.48,420.91,5,426.43,5z'
				/>
				<path
					className='st12'
					d='M436.43,45V21c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C440.02,53,436.43,49.42,436.43,45z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 427.2507 72.5203)'
				>
					Acetyl-CoA
				</text>
				<rect
					className='st15'
					x='444.23'
					y='21'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 444.2312 40.0868)'
				>
					C4
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -1 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Citrat');
				}}
				onMouseOver={() => {
					showInfo('Citrat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M584.8,182.8h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C574.8,187.27,579.28,182.8,584.8,182.8z'
				/>
				<path
					className='st12'
					d='M594.8,222.79v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C598.38,230.79,594.8,227.21,594.8,222.79z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 598.3844 250.3167)'
				>
					Citrat
				</text>
				<rect
					className='st15'
					x='602.6'
					y='198.79'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 602.5969 217.8831)'
				>
					C6
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -2 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Isocitrat');
				}}
				onMouseOver={() => {
					showInfo('Isocitrat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M747.1,345.2h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C737.1,349.67,741.58,345.2,747.1,345.2z'
				/>
				<path
					className='st12'
					d='M757.1,385.19v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C760.68,393.19,757.1,389.61,757.1,385.19z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 753.1302 411.7168)'
				>
					Isocitrat
				</text>
				<rect
					className='st15'
					x='764.9'
					y='361.19'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 764.8969 380.2832)'
				>
					C6
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -4 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('α-Ketoglutarat');
				}}
				onMouseOver={() => {
					showInfo('α-Ketoglutarat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M747.1,574.8h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C737.1,579.27,741.58,574.8,747.1,574.8z'
				/>
				<path
					className='st12'
					d='M757.1,614.79v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C760.68,622.79,757.1,619.21,757.1,614.79z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 739.5082 642.3168)'
				>
					α-Ketoglutarat
				</text>
				<rect
					className='st15'
					x='764.9'
					y='590.79'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 764.8969 609.8832)'
				>
					C4
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -5 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Succinly-CoA');
				}}
				onMouseOver={() => {
					showInfo('Succinly-CoA');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M584.8,737.16h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C574.8,741.63,579.28,737.16,584.8,737.16z'
				/>
				<path
					className='st12'
					d='M594.8,777.15v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C598.38,785.15,594.8,781.57,594.8,777.15z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 580.0903 804.6768)'
				>
					Succinly-CoA
				</text>
				<rect
					className='st15'
					x='602.6'
					y='753.15'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 602.5969 772.2432)'
				>
					C4
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -6 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Succinat');
				}}
				onMouseOver={() => {
					showInfo('Succinat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M355.2,737.16h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C345.2,741.64,349.68,737.16,355.2,737.16z'
				/>
				<path
					className='st12'
					d='M365.2,777.16v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C368.78,785.16,365.2,781.58,365.2,777.16z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 361.8964 802.5798)'
				>
					Succinat
				</text>
				<rect
					className='st15'
					x='373'
					y='753.16'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 372.9968 772.2467)'
				>
					C4
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -7 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Fumarat');
				}}
				onMouseOver={() => {
					showInfo('Fumarat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M192.84,574.79h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C182.84,579.27,187.32,574.79,192.84,574.79z'
				/>
				<path
					className='st12'
					d='M202.84,614.79v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C206.42,622.79,202.84,619.21,202.84,614.79z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 201.0602 642.3139)'
				>
					Fumarat
				</text>
				<rect
					className='st15'
					x='210.64'
					y='590.79'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 210.6369 609.8802)'
				>
					C4
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -8 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Malat');
				}}
				onMouseOver={() => {
					showInfo('Malat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M192.84,345.19h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C182.84,349.67,187.32,345.19,192.84,345.19z'
				/>
				<path
					className='st12'
					d='M202.84,385.19v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C206.42,393.19,202.84,389.61,202.84,385.19z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 207.4862 412.7139)'
				>
					Malat
				</text>
				<rect
					className='st15'
					x='210.64'
					y='361.19'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 210.6369 380.2803)'
				>
					C4
				</text>
			</motion.g>
			<motion.g
				initial={{ opacity: -9 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				onClick={() => {
					showInfo('Oxalacetat');
				}}
				onMouseOver={() => {
					showInfo('Oxalaextat');
				}}
				onMouseLeave={() => props.setHover(false)}
			>
				<path
					className='st11'
					d='M355.2,182.79h60c5.52,0,10,4.48,10,10v60c0,5.52-4.48,10-10,10h-60c-5.52,0-10-4.48-10-10v-60   C345.2,187.27,349.68,182.79,355.2,182.79z'
				/>
				<path
					className='st12'
					d='M365.2,222.79v-24c0-4.42,3.58-8,8-8h24c4.42,0,8,3.58,8,8v24c0,4.42-3.58,8-8,8h-24   C368.78,230.79,365.2,227.21,365.2,222.79z'
				/>
				<text
					className='st13 st6 st14'
					transform='matrix(1 0 0 1 356.1545 250.3139)'
				>
					Oxalacetat
				</text>
				<rect
					className='st15'
					x='373'
					y='198.79'
					width='24.41'
					height='24'
				/>
				<text
					className='st13 st6 st10'
					transform='matrix(1 0 0 1 372.9968 217.8802)'
				>
					C4
				</text>
			</motion.g>
			{/* Arrows */}
			<g xmlns='http://www.w3.org/2000/svg' id='Circle_Arrows'>
				<g
					id='Lines'
					fill='none'
					stroke='black'
					strokeWidth='4px'
					strokeLinecap='round'
				>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M456.43,98.3C456,123,457,147,457,172c0,6,3,12,6,17c9,12,23,14,37,12c11-2,18-10,21.65-20.17'
					/>
					<motion.path
						initial={{ opacity: -1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M438.85,207.34C478,201,517,198,556.01,205.1'
					/>
					<motion.path
						initial={{ opacity: -2 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M668.57,253.03c24.55,15.99,46.64,35.79,65.06,58.57c5.2,6.43,10.11,13.11,14.69,20'
					/>
					<motion.path
						initial={{ opacity: -3 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M793.73,438.7c9.27,40.3,8.27,82.3,1.04,122'
					/>
					<motion.path
						initial={{ opacity: -4 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M749.24,669.43C729,701,700,727,668.99,748.68'
					/>
					<motion.path
						initial={{ opacity: -5 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M438.8,793.62C480,802,522,803,561.83,794.09'
					/>
					<motion.path
						initial={{ opacity: -6 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M254.25,668.58C276,698,300,727,331.42,747.33'
					/>
					<motion.path
						initial={{ opacity: -7 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M203.45,443.81C197,483,197,523,206.59,560.91'
					/>
					<motion.path
						initial={{ opacity: -8 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st17'
						d='M331.58,251.54C300,272,273,300,251.1,330.89'
					/>
				</g>
				<g stroke='black' strokeWidth='4px' strokeMiterlimit='10'>
					<motion.polygon
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='523.9,177.29 516.29,185.71 521.15,188.29  '
					/>
					<motion.polygon
						initial={{ opacity: -1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='560.34,206.09 550.33,200.76 549,206.09  '
					/>
					<motion.polygon
						initial={{ opacity: -2 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='748.44,331.87 744.25,321.34 739.78,324.55  '
					/>
					<motion.polygon
						initial={{ opacity: -3 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='794.66,561.59 799.09,551.15 793.66,550.29  '
					/>
					<motion.polygon
						initial={{ opacity: -4 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='666.48,750.33 677.11,746.38 674,741.84  '
					/>
					<motion.polygon
						initial={{ opacity: -5 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='438.62,793.65 448.87,798.49 449.95,793.1  '
					/>
					<motion.polygon
						initial={{ opacity: -6 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='253.91,667.83 258.32,678.27 262.72,674.96  '
					/>
					<motion.polygon
						initial={{ opacity: -7 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='204.16,439.76 200.11,450.35 205.57,451.01  '
					/>
					<motion.polygon
						initial={{ opacity: -8 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						class='st18'
						points='332.38,251.16 321.64,254.78 324.6,259.41  '
					/>
				</g>
			</g>
		</svg>
	);
};

export default CitratZyklusGraph;
