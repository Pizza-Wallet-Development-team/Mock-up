# Pizza Wallet

## Table of contents
- [Description](#description)
    - [Integrations](#integrations)
    - [Supported Chains](#supported-chains)
- [Development Guide](#development-guide)
    - [Requirements](#requirements)
    - [Install all dependencies](#install-all-dependencies)
    - [Create a Moralis Testnet Server](#create-a-moralis-testnet-server)
    - [Start a Development Server](#start-the-webpack-development-server)
    - [Build App](#build-app)
    - [Docker](#docker)
- [Contribute](#contribute)

## Description

A self custodial user focused wallet with built in DeFi features.

### Integrations

- [Moralis](https://moralis.io/) - Web3 Tools
- [LI.FI](https://li.fi/) - Cross Chain Swap
- [Onramper](https://onramper.com/) - Fiat Onramp & Offramp

### Supported Chains

- Ethereum
- Fantom
- Polygon
- Avalanche
- Arbitrum
- Optimism
- Binance
- Harmony
- Gnosis
- Celo

## Development Guide

### Requirements

It is recommended to be running a Debian or Ubuntu based Linux distribution. <br>
In order to install the requirements for another OS, please refer to the official guides.  

1. NVM
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash && source ~/.nvm/nvm.sh
```
2. Node
```sh
nvm use --lts
```
3. Yarn
```sh
npm install --global yarn
```

### Install all dependencies:

```sh
yarn install
```

### Create a Moralis Testnet Server

1. Go to Moralis and create a testnet server with the following test chains: Eth (Kovan), Polygon (Mumbai), Bsc (Testnet), Avax (Testnet)

2. Set Environment variables <br>
2.1 Click View Details for your newly created instance <br>
2.2 Copy and save both "Server URL" and "Application ID" <br>
2.3 Export environment variables
```sh
export REACT_APP_MORALIS_SERVER_URL=[Insert your Server URL] && export REACT_APP_MORALIS_APPLICATION_ID=[Insert your Application ID]
```
or <br>
2.4 Create a .env file <br>
2.5 Edit the .env file <br>
```shell
REACT_APP_MORALIS_SERVER_URL=[Insert your Server URL]
REACT_APP_MORALIS_APPLICATION_ID=[Insert your Application ID]
```

### Start the Webpack Development Server:

```sh
yarn start
```

or

### Build App:

```sh
yarn build
```

### Docker

We recommend developing with Docker. This ensures you're development environment is isolated from the rest of your machine. Refer to the official documentation to install Docker. ([Docs](https://docs.docker.com/desktop/linux/install/))

```sh
docker-compose -f docker-compose-dev.yml up --build
```

## Contribute

- We love builders! Here's how you can help.

#### The Builder:
- Contact `info@pizzawallet.io` to see where you can be the most useful.
    
#### The Bug Fixer:
- Check github's [issues](https://github.com/Pizza-Wallet-Development-team/pizza-wallet/issues) to see what needs to be fixed.

#### The Bug Hunter:
- Found a bug? Either contact us at `info@pizzawallet.io` or create a new [issues](https://github.com/Pizza-Wallet-Development-team/pizza-wallet/issues).
