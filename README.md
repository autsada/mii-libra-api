Mii Libra API is a graphql api for interacting with [the Libra Blockchain](https://libra.org/en-US/ "the Libra Blockchain") (testnet), it acts as a data layer in front of the blockchain. It abstracts the complexity of serialization and deserialization away, made it easy to interact with the Libra Blockchain.

API Endpoint:

https://libra-graphql.herokuapp.com

There are 3 types of API available - Query APIs, Mutation APIs, and Subscription API.

### Query APIs

**queryByAddress(address)** - returns **get_account_state_response: {account_state_with_proof}** of the given account address argument.

**queryBySequenceNumber(address, sequenceNumber)** - returns **transaction_with_proof** of the given account address and sequence number arguments.

**querySentEvents(address)** - return **events_with_proof** (all sent events) of the given account address argument.

**queryReceivedEvents(address)** - return **events_with_proof** (all received events) of the given account address argument.

### Mutation APIs

**createAccount()** - returns **address** _(hex string)_, **publicKey** _(hex string)_, and **mnemonic** _(string - words)_.
Note: this API is not involving with the Libra Blockchain.

**mintCoin(address, amount)** - returns **get_account_state_response: {account_state_with_proof}** which is the latest state of the given address argument. The newly minted coins will be reflected in the balance.

**transferCoins( fromAddress, sequenceNumber, toAddress, amount, mnemonic)** - returns **transaction_with_proof** of the newly transferred transaction.
Note: sender account must be created by Mii Libra API's createAccount.

### Subscription API

**receivedCoins(receiverAddress)** - returns **transaction_with_proof** to receiver address.
