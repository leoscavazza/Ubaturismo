var idade_usuario = localStorage.IDADE_USUARIO;
var imagem_evento = document.getElementById("imagem_evento");
var imagem_praia = document.getElementById("imagem_praia");
var texto_evento = document.getElementById("texto_evento");
var texto_praia = document.getElementById("texto_praia");

if (idade_usuario > 40) {
    imagem_evento.innerHTML = `<img src="assets/imgs/galeria_maranduba.jpg" alt="Galeria de Maranduba"></img>`;
    texto_evento.innerHTML = `
    <h2>Galeria de Maranduba</h2>
    <p>
      A Galeria de Maranduba localizada em Maranduba, é um dos pontos turísticos mais visitados de Ubatuba, 
      conta com uma 
      grande variedade de comércios, desde artefatos até ao ramo de alimentícios. É um ótimo lugar para 
      passear com
      a família e com amigos, com diversas opções de diversão para crianças. Além disso a galeria ainda
      conta com
      apresentações musicais aos finais de semana, ideal para quem busca diversão e tranquilidade com a 
      família       
      Acompanhe a localização com o link: <a style="color: rgb(48, 89, 225);" href="https://maps.app.goo.gl/7Vy9GbVgGXJhzWCs6">https://maps.app.goo.gl/7Vy9GbVgGXJhzWCs6</a>
    </p>`;
    imagem_praia.innerHTML = `<img src="assets/imgs/estaleiro_home.jpg" alt="Praia do Estaleiro">`;
    texto_praia.innerHTML = `
    <h2>Praia do Estaleiro</h2>
    <p>
      A praia Estaleiro do Padre é ideal para aqueles que buscam paz e tranquilidade. Fica localizada entre 
      as praias 
      do norte, específicamente entre a praia do Ubatumirim e a praia da Almada. É uma das praias ideais 
      para crianças e para quem curte caminhada,
      com uma faixa de areia extensa de aproximadamente um quilômetro e meio , é uma das praias mais calmas 
      de águas 
      tranquilas de Ubatuba!
    </p>`;
}

var nome_usuario = document.getElementById("nome_usuario");
var nome_banner = localStorage.NOME_USUARIO;

nome_usuario.innerHTML = `${nome_banner}!`;