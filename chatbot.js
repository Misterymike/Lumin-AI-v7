function sendQuestion(question) {
    document.getElementById('userInput').value = question;
    sendUserInput();
}

function sendUserInput() {
    let userInput = document.getElementById('userInput').value.toLowerCase();
    let responseBox = document.getElementById('chatResponse');
    let responseText = '';

    // Compreensão de saudações
    if (["olá", "oi", "bom dia", "boa tarde", "boa noite"].includes(userInput)) {
        responseText = "Olá! Como posso ajudar-te hoje?";
    } else if (userInput.includes('lumin ai')) {
        responseText = 'LUMIN AI é um assistente virtual projetado para ajudar na automatização e eficiência financeira.';
    } else if (userInput.includes('dinheiro')) {
        responseText = 'Com IA, podes criar fluxos de rendimento passivo automatizados. Queres saber mais? Também podes explorar o nosso eBook exclusivo sobre como ganhar dinheiro com IA. <a href="LINK_EBOOK">Comprar eBook</a>';
    } else if (userInput.includes('vantagens da ia')) {
        responseText = 'A inteligência artificial pode aumentar a produtividade, reduzir erros e criar novas oportunidades de negócio! Para saber mais sobre como a IA pode beneficiar-te, dá uma olhada no nosso eBook <a href="LINK_EBOOK">Comprar eBook</a>';
    } else if (userInput.includes('como ganhar dinheiro')) {
        responseText = 'O nosso eBook explica passo a passo como podes ganhar dinheiro com IA. Descobre estratégias exclusivas aqui <a href="LINK_EBOOK">Comprar eBook</a>';
    } else {
        responseText = 'Desculpa, não entendi. Podes reformular a pergunta?';
    }

    responseBox.innerHTML = '<p><strong>LUMIN AI:</strong> ' + responseText + '</p>';
    
    // Remover tags HTML antes da narração
    let plainTextResponse = responseText.replace(/<[^>]*>/g, '');
    
    let utterance = new SpeechSynthesisUtterance(plainTextResponse);
    utterance.lang = 'pt-PT';
    utterance.rate = 1.1;
    speechSynthesis.speak(utterance);
}
