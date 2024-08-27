function media() { // criando função

// Definindo variáveis e valores recebidos após digitação e chamada do usuário.
const mat = parseFloat(document.querySelector("#matNota").value); // recebendo notas e transformando em const
const fis = parseFloat(document.querySelector("#fisNota").value); // recebendo notas e transformando em const
const qui = parseFloat(document.querySelector("#quiNota").value); // recebendo notas e transformando em const
const inf = parseFloat(document.querySelector("#infNota").value); // recebendo notas e transformando em const

const res = document.querySelector("#res"); // marcando res como const para mudar o paragrafo vazio pela média
console.log(mat, fis, qui, inf);

let s = (mat + fis + qui + inf) / 2; // soma da média

if (mat && fis && qui && inf) { // if para determinar a chamada do resultado somente se todos os campos forem preenchidos
res.innerHTML = `${s}`; // alterando res(agora o paragrafo vazio receberá o valor da média)
} else {
    window.alert("Preencha Adequadamente!"); // else com mensagem de erro caso um dos campos ou todos não estejam preencidos
}

}

document.querySelector("#media").addEventListener("click", media); // chamando e validando o evento click