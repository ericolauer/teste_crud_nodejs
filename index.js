(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

/*const novoProduto = await Produto.create({
    nome: 'Modem',
    preco: 50,
    descricao: 'Modem 8 portas'
})
console.log(novoProduto);*/

const produto = await Produto.findByPk(1);
console.log(produto);

/*produto.descricao = 'Alterando um produto';
await produto.save();

await produto.destroy();*/

await produto.destroy();



})();