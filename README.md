Web3ServiceLoader is a singleton factory 
web3js wants to live in the global space and the exports for it tend to come and go.
We ignore the global web3 because it could be put there by anything including MetaMask which frequently uses a very outdated version of web3
Most users of this service are building wallets and tools to interact with their own dapps and it is important the latest stable features are made available to them

What we have here is...
Web3ServiceLoader which is a static class with a single static method
The single static method is getInstance and it accepts a provider as an argument.
We highly recommend infura.io for this

When you call Web3ServiceLoader.getInstance(provider) for the very first time, it will load web3.min.js
It will then instantiate a new Web3 instance with the provider you pass in and return the new instance.

From there, any subsequent calls to getInstance() will return the same web3js instance

In order to prevent chaos, you should only use the service loader in a single place in your app

For telepathy this should be in your app root and should be called only once by the onReady method.
If you import this in multiple places you could get unpredictable behavior, however we try to guard against it by attaching ourselves to the global window object.
Nevertheless, telepathy is blindingly fast and multi-threaded, 
therefore it's possible to get multiple web3 instances all going at once if you are importing this script all over the place.
