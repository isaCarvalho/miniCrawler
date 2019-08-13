angular.module("miniCrawler").controller("miniCrawlerCtrl", function($scope, $filter, urlAPI, $http)
{
	$scope.app = "Meu Mini Crawler"
	$scope.urls = []
	$scope.data = $filter('date')(new Date(), 'EEEE, dd/MM/yyyy')

	$scope.buscar = function (url)
	{
		let regex = /http(s)?:\/\/[\w\.]+/g

		urlAPI.getURLS(url)
		.then(function (response) {

			if (response.data != 'null')
			{
				let links = response.data

				links.forEach(link => {
					$scope.urls.push({ nome: link.url, ranking: link.ranking })
				})
			}
			else
			{
				fetch(url)
				 .then(response => response.text())
				 .then(html => {

				  	let matches = html.matchAll(new ValidarTudo(regex))
				 
				  	let setMatches = new Set()

				  	matches.forEach(match => {
						setMatches.add(match[0])
				  	})

				  	setMatches.forEach(setMatch => {
				  		$scope.urls.push({ nome: setMatch , ranking: 0 })
				  	})

				  	$scope.$apply()
				})
			}	
		})
	}

	$scope.showUrl = function(url)
	{
		// dados vindos do banco ou da pagina
		$scope.buscar(url)

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