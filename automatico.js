let idHora = 1

let htmlSecuences = ''
let hora, steps
let index = 0
let listSecuences = []


//     `
// <div class="secuenceAdded">
//     <span>Hora: 10:00</span>
//     <span>Pasos: 7</span>
//     <button class="buttonAdd" id="buttonDel">
//         <i class='bx bx-minus'></i>
//     </button>
// </div>
// `


const buttonAdd = document.getElementById("buttonAdd");
// const buttonDel = document.getElementById("secuencesList");
const inputTime = document.getElementById("time")
const inputSteps = document.getElementById("steps")
const secuencesList = document.getElementById("secuencesList")

buttonAdd.addEventListener("click", handleAdd)
// buttonDel.addEventListener("click", handleDel)
secuencesList.addEventListener("click", (e) => {
    e.preventDefault()
    // console.log(e.target.id)
    if (e.target.id === "buttonDel") {
        console.log(e.target.dataset.id)
    }
})

inputTime.addEventListener("change", (e) => {
    hora = e.target.value
    console.log(hora)
})

inputSteps.addEventListener("change", (e) => {
    steps = e.target.value
    console.log(steps)
})

// { hora: '10:00', steps: 2 }

function addHtmlSecuence(hora, steps, index) {
    htmlSecuences =
        `
            <div class="secuenceAdded" data-id="${index}">
                <span>Hora: "${hora}"</span>
                <span>Pasos: "${steps}"</span>
                <button class="buttonAdd buttonDel" id="buttonDel" data-id="${index}">
                    -                    
                </button>
            </div>
            `
        + htmlSecuences

    console.log(htmlSecuences)
}

function handleAdd(e) {
    e.preventDefault()
    console.log('add:', hora, steps)
    listSecuences.push({ hora: hora, steps: steps, id: index })
    index += 1
    console.log(listSecuences)
    addHtmlSecuence(hora, steps, index)
    secuencesList.innerHTML = htmlSecuences
    steps = 1
    hora = '00:00'
}

// function handleDel(e) {
//     e.preventDefault()
//     console.log('del')
// }


