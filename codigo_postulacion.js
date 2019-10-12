// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar


const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];
const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 }
]
const banks = [
  { id: 1, name: 'SANTANDER' },
  { id: 2, name: 'CHILE' },
  { id: 3, name: 'ESTADO' }
];

/*
  SECCIÓN PROBLEMAS
    - No promover la copia:
	  - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
	  - No subir a repositorios públicos (github, o similares)
	  - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un interprete de javascript como node y ejecutarlo de manera local
	  - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
	  - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
	- Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
	- Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
	- Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
*/


/***********************************
    Devolver el saldo  de banco de un cliente
    clientId = entero 
    bankId = entero   
    Si no tiene saldo en el banco devuelve cero
*************************************/
function saldoClientBank(clientId, bankId){
  count=0
  //Filtrar por cliente
  filtroCliente = accounts.filter(e => e.clientId == clientId)
  //Filtrar por banco
  filtroBanco = filtroCliente.filter(e => e.bankId == bankId)
  //Devolver solo los saldos
  saldos = filtroBanco.map(e => e.balance)
  //  console.log(saldos)
  //Sumar saldos, se agrega 0 como valor inicial 
  saldos.forEach(e => count += e)
  return count
}

//Funcio para retornar Rut del array Clients
function rutClient (id=0){
  array =[];
  array = clients.find(e => e.id == id)
  if (array !== undefined) return array.taxNumber
  return false
}


// 0 Arreglo con los ids de clientes
function listClientsIds() {
  return clients.map((client) => client.id);
};

// 1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber() {

  let ordenado = [];
  //Ordenar clientes con el metodo Sort de array
  ordenado = clients.sort(function(a,b){
    return ((a.taxNumber < b.taxNumber)? -1: ((a.taxNumber > b.taxNumber)? 1: 0));
    
  })
  //Retornar solo el array de id de clientes
  return ordenado.map((client) => client.id);
};

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
function sortClientsTotalBalances() {
 
  //arr = para almacensar almacenar cliente y su respectivo saldo
  arr = [];
  //Para cada sumar saldo y agregarlo al array 
  clients.forEach (client =>{
    //Filtrar por cliente en accounts
    filtroCliente = accounts.filter(e => e.clientId == client.id)
    // console.log(filtroCliente)
    //devolver array de salos
    x = filtroCliente.map(e => e.balance)
    //Sumar saldos
    suma = x.reduce((a,b)=> a + b)
    arr.push({name: client.name, balance: suma})
  }) 
  //Ordenar aray por saldo mator a menor
  x = arr.sort((a,b)=>{
    return ((a.balance > b.balance)? -1: ((a.balance < b.balance)? 1: 0))
  })  
 // Para comprobar el resultado returnar x solamente
 // Retornar array con solo los nombres ya ordenado
 return x.map(e => e.name)  
}


// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
function banksClientsTaxNumbers() {
  array=[];
  temp= [];
  banksId = [];
  banksObj =[];
  obj=[];
  //Busco el id del cliente en account
  //Devolver arreglo con los clientes y codigos de banco asociado
  arreglo = clients.map(client =>{
      id= client.clientId;
      // //Filtro todas los balances de un cliente especifico
      array = accounts.filter(account => account.clientId == client.id);
      temp = array.map(e=> e.bankId)
      //Crear arreglo con solo Id unicos de cada bank.Id
      banksId = Array.from(new Set(temp)) 
      objClient = {id: client.id, name: client.name, rut : client.taxNumber , banksId: banksId}
      //retorno el arreglo con todos los clientes y el id de sus bancos
      return objClient
  })
  banksObj = banks.map(bank=>{
    bankName = "";
    bankName = bank.name;
    arr=[];
    //Recorrer el array de bancos de cada cliente
    arreglo.forEach((client)=>{
      banksId =[];
      banksId = client.banksId
      banksId.forEach( e=> {
        //Se agregal el rut usando la funcion rutClient al array resultante para cada banco
        if (e == bank.id){
          arr.push(rutClient(client.id))
        }
      })
    }) 
      obj[bank.name] = arr
  })
  
  return obj

}


// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
function richClientsBalances() {
   // Sanander id = 1 segun arrray
   bankId= 1
   top = 25000
   arr =[]
   clients.forEach(client => {
       //Consultar saldo
       saldo = saldoClientBank(client.id, bankId)
       // console.log(saldo)
       // console.log(client.id)
       if (saldo > top){
         // console.log(saldo +" " +client.id +" "+ client.name)
         arr.push(saldo)
       }  
   })
   //Retornan arra ordenado decreciente
   return arr.sort((a,b)=> a+b)
}

// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
function banksRankingByTotalBalance() {
  saldos = banks.map(bank => {
    //Filtrar bancos
    a = accounts.filter(account => account.bankId == bank.id)
    //Devolver array de balances
    b = a.map(e => e.balance)
    //Sumar balances
    suma = b.reduce((a,b)=> a+b )
    // console.log(x)
    // console.log(z)
    return {bankId: bank.id, saldo: suma}
  })  
  // console.log(saldos)
  // console.log("*********Ordendao")
  //Ordenar creciente el saldo
  saldos.sort((a,b)=>{
    return ((a.saldo < b.saldo)? -1 : ((a.saldo > b.saldo)? 1: 0))
  })
  // console.log(saldos) 
  return saldos.map(e => e.bankId ) 
}

// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
function banksFidelity() {
  obj={}// Objeto a retornar
  //Para cada cliente devolver un objeto con id de bancos
  resultClients = clients.map(client => {
    //Filtrar clientes de las cuentas
    clientes = accounts.filter(account => account.clientId == client.id)
    // console.log(a)
    //Devolver solo los id de bancos
    idsBanks = clientes.map(e => e.bankId)
    // console.log (m)
    //Array con los id de los bancos sin repetirse
    bankIdsUnicos = Array.from(new Set(idsBanks))
    // console.log(arr) 
    return {clientId : client.id, banksId : bankIdsUnicos}
  })
  // console.log(resultClients)
  //Contar clientes por banco
 
  banks.forEach(bank => {
    count=0;//Contador de clientes en cada banco
    //Evaluar el arreglo con sus id de bancos
    resultClients.forEach(client =>{
      arr = client.banksId
      // console.log (client.clientId)
      // console.log(arr)
      //Recorro ids de banco del cliente en cuestion
      //e incremento el contador
      arr.map(contador => {
        if (contador == bank.id) count +=1
      })
    })
    //Agregar key y valor
    obj[bank.name]= count
  })
  return obj
}

// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
function banksPoorClients() {
    // Sanander id = 1 segun arrray
    bank= 1//Probando
    arr =[]
  // banks.forEach(bank => {
    clients.forEach(client => {
      //Consultar saldo
       saldo = saldoClientBank(client.id, bank.bankId)
       arr.push({clientId: client.id , saldo: saldo})
    })
   //Ordenar de menor a mayor
   arr.sort((a,b)=>{
     return ((a.saldo < b.saldo)? -1: ((a.saldo > b.saldo)? 1:0))
   }) 
  //  console.log( arr)
  // })
  return "******* Por terminar *****"
}

// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newClientRanking() {
  // CODE HERE
}


// Impresión de soluciones. No modificar.
console.log('Pregunta 0');
console.log(listClientsIds());
console.log('Pregunta 1');
console.log(listClientsIdsSortByTaxNumber());
console.log('Pregunta 2');
console.log(sortClientsTotalBalances());
console.log('Pregunta 3');
console.log(banksClientsTaxNumbers());
console.log('Pregunta 4');
console.log(richClientsBalances());
console.log('Pregunta 5');
console.log(banksRankingByTotalBalance());
console.log('Pregunta 6');
console.log(banksFidelity());
console.log('Pregunta 7');
console.log(banksPoorClients());
console.log('Pregunta 8');
console.log(newClientRanking());

