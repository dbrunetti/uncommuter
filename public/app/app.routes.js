var app = angular.module('myApp');
app.config(function($routeProvider) {
    $routeProvider
      // .when('/', {
      //       controller: "searchCtrl",
      //       templateUrl: "app/components/search/search.html"
      //   })
        .when('/', {
            controller: "jobListCtrl",
            templateUrl: "app/components/jobList/jobList.html"
        })
        .when('/about', {
            // controller: "jobsCtrl",
            templateUrl: "app/components/about/about.html"
        });
});
