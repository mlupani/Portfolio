import { useEffect, useState } from 'react'
import { DetailsIcon, GitHubIcon, WebIcon } from './Icons'
import useDevice from 'hooks/useDevice'

const ProjectCard = ({title, subtitle, content, imgs, index, URL, URL_github}) => {

	const [itemActive, setItemActive] = useState(0)
	const [isMounted, setIsMounted] = useState(false)
	const [intervalo, setIntervalo] = useState<NodeJS.Timeout>()
	const isMobile = useDevice()

	useEffect(() => {
		let int = setInterval(() => {
			setItemActive(prev => prev < imgs.length-1 ? prev + 1 : 0)
		},4000)
		setIntervalo(int)
		return () => {
			clearInterval(int)
		}
	}, [])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<div style={{display: 'flex', justifyContent:'center', flexDirection: 'row'}}>
			<div className="col-md-12" style={{padding: '0px'}}>
				<div className="work-box">
					<div className="row">
						<div className="work-img col-sm-8">
							<div id="carouselExampleIndicators" style={{border:'2px solid lightgray'}} className="carousel slide carousel-fade" data-ride="carousel">
								<ol style={{backgroundColor: 'rgba(1,1,1,0.2)', borderRadius: '5px 5px'}} className="carousel-indicators">
									{
										imgs.map((img,i) => <li key={i} data-target="#carouselExampleIndicators" onClick={() => {setItemActive(i);clearInterval(intervalo)}} data-slide-to="0" className={`${itemActive === i ? 'active':''}`}></li>)
									}
								</ol>
								<div className="carousel-inner">
									{
										imgs.map((img,i) => <div key={img} className={`carousel-item ${itemActive === i ? 'active':''}`}>
											<img style={{objectFit: 'contain', width: '100%', maxHeight: '350px'}} className="d-block w-100 img-fluid" src={`img/${img}`} alt="" />
										</div>)
									}
								</div>
							</div>
						</div>
						{
							!isMobile && isMounted ?
								<div className="work-img col-sm-4" style={{justifyContent: 'center', display:'flex', flexDirection: 'column', paddingTop: '5px'}}>
									{
										<>
											<h6>Implementaciones</h6>
											<ul style={{fontSize:'12px'}}>
												{
													content.implementations.map((imp,i) => i < 3 ? <li key={i}>{imp}</li> : '')
												}
												{
													content.implementations.length > 3 ?
														<li key={'mas'}>Ver m&aacute;s <DetailsIcon width="18" height="18" link={`/details/${index}`} /></li> : ''
												}
											</ul>

											<h6>Funcionalidades</h6>
											<ul style={{fontSize:'12px'}}>
												{
													content.functions.map((func,i) => i < 3 ? <li key={i}>{func}</li> :'')
												}
												{
													content.functions.length > 3 ?
														<li >Ver m&aacute;s <DetailsIcon width="18" height="18" link={`/details/${index}`} /></li> : ''
												}
											</ul>

											<h6>Tecnologias</h6>
											<ul style={{fontSize:'12px',display:'flex', flexDirection:'row',paddingLeft:'0px'}}>
												{
													content.technologies.map(({name,icon}) => <span key={icon}><i  style={{fontSize:'30px',margin:'5px'}} data-tip={name} className={`devicon-${icon} colored`}></i></span>)
												}
											</ul>
										</>
									}
								</div> : ''
						}
					</div>
					<div className="work-content" style={{textAlign: 'justify'}}>
						<div className="row" style={{paddingTop:'5px'}}>
							<div className="col-sm-6">
								<h2 className="w-title">{title}</h2>
								<div className="w-more">
									{
										subtitle
									}
								</div>
							</div>
							{
								isMounted &&
									<div className="col-sm-6" style={{paddingRight: '5px',paddingLeft: '0px'}}>
										<div className="w-like" style={{display: 'flex', justifyContent: 'flex-end', columnGap: '10px'}}>
											<WebIcon link={URL} />
											<GitHubIcon link={URL_github} />
											<DetailsIcon link={`/details/${index}`} />
										</div>
									</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
