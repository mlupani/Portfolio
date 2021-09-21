import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { useRouter } from 'next/router'
import projects from 'data/projects.json'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation,Pagination, Autoplay } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useMenuActive from 'hooks/useMenuActive'
import Header from 'components/Header'

SwiperCore.use([Navigation,Pagination,Autoplay])

const Details = () => {

	const router = useRouter()
	const [project, setProject] = useState(null)
	const { menuActive, references } = useMenuActive(false)

	useEffect(() => {
		let id = router.query.id
		setProject(projects[id])
	}, [router.query.id])

	if(!project) return null

	return (
		<>
			<Header menuActive={menuActive} references={references}  />
			<br></br><br></br>
			<section id="portfolio-details" className="portfolio-details">
				<div className="row gy-4">
					<div className="col-lg-8">
						<div className="portfolio-details-slider swiper-container">
							<div className="swiper-wrapper align-items-center">
								{
									<Swiper
										autoplay={{
											'delay': 4000,
											'disableOnInteraction': false,
										}}
										pagination={{'clickable': true}}
										navigation={true} className="mySwiper">
										{
											project?.screens?.map(img => <SwiperSlide key={img}><img src={`img/${img}`} alt="" /></SwiperSlide>)
										}
									</Swiper>
								}
							</div>
						</div>
					</div>

					{
						project ?
							<div className="col-lg-4">
								<br></br><br></br>
								<h3>{project.content.title}</h3>
								<div className="portfolio-description">
									<ul>
										<li><strong>Categor&iacute;a</strong>: {project?.category} </li>
										<li><Link href={project?.URL}><a target="_blank"><strong><u>Web</u></strong></a></Link></li>
										<li><Link href={project?.URL_github}><a target="_blank"><strong><u>Repositorio</u></strong></a></Link></li>
										{
											project.URL_backend ?
												<li><Link href={project?.URL_backend}><a target="_blank"><strong><u>Backend</u></strong></a></Link></li> : ''
										}
									</ul>
									<p>
										{
											project.content.body
										}
									</p>
									<>
										<h6>Implementaciones</h6>
										<ul style={{fontSize:'12px'}}>
											{
												project.content.implementations.map((imp,i) => <li key={i}>{imp}</li>)
											}
										</ul>

										<h6>Funcionalidades</h6>
										<ul style={{fontSize:'12px'}}>
											{
												project.content.functions.map((func,i) => <li key={i}>{func}</li>)
											}
										</ul>

										<h6>Tecnologias</h6>
										<ul style={{fontSize:'12px',display:'flex', flexDirection:'row',paddingLeft:'0px'}}>
											{
												project.content.technologies.map(({name,icon},i) => <span key={icon}><i  style={{fontSize:'30px',margin:'5px'}} data-tip={name} className={`devicon-${icon} colored`}></i>
													<ReactTooltip /></span>)
											}
										</ul>
									</>
								</div>
							</div> : ''
					}

				</div>
			</section>
		</>
	)
}

export default Details
