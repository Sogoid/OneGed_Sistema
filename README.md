# :school: IPOG - PROJETO INTEGRADOR 2023 - Back-End 01

|:placard:  | PROJETO |
| -------------  | --- |
| :sparkles: Nome        | **Sistema OneGED**
| :computer: Tecnologias | :heavy_check_mark: HTML / :heavy_check_mark: CSS / :heavy_check_mark: Angular - Front-End / :heavy_check_mark: Spring Boot - Back-End
| :open_file_folder: Repositório URL  | https://github.com/Sogoid/OneGed_Sistema.git

## Detalhe do Projeto

OneGED é um gerenciador de arquivo, local instalado no servidor com interface web para realizar as seguintes tarefas.

•	Fazer upload dos arquivos.\
•	Salvar em pastas para organização.\
•	Gerenciar grupos de usuários e arquivos.\
•	Incluir, altera, excluir arquivos, do seu próprio perfil usuário.\
•	Incluir, altera, excluir arquivos em geral. (Administrador)\
•	Incluir, altera, excluir usuário. (Administrador)\
•	Fazer download dos arquivos.


:memo: Requisito para Front-End.

1. Uma tela de cadastro no sistema. 
2. Uma tela de login no sistema. 
3. Uma tela principal para ser mostrada para o usuário quando ele realizar login no sistema.
4. Uma tela de alteração de senha.
5. Uma tela de listagem de usuários.
6. Uma tela de bloqueio e desbloqueio de usuários.
7. Uma tela de listagem de grupos.
8. Uma tela de inclusão de grupos.
9. Uma tela de alteração de grupos.
10. Uma tela para inclusão de um usuário em um grupo.
11. Uma tela para exclusão de um usuário de um grupo com mensagem de confirmação da exclusão.
12. Uma tela para listagem dos documentos cadastrados no sistema com mensagem de confirmação para exclusão.
13. Uma tela para upload de múltiplos documentos no sistema


:memo: Sistema deverá atender aos seguintes requisitos. Back-End.

1. Fornecer um único usuário administrador cadastrado previamente no banco de dados
2. Permitir que qualquer usuário se cadastre no sistema evitando duplicidade no login e e-mail do usuário. 
Nenhum usuário será excluído do sistema
3. Após se cadastrar, o usuário deve realizar o login para acessar a tela principal do sistema
4. Cada usuário pode alterar a sua senha quando quiser
5. Cada usuário pode realizar logout do sistema
6. Permitir a listagem de todos os usuários do sistema para o administrador
7. O administrador pode bloquear ou desbloquear um usuário
8. O administrador pode realizar as operações de CRUD na tabela de grupos, mas um grupo só pode ser 
excluído se não tiver nenhum usuário ou documento associado a ele. Quando um grupo for excluído, o 
sistema deve emitir uma mensagem de confirmação de exclusão para o usuário
Projeto Integrador
9. Somente o administrador pode incluir um usuário em um grupo, sendo que cada usuário pode ser 
cadastrado em vários grupos e cada grupo pode conter vários usuários. O administrador não se cadastra 
em nenhum grupo
10. O administrador pode excluir um usuário de um grupo
11. Cada usuário pode acessar o cadastro de documentos. Ao acessar, devem ser mostrados a esse usuário 
todos os documentos de todos os grupos que ele faz parte, com exceção do administrador que pode ver 
todos os documentos do sistema
12. Cada usuário pode cadastrar quantos documentos quiser para cada grupo. O sistema deve permitir o 
upload de múltiplos documentos (apenas em formato pdf). Ao cadastrar documentos o usuário deve 
informar qual o grupo que os documentos inseridos pertencerão. O administrador não cadastra 
documentos
13. Apenas o usuário administrador possui permissão para excluir um documento já cadastrado

## Inicie o banco de Dados

Tem um arquivo docker para criar um banco de dados no docker.
Para executar o arquivo utilize o comando: docker-compose up.

Ou instale o Banco de Dados MySql localmente.

## Para instalar as denpendencias e executar o projeto do Front-End.

Entre na pasta Front-End.\
Para instalar as denpendencias utilize o comando: npm install\
Para executar o projeto utilize o comando: ng serve

## Execute o Back-End

Após iniciar o Front-End e so executar o Spring Boot no Back-End.

### :scroll: Alunos participantes.

 :woman: – Nome: AMANDA QUEIROZ \
 :man:  – Nome: CLEBER BATISTA RIBEIRO \
 :man:  – Nome: DIOGO DA SILVEIRA RIBEIRO \
 :woman: – Nome: MARIANE DANTAS CARDOSO
