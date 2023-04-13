const apiUrl = "https://api.datamuse.com/words?md=d";
document.getElementById("btnBuscar").addEventListener("click", () => {
const palabra = document.getElementById("palabra").value;
const url = `${apiUrl}&sp=${palabra}`;
const surl = `${apiUrl}&rel_syn=${palabra}`;
fetch(url)
.then(response => response.json())
.then(data => {
    const definitions = data[0].defs.slice(0, 3); // Limita a 3 resultados
    const lista = document.getElementById("listaDefiniciones");
    lista.innerHTML = "";
    definitions.forEach(def => {
    const li = document.createElement("li");
    li.classList.add("definicion");
    li.textContent = def;
    lista.appendChild(li);
    });
})
.catch(error => console.error("Error al obtener las definiciones:", error));
fetch(surl)
.then(response => response.json())
.then(data => {
    const definitions = data[0].defs.slice(0, 3); // Limita a 3 resultados
    const lista = document.getElementById("listasinonimos");
    lista.innerHTML = "";
    definitions.forEach(def => {
    const li = document.createElement("li");
    li.classList.add("sinonimo");
    li.textContent = def;
    lista.appendChild(li);
    });
})
.catch(error => console.error("Error al obtener las definiciones:", error));
});


fetch("https://random-word-api.herokuapp.com/word")
.then(response => response.json())
.then(data => {
    document.getElementById("palabra").value = data[0];
    document.getElementById("btnBuscar").click();
})
.catch(error => console.error("Error al obtener las definiciones:", error));





