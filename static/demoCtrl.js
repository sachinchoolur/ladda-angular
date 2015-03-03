// Demo controller
angular.module('laddaDemo', ['ladda']).controller('laddaDemoCtrl', function ($scope, $interval, $timeout) {
    // Example without progress Bar
    $scope.laddaLoading = {};
    $scope.showLoading = function (num) {
        // Set ladda loading true
        // Loading spinner will be shown;
        $scope.laddaLoading[num] = true;
        $timeout(function () {
            // Set ladda loading false after 3 Seconds. 
            // Loading spinner will be hidden;
            $scope.laddaLoading[num] = false;
        }, 2000);
    };
    
    // Example without progress Bar
    $scope.laddaLoadingBar = {};
    $scope.loadingWithProgress = function (num) {
        // Set progress 0;
        $scope.laddaLoadingBar[num] = 0;
        // Run in every 30 milliseconds
        var interval = $interval(function () {
            // Increment by 1; 
            $scope.laddaLoadingBar[num]++;
            if ($scope.laddaLoadingBar[num] >= 100) {
                // Cancel interval if progress is 100
                $interval.cancel(interval);
                //Set ladda loading false
                $scope.laddaLoadingBar[num] = false;
            }
        }, 30);
    };
});