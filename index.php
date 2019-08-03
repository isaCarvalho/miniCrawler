<!-- google-chrome --disable-web-security -user-data-dir=~/chromeTemp
 -->

<!DOCTYPE html>
<html ng-app="miniCrawler">

<head>
	<title>Meu Mini Crawler</title>
	<link rel="stylesheet" type="text/css" href="lib/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="page.css">
	<script src="lib/angular.js"></script>
	<script src="Validar.js"></script>
	<script src="ValidarTudo.js"></script>
	<script src="scope.js"></script>
</head>

<body ng-controller="miniCrawlerCtrl">

	<div class="jumbotron">
		<h4>{{ app }}</h4>
		<form id="formulario">
			<input class="form-control" type="text" ng-model="url" placeholder="Digite a url a ser buscada...">

			<hr/>

			<button class="btn btn-primary btn-block" ng-click="showUrl(url)" ng-disabled="!url">Salvar</button>
		</form>
	
		<table class="table" ng-if="urls.length > 0">
			<tr>
				<th>url</th>
				<th></th>
			</tr>
			<tr ng-repeat="url in urls">
				<td>{{url.nome}}</td>
				<td><input type="checkbox" ng-model="url.selecionada"></td>
			</tr>
		</table>

		<button ng-click="apagarUrls(urls)" class="btn btn-danger btn-block" ng-if="isUrlsSelecionadas(urls)">Apagar urls</button>

	</div>

</body>

<footer class="footer-copyright text-center py-3">
	Copyright Isabela Carvalho
</footer>

</html>