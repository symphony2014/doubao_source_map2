// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 687389
         */
module.exports = function (module, exports, require) {
  function e(t, e, r) {
    this.type = t;
    this.tag = e;
    this.attrs = null;
    this.map = null;
    this.nesting = r;
    this.level = 0;
    this.children = null;
    this.content = "";
    this.markup = "";
    this.info = "";
    this.meta = null;
    this.block = false;
    this.hidden = false;
  }
  e.prototype.attrIndex = function (t) {
    var e;
    var r;
    var n;
    if (!this.attrs) {
      return -1;
    }
    r = 0;
    n = (e = this.attrs).length;
    for (; r < n; r++) {
      if (e[r][0] === t) {
        return r;
      }
    }
    return -1;
  };
  e.prototype.attrPush = function (t) {
    if (this.attrs) {
      this.attrs.push(t);
    } else {
      this.attrs = [t];
    }
  };
  e.prototype.attrSet = function (t, e) {
    var r = this.attrIndex(t);
    var n = [t, e];
    if (r < 0) {
      this.attrPush(n);
    } else {
      this.attrs[r] = n;
    }
  };
  e.prototype.attrGet = function (t) {
    var e = this.attrIndex(t);
    var r = null;
    if (e >= 0) {
      r = this.attrs[e][1];
    }
    return r;
  };
  e.prototype.attrJoin = function (t, e) {
    var r = this.attrIndex(t);
    if (r < 0) {
      this.attrPush([t, e]);
    } else {
      this.attrs[r][1] = this.attrs[r][1] + " " + e;
    }
  };
  module.exports = e;
}