import { useForm } from 'hooks/useForm'
import { LinkedinIcon, WhatsappIcon } from './Icons'
import Link from 'next/link'

const Contact = ({innerRef}) => {

	const { onChange, form, onSubmit, sendState } = useForm({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

	return (
		<section id="contact" ref={innerRef} className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{'backgroundImage' : 'url(img/overlay-bg.jpg)'}}>
			<div className="overlay-mf" ></div>
			<div className="container" >
				<div className="row" >
					<div className="col-sm-12">
						<div className="contact-mf">
							<div id="contact" className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="title-box-2">
											<h5 className="title-left">
												Env&iacute;ame tu consulta
											</h5>
										</div>
										<div>
											<form  onSubmit={(e) => onSubmit(e, 'api/send-mail')} action="#" method="post" role="form" className="php-email-form">
												<div className="row">
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="text" name="name" onChange={(e) => onChange(e.target.value, e.target.name)} className="form-control" id="name" placeholder="Nombre" required />
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="email" className="form-control" name="email" onChange={(e) => onChange(e.target.value, e.target.name)} id="email" placeholder="Email" required/>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="text" className="form-control" name="subject" onChange={(e) => onChange(e.target.value, e.target.name)} id="subject" placeholder="Asunto" required/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<textarea className="form-control" name="message" onChange={(e) => onChange(e.target.value, e.target.name)} rows="5" placeholder="Mensaje" required></textarea>
														</div>
													</div>
													<div className="col-md-12 text-center my-3">
														{
															sendState === 1 ?
																<div className="loading">Enviando...</div>
																: sendState === 3 ?
																	<div className="error-message">Hubo un error al enviar su consulta</div>
																	: sendState === 2 ?
																		<div className="sent-message">Su consulta ha sido enviada, Muchas gracias</div>
																		: ''
														}
													</div>
													{
														!sendState &&
															<div className="col-md-12 text-center">
																<button type="submit" className="button button-a button-big button-rouded">Enviar</button>
															</div>
													}
												</div>
											</form>
										</div>
									</div>
									<div  className="col-md-6">
										<div className="title-box-2 pt-4 pt-md-0">
											<h5 className="title-left">
                        Ponte en contacto
											</h5>
										</div>
										<div className="more-info">
											<p className="lead">
                        Tambien puedes enviarme tu consulta a trav&eacute;s de Whatsapp y/o Linkedin. <br></br>
						Muchas Gracias.
											</p>
										</div>
										<div className="socials" >
											<ul>
												<li><Link href="https://www.linkedin.com/in/miguel-angel-lupani-5847b720a/"><a target="_blank" ><span className="ico-circle"><LinkedinIcon/></span></a></Link></li>
												<li><Link href="https://api.whatsapp.com/send?phone=5491163717386&text=Hola Miguel Angel Como estas? Quiero hacerte una consulta: "><a target="_blank"><span className="ico-circle"><WhatsappIcon/></span></a></Link></li>
											</ul>
										</div>
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

export default Contact
