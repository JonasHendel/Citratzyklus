import React, {useEffect} from 'react';
import { motion } from 'framer-motion';


const CitratZyklusGraph = (props) => {
  
	const showInfoHover = (title) => {
		props.setHover(true);
		props.setTitle(title);
	};
  const showInfoClick = (title) => {
    props.setClick(true)
    props.setTitle(title)
  }

	return (
		<svg className="svg2" xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1000 900">
			{/* Cards */}
			<motion.g
        className="reaktionsSchritt"
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Acetzyl-CoA', );
				}}
				onMouseOver={() => {
					showInfoHover('Acetzyl-CoA');
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
					C2
				</text>
			</motion.g>
			<motion.g
        className="reaktionsSchritt"
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Citrat');
				}}
				onMouseOver={() => {
					showInfoHover('Citrat');
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
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Isocitrat');
				}}
				onMouseOver={() => {
					showInfoHover('Isocitrat');
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
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('α-Ketoglutarat');
				}}
				onMouseOver={() => {
					showInfoHover('α-Ketoglutarat');
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
					C5
				</text>
			</motion.g>
			<motion.g
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Succinly-CoA');
				}}
				onMouseOver={() => {
					showInfoHover('Succinly-CoA');
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
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Succinat');
				}}
				onMouseOver={() => {
					showInfoHover('Succinat');
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
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Fumarat');
				}}
				onMouseOver={() => {
					showInfoHover('Fumarat');
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
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Malat');
				}}
				onMouseOver={() => {
					showInfoHover('Malat');
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
        className="reaktionsSchritt"
				
				animate={{
					scale: [0.9, 1.05, 1],
				}}
				transition={{ duration: 0.5 }}
				onClick={() => {
					showInfoClick('Oxalacetat');
				}}
				onMouseOver={() => {
					showInfoHover('Oxalacetat');
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
          className="arrows"
					id='Lines'
					fill='none'
					strokeLinecap='round'
				>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M456.43,98.3C456,123,457,147,457,172c0,6,3,12,6,17c9,12,23,14,37,12c11-2,18-10,21.65-20.17'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M438.85,207.34C478,201,517,198,556.01,205.1'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M668.57,253.03c24.55,15.99,46.64,35.79,65.06,58.57c5.2,6.43,10.11,13.11,14.69,20'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M793.73,438.7c9.27,40.3,8.27,82.3,1.04,122'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M749.24,669.43C729,701,700,727,668.99,748.68'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M438.8,793.62C480,802,522,803,561.83,794.09'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M254.25,668.58C276,698,300,727,331.42,747.33'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M203.45,443.81C197,483,197,523,206.59,560.91'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M331.58,251.54C300,272,273,300,251.1,330.89'
					/>
				</g>
				<g
					id='Lines'
					fill='none'
					className="arrows"
					strokeLinecap='round'
				>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M456.87,152.67c2.05-10.48,10.64-19.76,21.07-22.28'
					/>
					<motion.path
            
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M823.27,464c0,0-23.1,13.58-23.1,37.29c0,22.24,24.5,33.18,24.5,33.18'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M753.44,706c0,0-25.94-6.73-42.71,10.03c-15.72,15.72-6.13,40.78-6.13,40.78'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M540.5,827.1c0,0-11.36-24.27-34.96-26.5c-22.14-2.08-35.33,21.28-35.33,21.28'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M298.52,758.09c0,0,8.62-25.37-6.87-43.33c-14.53-16.84-40.22-9.11-40.22-9.11'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M213.02,740.08c0,0-5.51,26.22,12.02,42.19c16.44,14.97,41.03,4.22,41.03,4.22'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M232.65,828.26c0,0,8.62-25.37-6.87-43.33c-14.53-16.84-40.22-9.11-40.22-9.11'
					/>
					<motion.path
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						d='M242.84,293.78c0,0,25.15,9.26,43.49-5.77c17.2-14.09,10.13-39.98,10.13-39.98'
					/>
				</g>
				<g className="arrows" strokeMiterlimit='10'>
					<motion.polygon
						
            animate={{
					scale: [0.9, 1.05, 1],
				}}
            transition={{ duration: 0.5 }}
						points='829.97,538.74 822.5,530.2 819.36,534.72  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='705.76,764.19 706.39,752.86 700.99,753.9  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='465.4,827.84 474.46,821.02 470.19,817.56  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='243.84,706.61 255.1,707.97 254.41,702.51  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='273.48,784.63 262.15,784.63 263.48,789.96  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='231.09,832.6 236.43,822.6 231.09,821.26  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='296.03,240.59 294.29,251.79 299.77,251.3  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='523.9,177.29 516.29,185.71 521.15,188.29  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						
						points='560.34,206.09 550.33,200.76 549,206.09  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='748.44,331.87 744.25,321.34 739.78,324.55  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='794.66,561.59 799.09,551.15 793.66,550.29  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='666.48,750.33 677.11,746.38 674,741.84  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='438.62,793.65 448.87,798.49 449.95,793.1  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='253.91,667.83 258.32,678.27 262.72,674.96  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='204.16,439.76 200.11,450.35 205.57,451.01  '
					/>
					<motion.polygon
						
						animate={{
					scale: [0.9, 1.05, 1],
				}}
						transition={{ duration: 0.5 }}
						points='332.38,251.16 321.64,254.78 324.6,259.41  '
					/>
				</g>
				<g>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 482.9703 133.8287)'
						class='st6 st20'
					>
						H₂O
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 508.101 168.831)'
						class='st6 st20'
					>
						HS-CoA
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 837.0292 467.4433)'
						class='st6 st20'
					>
						NAD+
					</text>
					<text transform='matrix(1 0 0 1 842.0292 547.8351)'>
						<tspan x='0' y='0' class='st6 st20'>
							NADH/H+
						</tspan>
						<tspan x='18.84' y='19.2' class='st6 st20'>
							CO₂
						</tspan>
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 764.0198 702.9673)'
					>
						<tspan x='0' y='0' class='st6 st20'>
							NAD+
						</tspan>
						<tspan x='-6.81' y='19.2' class='st6 st20'>
							HS-CoA
						</tspan>
					</text>
					o
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 712.5017 778.9938)'
					>
						<tspan x='0' y='0' class='st6 st20'>
							NADH/H+
						</tspan>
						<tspan x='18.84' y='19.2' class='st6 st20'>
							CO
						</tspan>
						<tspan x='38.6' y='19.2' class='st6 st20'>
							₂
						</tspan>
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 533.9874 847.9673)'
					>
						<tspan x='0' y='0' class='st6 st20'>
							Pi
						</tspan>
						<tspan x='-7.89' y='19.2' class='st6 st20'>
							GDP
						</tspan>
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 446.4539 848.9673)'
					>
						<tspan x='0' y='0' class='st6 st20'>
							GTP
						</tspan>
						<tspan x='-11.47' y='19.2' class='st6 st20'>
							HS-CoA
						</tspan>
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 272.0179 774.7983)'
						class='st6 st20'
					>
						[FAD]
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 196.5842 725.4664)'
					>
						<tspan x='0' y='0' class='st6 st20'>
							[FADH₂]{' '}
						</tspan>
						<tspan x='47.65' y='0' class='st6 st20' />
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 212.9684 854.6769)'
					>
						<tspan x='0' y='0' class='st6 st20'>
							QH
						</tspan>
						<tspan x='21.06' y='0' class='st6 st20'>
							₂
						</tspan>
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 169.2203 783.827)'
						class='st6 st20'
					>
						Q
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 202.84 290.2073)'
						class='st6 st20'
					>
						NAD+
					</text>
					<text
						xmlns='http://www.w3.org/2000/svg'
						transform='matrix(1 0 0 1 247.5739 226.2333)'
						class='st6 st20'
					>
						NAD/H+
					</text>
				</g>
			</g>
		</svg>
	);
};

export default CitratZyklusGraph;
