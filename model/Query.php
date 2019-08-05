<?php

class Query
{
	private static $conn;

	public static function conn()
	{
		try
		{
			self::$conn = new PDO("pgsql:host=localhost;dbname=crawler;user=postgres;password=123456");	
			
			self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

			return self::$conn;
		}
		catch (\PDOException $err)
		{
			die('Erro: '.$err->getMessage());
		}
	}

	public static function select($query, $array = [])
	{
		$stmt = self::conn()->prepare($query);
		$stmt->execute($array);

		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public static function queryExec($query, $array = [])
	{
		$stmt = self::conn()->prepare($query);
		$stmt->execute($array);	
	}
}