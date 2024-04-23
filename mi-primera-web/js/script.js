/* Defino una función que recibe como parametro el id de las imagenes miniaturas*/


function verFoto(num){
	/* recibo en una variable el id del contenedor para la imagen grande*/
	var verfotos=document.getElementById('fotoContenedor');
		verfotos.style.display="flex"; //Lo hago visible

			if(num==1){
		/*les fijo el atributo src con el nombre de la foto que deseo ver en grande*/
		verfotos.setAttribute('src','img/aguila.jpg');

			}else if(num==2){
				verfotos.setAttribute('src','img/tigre.jpg');
	

			}else if(num==3){
				verfotos.setAttribute('src','img/lemur.jpg');

			
			}else if(num==4){
			verfotos.setAttribute('src','img/elefante.jpg');

			}else if(num==5){
				verfotos.setAttribute('src','img/camaleon.jpg');

			
			}else{

				verfotos.setAttribute('src','img/loro.jpg');
				
			}
        }


		function cerrar(){
			window.close();
		}
