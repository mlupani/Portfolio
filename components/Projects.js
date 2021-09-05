import ProjectCard from './ProjectCard'
import projects from 'data/projects.json'

const Projects = ({innerRef}) => {

	return (
		<section id="projects" ref={innerRef} className="portfolio-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-box text-center">
							<h3 className="title-a">
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
						projects.map(({title, subtitle, content, screens}) => <ProjectCard key={title} title={title} subtitle={subtitle} content={content} imgs={screens} />)
					}
				</div>
			</div>
		</section>
	)
}

export default Projects
