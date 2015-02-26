# ladda-angular
Angularjs directive for [Ladda](http://lab.hakim.se/ladda/) button by [@hakimel](https://twitter.com/hakimel)

### How to use angular-flash?

**Create your ladda button**
For more information about how tot create ladda button please refer [ladda](https://github.com/hakimel/Ladda) button repository.


**Add the Following code to the <head> of your document.**
<script src="js/ladda-angular.min.js"></script>

**Add `ladda` dependency to your module**
``` javascript 
var myApp = angular.module("app", ["ladda"]);
```
**Add directive ladda-button with your normal ladda button.**
``` html
<button ladda-button="laddaLoading" data-style="expand-right" class="ladda-button"><span class="ladda-label">Submit</span>
```
Directive attribute should be a scope variable with value true or false or number.
true   >> To start loading.
false  >> To stop loading.
number >> To set progress value.

**Controller example**
// Demo controller
app.controller('laddaDemoCtrl', function ($scope, $interval, $timeout) {
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


