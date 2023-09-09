const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

async function conexaoBanco() {
    try {
    await sequelize.authenticate();
        console.log('Conectado com Sucesso!');
    } catch (error) {
        console.error('Erro na Conexão com o Banco de daods:', error);
    }
}
conexaoBanco();