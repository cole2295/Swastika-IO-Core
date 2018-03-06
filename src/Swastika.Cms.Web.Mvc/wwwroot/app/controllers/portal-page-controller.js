﻿'use strict';
app.controller('PageController', function PhoneListController($scope) {
    $scope.activedPage = {};
    $scope.data = [];
    
    $scope.range = function (max) {
        var input = [];
        for (var i = 1; i <= max; i += 1) input.push(i);
        return input;
    };

    $scope.loadPages = function (pageIndex) {
        if (pageIndex != undefined) {
            $scope.request.pageIndex = pageIndex;
        }
        if ($scope.request.fromDate != null) {
            $scope.request.fromDate = $scope.request.fromDate.toISOString();
        }
        if ($scope.request.toDate != null) {
            $scope.request.toDate = $scope.request.toDate.toISOString();
        }
        var url = '/api/' + $scope.currentLanguage + '/page/list';//byProduct/' + productId;
        $scope.settings.url = url;// + '/true';
        $scope.settings.data = $scope.request;
        $.ajax($scope.settings).done(function (response) {
            $scope.$apply($scope.data = response.data);

            $.each($scope.data.items, function (i, page) {
                $.each($scope.activedPages, function (i, e) {
                    if (e.pageId == page.id) {
                        page.isHidden = true;
                    }
                })
            })
        });
    };

    $scope.removePage = function (pageId) {
        if (confirm("Are you sure!")) {
            var url = '/api/' + $scope.currentLanguage + '/page/delete/' + pageId;
            $.ajax({
                method: 'GET',
                url: url,
                success: function (data) {
                    $scope.loadPage();
                },
                error: function (a, b, c) {
                    console.log(a + " " + b + " " + c);
                }
            });
        }
    };
    $scope.savePage = function (page) {
        var url = '/api/' + $scope.currentLanguage + '/page/save';
        $.ajax({
            method: 'POST',
            url: url,
            data: page,
            success: function (data) {
                //$scope.loadPage();
                if (data.isSucceed) {
                    alert('success');
                }
                else {
                    alert('failed! ' + data.errors);
                }
            },
            error: function (a, b, c) {
                console.log(a + " " + b + " " + c);
            }
        });
    };

});