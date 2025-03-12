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
        responseText = "Olá! Como posso ajudar-te hoje? 😊";
    } else if (userInput.includes('lumin ai')) {
        responseText = 'LUMIN AI é um assistente virtual projetado para ajudar na automatização e eficiência financeira. Descobre os nossos serviços em <a href="index.html">LUMIN AI</a>.';
    } else if (userInput.includes('dinheiro')) {
        responseText = 'Com IA, podes criar fluxos de rendimento passivo automatizados. Queres saber mais? Explora o nosso eBook exclusivo 📘 👉 <a href="comprar.html?plano=ebook">Comprar eBook</a>';
    } else if (userInput.includes('vantagens da ia')) {
        responseText = 'A inteligência artificial pode aumentar a produtividade, reduzir erros e criar novas oportunidades de negócio! Explora o nosso eBook 📘 👉 <a href="comprar.html?plano=ebook">Comprar eBook</a>';
    } else if (userInput.includes('como ganhar dinheiro')) {
        responseText = 'O nosso eBook explica passo a passo como podes ganhar dinheiro com IA. 📘 Descobre estratégias exclusivas aqui 👉 <a href="comprar.html?plano=ebook">Comprar eBook</a>';
    
    // Respostas para os Lumins AI
    } else if (userInput.includes('financeiro')) {
        responseText = 'O LUMIN AI Financeiro ajuda-te a analisar o mercado e investir melhor. 📊 <a href="lumin-financeiro.html">Saber Mais</a>';
    } else if (userInput.includes('assistente')) {
        responseText = 'O LUMIN AI Assistente auxilia-te nas tuas tarefas diárias e organização. 🤖 <a href="lumin-assistente.html">Saber Mais</a>';
    } else if (userInput.includes('agent')) {
        responseText = 'O LUMIN AI Agent é ideal para desenvolvedores e criadores de projetos de IA. 🔧 <a href="lumin-agent.html">Saber Mais</a>';
    } else if (userInput.includes('educador')) {
        responseText = 'O LUMIN AI Educador otimiza o ensino e a aprendizagem com IA. 📚 <a href="lumin-educador.html">Saber Mais</a>';
    } else if (userInput.includes('automação')) {
        responseText = 'O LUMIN AI Automação melhora processos empresariais e fluxos de trabalho. ⚙️ <a href="lumin-automacao.html">Saber Mais</a>';
    } else if (userInput.includes('investidor')) {
        responseText = 'O LUMIN AI Investidor encontra as melhores oportunidades financeiras. 📈 <a href="lumin-investidor.html">Saber Mais</a>';
    } else if (userInput.includes('suporte')) {
        responseText = 'O LUMIN AI Suporte resolve problemas e otimiza atendimento ao cliente. 🎧 <a href="lumin-suporte.html">Saber Mais</a>';

    // Links diretos para planos
    } else if (userInput.includes('comprar') || userInput.includes('planos')) {
        responseText = 'Explora os nossos planos e escolhe o melhor para ti! 🛒 <a href="comprar.html">Ver Planos</a>';

    } else {
        responseText = 'Desculpa, não entendi. Podes reformular a pergunta? Ou explora os serviços do LUMIN AI: <a href="index.html">Descobrir</a>';
    }

    responseBox.innerHTML = '<p><strong>LUMIN AI:</strong> ' + responseText + '</p>';
    
    // Narração por voz melhorada
    let utterance = new SpeechSynthesisUtterance(responseText.replace(/<[^>]*>/g, ''));
    utterance.lang = 'pt-PT';
    utterance.rate = 1.1;
    speechSynthesis.speak(utterance);
}
