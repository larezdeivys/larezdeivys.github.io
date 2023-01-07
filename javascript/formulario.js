const $form = document.querySelector('#form');
const $bottonMailto = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	let url = `mailto:larezdeivys20@gmail.com?subject=${document.getElementById('name').value},${document.getElementById('email').value}&body=${document.getElementById('mensaje').value}`;

	window.open(url, '_blank');
} 
// DESPLEGAR FORMULARIO
document.querySelector('body').addEventListener('click', (e) =>{
	if (e.target.classList.contains('forma')) return Mostrar(e) 
})

function Mostrar(e){
	e.preventDefault()
	document.querySelector('.contacto').classList.add('contacto2')
}

document.querySelector('.Z').addEventListener('click', ()=>{
	document.querySelector('.contacto').style.opacity='0'
	setTimeout(function(){
		document.querySelector('.contacto').classList.remove('contacto2')
		document.querySelector('.contacto').style.opacity='1'
	},500)

})