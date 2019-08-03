angular.module("miniCrawler", []);
angular.module("miniCrawler").controller("miniCrawlerCtrl", function($scope)
{
	$scope.app = "Meu Mini Crawler"
	$scope.urls = []

	$scope.showUrl = function(url)
	{
		let regex = new RegExp('http(s)?:\/\/(.*)\.(.*)(\.(.*))?')

		if (url.match(new Validar(regex)))
		{
			let pagina = new URL(url)
			console.log(pagina)

			fetch(pagina.origin)
			 .then(response => response.text())
			 .then(html => {
			  	// console.log(html)

			  	let matches = html.matchAll(new ValidarTudo(regex))
			  	console.log(matches)

			  	matches.forEach(match => {
			  		match.forEach(elem => {
			  			$scope.urls.push({ nome: elem.toString() })
			  		})
			  	})
			 });

			 delete $scope.url
		}
		else
		{
			console.log("url invalida")
		}

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