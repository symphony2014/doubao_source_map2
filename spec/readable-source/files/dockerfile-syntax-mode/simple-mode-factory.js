// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'createSimpleMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14638.54843333.js
         * chunkId: 14638
         * moduleId: 294821
         */
module.exports = function (module, exports, require) {
  function r(e) {
    a(e, "start");
    var t;
    var n;
    var r;
    var s = {};
    var i = e.languageData || {};
    var g = false;
    for (var l in e) {
      if (l != i && e.hasOwnProperty(l)) {
        var u = s[l] = [];
        var d = e[l];
        var k = 0;
        for (; k < d.length; k++) {
          var x = d[k];
          u.push(new o(x, e));
          if (x.indent || x.dedent) {
            g = true;
          }
        }
      }
    }
    return {
      name: i.name,
      startState: function () {
        return {
          state: "start",
          pending: null,
          indent: g ? [] : null
        };
      },
      copyState: function (e) {
        var t = {
          state: e.state,
          pending: e.pending,
          indent: e.indent && e.indent.slice(0)
        };
        if (e.stack) {
          t.stack = e.stack.slice(0);
        }
        return t;
      },
      token: (t = s, function (e, n) {
        if (n.pending) {
          var r = n.pending.shift();
          if (n.pending.length == 0) {
            n.pending = null;
          }
          e.pos += r.text.length;
          return r.token;
        }
        var a = t[n.state];
        var o = 0;
        for (; o < a.length; o++) {
          var s = a[o];
          var i = (!s.data.sol || e.sol()) && e.match(s.regex);
          if (i) {
            if (s.data.next) {
              n.state = s.data.next;
            } else if (s.data.push) {
              (n.stack ||= []).push(n.state);
              n.state = s.data.push;
            } else if (s.data.pop && n.stack && n.stack.length) {
              n.state = n.stack.pop();
            }
            if (s.data.indent) {
              n.indent.push(e.indentation() + e.indentUnit);
            }
            if (s.data.dedent) {
              n.indent.pop();
            }
            var g = s.token;
            if (g && g.apply) {
              g = g(i);
            }
            if (i.length > 2 && s.token && typeof s.token != "string") {
              n.pending = [];
              for (var l = 2; l < i.length; l++) {
                if (i[l]) {
                  n.pending.push({
                    text: i[l],
                    token: s.token[l - 1]
                  });
                }
              }
              e.backUp(i[0].length - (i[1] ? i[1].length : 0));
              return g[0];
            }
            if (g && g.join) {
              return g[0];
            }
            return g;
          }
        }
        e.next();
        return null;
      }),
      indent: (n = s, r = i, function (e, t) {
        if (e.indent == null || r.dontIndentStates && r.doneIndentState.indexOf(e.state) > -1) {
          return null;
        }
        var a = e.indent.length - 1;
        var o = n[e.state];
        e: while (true) {
          for (var s = 0; s < o.length; s++) {
            var i = o[s];
            if (i.data.dedent && i.data.dedentIfLineStart !== false) {
              var g = i.regex.exec(t);
              if (g && g[0]) {
                a--;
                if (i.next || i.push) {
                  o = n[i.next || i.push];
                }
                t = t.slice(g[0].length);
                continue e;
              }
            }
          }
          break;
        }
        if (a < 0) {
          return 0;
        } else {
          return e.indent[a];
        }
      }),
      languageData: i
    };
  }
  function a(e, t) {
    if (!e.hasOwnProperty(t)) {
      throw Error("Undefined state " + t + " in simple mode");
    }
  }
  function o(e, t) {
    if (e.next || e.push) {
      a(t, e.next || e.push);
    }
    this.regex = function (e, t) {
      if (!e) {
        return /(?:)/;
      }
      var n = "";
      if (e instanceof RegExp) {
        if (e.ignoreCase) {
          n = "i";
        }
        e = e.source;
      } else {
        e = String(e);
      }
      return RegExp("^(?:" + e + ")", n);
    }(e.regex);
    this.token = function (e) {
      if (!e) {
        return null;
      }
      if (e.apply) {
        return e;
      }
      if (typeof e == "string") {
        return e.replace(/\./g, " ");
      }
      var t = [];
      var n = 0;
      for (; n < e.length; n++) {
        t.push(e[n] && e[n].replace(/\./g, " "));
      }
      return t;
    }(e.token);
    this.data = e;
  }
  require.d(exports, {
    createSimpleMode: function () {
      return r;
    }
  });
}