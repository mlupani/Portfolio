import { useEffect, useRef, useState } from 'react'
import useNearScreen from './useNearScreen'

const useMenuActive = () => {

	const [isLoading, setIsLoading] = useState(true)
	const references = new Array(useRef('hero'),useRef('about'),useRef('proyects'),useRef('contact'))
	const { isNearScreen, elementIntercepted } = useNearScreen({distance: '0px', once:true, refs: isLoading ? null : references})
	const [menuActive, setMenuActive] = useState('hero')

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
