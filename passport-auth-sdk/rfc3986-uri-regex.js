// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 256471
         */
module.exports = function (module, exports, require) {
  var t = {
    rfc3986: {}
  };
  t.generate = function () {
    var e = "[0-9]";
    var r = "a-zA-Z";
    t.rfc3986.cidr = e + "|[1-2]" + e + "|3[0-2]";
    var n = "0-9A-Fa-f";
    var o = "[" + n + "]";
    var i = r + "0-9-\\._~";
    var a = "!\\$&'\\(\\)\\*\\+,;=";
    var s = "%" + n;
    var u = i + s + a + ":@";
    var c = "[" + u + "]";
    var f = "(?:0?0?" + e + "|0?[1-9]" + e + "|1" + e + e + "|2[0-4]" + e + "|25[0-5])";
    t.rfc3986.IPv4address = "(?:" + f + "\\.){3}" + f;
    var d = o + "{1,4}";
    var l = "(?:" + d + ":" + d + "|" + t.rfc3986.IPv4address + ")";
    var p = "(?:(?:" + d + ":){0,1}" + d + ")?::(?:" + d + ":){3}" + l;
    var v = "(?:(?:" + d + ":){0,2}" + d + ")?::(?:" + d + ":){2}" + l;
    var h = "(?:(?:" + d + ":){0,3}" + d + ")?::" + d + ":" + l;
    t.rfc3986.IPv6address = "(?:(?:" + d + ":){6}" + l + "|" + ("::(?:" + d) + ":){5}" + l + "|" + ("(?:" + d + ")?::(?:" + d) + ":){4}" + l + "|" + p + "|" + v + "|" + h + "|" + ("(?:(?:" + d + ":){0,4}" + d) + ")?::" + l + "|" + ("(?:(?:" + d + ":){0,5}" + d) + ")?::" + d + "|" + ("(?:(?:" + d + ":){0,6}") + d + ")?::)";
    t.rfc3986.IPvFuture = "v" + o + "+\\.[" + i + a + ":]+";
    t.rfc3986.scheme = "[" + r + "][" + r + "0-9+-\\.]*";
    t.rfc3986.IPLiteral = "\\[(?:" + t.rfc3986.IPv6address + "|" + t.rfc3986.IPvFuture + ")\\]";
    var m = "(?:" + t.rfc3986.IPLiteral + "|" + t.rfc3986.IPv4address + "|" + ("[" + i + s) + a + "]{0,255})";
    var _ = "(?:" + ("[" + i + s) + a + ":]*@)?" + m + "(?::" + e + "*)?";
    var y = c + "+";
    var g = "(?:\\/" + c + "*)*";
    t.rfc3986.hierPart = "(?:(?:\\/\\/" + _ + g + ")|" + ("\\/(?:" + y) + g + ")?|" + (y + g) + ")";
    t.rfc3986.query = "[" + u + "\\/\\?]*(?=#|$)";
    t.rfc3986.fragment = "[" + u + "\\/\\?]*";
    t.rfc3986.uri = "^(?:" + t.rfc3986.scheme + ":" + t.rfc3986.hierPart + ")(?:\\?" + t.rfc3986.query + ")?(?:#" + t.rfc3986.fragment + ")?$";
  };
  t.generate();
  module.exports = t.rfc3986;
}