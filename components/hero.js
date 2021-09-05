import Typed from 'react-typed'

const Hero = ({innerRef}) => {
	return (
		<>
			<div  id="hero" ref={innerRef} className="hero route bg-image" style={{'backgroundImage':'url(img/hero-bg.jpg)'}}>
				<div className="overlay-itro"></div>
				<div className="hero-content display-table">
					<div className="table-cell">
						<div className="container">
							<h1 className="hero-title mb-4">Soy Miguel Angel Lupani</h1>
							<Typed
								strings={[
									'Desarrollador Web',
									'Desarrollador Full-Stack',
									'Creador de soluciones']}
								typeSpeed={70}
								backSpeed={60}
								style={{color:'white', fontSize:'32px',fontWeight:'bold'}}
								loop >
							</Typed>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
