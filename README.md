# Res-Api

Se agregará una Api-res de un listado y filtrado de hoteles construida con NODE usando las librerías de MOGAN y ESPRESs. 

# Para iniciar el proyecto es necesario descargar el repositorio de https://github.com/yeprepue/res-api.git

#  para actualizar las dependencias "npm i"

# Para iniciar la Api “npm run dev”
![image](https://github.com/yeprepue/res-api/assets/43614257/f33c76cf-574a-48f8-8a90-a070fe41d047)

# para usar el end-point GET que mostrara un array con los hoteles http://localhost:3000/api/hoteles
![image](https://github.com/yeprepue/res-api/assets/43614257/c66362d7-b043-43b7-9b19-acf91ea98c68)

# para usar el end-point GET:id mostrara un hotel creado http://localhost:3000/api/hoteles/1 tener en cuenta que “/1” es el “id” del hotel que quiere consultar.

![image](https://github.com/yeprepue/res-api/assets/43614257/f6f04360-27f0-4dbf-aa43-030c26660e06)

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
![image](https://github.com/yeprepue/res-api/assets/43614257/1ed27ca2-1119-4947-b601-290ee59997a4)



# para usar el end-point PUT se enviará el array con los datos de un hotel mencionando en el paso anterior a http://localhost:3000/api/hoteles/3 tener en cuenta que el "/3" hace referencia al "id" de un hotel. 
![image](https://github.com/yeprepue/res-api/assets/43614257/609c8578-1284-45fa-83a1-fe4dc8d02bab)
![image](https://github.com/yeprepue/res-api/assets/43614257/1e598d6e-792e-4d8a-b6f0-ab400e33f6f7)


# para usar el end-point DELETE se enviará http://localhost:3000/api/hoteles/4, tener en cuenta que "/4" es el "id" del hotel que se quiere borrar.


![image](https://github.com/yeprepue/res-api/assets/43614257/c4fb32cc-102e-4697-a6ca-da39d3f781cd)
![image](https://github.com/yeprepue/res-api/assets/43614257/5e682abe-52ce-424c-892f-e009746a8e40)



