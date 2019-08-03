class Validar extends RegExp
{
	[Symbol.match](str)
	{
		var result = RegExp.prototype[Symbol.match].call(this, str)
		if (result)
			return true

		return false
	}
}