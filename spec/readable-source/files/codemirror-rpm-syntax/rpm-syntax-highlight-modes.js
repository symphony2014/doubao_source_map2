// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27857.0508d1e7.js
         * chunkId: 27857
         * moduleId: 858739
         */
module.exports = function (module, exports, require) {
  var n = /^-+$/;
  var a = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /;
  var c = /^[\w+.-]+@[\w.-]+/;
  let o = {
    name: "rpmchanges",
    token: function (r) {
      if (r.sol() && (r.match(n) || r.match(a))) {
        return "tag";
      } else if (r.match(c)) {
        return "string";
      } else {
        r.next();
        return null;
      }
    }
  };
  var i = /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/;
  var p = /^[a-zA-Z0-9()]+:/;
  var u = /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/;
  var l = /^%(ifnarch|ifarch|if)/;
  var m = /^%(else|endif)/;
  var s = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
  let f = {
    name: "rpmspec",
    startState: function () {
      return {
        controlFlow: false,
        macroParameters: false,
        section: false
      };
    },
    token: function (r, e) {
      if (r.peek() == "#") {
        r.skipToEnd();
        return "comment";
      }
      if (r.sol()) {
        if (r.match(p)) {
          return "header";
        }
        if (r.match(u)) {
          return "atom";
        }
      }
      if (r.match(/^\$\w+/) || r.match(/^\$\{\w+\}/)) {
        return "def";
      }
      if (r.match(m)) {
        return "keyword";
      }
      if (r.match(l)) {
        e.controlFlow = true;
        return "keyword";
      }
      if (e.controlFlow) {
        if (r.match(s)) {
          return "operator";
        }
        if (r.match(/^(\d+)/)) {
          return "number";
        }
        if (r.eol()) {
          e.controlFlow = false;
        }
      }
      if (r.match(i)) {
        if (r.eol()) {
          e.controlFlow = false;
        }
        return "number";
      }
      if (r.match(/^%[\w]+/)) {
        if (r.match("(")) {
          e.macroParameters = true;
        }
        return "keyword";
      }
      if (e.macroParameters) {
        if (r.match(/^\d+/)) {
          return "number";
        }
        if (r.match(")")) {
          e.macroParameters = false;
          return "keyword";
        }
      }
      if (r.match(/^%\{\??[\w \-\:\!]+\}/)) {
        if (r.eol()) {
          e.controlFlow = false;
        }
        return "def";
      } else {
        r.next();
        return null;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    rpmChanges: function () {
      return o;
    },
    rpmSpec: function () {
      return f;
    }
  });
}