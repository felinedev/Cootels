document.querySelectorAll('.fq-up').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('fq-items--active')) {
			parent.classList.remove('fq-items--active');
		} else {
			document
				.querySelectorAll('.fq-item')
				.forEach((child) => child.classList.remove('fq-items--active'))

			parent.classList.add('fq-items--active');
		}
	})
)