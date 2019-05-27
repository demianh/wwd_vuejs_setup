<?php

$pokemon = file_get_contents('pokemon.json');

header('Content-Type: application/json');

if ($_SERVER['QUERY_STRING'] == '/random') {
	$dex = json_decode($pokemon);
	echo json_encode($dex[mt_rand(0,150)]);
} else {
	echo $pokemon;
}
