const alunos = 
[
    {nome: "Ana Paula", email: "goettensana@gmail.com", media: "9"},
    {nome: "Maria", email: "maria@gmail.com", media: "5"},
    {nome: "José", email: "jose@gmail.com", media: "7"},
    {nome: "Paulo", email: "paulo@gmail.com", media: "6"},
    {nome: "João", email: "joao@gmail.com", media: "8"},
];


function buscarAlunoPeloNome (nome){
    const aluno = alunos.find(el => el.nome === nome);
    if(!aluno){
        return "Aluno não existe";
    }else{
        return (`Aluno encontrado: ${aluno.nome}, email: ${aluno.email}, média: ${aluno.media}`);
    };
};

function buscarAlunoPelaMedia (media){
    const alunosEncontrados = alunos.filter(el => el.media >= media);
    if(!alunosEncontrados){
        return (`Nenhum aluno encontrado com média maior ou igual à ${media}`);
    }else{
        return (`Alunos encontrados com média maior que ${media}: ${alunosEncontrados.map(el => el.nome).join(", ")}`);
    };
};


module.exports = {alunos, buscarAlunoPeloNome, buscarAlunoPelaMedia};

