CREATE DATABASE ubaturismo;

USE ubaturismo;

CREATE TABLE evento (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(40),
 descricao VARCHAR(255)
);

CREATE TABLE hobbie (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(30),
 descricao VARCHAR(255)
);

CREATE TABLE faixa_etaria (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45)
);

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255),
idade INT,
email VARCHAR(255),
senha VARCHAR(100),
administrador INT,
fkEvento INT,
fkHobbie INT,
fkFaixaEtaria INT,
CONSTRAINT fk_evento_usuario 
	FOREIGN KEY (fkEvento)
		REFERENCES evento(id),
CONSTRAINT fk_hobbie_usuario
	FOREIGN KEY (fkHobbie)
		REFERENCES hobbie(id),
CONSTRAINT fkFaixaEtaria_usuario
	FOREIGN KEY (fkFaixaEtaria)
		REFERENCES faixa_etaria(id),
CONSTRAINT fk_usuario_administrador
	FOREIGN KEY (administrador)
		REFERENCES usuario(id)
);

CREATE TABLE praia (
id INT PRIMARY KEY AUTO_INCREMENT, 
nome VARCHAR(30),
descricao VARCHAR(255)
);

CREATE TABLE usuario_praia (
idUsuario INT,
idPraia INT,
CONSTRAINT pk_usuario_praia 
	PRIMARY KEY (idUsuario, idPraia),
CONSTRAINT fk_usuario_praia
	FOREIGN KEY (idUsuario)
		REFERENCES usuario(id),
CONSTRAINT fk_praia_usuario
	FOREIGN KEY (idPraia)
		REFERENCES praia(id)
);

SELECT * FROM evento;

SELECT * FROM usuario;

SELECT * FROM praia;

SELECT * FROM usuario_praia;

INSERT INTO praia VALUES 
(1, 'Praia do Estaleiro do Padre', 'O mar na Praia do Estaleiro é bem calmo durante todo o ano, o que a torna boa pedida para famílias. O visual é cercado de verde e montanhas e, ao olhar para o mar, será possível ver diversas ilhas de Ubatuba'),
(2, 'Praia de Maranduba', 'Praia extensa e com boa infraestrutura, acessível pela rodovia, com águas calmas ideais para famílias, especialmente no centro, mas com pontos mais agitados para surfistas'),
(3, 'Praia de Fortaleza', 'É uma praia de águas calmas, ideal para famílias e mergulho, com uma rica vida marinha nas pedras do canto esquerdo'),
(4, 'Praia do Félix', 'Praia muito popular com águas cristalinas e paisagens deslumbrantes, dividida em duas áreas distintas: o canto direito é mais tranquilo, ideal para banhistas e crianças, com quiosques e sombra.'),
(5, 'Praia do Perequê Açu', 'É uma praia urbana bem popular e tradicional em Ubatuba, conhecida por sua extensa faixa de areia e mar calmo, ideal para famílias e banho.');

INSERT INTO evento VALUES 
(1, 'Festival de Verão', 'É um festival de música e entretenimento que ocorre anualmente no final de dezembro e início de janeiro em Ubatuba, litoral de São Paulo'),
(2, 'Visita ao Aquário de Ubatuba', 'É um centro de lazer educativo que mostra a biodiversidade marinha, com várias espécies de animais, incluindo peixes, tubarões, arraias, pinguins, cavalos-marinhos, águas-vivas e tartarugas'),
(3, 'Passeio na feirinha do Centro de Ubatuba', 'A Feirinha de Artesanato de Ubatuba, localizada na orla do Itaguá, é um espaço que oferece uma variedade de produtos locais, como artesanato, roupas, biquínis, óculos, artigos místicos e brinquedos'),
(4, 'Balada no Cafe de La Musique', 'É um beach club com alta gastronomia, drinks, música e um ambiente de celebração');
    
INSERT INTO hobbie VALUES 
(1, 'Caminhada na praia', 'Caminhada nas praias de ubatuba, é muito comum, específicamente em praias com faixas de areias mais extensas'),
(2, 'Tomar sorvete no passeio', 'Tomar sorvete no passeio, geralmente é mais comum á noite, quando as pessoas vão ao centro para passear'),
(3, 'Passear na feirinha', 'Passear na feirinha, geralmente ocorre a noite, pois as feirinhas só abrem a noite, onde as pessoas saem para passear'),
(4, 'Jogar vôlei ou futevôlei', 'Jogar vôlei ou futevôlei, é muito comum em praias de ubatuba, onde muitas praias possuem quadras de areia para este tipo de atividade');

INSERT INTO faixa_etaria VALUES
(1, 'Entre 18 e 25 anos'),
(2, 'Entre 26 e 35 anos'),
(3, 'Entre 36 e 45 anos'),
(4, 'Entre 46 e 55 anos'),
(5, 'Entre 56 e 65 anos'),
(6, 'Entre 66 e 75 anos'),
(7, 'Entre 76 e 85 anos'),
(8, 'Entre 86 e 95 anos');

SELECT 
	usuario_praia.idUsuario,
    usuario_praia.idPraia,
    usuario.fkEvento,
    usuario.fkHobbie
FROM usuario_praia 
JOIN usuario
	ON usuario.id = usuario_praia.idUsuario
ORDER BY usuario_praia.idUsuario ASC;	

SELECT 
	COUNT(usuario.fkFaixaEtaria) AS idade,
    faixa_etaria.nome
FROM usuario JOIN faixa_etaria
	ON usuario.fkFaixaEtaria = faixa_etaria.id
GROUP BY fkFaixaEtaria
ORDER BY fkFaixaEtaria ASC
LIMIT 1;

	
SELECT 
	COUNT(idPraia) AS praia,
    praia.nome
FROM usuario_praia JOIN praia
	ON usuario_praia.idPraia = praia.id
GROUP BY idPraia
ORDER BY idPraia ASC
LIMIT 1;

SELECT 
	COUNT(usuario.fkEvento) AS evento, 
    evento.nome
FROM usuario JOIN evento
	ON usuario.fkEvento = evento.id
GROUP BY fkEvento
ORDER BY fkEvento ASC
LIMIT 1;

SELECT 
	COUNT(usuario.fkHobbie) AS hobbie, 
    hobbie.nome
FROM usuario JOIN hobbie
	ON usuario.fkHobbie = hobbie.id
GROUP BY fkHobbie
ORDER BY fkHobbie ASC
LIMIT 1;

SELECT 
    COUNT(*) AS total
FROM usuario_praia 
JOIN praia 
	ON praia.id = usuario_praia.idPraia
GROUP BY praia.id
ORDER BY praia.id ASC;


SELECT 
    COUNT(*) AS total
FROM usuario 
JOIN evento
	ON evento.id = usuario.fkEvento
GROUP BY evento.id
ORDER BY evento.id ASC;