function narrar(titulo, texto) {
    const mensagem = new SpeechSynthesisUtterance();
    mensagem.text = `${titulo}. ${texto}`;
    mensagem.lang = 'pt-PT';
    mensagem.rate = 1;
    speechSynthesis.speak(mensagem);
}
