angular

.module('app',[])



'<content>'
    '{{$ctrl.message}}'
    '<input ng-model=\"$ctrl.filename\">'
    ' </input>'
    '<button ng-click=\"$ctrl.exportToFile()\">ДАЙ СЮДА ФАЙЛ!'

    '</button>'
    '</content>'