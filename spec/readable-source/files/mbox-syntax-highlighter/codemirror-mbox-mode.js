// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60899.fa72529a.js
         * chunkId: 60899
         * moduleId: 140212
         */
module.exports = function (module, exports, require) {
  var r = ["From", "Sender", "Reply-To", "To", "Cc", "Bcc", "Message-ID", "In-Reply-To", "References", "Resent-From", "Resent-Sender", "Resent-To", "Resent-Cc", "Resent-Bcc", "Resent-Message-ID", "Return-Path", "Received"];
  var a = ["Date", "Subject", "Comments", "Keywords", "Resent-Date"];
  var i = /^[ \t]/;
  var o = /^From /;
  var d = RegExp("^(" + r.join("|") + "): ");
  var s = RegExp("^(" + a.join("|") + "): ");
  var m = /^[^:]+:/;
  var c = /^[^ ]+@[^ ]+/;
  var u = /^.*?(?=[^ ]+?@[^ ]+)/;
  var l = /^<.*?>/;
  var h = /^.*?(?=<.*>)/;
  let f = {
    name: "mbox",
    startState: function () {
      return {
        inSeparator: false,
        inHeader: false,
        emailPermitted: false,
        header: null,
        inHeaders: false
      };
    },
    token: function (e, n) {
      if (e.sol()) {
        n.inSeparator = false;
        if (n.inHeader && e.match(i)) {
          return null;
        }
        n.inHeader = false;
        n.header = null;
        if (e.match(o)) {
          n.inHeaders = true;
          n.inSeparator = true;
          return "atom";
        }
        var t;
        var r = false;
        if ((t = e.match(s)) || (r = true, t = e.match(d))) {
          n.inHeaders = true;
          n.inHeader = true;
          n.emailPermitted = r;
          n.header = t[1];
          return "atom";
        } else if (n.inHeaders && (t = e.match(m))) {
          n.inHeader = true;
          n.emailPermitted = true;
          n.header = t[1];
          return "atom";
        } else {
          n.inHeaders = false;
          e.skipToEnd();
          return null;
        }
      }
      if (n.inSeparator) {
        if (e.match(c)) {
          return "link";
        } else {
          if (!e.match(u)) {
            e.skipToEnd();
          }
          return "atom";
        }
      }
      if (n.inHeader) {
        var a = n.header === "Subject" ? "header" : "string";
        if (n.emailPermitted) {
          if (e.match(l)) {
            return a + " link";
          }
          if (e.match(h)) {
            return a;
          }
        }
        e.skipToEnd();
        return a;
      }
      e.skipToEnd();
      return null;
    },
    blankLine: function (e) {
      e.inHeaders = e.inSeparator = e.inHeader = false;
    },
    languageData: {
      autocomplete: r.concat(a)
    }
  };
  require.r(exports);
  require.d(exports, {
    mbox: function () {
      return f;
    }
  });
}