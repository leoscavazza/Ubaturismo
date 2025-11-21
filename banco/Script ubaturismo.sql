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

select * from usuario;



