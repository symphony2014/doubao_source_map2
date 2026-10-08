// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 270319
         */
module.exports = function (module, exports, require) {
  var t = "%[a-f0-9]{2}";
  var r = RegExp("(" + t + ")|([^%]+?)", "gi");
  var n = RegExp("(" + t + ")+", "gi");
  module.exports = function (e) {
    if (typeof e != "string") {
      throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    }
    try {
      e = e.replace(/\+/g, " ");
      return decodeURIComponent(e);
    } catch (t) {
      return function (e) {
        var t = {
          "%FE%FF": "��",
          "%FF%FE": "��"
        };
        var i = n.exec(e);
        while (i) {
          try {
            t[i[0]] = decodeURIComponent(i[0]);
          } catch (e) {
            var o = function (e) {
              try {
                return decodeURIComponent(e);
              } catch (i) {
                var t = e.match(r) || [];
                var n = 1;
                for (; n < t.length; n++) {
                  t = (e = function e(t, r) {
                    try {
                      return [decodeURIComponent(t.join(""))];
                    } catch (e) {}
                    if (t.length === 1) {
                      return t;
                    }
                    r = r || 1;
                    var n = t.slice(0, r);
                    var i = t.slice(r);
                    return Array.prototype.concat.call([], e(n), e(i));
                  }(t, n).join("")).match(r) || [];
                }
                return e;
              }
            }(i[0]);
            if (o !== i[0]) {
              t[i[0]] = o;
            }
          }
          i = n.exec(e);
        }
        t["%C2"] = "�";
        var a = Object.keys(t);
        var s = 0;
        for (; s < a.length; s++) {
          var c = a[s];
          e = e.replace(RegExp(c, "g"), t[c]);
        }
        return e;
      }(e);
    }
  };
}