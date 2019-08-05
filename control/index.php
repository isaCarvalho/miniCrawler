<?php

include "../php/URL.php";

extract($_GET);

switch ($action) {
	case 'buscar':
		$link = new URL($url);

		echo json_encode(URL::fetchAssocLinks());
		break;
	
	case 'salvar':
		break;

	default:
		break;
}



