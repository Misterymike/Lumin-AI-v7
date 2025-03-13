<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Os 7 Lumins AI</title>
    <link rel="stylesheet" href="style.css">
    <script src="narracao.js" defer></script>
</head>
<body>

    <header>
        <h1>🔷 Os 7 Lumins AI</h1>
        <nav>
            <a href="index.html">Página Inicial</a>
            <a href="sobre.html">Sobre</a>
            <a href="testemunhos.html">Testemunhos</a>
            <a href="faq.html">FAQ</a>
            <a href="compra.html" class="cta">Comprar Agora</a>
        </nav>
    </header>

    <main>
        <h2>✨ Conheça os Lumins AI! ✨</h2>

        <div class="lumin-container">
            <div class="lumin-card">
                <img src="Lumin Ai FINANCEIRO.webp" alt="Lumin AI Financeiro">
                <h3>💰 LUMIN AI Financeiro</h3>
                <p>Gestão de investimentos, previsão de tendências e planejamento financeiro.</p>
            </div>
            <div class="lumin-card">
                <img src="Lumin Ai Recicle.webp" alt="Lumin AI Recicle">
                <h3>♻️ LUMIN AI Recicle</h3>
                <p>Ajuda na reciclagem com identificação de materiais e conexões com serviços.</p>
            </div>
        </div>
    </main>

    <!-- CHATBOT REAL -->
    <div id="chatbot">
        <h2>🤖 Fale com o LUMIN AI</h2>
        <input type="text" id="pergunta" placeholder="Escreva a sua pergunta...">
        <button onclick="enviarPergunta()">Enviar</button>
        <p id="resposta"></p>
    </div>

    <script>
        function narrar(texto) {
            let mensagem = new SpeechSynthesisUtterance(texto);
            mensagem.lang = "pt-PT"; // Definir a voz para português
            speechSynthesis.speak(mensagem);
        }

        function enviarPergunta() {
            let pergunta = document.getElementById("pergunta").value.toLowerCase();
            let resposta = "";

            if (pergunta.includes("lumins")) {
                resposta = "Os Lumins AI são assistentes inteligentes que ajudam em diversas áreas como finanças, segurança, reciclagem e muito mais. Qual deles gostaria de saber mais?";
            } else if (pergunta.includes("financeiro")) {
                resposta = "O LUMIN AI Financeiro ajuda a prever tendências, otimizar investimentos e planejar o seu futuro financeiro.";
            } else if (pergunta.includes("reciclagem")) {
                resposta = "O LUMIN AI Recicle identifica materiais recicláveis e conecta você com os melhores serviços de sustentabilidade.";
            } else if (pergunta.includes("comprar")) {
                resposta = "Ótima escolha! Você pode garantir o seu LUMIN AI agora mesmo clicando em 'Comprar Agora'. Precisa de ajuda para escolher um?";
            } else {
                resposta = "Não entendi bem. Pode reformular a sua pergunta?";
            }

            document.getElementById("resposta").innerText = resposta;
            narrar(resposta);
        }
    </script>

    <style>
        /* Melhorando a experiência do chatbot */
        #chatbot {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background: #1e1e1e;
            color: white;
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        #pergunta {
            width: 80%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
        }

        #resposta {
            font-size: 1.2em;
            margin-top: 10px;
        }
    </style>

    <footer>
        <p>&copy; 2025 LUMIN AI - Todos os direitos reservados.</p>
    </footer>

</body>
</html>
