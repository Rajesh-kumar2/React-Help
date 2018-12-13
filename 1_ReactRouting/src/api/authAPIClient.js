var url = 'http://localhost:8000/api/authenticate';

export const authenticator = {
    isAuthenticated: false,
    authenticate: function (uname, pwd) {
        var data = `username=${uname}&password=${pwd}`;

        let fData = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        };

        var promise = new Promise((resolve, reject) => {
            return fetch(url, fData).then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        this.isAuthenticated = data.success;
                        if (data.success) {
                            window.sessionStorage.setItem('tk', data.token);
                        }
                        resolve({ success: data.success, message: data.message });
                    }, (err) => {
                        reject("JSON Parse Error...");
                    })
                }
            }, (err) => {
                reject("Communication Error...");
            });
        });
        return promise;
    },
    clearToken() {
        window.sessionStorage.clear();
    },
    getToken() {
        return window.sessionStorage.getItem("tk");
    }
};