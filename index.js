/* Importar clase con metodos de peticiones */
import Request from './request.js'

/* Desestructura los argumentos al iniciar npm start */
const [processMethod, params, title, price, category] = process.argv.slice(2);


/* Programa principal */
async function Main (){
  try {

    /* Verifica que se reciba algún metodo*/
    if(!processMethod)
      throw "Error: Debe ingresarse una petición Get, Post, Put o Delete";
  
    let method = processMethod.toLowerCase()
  
    /* Revisa si el metodo solicitado es valido para la aplicación */
    if (method != 'get' && method != 'post' && method != 'put' && method != 'delete'){
      throw(`El método "${method}" no es válido`)
    }
    
    /* Pasa los argumentos a la clase del archivo request.js */
    const request = new Request(params, {title, price, category});
    console.log(await request[method]())

  } catch (error) {
    console.log(error)
  }
  finally{
    console.log("Fin del programa")
  }
}

Main()

  