   const resultado = document.getElementById("resultado");

resultado.style.display = "block";

resultado.innerHTML =
    "<h3>📊 Resultado</h3>" +
    "<p><strong>Número inicial:</strong> " + sequencia[0] + "</p>" +
    "<p><strong>Quantidade de passos:</strong> " + passos + "</p>" +
    "<p><strong>Sequência:</strong><br>" +
    sequencia.join(" → ") +
    "</p>";