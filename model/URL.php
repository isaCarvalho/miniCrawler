<?php

require_once "Query.php";

class URL
{
	private static $link;
	private static $links_assoc = [];	

	function __construct($url)
	{
		$results = Query::select("SELECT * FROM urls WHERE url = ?", [$url]);

		if ($results != null)
			self::$link = $results[0];
		else
			self::$link = null;

		return self::$link;
	}

	public static function fetchAssocLinks()
	{
		if (self::$link != null)
		{
			$results = Query::select("SELECT * FROM links WHERE id_url = ?", [self::$link['id']]);

			if ($results != null)
				self::$links_assoc = $results;
			
			return self::$links_assoc;
		}

		return null;
	}
}