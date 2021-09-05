import { useEffect, useState } from 'react'

const useNearScreen = ({distance='100px', once=true, refs}) => {

	const [isNearScreen, setIsNearScreen] = useState(false)
	const [elementIntercepted, setElementIntercepted] = useState(null)
	const elementRefs = refs ? refs : null

	useEffect(() =>{
		let observer
		const handleChange = (entries, observer) => {
			entries.forEach(el => {
				if(el.isIntersecting){
					setElementIntercepted(el.target.id)
					setIsNearScreen(true)
					once && observer.disconnect()
				}else{
					!once && setIsNearScreen(false)
				}
			})
		}

		if(elementRefs?.current){
			observer = new IntersectionObserver(handleChange,{rootMargin: distance, threshold: 0.5})
			observer.observe(elementRefs.current)
		}
		else{
			if(elementRefs && elementRefs[0].current){
				elementRefs.forEach(element => {
					observer = new IntersectionObserver(handleChange,{rootMargin: distance, threshold: 0.5})
					if(element) observer.observe(element.current)
				})
			}
		}

		return () => observer && observer.disconnect()
	})


	return {isNearScreen, elementRefs, elementIntercepted}

}

export default useNearScreen
