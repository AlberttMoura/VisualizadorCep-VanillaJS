async function getData(id) {
	document.getElementById(id).innerHTML = ''
	const cep = document.getElementById('cepbar').value
	try {
		const data = await (
			await fetch(`https://viacep.com.br/ws/${cep}/json/`)
		).json()
		Object.entries(data).forEach(
			(v) =>
				(document.getElementById(
					'results'
				).innerHTML += `<li class="cepItem"><p>${v[0]}: ${v[1]}</p></li>`)
		)
	} catch (e) {
		document.getElementById(
			'results'
		).innerHTML = `<li class="cepItem"><p>Erro: ${e.message}</p></li>`
	}
}
