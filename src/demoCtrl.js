// Demo controller
angular.module('ladda', []).controller('laddaDemoCtrl', function ($scope, $interval, $timeout) {
    // Example without progress Bar
    $scope.showLoading = function () {
        // Set ladda loading true
        // Loading spinner will be shown;
        $scope.laddaLoading = true;
        $timeout(function () {
            // Set ladda loading false after 3 Seconds. 
            // Loading spinner will be hidden;
            $scope.laddaLoading = false;
        }, 3000);
    };
    
    // Example without progress Bar
    $scope.loadingWithProgress = function () {
        // Set progress 0;
        $scope.laddaLoadingBar = 0;
        // Run in every 30 milliseconds
        var interval = $interval(function () {
            // Increment by 1; 
            $scope.laddaLoadingBar++;
            if ($scope.laddaLoadingBar >= 100) {
                // Cancel interval if progress is 100
                $interval.cancel(interval);
                //Set ladda loading false
                $scope.laddaLoadingBar = false;
            }
        }, 30);
    };
});