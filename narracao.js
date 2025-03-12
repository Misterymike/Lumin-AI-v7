function narrar(nome, descricao) {
    const mensagem = `Apresentando o ${nome}. ${descricao}`;
    const msg = new SpeechSynthesisUtterance(mensagem);
    msg.lang = 'pt-PT';
    window.speechSynthesis.speak(msg);
}
