const express = require("express");
const moduloAlunos = require("./alunos");

const app = express();
app.use(express.json());


app.get("/alunos", (req, res) => {
    const { nome, media } = req.query;
    let listaAlunos = moduloAlunos.alunos;

    if(nome){
        listaAlunos = moduloAlunos.buscarAlunoPeloNome(nome);
    };
    if(media){
        listaAlunos = moduloAlunos.buscarAlunoPelaMedia(media);
    };

    res.json(listaAlunos);
});

app.post("/alunos/novo", (req, res) => {
    const { nome, matricula, media } = req.body;

    if((nome !== undefined) && (matricula !== undefined) && (media !== undefined)){
        res.json(`Aluno adicionado com sucesso: ${nome}, ${matricula}, ${media}`);
    }else{
        res.status(400).json({message: "Dados inválidos ou insuficientes!"});
    };
});

app.post("/alunos/deletar/:index", (req, res) => {
    const index = Number(req.params.index);

    if((index !== undefined) && (index < moduloAlunos.alunos.length)){
        moduloAlunos.alunos.splice(index, 1);
        res.json({message: "Aluno removido com sucesso!"});
    }else{
        res.status(404).json({message: "Não foi possível encontrar aluno, verifique os dados e tente novamente"});
    };
});

app.post("/alunos/atualizar/:index", (req, res) => {
    const { index } = req.params;
    const { nome, email, media } = req.body;

    if((index === undefined) || (index >= moduloAlunos.alunos.length)){
        res.status(400).json({message: "Aluno não encontrado!"});
    }else{
        moduloAlunos.alunos[index].nome = nome;
        moduloAlunos.alunos[index].email = email;
        moduloAlunos.alunos[index].media = media;

        res.json(`Aluno ${moduloAlunos.alunos[index].nome} atualizado com sucesso!`);
    };
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});