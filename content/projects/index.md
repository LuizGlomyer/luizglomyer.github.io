---
title: "Projects"
description: "Projects page content"
showDate: false
date: 3
---

## ⚙️ Sistemas
### ⛓️ Blockchain Logger
A `microservice` running in a `Docker` container that uses a Blockchain network to save log data. Created in `Python` and Flask, it acts as the logger for an API, creating records for each action taken by the user, generating retractability and aiding auditing processes.

Accesses to the external API trigger a call to a Logger endpoint, which formats the information and saves it on the `Ethereum` Blockchain, guaranteeing the reliability of the saved data. To do this, **Smart Contracts** were implemented in the Solidity language, responsible for executing the logic to save the data on the network. Automated tests using the PyTest library are able to verify that the application works.

Demonstration:
{{< youtubeLite id="91tpNckPmTY" label="Blockchain Logger" >}}

{{< github repo="LuizGlomyer/blockchain-logger" >}}


## 📡 IOT
### 🔥 EMBER
An access control system written in Python that I did as a final project proposal for my Information Systems course. It uses a `Raspberry Pi` to act as a mediator to allow or deny access to computer resources via a `RFID` reader and cards.

![Fritzing Model](https://camo.githubusercontent.com/af434c2cd5fc29b530ddf1583b4a0ce04dec832a70d63af04dd8c2f69a821fb9/68747470733a2f2f66696c65732e636174626f782e6d6f652f6879713233722e706e67)

EMBER stands for **E**ntry **M**ediated by **B**lockchain, **E**thereum and **R**aspberry. Unfortunately, the project proposal was not approved, so the code does not include the Blockchain aspect of the project. However, the access control system is fully functional.

Demonstration:
{{< youtubeLite id="SfwXLK8K3jo" label="Ember System Demonstration" >}}

{{< github repo="LuizGlomyer/ember" >}}


### 💡 Arduino Game
I implemented the Simon Says game using an `Arduino`. Its own data structure manages the state of the game, such as the number of consecutive hits.

Demonstration:
{{< youtubeLite id="dKHzynisGoc" label="Simon Says Arduino video" >}}

Using a piezzo buzzer, I've implemented a victory song in case the player achieves *N* hits.

Demonstration:
{{< youtubeLite id="I_XhnoZ0FBU" label="Megalovania in an Arduino Buzzer video" >}}

{{< github repo="LuizGlomyer/arduino" >}}


## 📜 Legacy code
These are some of the codes I created during my college years. I call them legacy because I realize that they don't have the quality I need these days. But they are still interesting applications.

Various projects to create mobile applications using the Dart language and the Flutter framework:
{{< github repo="LuizGlomyer/flutter" >}}

Various codes. The main ones are the various codes I've made in C++, from data structures (Graphs, Trees, Linked Lists) to sorting and string matching algorithms.
{{< github repo="LuizGlomyer/codigos-diversos" >}}

API for generating random names, in both Portuguese and English. I plan to update it in the future.
{{< github repo="LuizGlomyer/name-generator" >}}

## 👨‍💻 In development

Project with:
- React
- CI/CD & Github actions

Project with:
- NestJS & Clean Architecture
- TDD & DDD
- CI/CD
- Cloud
