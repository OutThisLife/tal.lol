window.onload = () => {
	const $clone = document.querySelector('main').cloneNode(true)
	$clone.id = 'clone'
	document.body.appendChild($clone)

	document.addEventListener('disabled.mousemove', e => {
		const
			f = 0.065,
			x = (-e.pageX / 2) * f,
			y = (-e.pageY / 2) * f

		$clone.style.transform = `translate(${x}px, ${y}px) scaleX(-1)`
	})
}
