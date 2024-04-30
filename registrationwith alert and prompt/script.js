// alert("Bem vindo! A seguir pediremos que informe alguns dados.");

// const registration = function() { 
//      const name = prompt("Informe seu nome:");
//      const age = prompt("Informe a sua idade:");
//      const age2 = prompt("Confirme a sua idade:");

//      if (age2 != age) {
//           alert("Esta idade não corresponde com a anterior");
//      }else {
//           prompt(`Nome: ${name} \nIdade: ${age}`);
//      }
// }
// registration();

// Confirm

alert("Bem vindo! A seguir pediremos que informe alguns dados.")

const nome = prompt("Digite seu nome:")
const idade = prompt("digite sua idade:")

const confirmaIdade = confirm(`Sua idade é ${idade} anos?`)

alert(`Nome: ${nome} \nIdade: ${idade} \nIdade confirmada: ${confirmaIdade}`)