// Função de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita o envio do formulário
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "admin" && password === "senha123") {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Função para o quiz
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita o envio do formulário

    const answer = document.querySelector('input[name="answer"]:checked');
    const resultElement = document.getElementById("result");

    if (!answer) {
        resultElement.textContent = "Por favor, escolha uma resposta!";
    } else {
        if (answer.value === "Hamilton") {
            resultElement.textContent = "Correto! Lewis Hamilton é o piloto mais vitorioso!";
        } else {
            resultElement.textContent = "Resposta incorreta. Tente novamente!";
        }
    }
});
