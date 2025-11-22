SHOW DATABASES;

USE ubaturismo;

CREATE TABLE evento (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(40),
 descricao VARCHAR(255)
);

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255),
idade INT,
email VARCHAR(255),
senha VARCHAR(100),
administrador INT,
fkEvento INT,
CONSTRAINT fk_evento_usuario 
	FOREIGN KEY (fkEvento)
		REFERENCES evento(id)
);

ALTER TABLE usuario ADD CONSTRAINT fk_usuario_administrador
	FOREIGN KEY (administrador)
		REFERENCES usuario(id);

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

SELECT usuario_praia.idUsuario, usuario_praia.idPraia, usuario.fkEvento 
	FROM usuario_praia JOIN usuario
		ON usuario_praia.idUsuario = usuario.id
	WHERE usuario_praia.idUsuario = 1;
    
