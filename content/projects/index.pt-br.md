---
title: "Projetos"
description: "Projects page content"
showDate: false
date: 3
---

## ⚙️ Sistemas
### ⛓️ Blockchain Logger
Um `microserviço` executado em um container `Docker` que utiliza uma rede Blockchain para salvar dados de log. Criado em `Python` e Flask, atua como o logger de uma API, criando registros a cada ação tomada pelo usuário, gerando retratabilidade e auxiliando processos de auditoria.

Acessos na API externa disparam uma chamada a um endpoint do Logger, que formata a informação e a salva na Blockchain `Ethereum`, garantindo confiabilidade nos dados salvos. Para isso, foram implementados **Smart Contracts** na linguagem Solidity, responsável por executar a lógica para salvar os dados na rede. Testes automatizados usando a biblioteca PyTest são capazes de atestar o funcionamento da aplicação.

Demonstração:
{{< youtubeLite id="91tpNckPmTY" label="Blockchain Logger" >}}

{{< github repo="LuizGlomyer/blockchain-logger" >}}


## 📡 IOT
### 🔥 EMBER
Um sistema de controle de acesso escrito em Python que fiz como proposta de projeto final do meu curso de Sistemas de Informação. Usa um `Raspberry Pi` para atuar como mediador para permitir ou negar acesso a recursos computacionais por meio de um leitor e cartões `RFID`.

![Fritzing Model](ember-diagram.png)

EMBER significa **E**ntrada **M**ediada por **B**lockchain, **E**thereum e **R**aspberry. Infelizmente a proposta do projeto não foi aprovada, então o código não contempla o aspecto Blockchain do projeto. No entanto, o sistema de controle de acesso está totalmente funcional.

Demonstração:
{{< youtubeLite id="SfwXLK8K3jo" label="Ember System Demonstration" >}}

{{< github repo="LuizGlomyer/ember" >}}


### 💡 Arduino Game
Fiz a implementação do jogo Simon Says usando um `Arduino`. Uma estrutura de dados própria gerencia o estado do jogo, como a quantidade de acertos consecutivos.

Demonstração:
{{< youtubeLite id="dKHzynisGoc" label="Simon Says Arduino video" >}}

Utilizando um piezzo buzzer, implementei uma música de vitória para o caso do jogador conseguir alcançar uma quantidade *N* de acertos.

Demonstração:
{{< youtubeLite id="I_XhnoZ0FBU" label="Megalovania in an Arduino Buzzer video" >}}

{{< github repo="LuizGlomyer/arduino" >}}


## 📜 Legacy code
Estes são alguns códigos que criei durante meus anos de aprendizado na faculdade. Os chamo de legado pois, atualmente, observo que eles não possuem a qualidade que eu preso nos dias de hoje. Mas mesmo assim não deixam de ser aplicações interessantes.

Projetos diversos de criação de aplicativos para celular utilizando a linguagem Dart e o framework Flutter:

{{< github repo="LuizGlomyer/flutter" >}}

Códigos sortidos. O principal são os diversos códigos que fiz em C++, desde estruturas de dados (Grafos, Árvores, Listas Encadeadas) até algoritmos de ordenação e string matching.

{{< github repo="LuizGlomyer/codigos-diversos" >}}

API para gerar nomes aleatórios, tanto em português quanto em inglês. Pretendo dar uma atualizada no futuro.

{{< github repo="LuizGlomyer/name-generator" >}}

## 👨‍💻 Em desenvolvimento

Projeto com:
- React
- CI/CD & Github Actions

Projeto com:
- NestJS & Clean Architecture
- TDD & DDD
- CI/CD
- Cloud
