// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 342117
         */
module.exports = function (module, exports, require) {
  var Q = function () {
    function t(e, Q) {
      var r = [];
      var T = 2;
      for (; T < arguments.length; T++) {
        r[T - 2] = arguments[T];
      }
      this.id = e;
      this.message = t.processString(Q, r);
    }
    t.processString = function (e, Q) {
      var r = e.split(t.pattern);
      var T = 1;
      var n = r.length;
      for (; T < n; T += 2) {
        var o = r[T].charAt(0);
        if (o >= "0" && o <= "9") {
          r[T] = Q[parseInt(r[T], 10) - 1];
          if (typeof r[T] == "number") {
            r[T] = r[T].toString();
          }
        } else if (o === "{") {
          if ((o = r[T].substr(1)) >= "0" && o <= "9") {
            r[T] = Q[parseInt(r[T].substr(1, r[T].length - 2), 10) - 1];
            if (typeof r[T] == "number") {
              r[T] = r[T].toString();
            }
          } else if (r[T].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/)) {
            r[T] = "%" + r[T];
          }
        }
        if (r[T] == null) {
          r[T] = "???";
        }
      }
      return r.join("");
    };
    t.pattern = /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g;
    return t;
  }();
  exports.default = Q;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}