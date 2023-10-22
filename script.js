
const form = document.querySelector('form')

const input = document.getElementById('input');
const labelAviso1 = document.getElementById('labelAviso1')
const labelAviso2 = document.getElementById('labelAviso2')

const btnAdd = document.getElementById('button-addd')
const btnDel = document.getElementById('btn-delete')

const ulTarefas = document.getElementById('ulTarefas');


// input.addEventListener('keyup', () => {

//     let inputTarefaEscrita = input.value.toLowerCase()

//     let tarefasLi = ulTarefas.getElementsByTagName('li')



//     for (let posicao in tarefasLi) {
//         if (true === isNaN(posicao)) {
//             continue;
//         };

//         let tarefasConteudo = tarefasLi[posicao].innerHTML.toLowerCase()

//         if (true === tarefasConteudo.includes(inputTarefaEscrita)) {

//             if (inputTarefaEscrita.length > 2) {
//                 console.log("true")
//             } else {
//                 console.log("false")
//             }
//         }
//     }
// });


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputTarefaEscrita = input.value.toLowerCase()

    if (!inputTarefaEscrita.trim(" ")) {
        labelAviso1.classList.remove('aviso')
        return labelAviso2.classList.add('aviso')
    } else {
        labelAviso2.classList.remove('aviso')
    }

    //=================

    let tarefasLi = ulTarefas.getElementsByTagName('li')

    for (let posicao in tarefasLi) {
        if (true === isNaN(posicao)) {
            continue;
        };

        let tarefasConteudo = tarefasLi[posicao].innerHTML.toLowerCase()

        if (true === tarefasConteudo.includes(inputTarefaEscrita.trim(" "))) {
            if (inputTarefaEscrita.length > 2) {
                labelAviso2.classList.remove('aviso')
                return labelAviso1.classList.add('aviso');
            }
        } else {
            labelAviso1.classList.remove('aviso')
        }

    }

    //=================

    const novaTarefa = document.createElement('li')
    novaTarefa.setAttribute('class', 'li')
    novaTarefa.innerHTML = `- ${inputTarefaEscrita.trim(" ")}`
    ulTarefas.appendChild(novaTarefa)

    input.value = " "

    const btnLixeira = document.createElement("img")
    btnLixeira.setAttribute("src", "./image.png")
    btnLixeira.setAttribute("class", "btn-delete")
    novaTarefa.append(btnLixeira)

    btnLixeira.addEventListener('click', (e) => {
        return ulTarefas.removeChild(e.target.parentNode)
    })
})


