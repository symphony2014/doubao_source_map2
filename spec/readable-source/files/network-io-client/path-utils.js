// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 32855
         */
module.exports = function (module, exports, require) {
  var r = exports;
  var n = r.isAbsolute = function (e) {
    return /^(?:\/|\w+:)/.test(e);
  };
  var i = r.normalize = function (e) {
    var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
    var r = n(e);
    var i = "";
    if (r) {
      i = t.shift() + "/";
    }
    for (var s = 0; s < t.length;) {
      if (t[s] === "..") {
        if (s > 0 && t[s - 1] !== "..") {
          t.splice(--s, 2);
        } else if (r) {
          t.splice(s, 1);
        } else {
          ++s;
        }
      } else if (t[s] === ".") {
        t.splice(s, 1);
      } else {
        ++s;
      }
    }
    return i + t.join("/");
  };
  r.resolve = function (e, t, r) {
    if (!r) {
      t = i(t);
    }
    if (n(t)) {
      return t;
    } else {
      if (!r) {
        e = i(e);
      }
      if ((e = e.replace(/(?:\/|^)[^/]+$/, "")).length) {
        return i(e + "/" + t);
      } else {
        return t;
      }
    }
  };
}