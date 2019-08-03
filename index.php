<!-- google-chrome --disable-web-security -user-data-dir=~/chromeTemp
 -->

<!DOCTYPE html>
<html ng-app="miniCrawler">

<head>
	<title>Meu Mini Crawler</title>
	<link rel="stylesheet" type="text/css" href="lib/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/page.css">
	<script src="lib/angular.js"></script>
	<script src="lib/angular-messages.js"></script>
	<script src="js/Validar.js"></script>
	<script src="js/ValidarTudo.js"></script>
	<script src="js/scope.js"></script>
</head>

<body ng-controller="miniCrawlerCtrl">

	<div class="jumbotron">
		<h4>{{ app }}</h4>
		<form id="formulario" name="urlForm">
			<input class="form-control" type="text" name="urlInput" ng-model="url" placeholder="Digite a url a ser buscada..." ng-required="true" ng-minlength="11"ng-pattern="/^http(s)?:\/\/[\w\.]+$/">

			<hr/>
		</form>

		<div ng-messages="urlForm.urlInput.$error">
			<div class="alert alert-danger" ng-message="required" ng-show="urlForm.urlInput.$dirty">
				Por favor, preencha a url!
			</div>

			<div class="alert alert-danger" ng-message="minlength">
				A url precisa ter no mínimo 11 caracteres
			</div>

			<div class="alert alert-danger" ng-message="pattern">
				URL inválida! Por favor digite a url no formato: http://www.nome.host
			</div>
		</div>

		<button class="btn btn-primary btn-block" ng-click="showUrl(url)" ng-disabled="!url">Buscar</button>
	
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