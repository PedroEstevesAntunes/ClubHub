// NOTA INICIAL: este ficheiro fonte define a interação com a interface gráfica (GUI) da app; o "business object" da app está em hospital.js

import { clubHub } from "./clubHub.js"; // Refereri a um objeto declarado como exportado naquele outro ficheiro

const payment = document.getElementById("payment"); // Uma <table> no HTML

let tr; // Referirão a novos elementos HTML a inserir na página
let td;

for (const payment of clubHub.partnerPayment.values()) { // Criar uma iteração para obter todas as consultas
    tr = document.createElement("tr"); // Criar um <tr> a inserir na <table>
    payment.appendChild(tr);
    for (const campo of Object.values(payment)) { // Iterar em todos os campos de cada consulta
        td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
        td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
        tr.appendChild(td);
    }
}