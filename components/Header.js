import Link from 'next/link'
import useHeaderMenu from 'hooks/useHeaderMenu'
import { useRouter } from 'next/router'
import { CloseIcon, MenuIcon } from './Icons'
import styles from 'styles/Header.module.css'

const Header = ({menuActive, references}) => {

	const router = useRouter()
	const { headerScroll, isMobile, showMobileMenu, handleScroll, handleMobileMenu } = useHeaderMenu()

	return (
		<header id="header" className={`fixed-top ${headerScroll || router?.pathname === '/details' ? 'header-scrolled':''}`}>
			<div className="container d-flex align-items-center justify-content-between">

				<h1 className="logo"><Link href="/"><a>Portfolio</a></Link></h1>

				<button onClick={() => window.open('Curriculum.pdf','_blank')} type="button" className={`btn btn-dark ${styles.buttonCV}`}>Descargar CV</button>

				<nav id="navbar" className={`navbar ${isMobile && showMobileMenu ? 'navbar-mobile':''}`}>
					{
						router?.pathname !== '/details' ?
							<ul>
								<li><a onClick={(e) => handleScroll(e, references[0].current)} href="#" className={`nav-link scrollto ${menuActive === references[0].current.id ? 'active':''} `} >Inicio</a></li>
								<li><a onClick={(e) => handleScroll(e, references[1].current)} href="#" className={`nav-link scrollto ${menuActive === references[1].current.id ? 'active':''}`} >Sobre m&iacute;</a></li>
								<li><a onClick={(e) => handleScroll(e, references[2].current)} href="#" className={`nav-link scrollto ${menuActive === references[2].current.id ? 'active':''}`} >Proyectos</a></li>
								<li><a onClick={(e) => handleScroll(e, references[3].current)} href="#" className={`nav-link scrollto ${menuActive === references[3].current.id ? 'active':''}`} >Contacto</a></li></ul> :
							<ul>
								<li><Link href="/"><a className={'nav-link scrollto'} >Inicio</a></Link></li>
								<li><Link href={{pathname: '/', query: { option: 'about'}}}><a className={'nav-link scrollto'} >Sobre m&iacute;</a></Link></li>
								<li><Link href={{pathname: '/', query: { option: 'projects'}}}><a className={'nav-link scrollto'} >Proyectos</a></Link></li>
								<li><Link href={{pathname: '/', query: { option: 'contact'}}}><a className={'nav-link scrollto'} >Contacto</a></Link></li>
							</ul>
					}
					{
						!showMobileMenu ?
							<MenuIcon action={handleMobileMenu} />:
							<CloseIcon action={handleMobileMenu} width="16" height="16" />
					}
				</nav>

			</div>
		</header>
	)
}

export default Header
