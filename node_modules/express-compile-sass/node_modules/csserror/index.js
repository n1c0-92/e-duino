function leftPad(str, length, padChar) {
    str = String(str || '');
    while (str.length < length) {
        str = (padChar || ' ') + str;
    }
    return str;
}

function createCssStringLiteral(str, doubleEscape) {
    return '"' + str.replace(/['\\\x00-\x1f]/g, function ($0) {
        return '\\' + (doubleEscape ? '\\' : '') + leftPad($0.charCodeAt(0).toString(16), 6, '0');
    }) + '"';
}

function createCssError(str, doubleEscape) {
    var tpl = 'body * {display: none !important;} body:before {line-height: 1.5; display: block; z-index: 99999999; white-space: pre; font-family: "Courier New", monospace; font-size: 20px; color: black; margin: 10px; padding: 10px; border: 4px dashed red; margin-bottom: 10px; content: __ERRORMESSAGE__;}';

    return tpl.replace('__ERRORMESSAGE__', createCssStringLiteral(str, doubleEscape));
}

module.exports = createCssError;
