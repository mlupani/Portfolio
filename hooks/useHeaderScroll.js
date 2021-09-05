import { useEffect, useState } from 'react'

const useHeaderScroll = () => {

	const [headerScroll,setHeaderScroll] = useState(false)

	useEffect(() => {
		let scroll = window.addEventListener('scroll',() => {
			if(window.scrollY > 100)
				setHeaderScroll(true)
			else
				setHeaderScroll(false)
		})
		return () => {
			window.removeEventListener('scroll',scroll)
		}
	}, [])


	return headerScroll
}

export default useHeaderScroll
