const form = document.getElementById('form-atividade');
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const imgMaisOuMenos = '<img src="./images/maisoumenos.png" alt="Emoji pensativo" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    calculaMediaFinal();
    atualizaMediaFinal()
});

function adicionaLinha() {
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: "${inputNomeAtividade.value}" já foi inserida! Tente novamente.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseInt(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value > 7 ? imgAprovado : inputNotaAtividade.value <= 7 && inputNotaAtividade.value >= 5 ? imgMaisOuMenos : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    
        limpaCampos();
    }
}

function limpaCampos() {
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(i=0; i<notas.length; i++) {
        somaDasNotas += notas[i];
    }

    const media = somaDasNotas / notas.length;
    return media.toFixed(2);
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-nota-final').innerHTML = mediaFinal;
    document.getElementById('media-resultado-final').innerHTML = `${mediaFinal >= 5 ? spanAprovado:spanReprovado}`;
}