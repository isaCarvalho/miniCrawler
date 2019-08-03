angular.module("miniCrawler", ["ngMessages"]);
angular.module("miniCrawler").controller("miniCrawlerCtrl", function($scope)
{
	$scope.app = "Meu Mini Crawler"
	$scope.urls = []

	$scope.showUrl = function(url)
	{
		let regex = /http(s)?:\/\/[\w\.]+/g

		let pagina = new URL(url)
		console.log(pagina)

		fetch(pagina.origin)
		 .then(response => response.text())
		 .then(html => {

		  	let matches = html.matchAll(new ValidarTudo(regex))

		  	let setMatches = new Set()

		  	matches.forEach(match => {
				setMatches.add(match[0])
		  	})

		  	setMatches.forEach(setMatch => {
				$scope.urls.push({ nome: setMatch })
		  	})

		 	$scope.$apply()
		 });

		$scope.urlForm.$setPristine();
		delete $scope.url
	}

	$scope.hasUrls = function(urls)
	{
		if (urls.length > 0)
			return true

		return false;
	}

	$scope.apagarUrls = function(urls) 
	{
		$scope.urls = urls.filter(function(url) {
			if (!url.selecionada) return url;
		})
	}

	$scope.isUrlsSelecionadas = function(urls)
	{
		return urls.some(
			function(url) {
				return url.selecionada;
			})
	}
})