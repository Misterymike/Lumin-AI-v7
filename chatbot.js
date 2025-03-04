function sendQuestion(question) {
    document.getElementById('userInput').value = question;
    sendUserInput();
}

function sendUserInput() {
    let userInput = document.getElementById('userInput').value;
    let responseBox = document.getElementById('chatResponse');
    let responseText = '';

    if (userInput.toLowerCase().includes('lumin ai')) {
        responseText = 'LUMIN AI é um assistente virtual projetado para ajudar na automatização e eficiência financeira.';
    } else if (userInput.toLowerCase().includes('dinheiro')) {
        responseText = 'Com IA, podes criar fluxos de rendimento passivo automatizados.';
    } else {
        responseText = 'Desculpa, não entendi. Podes reformular a pergunta?';
    }

    responseBox.innerHTML = '<p><strong>LUMIN AI:</strong> ' + responseText + '</p>';
    
    // Narração por voz melhorada
    let utterance = new SpeechSynthesisUtterance(responseText);
    utterance.lang = 'pt-PT';
    utterance.rate = 1.1;
    speechSynthesis.speak(utterance);
}
