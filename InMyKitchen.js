Recipes = new Mongo.Collection('recipes');

if (Meteor.isClient) {




  angular.module('simple-recipes',['angular-meteor']);

  angular.module('simple-recipes').controller('RecipesListCtrl', ['$scope', '$meteor', 
    function ($scope, $meteor) {
      $scope.recipes = $meteor.collection(function(){
        return Recipes.find({}, { sort: { createdAt: -1 } 
      })
    });

    $scope.addRecipe = function(newRecipe) {
      $scope.recipes.push( {
        name: newRecipe.name,
        time: newRecipe.time,
        rating: newRecipe.rating,
        difficulty: newRecipe.difficulty,
        ingredients: newRecipe.ingredients,
        directions: newRecipe.directions,
        chefname: newRecipe.chefname,
        createdAt: new Date() 
      });
    };
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
