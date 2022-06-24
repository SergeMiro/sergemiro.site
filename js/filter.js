const filterBox = document.querySelectorAll('.containerOfSites')

document.querySelector('.section__filters').addEventListener('click', (event) => {
	if (event.target.tagName !== 'IMG') return false
	let filterClass = event.target.dataset['f']

	filterBox.forEach((elem) => {
		elem.classList.remove('hide')
		if(!elem.classList.contains(filterClass) && filterClass !== 'clear_filters' && filterClass !== 'clear_filters2'){
			elem.classList.add ('hide')
		}
		
	})
})