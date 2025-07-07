const botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
  const mensagem = document.querySelector('.mensagem');
  mensagem.textContent = 'Olá, eu sou o Miguel! Seja bem vindo ao meu site!';
})