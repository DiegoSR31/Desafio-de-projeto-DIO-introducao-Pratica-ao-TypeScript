interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarios = {} as Funcionario;
funcionarios.codigo = 10;
funcionarios.nome = 'João';

const funcionarios2: Funcionario = {
    codigo: 10,
    nome: 'João'
}