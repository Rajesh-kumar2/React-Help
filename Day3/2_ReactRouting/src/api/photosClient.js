var url = "https://jsonplaceholder.typicode.com/photos";

var photosClient = {
    getPhotoById: function (id) {
        var deferred = $.Deferred();

        $.getJSON(`${url}/${id}`).then(function (data) {
            deferred.resolve(data);
        }, function (err) {
            deferred.reject("Error - Details Not Found");
        })

        return deferred.promise();
    }
}

export default photosClient;