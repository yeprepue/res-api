# Res-Api

Se agregará una Api-res de un listado y filtrado de hoteles construida con NODE usando las librerías de MOGAN y ESPRESs. 

# Para iniciar el proyecto es necesario descargar el repositorio de https://github.com/yeprepue/res-api.git

#  para actualizar las dependencias "npm i"

# Para iniciar la Api “npm run dev”

# para usar el end-point GET que mostrara un array con los hoteles http://localhost:3000/api/hoteles
![image](https://github.com/yeprepue/res-api/assets/43614257/b2887de0-3267-4e63-a47a-580f9eef8905)

# para usar el end-point GET:id mostrara un hotel creado http://localhost:3000/api/hoteles/1 tener en cuenta que “/1” es el “id” del hotel que quiere consultar.
![image](https://github.com/yeprepue/res-api/assets/43614257/9732c57c-bafd-4879-a214-dba8c75dd5b7)

# para usar el end-point POST se debe enviar un JSON con un array con los siguientes datos:
{
    "nombre": "JW Marriott Hotel Bogota",
    "ciudad": "Calle 73 n.º 8-60 Bogotá, Colombia",
    "telefono": "+57 6014816000",
    "opiniones": "Execelente",
    "imagen": "MarriotH.jpg",
    "url": "https://jwmarriott.hotels-bogota.com/es/"
  }
  
  http://localhost:3000/api/hoteles
![image](https://github.com/yeprepue/res-api/assets/43614257/b708a5e4-77fb-4961-9175-3c3cb1bc66a6)

# para usar el end-point PUT se enviará el array con los datos de un hotel mencionando en el paso anterior a http://localhost:3000/api/hoteles/3 tener en cuenta que el "/3" hace referencia al "id" de un hotel. 
![image](https://github.com/yeprepue/res-api/assets/43614257/9b4a2b3e-9cce-41b8-aa7c-715b5e017c0d)
![image](https://github.com/yeprepue/res-api/assets/43614257/31cbfb39-e9fb-4388-9bc3-93379a0aeb9e)

# para usar el end-point DELETE se enviará http://localhost:3000/api/hoteles/4, tener en cuenta que "/4" es el "id" del hotel que se quiere borrar.




