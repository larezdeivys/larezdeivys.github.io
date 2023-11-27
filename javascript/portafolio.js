const trabajos = document.querySelectorAll('.img_trabajo')
const enlace = document.querySelectorAll('.portafolioGrip a')
const tec = ['html5','css','javascript2']
const tec2 = ['html5','css']
const tec3 = ['html5','css','javascript2','jquery1']
const tec4 = ['html5','css','javascript2','jquery1', 'bootstrap']
const tec5 = ['wordpress1']
const tec6 = ['wix'];
const img = [tec3,tec,tec,tec,tec4,tec,tec,tec,tec,tec,tec,tec,tec2,tec2,tec2,tec3,tec,tec6,tec5,tec5]
const h4 = ['Portafolio','Super Empresa', 'Distribuidora de Alimentos', 'Restaurante Italiano', 'Start Agency', 'Calculadora app', 'Empresas Win', 'Lugares de Venezuela', 'Formulario, Inscribir Curso', 'Empresa de Refrigeración', 'ColrClin app', 'ChickenFun', 'Formulario Animado', 'Games.com', 'Decayed', 'Technology', 'Carrito de Compras', 'CX Capacidad de nutrición', 'Cemam Clínica Aeronaútica', 'Atlas Consulting'];

let pos = 0

document.querySelector('.portafolioGrip').addEventListener('click', (e) => {
	e.preventDefault()
	if (e.target.classList.contains('img_trabajo')){
		pos = 0
		for (let i = 0; i < trabajos.length; i++) {
			if(e.target === trabajos[i]){
				pos = i
			}
		}

		return Trabajo(pos);
	}
})

document.querySelector('.close-tecno').addEventListener('click', () => {
	document.querySelector('.tecno').classList.remove('tecno-visible')
})

function Trabajo(pos){
	document.querySelector('.tecno .h4').textContent = h4[pos]
	document.querySelector('.tec-img').src = trabajos[pos].src;
	document.querySelector('.tecno .flex').innerHTML = ''
	document.querySelector('.tecno .btn').textContent = enlace[pos].href
	document.querySelector('.tecno .btn').href = enlace[pos].href

	for(let i = 0; i < img[pos].length; i++){
		document.querySelector('.tecno .flex').innerHTML += `<img src="img/${img[pos][i]}.png" class="tec">`
	}
	document.querySelector('.tecno').classList.add('tecno-visible')
	document.querySelector('.tecno-visible').style.animation = 'portafolio .3s ease'
	setTimeout(function(){
		document.querySelector('.tecno-visible').style.animation = ''
	},300)
}

document.querySelector('.siguiente').addEventListener('click', (e) => {
	e.preventDefault()
	pos++
	if(pos === trabajos.length){
		pos = 0
	}
	return Trabajo(pos);
})
document.querySelector('.atras').addEventListener('click', (e) => {
	e.preventDefault()
	pos--
	if(pos < 0){
		pos = trabajos.length-1
	}
	return Trabajo(pos);
})