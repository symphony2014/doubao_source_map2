// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 947249
         */
module.exports = function (module, exports, require) {
  (function () {
    var a;
    function t(e) {
      var a;
      var t;
      var r;
      var n;
      var o = 1;
      var i = [].slice.call(arguments);
      var s = 0;
      var l = e.length;
      var c = "";
      var u = false;
      var d = false;
      function p() {
        return i[o++];
      }
      for (; s < l; ++s) {
        a = e[s];
        if (u) {
          u = false;
          if (a == ".") {
            d = false;
            a = e[++s];
          } else if (a == "0" && e[s + 1] == ".") {
            d = true;
            s += 2;
            a = e[s];
          } else {
            d = true;
          }
          n = function () {
            var t = "";
            while (/\d/.test(e[s])) {
              t += e[s++];
              a = e[s];
            }
            if (t.length > 0) {
              return parseInt(t);
            } else {
              return null;
            }
          }();
          switch (a) {
            case "b":
              c += parseInt(p(), 10).toString(2);
              break;
            case "c":
              if (typeof (t = p()) == "string" || t instanceof String) {
                c += t;
              } else {
                c += String.fromCharCode(parseInt(t, 10));
              }
              break;
            case "d":
              c += parseInt(p(), 10);
              break;
            case "f":
              r = String(parseFloat(p()).toFixed(n || 6));
              c += d ? r : r.replace(/^0/, "");
              break;
            case "j":
              c += JSON.stringify(p());
              break;
            case "o":
              c += "0" + parseInt(p(), 10).toString(8);
              break;
            case "s":
              c += p();
              break;
            case "x":
              c += "0x" + parseInt(p(), 10).toString(16);
              break;
            case "X":
              c += "0x" + parseInt(p(), 10).toString(16).toUpperCase();
              break;
            default:
              c += a;
          }
        } else if (a === "%") {
          u = true;
        } else {
          c += a;
        }
      }
      return c;
    }
    (a = module.exports = t).format = t;
    a.vsprintf = function (e, a) {
      return t.apply(null, [e].concat(a));
    };
    if (typeof console != "undefined" && typeof console.log == "function") {
      a.printf = function () {};
    }
  })();
}