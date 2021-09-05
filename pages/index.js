import Head from 'next/head'
import About from 'components/About'
import Header from 'components/Header'
import Hero from 'components/hero'
import Projects from 'components/Projects'
import useMenuActive from 'hooks/useMenuActive'

export default function Home() {

	const { menuActive, references } = useMenuActive()

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
			<Hero innerRef={references[0]} />
			<About innerRef={references[1]} />
			<Projects innerRef={references[2]} />
		</>
	)
}
