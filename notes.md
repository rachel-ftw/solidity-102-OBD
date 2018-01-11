
## Plan

intro to solidity IDE


## Research
- [Contract Interactions](https://zupzup.org/smart-contract-interaction/)
  - Smart contracts can call functions of other contracts and are even able create and deploy other contracts (e.g. issuing coins).
  - Use cases
    - Upgradable contracts : DEFINE
    - contracts as data store
      - separate logic and data into different smart contracts
      - logic-contract could be updated or swapped out via proxy, while retaining all the relevant state in the data-contract.
  - 3 methods for calling a contract
    - call - Execute code of another contract
    - delegatecall - Execute code of another contract, but with the state(storage) of the calling contract.
      - delegatecall involves a security-risk for the calling contract, as the called contract can access/manipulate the calling contracts storage.
    - callcode - (deprecated)
      - The delegatecall method was a bug fix for callcode, which did not preserve msg.sender and msg.value, so callcode is deprecated and will be removed in the future.
