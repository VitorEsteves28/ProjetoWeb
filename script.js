// Validação de login
document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("form-login");
    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (email === "admin@fortes.com.br" && senha === "123456") {
                alert("Login bem-sucedido como Admin!");
                window.location.href = "index.html";
            } else if (email === "cooperativas@fortes.com.br" && senha === "123456") {
                alert("Login bem-sucedido como Cooperativa!");
                window.location.href = "index.html";
            } else {
                alert("E-mail ou senha inválidos.");
            }
        });
    }

    // Validação de cadastro
    const formCadastro = document.getElementById("form-cadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function (e) {
            e.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            const perfil = document.getElementById("perfil").value;

            if (!nome || !email || !senha || !perfil) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            alert(`Cadastro realizado como ${perfil}!`);
            window.location.href = "login.html";
        });
    }
});