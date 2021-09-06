import { useForm } from 'hooks/useForm'

const Contact = ({innerRef}) => {

	const { onChange, form, onSubmit, sendState } = useForm({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

	return (
		<section id="contact" ref={innerRef} className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{'background-image' : 'url(img/overlay-bg.jpg)'}}>
			<div className="overlay-mf"></div>
			<div className="container">
				<div className="row">
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
											<form onSubmit={(e) => onSubmit(e, 'api/hello')} action="#" method="post" role="form" className="php-email-form">
												<div className="row">
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="text" name="name" onChange={(e) => onChange(e.target.value, e.target.name)} className="form-control" id="name" placeholder="Your Name" required />
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="email" className="form-control" name="email" onChange={(e) => onChange(e.target.value, e.target.name)} id="email" placeholder="Your Email" required/>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="text" className="form-control" name="subject" onChange={(e) => onChange(e.target.value, e.target.name)} id="subject" placeholder="Subject" required/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<textarea className="form-control" name="message" onChange={(e) => onChange(e.target.value, e.target.name)} rows="5" placeholder="Message" required></textarea>
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
									<div className="col-md-6">
										<div className="title-box-2 pt-4 pt-md-0">
											<h5 className="title-left">
                        Get in Touch
											</h5>
										</div>
										<div className="more-info">
											<p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
											</p>
											<ul className="list-ico">
												<li><span className="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
												<li><span className="bi bi-phone"></span> (617) 557-0089</li>
												<li><span className="bi bi-envelope"></span> contact@example.com</li>
											</ul>
										</div>
										<div className="socials">
											<ul>
												<li><a href=""><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
												<li><a href=""><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
												<li><a href=""><span className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
												<li><a href=""><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
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
