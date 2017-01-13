angular
  .module('prototype')
  .directive('mnSelect', MnSelectDirective)

function MnSelectDirective($parse, $timeout) {
  return {
    restrict: 'E',
    require: 'ngModel',
    link,
  }

  function link(scope, element, attributes, ngModel) {
    element.bind('change', (event) => {
      $timeout(() => {
        const value = event.target.value
        ngModel.$setViewValue(value)
        ngModel.$render()
      })
    })

    $timeout(() => {
      const value = $parse(attributes.ngModel)(scope)
      if (value) {
        element[0].value = value
      }
      element[0].setMobile()
      element[0].setOptionEvents()
    })
  }
}

