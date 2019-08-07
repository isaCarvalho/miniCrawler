angular.module("miniCrawler").factory("urlAPI", function($http)
{
	var _getURLS = function (url) {
		return $http.get(`../control/?action=buscar&url=${url}`);
	}

	return { 
		getURLS: _getURLS 
	};
});