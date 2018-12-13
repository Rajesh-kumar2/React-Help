var url = "https://jsonplaceholder.typicode.com/posts";

var ajaxClient = {
    getPosts: function (successCallback, errorCallback) {
        $.getJSON(url).done((data) => {
            successCallback(data);
        }).fail((err) => {
            errorCallback("Communication Error, contact admin...");
        });
    }
}

export default ajaxClient;