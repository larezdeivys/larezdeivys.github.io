document.querySelector('.portafolioSeccion').addEventListener('click', (e) => {
	e.preventDefault()
	const div = document.querySelectorAll('.img_trabajo')
if(e.target.classList.contains('img_trabajo')){
	// document.querySelector('.info_img').src = e.target.src
	switch(e.target){
		case div[0]:
				document.querySelector('.info_img').src = '../img/PortafolioDL_html_index.png'
				document.querySelector('.h1_info').textContent = 'Mi Portafolio, full responsive.'
				document.querySelector('.p_info').textContent = 'Es mi proyecto principal, donde muestro mis habilidades de desarrollo frontend, hago referencia a mis proyectos y doy información sobre mi.'
				document.querySelector('.a_info').textContent = 'enlace a la sesto paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
		case div[1]:
				document.querySelector('.info_img').src = '../img/PaginasWeb_TheBestCompany_HTML_index.html.png'
				document.querySelector('.h1_info').textContent = 'Empresarial. Responsive'
				document.querySelector('.p_info').textContent = 'Este proyecto esta basado en una pagina de información empresarial, donde muestro detalles comunes en la información. Secciones como: ¿quienes somos?, ¿visión y misión?, contactos. La pagina cuenta con un formulario de postulaciones que incluye un pequeño slider a su lado derecho y cuenta con otros detalles.'
				document.querySelector('.a_info').textContent = 'enlace a la primera paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
		case div[2]:
				document.querySelector('.info_img').src = '../img/PaginasWeb_DistribuidorDisa_HTML_index.html.png'
				document.querySelector('.h1_info').textContent = 'Distribuidora. Responsive'
				document.querySelector('.p_info').textContent = 'Se trata de una pagina basada en una distribuidora de gran variedad de articulos, se muestran secciones donde se le da imformacion al cliente que la visite. muestra todos los productos de la distribudora y en dado caso su disponibilidad'
				document.querySelector('.a_info').textContent = 'enlace a la segunda paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
		case div[3]:
				document.querySelector('.info_img').src = '../img/PaginasWeb_restaurante_html_index.html.png'
				document.querySelector('.h1_info').textContent = 'Restaurante. Responsive'
				document.querySelector('.p_info').textContent = 'La pagina es un proyecto de un restaurante donde se le da la bienvenida al usuario y muestra informacion util como los platillos del menu, su nombre, ingredientes y precio, de igual manera se muestra informacion del chef en jefe. Un formulario de contactos y la opcion de seguir al restaurante a traves de las redes sociales.'
				document.querySelector('.a_info').textContent = 'enlace a la tercer paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
			case div[4]:
				document.querySelector('.info_img').src = '../img/Desktop_calculadora_index.png'
				document.querySelector('.h1_info').textContent = 'Calculadora Simple. Responsive'
				document.querySelector('.p_info').textContent = 'Este proyecto cumple con las condiciones simples de una carculadora, raíz cuadrada, porcentaje, multiplicación, divición, suma y resta'
				document.querySelector('.a_info').textContent = 'enlace a la cuarto paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
			case div[5]:
				document.querySelector('.info_img').src = '../img/PaginaWeb_Empresa_index.html.png'
				document.querySelector('.h1_info').textContent = 'Pagina Empresarial. Responsive'
				document.querySelector('.p_info').textContent = 'Es una pagina de informacion empresarial, donde se muestran conceptos basicos como misión, visión, quienes son. Formulario de postulaciones y se encuentra información de contactos'
				document.querySelector('.a_info').textContent = 'enlace a la quinto paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
			case div[6]:
				document.querySelector('.info_img').src = '../img/Venezuela_index.html.png'
				document.querySelector('.h1_info').textContent = 'Venezuela, responsive'
				document.querySelector('.p_info').textContent = 'Es una pagina sencilla donde se muestra parte de los mejores lugares de Venezuela y seis de su gran catidad de playas, al final de la pagina se enlaza al mapa de google en la ubicacion de venezuela'
				document.querySelector('.a_info').textContent = 'enlace a la sectimo paguina'
				document.querySelector('.info_icono1').src = '../img/html5.png'
				document.querySelector('.info_icono2').src = '../img/javascript2.png'
				document.querySelector('.info_icono3').src = '../img/css.png'
				break;
			case div[7]:
				document.querySelector('.h1_info').textContent = 'octovo trabajo'
				document.querySelector('.p_info').textContent = 'texto de la octovo paguina'
				document.querySelector('.a_info').textContent = 'enlace a la octovo paguina'
				break;
		}
		document.querySelector('.div_info1').classList.add('div_info2')
	}
})
document.querySelector('.info_close').addEventListener('click', (e) => {
	e.preventDefault()
	document.querySelector('.div_info1').style.opacity = '0'
	setTimeout(function() {
		document.querySelector('.div_info1').classList.remove('div_info2')
		document.querySelector('.div_info1').style.opacity = '1'
	},300)
})