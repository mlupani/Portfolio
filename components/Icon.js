const Icon = ({className, width=16, height=16, action}) => {
	return (
		<i onClick={action} className="mobile-nav-toggle">
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className={className} viewBox="0 0 16 16">
				<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
			</svg></i>
	)
}

export default Icon
