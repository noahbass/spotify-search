/*
 * SearchController
 *
 * Return a listing of videos and their attributes.
 */
app.controller('SearchController', ['$scope', '$http', function ($scope, $http) {

    // live search
    $scope.$watch('searchBox', function() {
        if($scope.searchBox.length > 0) {
            $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/search?q=' + $scope.searchBox + '&type=track&market=US&limit=25'
            })
            .success(function (data) {
                $scope.items = data.tracks.items;
            });
        }
        else {
            $scope.items = null;
        }
    });

}]);
