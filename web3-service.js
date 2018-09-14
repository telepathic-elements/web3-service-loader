export class Web3Service {
    static async getInstance(provider){
        console.log("Web3Service entering getInstance");
        if(!window.Web3Service){
            window.Web3Service = Web3Service;
        }
        if(!window.Web3Service.loading){
            window.Web3Service.loading = true;
            if(!Web3Service.instance){
                let data = await (await fetch("webcomponents/web3-service/web3.min.js")).text();
                await eval(data);
                Web3Service.instance = await new Web3(provider);
                //TODO:  Reconnect on websocket disconnect
            }
            window.Web3Service.loading = false;
        }
        console.log("Web3Service leaving getInstance");
        return Web3Service.instance;
    }
};

