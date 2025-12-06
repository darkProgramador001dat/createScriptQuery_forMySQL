const bcrypt = require('bcrypt');      // importe da biblioteca
const readline = require('readline');  // importe da biblioteca

// funcão criar um INPUT.
function es()
{
  return new Promise((resolve) => {    // criar um promessa, nossa promessa é a entrada de dados do usuario, assim que ele terminar, passe para resolve, metodo return para usar em outra função
    const rl = readline.createInterface({
      input: process.stdin,    // metodo entrada.
      output: process.stdout   // metodo saida.
    });
    rl.question("=> digite uma palavra, converterei em hash: ", (hash) => {    // criando um input para o usuario.
      rl.close();       // fechando o input.
      resolve(hash);    // finalizando a promessa, e passando para variavel
    });
  });
}


// função assincrona.
async function createHash()
{
  const hash = await es();     // instanciando a espera da função, so será chamada depois do usuario finalizar seu input.
  const saltRounds = 13;       // rodadas para gerar o hash
  const c = await bcrypt.hash(hash, saltRounds);  // criando o hash
  console.log("Seu hash gerado: ", c);            // imprimindo na tela o hash
}
createHash();
