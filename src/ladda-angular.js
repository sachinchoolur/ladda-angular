(function () {
    'use strict';
    angular.module('ladda', []).directive('laddaButton', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                // Create ladda instance.
                var l = Ladda.create(element[0]);
                // Watch laddButton attribute;
                scope.$watch(attributes.laddaButton, function (value) {
                    // If directive value is number show progress bar
                    if (typeof value === "number") {
                        if (!l.isLoading()) {
                            l.start();
                        }
                        l.setProgress(value / 100);
                    } else if (value === true) {
                        // If directive value is true start loading
                        l.start();
                    } else if (value === false) {
                        // If directive value is true start loading
                        l.stop();
                    }
                });
            }
        };
    });
}());