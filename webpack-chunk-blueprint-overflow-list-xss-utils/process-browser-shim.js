// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 488992
         */
module.exports = function (module, exports, require) {
  var t;
  var n;
  var r;
  var i = module.exports = {};
  function o() {
    throw Error("setTimeout has not been defined");
  }
  function a() {
    throw Error("clearTimeout has not been defined");
  }
  function s(e) {
    if (t === setTimeout) {
      return setTimeout(e, 0);
    }
    if ((t === o || !t) && setTimeout) {
      t = setTimeout;
      return setTimeout(e, 0);
    }
    try {
      return t(e, 0);
    } catch (n) {
      try {
        return t.call(null, e, 0);
      } catch (n) {
        return t.call(this, e, 0);
      }
    }
  }
  (function () {
    try {
      t = typeof setTimeout == "function" ? setTimeout : o;
    } catch (e) {
      t = o;
    }
    try {
      n = typeof clearTimeout == "function" ? clearTimeout : a;
    } catch (e) {
      n = a;
    }
  })();
  var u = [];
  var c = false;
  var l = -1;
  function f() {
    if (c && r) {
      c = false;
      if (r.length) {
        u = r.concat(u);
      } else {
        l = -1;
      }
      if (u.length) {
        h();
      }
    }
  }
  function h() {
    if (!c) {
      var e = s(f);
      c = true;
      for (var t = u.length; t;) {
        r = u;
        u = [];
        while (++l < t) {
          if (r) {
            r[l].run();
          }
        }
        l = -1;
        t = u.length;
      }
      r = null;
      c = false;
      (function (e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === a || !n) && clearTimeout) {
          n = clearTimeout;
          return clearTimeout(e);
        }
        try {
          n(e);
        } catch (t) {
          try {
            return n.call(null, e);
          } catch (t) {
            return n.call(this, e);
          }
        }
      })(e);
    }
  }
  function d(e, t) {
    this.fun = e;
    this.array = t;
  }
  function p() {}
  i.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
    }
    u.push(new d(e, t));
    if (u.length === 1 && !c) {
      s(h);
    }
  };
  d.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  i.title = "browser";
  i.browser = true;
  i.env = {};
  i.argv = [];
  i.version = "";
  i.versions = {};
  i.on = p;
  i.addListener = p;
  i.once = p;
  i.off = p;
  i.removeListener = p;
  i.removeAllListeners = p;
  i.emit = p;
  i.prependListener = p;
  i.prependOnceListener = p;
  i.listeners = function (e) {
    return [];
  };
  i.binding = function (e) {
    throw Error("process.binding is not supported");
  };
  i.cwd = function () {
    return "/";
  };
  i.chdir = function (e) {
    throw Error("process.chdir is not supported");
  };
  i.umask = function () {
    return 0;
  };
}