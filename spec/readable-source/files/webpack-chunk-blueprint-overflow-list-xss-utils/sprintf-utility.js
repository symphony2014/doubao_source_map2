// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 480831
         */
module.exports = function (module, exports, require) {
  exports.sprintf = r;
  exports.vsprintf = function (e, t, n) {
    (n = (t || []).slice(0)).splice(0, 0, e);
    return r.apply(null, n);
  };
  var n = {
    not_string: /[^s]/,
    number: /[diefg]/,
    json: /[j]/,
    not_json: /[^j]/,
    text: /^[^\x25]+/,
    modulo: /^\x25{2}/,
    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
    key: /^([a-z_][a-z_\d]*)/i,
    key_access: /^\.([a-z_][a-z_\d]*)/i,
    index_access: /^\[(\d+)\]/,
    sign: /^[\+\-]/
  };
  function r() {
    var e = arguments[0];
    var t = r.cache;
    if (!t[e] || !t.hasOwnProperty(e)) {
      t[e] = r.parse(e);
    }
    return r.format.call(null, t[e], arguments);
  }
  function i(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  r.format = function (e, t) {
    var o;
    var a;
    var s;
    var u;
    var c;
    var l;
    var f;
    var h;
    var d = 1;
    var p = e.length;
    var g = "";
    var v = [];
    var m = true;
    var y = "";
    for (s = 0; s < p; s++) {
      if ((g = i(e[s])) === "string") {
        v[v.length] = e[s];
      } else if (g === "array") {
        if ((c = e[s])[2]) {
          u = 0;
          a = t[d];
          for (; u < c[2].length; u++) {
            if (!a.hasOwnProperty(c[2][u])) {
              throw Error(r("[sprintf] property '%s' does not exist", c[2][u]));
            }
            a = a[c[2][u]];
          }
        } else {
          a = c[1] ? t[c[1]] : t[d++];
        }
        if (i(a) == "function") {
          a = a();
        }
        if (n.not_string.test(c[8]) && n.not_json.test(c[8]) && i(a) != "number" && isNaN(a)) {
          throw TypeError(r("[sprintf] expecting number but found %s", i(a)));
        }
        if (n.number.test(c[8])) {
          m = a >= 0;
        }
        switch (c[8]) {
          case "b":
            a = a.toString(2);
            break;
          case "c":
            a = String.fromCharCode(a);
            break;
          case "d":
          case "i":
            a = parseInt(a, 10);
            break;
          case "j":
            a = JSON.stringify(a, null, c[6] ? parseInt(c[6]) : 0);
            break;
          case "e":
            a = c[7] ? a.toExponential(c[7]) : a.toExponential();
            break;
          case "f":
            a = c[7] ? parseFloat(a).toFixed(c[7]) : parseFloat(a);
            break;
          case "g":
            a = c[7] ? parseFloat(a).toPrecision(c[7]) : parseFloat(a);
            break;
          case "o":
            a = a.toString(8);
            break;
          case "s":
            a = (a = String(a)) && c[7] ? a.substring(0, c[7]) : a;
            break;
          case "u":
            a >>>= 0;
            break;
          case "x":
            a = a.toString(16);
            break;
          case "X":
            a = a.toString(16).toUpperCase();
        }
        if (n.json.test(c[8])) {
          v[v.length] = a;
        } else {
          if (n.number.test(c[8]) && (!m || c[3])) {
            y = m ? "+" : "-";
            a = a.toString().replace(n.sign, "");
          } else {
            y = "";
          }
          f = c[4] ? c[4] === "0" ? "0" : c[4].charAt(1) : " ";
          h = c[6] - (y + a).length;
          l = c[6] && h > 0 ? (o = f, Array(h + 1).join(o)) : "";
          v[v.length] = c[5] ? y + a + l : f === "0" ? y + l + a : l + y + a;
        }
      }
    }
    return v.join("");
  };
  r.cache = {};
  r.parse = function (e) {
    var t = e;
    var r = [];
    var i = [];
    var o = 0;
    while (t) {
      if ((r = n.text.exec(t)) !== null) {
        i[i.length] = r[0];
      } else if ((r = n.modulo.exec(t)) !== null) {
        i[i.length] = "%";
      } else if ((r = n.placeholder.exec(t)) !== null) {
        if (r[2]) {
          o |= 1;
          var a = [];
          var s = r[2];
          var u = [];
          if ((u = n.key.exec(s)) !== null) {
            for (a[a.length] = u[1]; (s = s.substring(u[0].length)) !== "";) {
              if ((u = n.key_access.exec(s)) !== null) {
                a[a.length] = u[1];
              } else if ((u = n.index_access.exec(s)) !== null) {
                a[a.length] = u[1];
              } else {
                throw SyntaxError("[sprintf] failed to parse named argument key");
              }
            }
          } else {
            throw SyntaxError("[sprintf] failed to parse named argument key");
          }
          r[2] = a;
        } else {
          o |= 2;
        }
        if (o === 3) {
          throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
        }
        i[i.length] = r;
      } else {
        throw SyntaxError("[sprintf] unexpected placeholder");
      }
      t = t.substring(r[0].length);
    }
    return i;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}