import Link from 'next/link'
import Head from 'next/head'
import ReactTooltip from 'react-tooltip'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation,Pagination, Autoplay } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useMenuActive from 'hooks/useMenuActive'
import Header from 'components/Header'
import useDevice from 'hooks/useDevice'

SwiperCore.use([Navigation,Pagination,Autoplay])

const Details = ({data: project}) => {

	const { menuActive, references } = useMenuActive(false)
	const isMobile = useDevice()

	return (
		<>
			<Head>
				<title>&nbsp; Portfolio | Mlupani</title>
				<meta name="description" content="Portfolio Miguel Angel Lupani" />
				<link rel="icon" href="/favicon.ico" />
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
			</Head>
			<Header menuActive={menuActive} references={references}  />
			<br></br><br></br>
			<section id="portfolio-details" className="portfolio-details">
				<div className="row gy-4">
					<div className="col-lg-8">
						<div className="portfolio-details-slider swiper-container">
							<div style={{textAlign: 'center'}} className="swiper-wrapper align-items-center">
								{
									<Swiper
										autoplay={{
											'delay': 4000,
											'disableOnInteraction': false,
										}}
										pagination={{'clickable': true}}
										navigation={false} className="mySwiper">
										{
											project?.screens?.map(img => <SwiperSlide key={img}><img style={{objectFit: 'contain', width: '100%', height: `${isMobile ? '20rem' : '700px'}`}} src={`/img/${img}`} alt="" /></SwiperSlide>)
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
												project.content.technologies.map(({name,icon}) => <span key={icon}><i  style={{fontSize:'30px',margin:'5px'}} data-tip={name} className={`devicon-${icon} colored`}></i>
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

export async function getStaticPaths() {
	try {
		const data = await require('data/projects.json')
		const paths = data.map((val, i) => ({params: {id: `${i}`}}))
		return {
			paths,
			fallback: false
		}
	} catch (error) {
		console.log(error)
	}
}

export async function getStaticProps({params}) {
	try {
		const data = await require('data/projects.json').filter((project, i) => i == params.id)[0]
		return {
			props: {
				data
			}
		}
	} catch (error) {
		console.log(error)
	}
}


export default Details
