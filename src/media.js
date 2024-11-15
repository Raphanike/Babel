
function filtrarAprovados(alunos, mediaMinima) {
    return alunos.filter(aluno => aluno.media >= mediaMinima);
}


let alunos = [
    { nome: "Ana", media: 5.5 },
    { nome: "João", media: 7.8 },
    { nome: "Maria", media: 6.3 },
    { nome: "Carlos", media: 4.9 },
    { nome: "Julia", media: 8.2 }
];

let alunosAprovados = filtrarAprovados(alunos, 6);


console.log(alunosAprovados);
