// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 350313
         */
module.exports = function (module, exports, require) {
  var r = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  exports.HTMLDomStrings = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var n = function () {
    function t(t = null) {
      var e = this.constructor;
      this.options = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, e.OPTIONS), t);
      this.init();
      this.getPatterns();
    }
    t.prototype.init = function () {
      this.strings = [];
      this.string = "";
      this.snodes = [];
      this.nodes = [];
      this.stack = [];
    };
    t.prototype.getPatterns = function () {
      var t = optionsMergeUtils.makeArray(this.options.skipHtmlTags);
      var e = optionsMergeUtils.makeArray(this.options.ignoreHtmlClass);
      var Q = optionsMergeUtils.makeArray(this.options.processHtmlClass);
      this.skipHtmlTags = RegExp("^(?:" + t.join("|") + ")$", "i");
      this.ignoreHtmlClass = RegExp("(?:^| )(?:" + e.join("|") + ")(?: |$)");
      this.processHtmlClass = RegExp("(?:^| )(?:" + Q + ")(?: |$)");
    };
    t.prototype.pushString = function () {
      if (this.string.match(/\S/)) {
        this.strings.push(this.string);
        this.nodes.push(this.snodes);
      }
      this.string = "";
      this.snodes = [];
    };
    t.prototype.extendString = function (t, e) {
      this.snodes.push([t, e.length]);
      this.string += e;
    };
    t.prototype.handleText = function (t, e) {
      if (!e) {
        this.extendString(t, this.adaptor.value(t));
      }
      return this.adaptor.next(t);
    };
    t.prototype.handleTag = function (t, e) {
      if (!e) {
        var Q = this.options.includeHtmlTags[this.adaptor.kind(t)];
        this.extendString(t, Q);
      }
      return this.adaptor.next(t);
    };
    t.prototype.handleContainer = function (t, e) {
      this.pushString();
      var Q = this.adaptor.getAttribute(t, "class") || "";
      var r = this.adaptor.kind(t) || "";
      var T = this.processHtmlClass.exec(Q);
      var n = t;
      if (this.adaptor.firstChild(t) && !this.adaptor.getAttribute(t, "data-MJX") && (T || !this.skipHtmlTags.exec(r))) {
        if (this.adaptor.next(t)) {
          this.stack.push([this.adaptor.next(t), e]);
        }
        n = this.adaptor.firstChild(t);
        e = (e || this.ignoreHtmlClass.exec(Q)) && !T;
      } else {
        n = this.adaptor.next(t);
      }
      return [n, e];
    };
    t.prototype.handleOther = function (t, e) {
      this.pushString();
      return this.adaptor.next(t);
    };
    t.prototype.find = function (t) {
      this.init();
      var e;
      var Q;
      var T = this.adaptor.next(t);
      var n = false;
      var o = this.options.includeHtmlTags;
      while (t && t !== T) {
        var i = this.adaptor.kind(t);
        if (i === "#text") {
          t = this.handleText(t, n);
        } else if (o.hasOwnProperty(i)) {
          t = this.handleTag(t, n);
        } else if (i) {
          t = (e = r(this.handleContainer(t, n), 2))[0];
          n = e[1];
        } else {
          t = this.handleOther(t, n);
        }
        if (!t && this.stack.length) {
          this.pushString();
          t = (Q = r(this.stack.pop(), 2))[0];
          n = Q[1];
        }
      }
      this.pushString();
      var a = [this.strings, this.nodes];
      this.init();
      return a;
    };
    t.OPTIONS = {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"],
      includeHtmlTags: {
        br: "\n",
        wbr: "",
        "#comment": ""
      },
      ignoreHtmlClass: "mathjax_ignore",
      processHtmlClass: "mathjax_process"
    };
    return t;
  }();
  exports.HTMLDomStrings = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}