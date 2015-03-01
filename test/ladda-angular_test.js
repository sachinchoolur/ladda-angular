var injector = angular.injector(['ng', 'ladda']);
test('ladda test', function(){
    var scope = injector.get('$rootScope').$new(),
        $compile = injector.get('$compile'),
        element;
    scope.laddaLoading = true;
    element = angular.element('<div ladda-button={{laddaLoading}}></div>');
    $compile(element)(scope);
    scope.$digest(); 
    ok(element.attr('ladda-button') === 'true');  
});