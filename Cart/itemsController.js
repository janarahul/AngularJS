var app = angular.module("myApp",[])
app.controller("myCtrl", function($scope){
	$scope.names = [
	{product: "Item1", price: 10000.0, qty: 1, url: "moto.jpeg"},
	{product: "Item2", price: 25000, qty: 1, url:"laptop.jpeg"},
	{product: "Item3", price: 50, qty: 1, url:"moto.jpeg"}
	];
	$scope.cart = [];
	$scope.total = 0;
	$scope.addToCart = function(name) {
		//alert(name.product+" "+name.qty+" "+name.price);
		if($scope.cart.indexOf(name) == -1){
			$scope.cart.push(name);

			$scope.total += name.qty*name.price;
		}
		else {
			alert("Already in Cart");
		}
	};
	$scope.removeFromCart = function(name){
		$scope.cart.pop(name);
		$scope.total -= name.qty*name.price;
	};

});
