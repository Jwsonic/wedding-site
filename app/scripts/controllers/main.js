'use strict';

/**
 * @ngdoc function
 * @name weddingSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteApp
 */
angular.module('weddingSiteApp')
  .controller('MainCtrl', function($scope, $location, uiGmapGoogleMapApi) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    $scope.options = {
      scrollwheel: false,
      labelContent: 'label'
    };

    $scope.locations = [{
      id: "ceremony",
      loc: {
        latitude: 42.366001,
        label: 'Ceremony',
        longitude: -83.483981
      }
    }, {
      id: "reception",
      loc: {
        latitude: 42.277671,
        label: 'Reception',
        longitude: -83.742632
      }
    }];

    $scope.map = {
      center: {
        latitude: 42.344625,
        longitude: -83.599521
      },
      zoom: 12
    }

    $scope.pictures = _.range(20);

    uiGmapGoogleMapApi.then(function(maps) {
      console.log("Maps loaded");

      //console.log(maps);
    });

    $scope.photos = ["../images/resized2-034.jpg", "../images/resized2-037.jpg", "../images/resized2-014.jpg", "../images/resized2-009.jpg", "../images/resized2-029.jpg", "../images/resized2-033.jpg", "../images/resized2-056.jpg", "../images/resized2-031.jpg", "../images/resized2-066.jpg", "../images/resized2-039.jpg", "../images/resized2-044.jpg", "../images/resized2-064.jpg", "../images/resized2-057.jpg", "../images/resized2-054.jpg", "../images/resized2-017.jpg", "../images/resized2-049.jpg", "../images/resized2-059.jpg", "../images/resized2-003.jpg", "../images/resized2-040.jpg", "../images/resized2-062.jpg", "../images/resized2-018.jpg", "../images/resized2-036.jpg", "../images/resized2-055.jpg", "../images/resized2-060.jpg", "../images/resized2-045.jpg", "../images/resized2-016.jpg", "../images/resized2-006.jpg", "../images/resized2-008.jpg", "../images/resized2-013.jpg", "../images/resized2-050.jpg", "../images/resized2-069.jpg", "../images/resized2-028.jpg", "../images/resized2-005.jpg", "../images/resized2-026.jpg", "../images/resized2-004.jpg", "../images/resized2-030.jpg", "../images/resized2-015.jpg", "../images/resized2-022.jpg", "../images/resized2-046.jpg", "../images/resized2-027.jpg", "../images/resized2-019.jpg", "../images/resized2-065.jpg", "../images/resized2-070.jpg", "../images/resized2-010.jpg", "../images/resized2-038.jpg", "../images/resized2-068.jpg", "../images/resized2-053.jpg", "../images/resized2-041.jpg", "../images/resized2-067.jpg", "../images/resized2-051.jpg", "../images/resized2-024.jpg", "../images/resized2-071.jpg", "../images/resized2-058.jpg", "../images/resized2-042.jpg", "../images/resized2-061.jpg", "../images/resized2-007.jpg", "../images/resized2-032.jpg", "../images/resized2-035.jpg", "../images/resized2-043.jpg", "../images/resized2-052.jpg", "../images/resized2-011.jpg", "../images/resized2-048.jpg", "../images/resized2-025.jpg", "../images/resized2-063.jpg", "../images/resized2-021.jpg", "../images/resized2-020.jpg", "../images/resized2-047.jpg", "../images/resized2-023.jpg", "../images/resized2-012.jpg"];
  });
