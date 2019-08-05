angular.module("miniCrawler", ["ngMessages"]);
angular.module("miniCrawler").controller("miniCrawlerCtrl", function($scope, $filter, $http)
{
	$scope.app = "Meu Mini Crawler"
	$scope.urls = []
	$scope.data = $filter('date')(new Date(), 'EEEE, dd/MM/yyyy')

	$scope.buscar = function (url)
	{
		$http.get(`../control/?action=buscar&url=${url}`)
			.then(function (response) {

				let links = response.data

				if (links != null)
				{
					setLinks = new Set();

					links.forEach(link => {
						setLinks.add(link);
					})

					setLinks.forEach(setLink => {
						$scope.urls.push({ nome: setLink.url, ranking: setLink.ranking })
					})
				}
			})
	}

	$scope.showUrl = function(url)
	{
		let regex = /http(s)?:\/\/[\w\.]+/g

		// dados vindos do banco
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