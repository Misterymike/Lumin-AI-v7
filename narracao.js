function narrar(nome, mensagem) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(mensagem);
    utterance.lang = 'pt-PT'; // Define o idioma para português de Portugal
    utterance.rate = 1.0; // Velocidade da fala normal
    utterance.pitch = 1.0; // Tom de voz normal

    // Iniciar a narração
    synth.speak(utterance);

    // Exibir feedback visual no console
    console.log(`Narração ativada: ${nome} - ${mensagem}`);
}
