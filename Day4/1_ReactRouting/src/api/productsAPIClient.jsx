var url = "http://localhost:8000/api/products";

var productsAPIClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            return fetch(url).then((response) => {
                response.json().then((jResult)=>{
                    resolve(jResult);
                },(err)=>{
                    reject("JSON Parse Error...");
                })
            }, (err) => {
                //Log the Error using Error Service
                reject("Error Connecting to Service...");
            })
        });
        return promise;
    }
}

export default productsAPIClient;