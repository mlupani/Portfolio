import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import useHeaderMenu from './useHeaderMenu'
import useNearScreen from './useNearScreen'

const useMenuActive = (refs = true) => {

	const router = useRouter()
	const [isLoading, setIsLoading] = useState(true)
	const references = refs ? new Array(useRef('hero'),useRef('about'),useRef('proyects'),useRef('contact')) : null
	const { isNearScreen, elementIntercepted } = useNearScreen({distance: '-100px', once:true, refs: isLoading ? null : references})
	const [menuActive, setMenuActive] = useState('hero')
	const { handleScroll } = useHeaderMenu()

	useEffect(() => {
		if(router.query.option){
			handleScroll('', document.querySelector(`#${router.query.option}`))
		}
	}, [])

	useEffect(() => {
		setIsLoading(false)
	}, [])

	useEffect(() => {
		if(isNearScreen){
			setMenuActive(elementIntercepted)
		}
	},[elementIntercepted])

	return {
		menuActive,
		references,
	}
}

export default useMenuActive
