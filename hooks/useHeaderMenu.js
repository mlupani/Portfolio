import { useEffect, useState } from 'react'
import useDevice from './useDevice'
import useHeaderScroll from './useHeaderScroll'

const useHeaderMenu = () => {

	const headerScroll = useHeaderScroll()
	const isMobile = useDevice()
	const [showMobileMenu, setShowMobileMenu] = useState(!isMobile)

	useEffect(() => {
		if(isMobile) setShowMobileMenu(false)
		else setShowMobileMenu(true)
	}, [isMobile])

	const handleScroll = (e, to) => {
		if(e)	e.preventDefault()
		setShowMobileMenu(false)
		to?.scrollIntoView({block: 'start', behavior: 'smooth'})
	}

	const handleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu)
	}

	return {
		headerScroll,
		isMobile,
		handleScroll,
		handleMobileMenu,
		showMobileMenu,
	}
}

export default useHeaderMenu
