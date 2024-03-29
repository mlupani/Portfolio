import ProjectCard from './ProjectCard'
import projects from 'data/projects.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation,Pagination } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useDevice from 'hooks/useDevice'

SwiperCore.use([Navigation,Pagination])

const Projects = ({innerRef}) => {

	const isMobile = useDevice()

	return (
		<section id="projects"  ref={innerRef} className="portfolio-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-box text-center">
							<h3 className="title-a mt-5">
                                Proyectos
							</h3>
							<p className="subtitle-a">
                                Algunos Proyectos que he realizado.
							</p>
							<div className="line-mf"></div>
						</div>
					</div>
				</div>
				<div className="row">
					{
						!isMobile && projects ?
							<Swiper
								pagination={true}
								navigation={true} className="mySwiper">
								{
									projects.map(({title, subtitle, content, screens, URL, URL_github},i) =>  <SwiperSlide key={i}><ProjectCard title={title} subtitle={subtitle} content={content} imgs={screens} index={i} URL={URL} URL_github={URL_github} /></SwiperSlide>)
								}
							</Swiper> :
							projects.map(({title, subtitle, content, screens, URL, URL_github},i) =>  <ProjectCard key={i} title={title} subtitle={subtitle} content={content} imgs={screens} index={i} URL={URL} URL_github={URL_github} />)
					}

				</div>
			</div>
		</section>
	)
}

export default Projects
