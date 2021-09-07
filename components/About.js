import { useEffect, useState } from 'react'
import calcularEdad from 'helpers/calcularEdad'
import SkillsIcons from './SkillsIcons'

const About = ({innerRef}) => {

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<section id="about" ref={innerRef} className="about-mf sect-pt4 route">
			<div className="container" >
				<div className="row">
					<div className="col-sm-12">
						<div className="box-shadow-full">
							<div className="row">
								<div className="col-md-6">
									<div className="row" >
										<div className="col-sm-6 col-md-5" style={{'display': 'flex', 'justifyContent': 'center'}}>
											<div className="about-img">
												<img style={{borderRadius:'100% !important'}} src="img/profile.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
											</div>
										</div>
										<div className="col-sm-6 col-md-7">
											<div className="about-info">
												<p><span className="title-s">Nombre: </span> <span>Miguel Angel Lupani</span></p>
												<p><span className="title-s">Fecha de nacimiento: </span> <span>02/08/1992  ({calcularEdad('1992/08/02')} A&ntilde;os)</span></p>
												<p><span className="title-s">Perfil: </span> <span>Desarrollador Full stack</span></p>
												<p><span className="title-s">Estado civil: </span> <span>Casado</span></p>
											</div>
										</div>
									</div>
									<div className="skill-mf">
										<p className="title-s">Skills:</p>
										<br></br>
										{
											isMounted && <SkillsIcons/>
										}
									</div>
								</div>
								<div className="col-md-6">
									<div className="about-me pt-4 pt-md-0">
										<div className="title-box-2">
											<h5 className="title-left">
												Sobre m&iacute;
											</h5>
										</div>
										<p className="lead">
										Hola, soy un desarrollador Full-Stack y vivo en Avellaneda, Buenos Aires, Argentina.<br></br>
										Actualmente me encuentro trabajando en una empresa de comercio exterior y tengo 7 años de experiencia, trabajando en PHP y MySQL.</p>
										<p className="lead">
											Me enfoco principalmente en el desarrollo de aplicaciones Web y m&oacute;viles, de preferencia utilizo Javascript.
											Siempre estoy en busca de retos profesionales, me gusta adquirir experiencia en diversos proyectos y posibilidades de crecimiento.
											Me considero autodidacta y dia a dia dedico tiempo a aprender para ser un mejor profesional en el &aacute;rea.
										</p>
										<p className="lead">
											Tambi&eacute;n entre mis pasatiempos  predomina la programaci&oacute;n ya que disfruto realizando proyectos personales y aprendiendo cosas nuevas.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
