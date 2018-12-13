var url = "http://localhost:8000/products";

const productsAPIClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            let fData = {
                method: 'GET'
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
    },
    
    insertProduct: function (p) {
        const request = new Request(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(p)
        });

        return fetch(request).then(res => {
            return res.json()
        }).catch(error => {
            return error;;
        });
    },

    updateProduct: function (p) {
        const request = new Request(url + "/" + p.id, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(p)
        });

        return fetch(request).then(res => {
            return res.json()
        }).catch(error => {
            return error;;
        });
    },

    deleteProduct: function (p) {
        const request = new Request(url + "/" + p.id, {
            method: "DELETE"
        });

        return fetch(request).then(res => {
            return res.json();
        }).catch(error => {
            return error;;
        });
    }
}

export default productsAPIClient;