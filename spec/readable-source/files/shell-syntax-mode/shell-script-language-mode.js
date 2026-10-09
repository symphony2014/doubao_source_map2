// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47307.bc491360.js
         * chunkId: 47307
         * moduleId: 929347
         */
module.exports = function (module, exports, require) {
  var r = {};
  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      r[e[n]] = t;
    }
  }
  var i = ["true", "false"];
  var o = ["if", "then", "do", "else", "elif", "while", "until", "for", "in", "esac", "fi", "fin", "fil", "done", "exit", "set", "unset", "export", "function"];
  var u = ["ab", "awk", "bash", "beep", "cat", "cc", "cd", "chown", "chmod", "chroot", "clear", "cp", "curl", "cut", "diff", "echo", "find", "gawk", "gcc", "get", "git", "grep", "hg", "kill", "killall", "ln", "ls", "make", "mkdir", "openssl", "mv", "nc", "nl", "node", "npm", "ping", "ps", "restart", "rm", "rmdir", "sed", "service", "sh", "shopt", "shred", "source", "sort", "sleep", "ssh", "start", "stop", "su", "sudo", "svn", "tee", "telnet", "top", "touch", "vi", "vim", "wall", "wc", "wget", "who", "write", "yes", "zsh"];
  function a(t, e) {
    var n = t == "(" ? ")" : t == "{" ? "}" : t;
    return function (r, s) {
      var i;
      var o = false;
      while ((i = r.next()) != null) {
        if (i !== n || o) {
          if (i !== "$" || o || t === "'" || r.peek() == n) {
            if (!o && t !== n && i === t) {
              s.tokens.unshift(a(t, e));
              return l(r, s);
            }
            if (!o && /['"]/.test(i) && !/['"]/.test(t)) {
              s.tokens.unshift(function (t, e) {
                return function (n, r) {
                  r.tokens[0] = a(t, e);
                  n.next();
                  return l(n, r);
                };
              }(i, "string"));
              r.backUp(1);
              break;
            }
          } else {
            o = true;
            r.backUp(1);
            s.tokens.unshift(f);
            break;
          }
        } else {
          s.tokens.shift();
          break;
        }
        o = !o && i === "\\";
      }
      return e;
    };
  }
  s("atom", i);
  s("keyword", o);
  s("builtin", u);
  function f(t, e) {
    if (e.tokens.length > 1) {
      t.eat("$");
    }
    var n = t.next();
    if (/['"({]/.test(n)) {
      e.tokens[0] = a(n, n == "(" ? "quote" : n == "{" ? "def" : "string");
      return l(t, e);
    } else {
      if (!/\d/.test(n)) {
        t.eatWhile(/\w/);
      }
      e.tokens.shift();
      return "def";
    }
  }
  function l(t, e) {
    return (e.tokens[0] || function (t, e) {
      if (t.eatSpace()) {
        return null;
      }
      var n = t.sol();
      var s = t.next();
      if (s === "\\") {
        t.next();
        return null;
      }
      if (s === "'" || s === "\"" || s === "`") {
        e.tokens.unshift(a(s, s === "`" ? "quote" : "string"));
        return l(t, e);
      }
      if (s === "#") {
        if (n && t.eat("!")) {
          t.skipToEnd();
          return "meta";
        } else {
          t.skipToEnd();
          return "comment";
        }
      }
      if (s === "$") {
        e.tokens.unshift(f);
        return l(t, e);
      }
      if (s === "+" || s === "=") {
        return "operator";
      }
      if (s === "-") {
        t.eat("-");
        t.eatWhile(/\w/);
        return "attribute";
      }
      if (s == "<") {
        if (t.match("<<")) {
          return "operator";
        }
        var i;
        var o = t.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);
        if (o) {
          ;
          e.tokens.unshift((i = o[1] || o[2], function (t, e) {
            if (t.sol() && t.string == i) {
              e.tokens.shift();
            }
            t.skipToEnd();
            return "string.special";
          }));
          return "string.special";
        }
      }
      if (/\d/.test(s) && (t.eatWhile(/\d/), t.eol() || !/\w/.test(t.peek()))) {
        return "number";
      }
      t.eatWhile(/[\w-]/);
      var u = t.current();
      if (t.peek() === "=" && /\w+/.test(u)) {
        return "def";
      } else if (r.hasOwnProperty(u)) {
        return r[u];
      } else {
        return null;
      }
    })(t, e);
  }
  let c = {
    name: "shell",
    startState: function () {
      return {
        tokens: []
      };
    },
    token: function (t, e) {
      return l(t, e);
    },
    languageData: {
      autocomplete: i.concat(o, u),
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "`"]
      },
      commentTokens: {
        line: "#"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    shell: function () {
      return c;
    }
  });
}