define({ "api": [
  {
    "type": "get",
    "url": "/tarjetas/{numero_tarjeta}/saldo",
    "title": "",
    "group": "Consulta_Saldo",
    "description": "<p>Por medio de los servidores del AFT se obtiene el saldo y la fecha del saldo de la tarjeta BIP ingresada por el usuario</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Int</p> ",
            "optional": false,
            "field": "numero_tarjeta",
            "description": "<p>Número de tarjeta BIP.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "Fecha",
            "description": "<p>DD/MM/YYYY HH:MM.</p> "
          },
          {
            "group": "200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "Saldo",
            "description": "<p>$.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"Fecha\": \"04/05/2015 09:27\", \n\t\"Saldo\": \"$-220\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>numero_tarjeta</code> no encontrado o con problemas.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Método HTTP no permitido.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>URL Mal formada.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "No encontrado:",
          "content": "HTTP/1.1 404 Not found\n{ \n\t\"error\": \"Corrobore si el numero de su tarjeta existe, si esta correcto, consulte con un centro BIP!\"\n}",
          "type": "json"
        },
        {
          "title": "No Permitido:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{ \n\t\"error\": \"Metodo HTTP no permitido\"\n}",
          "type": "json"
        },
        {
          "title": "Tarjeta mal Ingresada:",
          "content": "HTTP/1.1 400 Bad Request\n{ \n\t\"error\": \"Ingrese un numero correcto de tarjeta BIP!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "SaldoBIP-ApiREST/Documentacion/apidoc.js",
    "groupTitle": "Consulta_Saldo",
    "name": "GetTarjetasNumero_tarjetaSaldo"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "SaldoBIP-ApiREST/Documentacion/apidoc/main.js",
    "group": "_home_yasser_gobierno_SaldoBIP_ApiREST_Documentacion_apidoc_main_js",
    "groupTitle": "_home_yasser_gobierno_SaldoBIP_ApiREST_Documentacion_apidoc_main_js",
    "name": ""
  }
] });