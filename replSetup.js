global.config = {
  rpc: {
    host: "localhost",
    port: "8545",
  }
}

let { host, port } = global.config.rpc

global.solc = require("solc")
global.fs = require("fs")
global.Web3 = require("web3")

// connecting web3 instance to 
global.web3 = new Web3(`http://${host}:${port}`)

let accounts
web3.eth.getAccounts().then(data => accounts = data)

let acct1 = accounts[0]
let acct2 = accounts[1]
let acct3 = accounts[2]
let acct4 = accounts[3]
let acct5 = accounts[4]
