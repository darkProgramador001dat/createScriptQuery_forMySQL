SOBRE O CODIGO:

O script queryHashes_forMySQL.js foi projetado para facilitar hà inserção de hashes dentro de um banco de dados(MySQL).
Deve haver um banco de dados na máquina, para o scripting funcionar corretamente. E configurar um 
ambiente de desenvolvimento com npm init -y e baixar as dependências.

DEPENDENCIAS:
  mysql2
  bcrypt



O script compareHash.js foi projetado para realizar comparações de hashes, o usuáio informa um hash do tipo bcrypt,
no programa em sí. Contém um wordlist tornando o programa pesado, porém funcional. Sobre a funções es() precisar
esperar a promessa ser comprida, para poder ser chamada dentro de compareHash.

DEPENDENCIAS:
  bcrypt
  readline
