import Request from './request.js'

const [processMethod, params, title, price, category] = process.argv.slice(2);

async function Main (){
  try {
    if(!processMethod)
      throw "Error: Debe ingresarse una petición Get, Post, Put o Delete";
  
    let method = processMethod.toLowerCase()
  
    if (method != 'get' && method != 'post' && method != 'put' && method != 'delete'){
      throw(`El método "${method}" no es válido`)
    }
    
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

  