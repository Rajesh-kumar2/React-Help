import { authenticator } from "./authAPIClient";

var url = "http://localhost:8000/api/products";

var productsAPIClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            let fData = {
                method: 'GET',
                headers: {
                    "x-access-token": authenticator.getToken()
                }
            };

            return fetch(url, fData).then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        resolve(data);
                    }, (err) => {
                        reject("JSON parse Error...");
                    });
                } else {
                    if(response.status == 403){
                        response.json().then((data) => {
                            reject(data.message);
                        }, (err) => {
                            reject("JSON parse Error...");
                        });
                    } else
                        reject("Server Error...");
                }
            }, (err) => {
                reject("Error Connecting to Service...");
            });
        });
        return promise;
    }
};

export default productsAPIClient;