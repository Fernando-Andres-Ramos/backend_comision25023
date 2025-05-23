/* Clase constructora con la logica para consumir la API */
class Request {
  constructor(params,body){
    this.params = params;
    this.body = body || "";
    this.url = "https://fakestoreapi.com"
  }

  /* Devolver productos o 1 producto por su id */
  async get(){
    try{
      const request = await fetch(`${this.url}/${this.params}`)
      const response = await request.json()
      return response
    }
    catch(err){
      throw `Error: Parametros incorrectos. Debe enviarse "products" o "products/{id}" `
    }
  }

  /* Crear productos */
  async post(){
    try{
      const request = await fetch(`${this.url}/products`,{
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({...this.body})
      })
      const response = await request.json()
      return `Nuevo producto agregado. ID: ${response.id} `
    }
    catch(err){
      throw `Error: Hubo un error al crear el producto `
    }
  }

  /* Actualizar productos por su id */
  async put(){
    /* Metodo sin utilizar por ahora*/
    return "Metodo sin utilizar actualmente"
  }

  /* Borrar 1 producto por su id */
  async delete(){
    try{
      const request = await fetch(`${this.url}/${this.params}`,{
                        method: 'DELETE'
      })
      const response = await request.json()
      console.log("producto eliminado")
      return {...response}
    }
    catch(err){
      throw `Error: Hubo un error al borrar el producto `
    }
  }
}

export default Request