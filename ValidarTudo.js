class ValidarTudo extends RegExp 
{
    [Symbol.matchAll](str) 
    {
        let result = RegExp.prototype[Symbol.matchAll].call(this, str);
        if (!result) {
            return null;
        }
        return Array.from(result);
    }
}