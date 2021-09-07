// 1º Checkpoint
// Grupo 7: Fernando Limões, Jehan Lucas, Karina Osuka, Pedro Menezes, Ráfaga Alexandre, Victor Rocha

/* - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

const microondas = {
      pratos: ["🍿 Pipoca", "🍝 Macarrão", "🍖 Carne", "🥜 Feijão", "🧁 Brigadeiro"],
      tempos: [10, 8, 15, 12, 8],
    
      definir : function (prato, tempo) {
        const pratoPedido = microondas.pratos[prato];
        const timer = microondas.tempos[prato];
    
        if (!pratoPedido) {
          return "❔ Esse prato não existe";
        } else if (tempo >= timer * 2 && tempo < timer * 3) {
          return "♨️ Vix, teu prato queimou";
        } else if (tempo >= timer * 3) {
          return "💥 KABUUUM!";
        } else if (tempo < timer) {
          return "⏰ Tempo insuficiente";
        } else {
          return "💡 Seu prato está pronto";
        }
      }
}
    
console.log("No microondas existem 5 opções: \n[0]Pipoca: 10 segundos, \n[1]Macarrão: 8 segundos, \n[2]Carne: 15 segundos, \n[3]Feijão: 12 segundos e \n[4]Brigadeiro: 8 segundos. \nEscolha o tempo que quiser, com cuidado pra não queimar.")

console.log("")

console.log("---TESTES DO MICROONDAS---")
console.log((microondas.pratos[0]) + ": " + (microondas.definir(0, 20))); // Pipoca: Vix, teu prato queimou
console.log((microondas.pratos[0]) + ": " + (microondas.definir(0, 30))); // Pipoca: KABUUUM!
console.log((microondas.pratos[1]) + ": " + (microondas.definir(1, 7))); // Macarrão: Tempo insuficiente
console.log((microondas.pratos[1]) + ": " + (microondas.definir(1, 8))); // Macarrão: Seu prato está pronto
console.log((microondas.pratos[2]) + ": " + (microondas.definir(2, 15))); // Carne: Seu prato está pronto
console.log((microondas.pratos[2]) + ": " + (microondas.definir(2, 45))); // Carne: KABUUUM!
console.log((microondas.pratos[3]) + ": " + (microondas.definir(3, 11))); // Feijão: Tempo insuficiente
console.log((microondas.pratos[3]) + ": " + (microondas.definir(3, 12))); // Feijão: Seu prato está pronto
console.log((microondas.pratos[4]) + ": " + (microondas.definir(4, 8))); // Brigadeiro: Seu prato está pronto
console.log((microondas.pratos[4]) + ": " + (microondas.definir(4, 24))); // Brigadeiro: KABUUUM!
console.log((microondas.pratos[5]) + ": " + (microondas.definir(5, 24))); // ❔ Esse prato não existe