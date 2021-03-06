---
sidebar_position: 2
---

# Algorand ecosystem

Under the hood, [DeCash tokens](/docs/concepts/tokens) use [Algorand](https://www.algorand.com/) blockchain, which is abstracted
from end users by [DeCash API](/docs/api/overview). Comparing to [Ethereum](https://ethereum.org/en/),
Algorand has these advantages:

+ Low fees, which equal to fractions of a penny.
+ Almost instant transaction confirmations.
+ Smart contracts and [smart signatures](https://developer.algorand.org/docs/get-details/dapps/smart-contracts/#smart-signatures),
  which allow for out-of-the-box transaction delegation.

DeCash tokens abstract Algorand, meaning that you don't need to think of the underlying blockchain architecture and instead use
the [convenient API](/docs/api/overview) provided by DeCash. However, from the user's perspective, the user still needs to install and
manage any [Algorand Wallet](#wallets) of their choice before DeCash releases tools (UI, Wallets) for DeCash assets management.


## Wallets

In order to use and transact in [DeCash tokens](/docs/concepts/tokens), you need to obtain any Algorand wallet. Pick any of the
[existing wallets](https://www.google.com/search?q=algorand+wallet) supporting [WalletConnect](https://walletconnect.com/):

+ [Algorand official wallet](https://algorandwallet.com/) (mobile app)

There are other wallets available which don't support WalletConnect as of 2021:

+ [AlgoSigner](https://www.purestake.com/technology/algosigner/) (a Chrome extension wallet)
+ [My Algo Algorand Wallet](https://wallet.myalgo.com/) (web-based wallet)


## Networks

DeCash uses two networks on Algorand:

+ Algorand [main network](https://algoexplorer.io/)
+ Algorand [test network](https://testnet.algoexplorer.io/)

To find out which assets are used in these networks, see [token addresses](/docs/concepts/tokens/#token-addresses).


