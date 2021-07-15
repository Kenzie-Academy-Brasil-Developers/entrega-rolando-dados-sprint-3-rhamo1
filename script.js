let contador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const dados = () => {

    for (let i = 0; i < 1000; i++) {


        let dado1 = Math.floor(Math.random() * 6) + 1;

        let dado2 = Math.floor(Math.random() * 6) + 1;

        let soma = dado1 + dado2;

        contador[soma - 2] += 1;

    }
}

const resultado = function () {

    

    for (let i = 0; i < 11; i++) {


        // cria elemento na página.

        const saida = document.getElementById('saida');

        const div = document.createElement('div');

        //imprime resultado das rolagens

        const conteudo = document.createTextNode('O número ' + (i + 2) + ' ocorreu: ' + contador[i] + ' vezes!');

        //grafico

        const grafico = document.createElement('div')

        grafico.classList.add('grafico');
        grafico.classList.add('reset')



        div.appendChild(conteudo);
        div.appendChild(grafico);
        saida.appendChild(div);

        grafico.style.width = `${contador[i]}px`;

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        grafico.style.backgroundColor = "#" + randomColor;

    }


}

dados();

resultado();


botao.addEventListener("click", function () {

    const reseta = document.getElementById('saida')
    reseta.innerHTML = ''

    contador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    dados();

    resultado();

});S