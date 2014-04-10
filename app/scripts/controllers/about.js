(function () {
    'use strict';

    angular.module('personyApp').controller(
        'AboutCtrl',
        ['$scope', 'Page',
            function ($scope, Page) {
                Page.setTitle('Про проект');

                $scope.tabs = [{
                    title: '<div class="about-icon"><i class="fa fa-bar-chart-o"></i></div>'+' <b class="about_pri">Наглядність</b>',
                    url: 'one.tpl.html'
                }, {
                    title: '<div class="about-icon"><i class="fa fa-camera-retro"></i></div>'+' <b class="about_pri">Достовірність</h3>',
                    url: 'two.tpl.html'
                }, {
                    title: '   <div class="about-icon"><i class="fa fa-users"></i></div>'+'<b class="about_pri">Відкритість</b>',
                    url: 'three.tpl.html'
                }];

                $scope.currentTab = 'one.tpl.html';

                $scope.onClickTab = function (tab) {
                    $scope.currentTab = tab.url;
                }

                $scope.isActiveTab = function(tabUrl) {
                    return tabUrl == $scope.currentTab;
                }

                $scope.payLists = [
                    {
                        image: 'http://hromadske.tv/images/doc/1/9/199050b-pay1.jpg',
                        description: 'Наш проект за адресою бла бла бла',
                        collapsed: true
                    },
                    {
                        image: 'http://hromadske.tv/images/doc/1/9/199050b-pay1.jpg',
                        description: 'Наш проект за адресою бла бла бла',
                        collapsed: true
                    },
                    {
                        image: 'http://hromadske.tv/images/doc/1/9/199050b-pay1.jpg',
                        description: 'Наш проект за адресою бла бла бла',
                        collapsed: true
                    },
                    {
                        image: 'http://hromadske.tv/images/doc/1/9/199050b-pay1.jpg',
                        description: 'Наш проект за адресою бла бла бла',
                        collapsed: true
                    },
                    {
                        image: 'http://hromadske.tv/images/doc/1/9/199050b-pay1.jpg',
                        description: 'Наш проект за адресою бла бла бла',
                        collapsed: true
                    },
                    {
                        image: 'http://hromadske.tv/images/doc/1/9/199050b-pay1.jpg',
                        description: 'Наш проект за адресою бла бла бла',
                        collapsed: true
                    }
                ];


                $scope.groupCollapse = function (index) {

                    var i = 0;

                    $scope.payLists.forEach(function(entry) {
                        if (i === index){
                            entry.collapsed = !entry.collapsed;
                        }
                        else
                            entry.collapsed = true;

                        i++;
                    });
                }

            }]
    );
}());
