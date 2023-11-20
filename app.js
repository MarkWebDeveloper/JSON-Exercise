function app() {
    printTitles('./data.json')
    makeTableFromJson('./data.json')
}

// Exercise 1

function printTitles(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results.forEach((element) => {
                console.log(element.title)
            }))
        })
        .catch((error) => console.error('Error fetching JSON:', error));
}

// Exercise 2

let table = document.getElementById("table")
let headers = document.getElementById("table-headers")
let cells = document.getElementById("table-rows")
let tableBody = document.getElementById("tbody")

function makeTableFromJson(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((element, index) => {
                let keys = Object.keys(element)
                if (index < data.results.length - 1) {
                    headers.innerHTML += /* html */ `
                    <th>${keys[index]}</th>
                    `
                }
            })

            data.results.forEach((element, index) => {
                tableBody.innerHTML += /* html */ `
                <tr id="table-row-${index + 1}"></tr>
                `
            })

            data.results.forEach((element, index) => {
                let row = document.getElementById(`table-row-${index + 1}`)
                let values = Object.values(element)
                data.results.forEach((element, index) => {
                    if (index < data.results.length - 1) {
                        row.innerHTML += /* html */ `
                        <td>${values[index]}</td>
                        `
                    }
                })
            })
        })
}

app()


