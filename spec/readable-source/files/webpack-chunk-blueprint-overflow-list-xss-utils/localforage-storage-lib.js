// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 870496
         */
module.exports = function (module, exports, require) {
  var r;
  r = function () {
    return function e(t, n, r) {
      function i(a, s) {
        if (!n[a]) {
          if (!t[a]) {
            if (o) {
              return o(a, true);
            }
            var u = Error("Cannot find module '" + a + "'");
            u.code = "MODULE_NOT_FOUND";
            throw u;
          }
          var c = n[a] = {
            exports: {}
          };
          t[a][0].call(c.exports, function (e) {
            return i(t[a][1][e] || e);
          }, c, c.exports, e, t, n, r);
        }
        return n[a].exports;
      }
      var o = undefined;
      var a = 0;
      for (; a < r.length; a++) {
        i(r[a]);
      }
      return i;
    }({
      1: [function (e, t, r) {
        (function (e) {
          "use strict";

          var n;
          var r;
          var i = e.MutationObserver || e.WebKitMutationObserver;
          if (i) {
            var o = 0;
            var a = new i(l);
            var s = e.document.createTextNode("");
            a.observe(s, {
              characterData: true
            });
            n = function () {
              s.data = o = ++o % 2;
            };
          } else if (e.setImmediate || e.MessageChannel === undefined) {
            n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
              var t = e.document.createElement("script");
              t.onreadystatechange = function () {
                l();
                t.onreadystatechange = null;
                t.parentNode.removeChild(t);
                t = null;
              };
              e.document.documentElement.appendChild(t);
            } : function () {
              setTimeout(l, 0);
            };
          } else {
            var u = new e.MessageChannel();
            u.port1.onmessage = l;
            n = function () {
              u.port2.postMessage(0);
            };
          }
          var c = [];
          function l() {
            r = true;
            var e;
            var t;
            var n = c.length;
            while (n) {
              t = c;
              c = [];
              e = -1;
              while (++e < n) {
                t[e]();
              }
              n = c.length;
            }
            r = false;
          }
          t.exports = function (e) {
            if (c.push(e) === 1 && !r) {
              n();
            }
          };
        }).call(this, require.g !== undefined ? require.g : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {}],
      2: [function (e, t, n) {
        "use strict";

        var r = e(1);
        function i() {}
        var o = {};
        var a = ["REJECTED"];
        var s = ["FULFILLED"];
        var u = ["PENDING"];
        function c(e) {
          if (typeof e != "function") {
            throw TypeError("resolver must be a function");
          }
          this.state = u;
          this.queue = [];
          this.outcome = undefined;
          if (e !== i) {
            d(this, e);
          }
        }
        function l(e, t, n) {
          this.promise = e;
          if (typeof t == "function") {
            this.onFulfilled = t;
            this.callFulfilled = this.otherCallFulfilled;
          }
          if (typeof n == "function") {
            this.onRejected = n;
            this.callRejected = this.otherCallRejected;
          }
        }
        function f(e, t, n) {
          r(function () {
            var r;
            try {
              r = t(n);
            } catch (t) {
              return o.reject(e, t);
            }
            if (r === e) {
              o.reject(e, TypeError("Cannot resolve promise with itself"));
            } else {
              o.resolve(e, r);
            }
          });
        }
        function h(e) {
          var t = e && e.then;
          if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") {
            return function () {
              t.apply(e, arguments);
            };
          }
        }
        function d(e, t) {
          var n = false;
          function r(t) {
            if (!n) {
              n = true;
              o.reject(e, t);
            }
          }
          function i(t) {
            if (!n) {
              n = true;
              o.resolve(e, t);
            }
          }
          var a = p(function () {
            t(i, r);
          });
          if (a.status === "error") {
            r(a.value);
          }
        }
        function p(e, t) {
          var n = {};
          try {
            n.value = e(t);
            n.status = "success";
          } catch (e) {
            n.status = "error";
            n.value = e;
          }
          return n;
        }
        t.exports = c;
        c.prototype.catch = function (e) {
          return this.then(null, e);
        };
        c.prototype.then = function (e, t) {
          if (typeof e != "function" && this.state === s || typeof t != "function" && this.state === a) {
            return this;
          }
          var n = new this.constructor(i);
          if (this.state !== u) {
            f(n, this.state === s ? e : t, this.outcome);
          } else {
            this.queue.push(new l(n, e, t));
          }
          return n;
        };
        l.prototype.callFulfilled = function (e) {
          o.resolve(this.promise, e);
        };
        l.prototype.otherCallFulfilled = function (e) {
          f(this.promise, this.onFulfilled, e);
        };
        l.prototype.callRejected = function (e) {
          o.reject(this.promise, e);
        };
        l.prototype.otherCallRejected = function (e) {
          f(this.promise, this.onRejected, e);
        };
        o.resolve = function (e, t) {
          var n = p(h, t);
          if (n.status === "error") {
            return o.reject(e, n.value);
          }
          var r = n.value;
          if (r) {
            d(e, r);
          } else {
            e.state = s;
            e.outcome = t;
            var i = -1;
            var a = e.queue.length;
            while (++i < a) {
              e.queue[i].callFulfilled(t);
            }
          }
          return e;
        };
        o.reject = function (e, t) {
          e.state = a;
          e.outcome = t;
          var n = -1;
          var r = e.queue.length;
          while (++n < r) {
            e.queue[n].callRejected(t);
          }
          return e;
        };
        c.resolve = function (e) {
          if (e instanceof this) {
            return e;
          } else {
            return o.resolve(new this(i), e);
          }
        };
        c.reject = function (e) {
          var t = new this(i);
          return o.reject(t, e);
        };
        c.all = function (e) {
          var t = this;
          if (Object.prototype.toString.call(e) !== "[object Array]") {
            return this.reject(TypeError("must be an array"));
          }
          var n = e.length;
          var r = false;
          if (!n) {
            return this.resolve([]);
          }
          var a = Array(n);
          var s = 0;
          var u = -1;
          var c = new this(i);
          while (++u < n) {
            (function (e, i) {
              t.resolve(e).then(function (e) {
                a[i] = e;
                if (++s === n && !r) {
                  r = true;
                  o.resolve(c, a);
                }
              }, function (e) {
                if (!r) {
                  r = true;
                  o.reject(c, e);
                }
              });
            })(e[u], u);
          }
          return c;
        };
        c.race = function (e) {
          var t = this;
          if (Object.prototype.toString.call(e) !== "[object Array]") {
            return this.reject(TypeError("must be an array"));
          }
          var n = e.length;
          var r = false;
          if (!n) {
            return this.resolve([]);
          }
          var a = -1;
          var s = new this(i);
          while (++a < n) {
            (function (e) {
              t.resolve(e).then(function (e) {
                if (!r) {
                  r = true;
                  o.resolve(s, e);
                }
              }, function (e) {
                if (!r) {
                  r = true;
                  o.reject(s, e);
                }
              });
            })(e[a]);
          }
          return s;
        };
      }, {
        1: 1
      }],
      3: [function (e, t, r) {
        (function (t) {
          "use strict";

          if (typeof t.Promise != "function") {
            t.Promise = e(2);
          }
        }).call(this, require.g !== undefined ? require.g : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {
        2: 2
      }],
      4: [function (e, t, n) {
        "use strict";

        var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
        var i = function () {
          try {
            if (typeof indexedDB != "undefined") {
              return indexedDB;
            }
            if (typeof webkitIndexedDB != "undefined") {
              return webkitIndexedDB;
            }
            if (typeof mozIndexedDB != "undefined") {
              return mozIndexedDB;
            }
            if (typeof OIndexedDB != "undefined") {
              return OIndexedDB;
            }
            if (typeof msIndexedDB != "undefined") {
              return msIndexedDB;
            }
          } catch (e) {
            return;
          }
        }();
        function o(e, t) {
          e = e || [];
          t = t || {};
          try {
            return new Blob(e, t);
          } catch (i) {
            if (i.name !== "TypeError") {
              throw i;
            }
            var n = new (typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder)();
            var r = 0;
            for (; r < e.length; r += 1) {
              n.append(e[r]);
            }
            return n.getBlob(t.type);
          }
        }
        if (typeof Promise == "undefined") {
          e(3);
        }
        var a = Promise;
        function s(e, t) {
          if (t) {
            e.then(function (e) {
              t(null, e);
            }, function (e) {
              t(e);
            });
          }
        }
        function u(e, t, n) {
          if (typeof t == "function") {
            e.then(t);
          }
          if (typeof n == "function") {
            e.catch(n);
          }
        }
        function c(e) {
          if (typeof e != "string") {
            e = String(e);
          }
          return e;
        }
        function l() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
            return arguments[arguments.length - 1];
          }
        }
        var f = "local-forage-detect-blob-support";
        var h = undefined;
        var d = {};
        var p = Object.prototype.toString;
        var g = "readonly";
        var v = "readwrite";
        function m(e) {
          var t = d[e.name];
          var n = {};
          n.promise = new a(function (e, t) {
            n.resolve = e;
            n.reject = t;
          });
          t.deferredOperations.push(n);
          if (t.dbReady) {
            t.dbReady = t.dbReady.then(function () {
              return n.promise;
            });
          } else {
            t.dbReady = n.promise;
          }
        }
        function y(e) {
          var t = d[e.name].deferredOperations.pop();
          if (t) {
            t.resolve();
            return t.promise;
          }
        }
        function b(e, t) {
          var n = d[e.name].deferredOperations.pop();
          if (n) {
            n.reject(t);
            return n.promise;
          }
        }
        function _(e, t) {
          return new a(function (n, r) {
            d[e.name] = d[e.name] || O();
            if (e.db) {
              if (!t) {
                return n(e.db);
              }
              m(e);
              e.db.close();
            }
            var o = [e.name];
            if (t) {
              o.push(e.version);
            }
            var a = i.open.apply(i, o);
            if (t) {
              a.onupgradeneeded = function (t) {
                var n = a.result;
                try {
                  n.createObjectStore(e.storeName);
                  if (t.oldVersion <= 1) {
                    n.createObjectStore(f);
                  }
                } catch (e) {
                  if (e.name === "ConstraintError") ;else {
                    throw e;
                  }
                }
              };
            }
            a.onerror = function (e) {
              e.preventDefault();
              r(a.error);
            };
            a.onsuccess = function () {
              var t = a.result;
              t.onversionchange = function (e) {
                e.target.close();
              };
              n(t);
              y(e);
            };
          });
        }
        function w(e, t) {
          if (!e.db) {
            return true;
          }
          var n = !e.db.objectStoreNames.contains(e.storeName);
          var r = e.version < e.db.version;
          var i = e.version > e.db.version;
          if (r) {
            e.version;
            e.version = e.db.version;
          }
          if (i || n) {
            if (n) {
              var o = e.db.version + 1;
              if (o > e.version) {
                e.version = o;
              }
            }
            return true;
          }
          return false;
        }
        function E(e) {
          return o([function (e) {
            var t = e.length;
            var n = new ArrayBuffer(t);
            var r = new Uint8Array(n);
            var i = 0;
            for (; i < t; i++) {
              r[i] = e.charCodeAt(i);
            }
            return n;
          }(atob(e.data))], {
            type: e.type
          });
        }
        function S(e) {
          return e && e.__local_forage_encoded_blob;
        }
        function x(e) {
          var t = this;
          var n = t._initReady().then(function () {
            var e = d[t._dbInfo.name];
            if (e && e.dbReady) {
              return e.dbReady;
            }
          });
          u(n, e, e);
          return n;
        }
        function k(e, t, n, r = 1) {
          try {
            var i = e.db.transaction(e.storeName, t);
            n(null, i);
          } catch (i) {
            if (r > 0 && (!e.db || i.name === "InvalidStateError" || i.name === "NotFoundError")) {
              return a.resolve().then(function () {
                if (!e.db || i.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) {
                  if (e.db) {
                    e.version = e.db.version + 1;
                  }
                  return _(e, true);
                }
              }).then(function () {
                return function (e) {
                  m(e);
                  var t = d[e.name];
                  var n = t.forages;
                  var r = 0;
                  for (; r < n.length; r++) {
                    var i = n[r];
                    if (i._dbInfo.db) {
                      i._dbInfo.db.close();
                      i._dbInfo.db = null;
                    }
                  }
                  e.db = null;
                  return _(e, false).then(function (t) {
                    e.db = t;
                    if (w(e)) {
                      return _(e, true);
                    } else {
                      return t;
                    }
                  }).then(function (r) {
                    e.db = t.db = r;
                    for (var i = 0; i < n.length; i++) {
                      n[i]._dbInfo.db = r;
                    }
                  }).catch(function (t) {
                    b(e, t);
                    throw t;
                  });
                }(e).then(function () {
                  k(e, t, n, r - 1);
                });
              }).catch(n);
            }
            n(i);
          }
        }
        function O() {
          return {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          };
        }
        var A = {
          _driver: "asyncStorage",
          _initStorage: function (e) {
            var t = this;
            var n = {
              db: null
            };
            if (e) {
              for (var r in e) {
                n[r] = e[r];
              }
            }
            var i = d[n.name];
            if (!i) {
              i = O();
              d[n.name] = i;
            }
            i.forages.push(t);
            if (!t._initReady) {
              t._initReady = t.ready;
              t.ready = x;
            }
            var o = [];
            function s() {
              return a.resolve();
            }
            for (var u = 0; u < i.forages.length; u++) {
              var c = i.forages[u];
              if (c !== t) {
                o.push(c._initReady().catch(s));
              }
            }
            var l = i.forages.slice(0);
            return a.all(o).then(function () {
              n.db = i.db;
              return _(n, false);
            }).then(function (e) {
              n.db = e;
              if (w(n, t._defaultConfig.version)) {
                return _(n, true);
              } else {
                return e;
              }
            }).then(function (e) {
              n.db = i.db = e;
              t._dbInfo = n;
              for (var r = 0; r < l.length; r++) {
                var o = l[r];
                if (o !== t) {
                  o._dbInfo.db = n.db;
                  o._dbInfo.version = n.version;
                }
              }
            });
          },
          _support: function () {
            try {
              if (!i || !i.open) {
                return false;
              }
              var e = typeof openDatabase != "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
              var t = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
              return (!e || t) && typeof indexedDB != "undefined" && typeof IDBKeyRange != "undefined";
            } catch (e) {
              return false;
            }
          }(),
          iterate: function (e, t) {
            var n = this;
            var r = new a(function (t, r) {
              n.ready().then(function () {
                k(n._dbInfo, g, function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName).openCursor();
                    var s = 1;
                    a.onsuccess = function () {
                      var n = a.result;
                      if (n) {
                        var r = n.value;
                        if (S(r)) {
                          r = E(r);
                        }
                        var i = e(r, n.key, s++);
                        if (i !== undefined) {
                          t(i);
                        } else {
                          n.continue();
                        }
                      } else {
                        t();
                      }
                    };
                    a.onerror = function () {
                      r(a.error);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          getItem: function (e, t) {
            var n = this;
            e = c(e);
            var r = new a(function (t, r) {
              n.ready().then(function () {
                k(n._dbInfo, g, function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName).get(e);
                    a.onsuccess = function () {
                      var e = a.result;
                      if (e === undefined) {
                        e = null;
                      }
                      if (S(e)) {
                        e = E(e);
                      }
                      t(e);
                    };
                    a.onerror = function () {
                      r(a.error);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          setItem: function (e, t, n) {
            var r = this;
            e = c(e);
            var i = new a(function (n, i) {
              var s;
              r.ready().then(function () {
                s = r._dbInfo;
                if (p.call(t) === "[object Blob]") {
                  return function (e) {
                    if (typeof h == "boolean") {
                      return a.resolve(h);
                    } else {
                      return new a(function (t) {
                        var n = e.transaction(f, v);
                        var r = o([""]);
                        n.objectStore(f).put(r, "key");
                        n.onabort = function (e) {
                          e.preventDefault();
                          e.stopPropagation();
                          t(false);
                        };
                        n.oncomplete = function () {
                          var e = navigator.userAgent.match(/Chrome\/(\d+)/);
                          t(navigator.userAgent.match(/Edge\//) || !e || parseInt(e[1], 10) >= 43);
                        };
                      }).catch(function () {
                        return false;
                      }).then(function (e) {
                        return h = e;
                      });
                    }
                  }(s.db).then(function (e) {
                    if (e) {
                      return t;
                    } else {
                      return new a(function (e, n) {
                        var r = new FileReader();
                        r.onerror = n;
                        r.onloadend = function (n) {
                          e({
                            __local_forage_encoded_blob: true,
                            data: btoa(n.target.result || ""),
                            type: t.type
                          });
                        };
                        r.readAsBinaryString(t);
                      });
                    }
                  });
                } else {
                  return t;
                }
              }).then(function (t) {
                k(r._dbInfo, v, function (o, a) {
                  if (o) {
                    return i(o);
                  }
                  try {
                    var s = a.objectStore(r._dbInfo.storeName);
                    if (t === null) {
                      t = undefined;
                    }
                    var u = s.put(t, e);
                    a.oncomplete = function () {
                      if (t === undefined) {
                        t = null;
                      }
                      n(t);
                    };
                    a.onabort = a.onerror = function () {
                      var e = u.error ? u.error : u.transaction.error;
                      i(e);
                    };
                  } catch (e) {
                    i(e);
                  }
                });
              }).catch(i);
            });
            s(i, n);
            return i;
          },
          removeItem: function (e, t) {
            var n = this;
            e = c(e);
            var r = new a(function (t, r) {
              n.ready().then(function () {
                k(n._dbInfo, v, function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName).delete(e);
                    o.oncomplete = function () {
                      t();
                    };
                    o.onerror = function () {
                      r(a.error);
                    };
                    o.onabort = function () {
                      var e = a.error ? a.error : a.transaction.error;
                      r(e);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          clear: function (e) {
            var t = this;
            var n = new a(function (e, n) {
              t.ready().then(function () {
                k(t._dbInfo, v, function (r, i) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var o = i.objectStore(t._dbInfo.storeName).clear();
                    i.oncomplete = function () {
                      e();
                    };
                    i.onabort = i.onerror = function () {
                      var e = o.error ? o.error : o.transaction.error;
                      n(e);
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            s(n, e);
            return n;
          },
          length: function (e) {
            var t = this;
            var n = new a(function (e, n) {
              t.ready().then(function () {
                k(t._dbInfo, g, function (r, i) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var o = i.objectStore(t._dbInfo.storeName).count();
                    o.onsuccess = function () {
                      e(o.result);
                    };
                    o.onerror = function () {
                      n(o.error);
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            s(n, e);
            return n;
          },
          key: function (e, t) {
            var n = this;
            var r = new a(function (t, r) {
              if (e < 0) {
                t(null);
                return;
              }
              n.ready().then(function () {
                k(n._dbInfo, g, function (i, o) {
                  if (i) {
                    return r(i);
                  }
                  try {
                    var a = o.objectStore(n._dbInfo.storeName);
                    var s = false;
                    var u = a.openKeyCursor();
                    u.onsuccess = function () {
                      var n = u.result;
                      if (!n) {
                        t(null);
                        return;
                      }
                      if (e === 0) {
                        t(n.key);
                      } else if (s) {
                        t(n.key);
                      } else {
                        s = true;
                        n.advance(e);
                      }
                    };
                    u.onerror = function () {
                      r(u.error);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          keys: function (e) {
            var t = this;
            var n = new a(function (e, n) {
              t.ready().then(function () {
                k(t._dbInfo, g, function (r, i) {
                  if (r) {
                    return n(r);
                  }
                  try {
                    var o = i.objectStore(t._dbInfo.storeName).openKeyCursor();
                    var a = [];
                    o.onsuccess = function () {
                      var t = o.result;
                      if (!t) {
                        e(a);
                        return;
                      }
                      a.push(t.key);
                      t.continue();
                    };
                    o.onerror = function () {
                      n(o.error);
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            s(n, e);
            return n;
          },
          dropInstance: function (e, t) {
            t = l.apply(this, arguments);
            var n;
            var r = this.config();
            if (!(e = typeof e != "function" && e || {}).name) {
              e.name = e.name || r.name;
              e.storeName = e.storeName || r.storeName;
            }
            if (e.name) {
              var o = e.name === r.name && this._dbInfo.db ? a.resolve(this._dbInfo.db) : _(e, false).then(function (t) {
                var n = d[e.name];
                var r = n.forages;
                n.db = t;
                for (var i = 0; i < r.length; i++) {
                  r[i]._dbInfo.db = t;
                }
                return t;
              });
              n = e.storeName ? o.then(function (t) {
                if (t.objectStoreNames.contains(e.storeName)) {
                  var n = t.version + 1;
                  m(e);
                  var r = d[e.name];
                  var o = r.forages;
                  t.close();
                  for (var s = 0; s < o.length; s++) {
                    var u = o[s];
                    u._dbInfo.db = null;
                    u._dbInfo.version = n;
                  }
                  return new a(function (t, r) {
                    var o = i.open(e.name, n);
                    o.onerror = function (e) {
                      o.result.close();
                      r(e);
                    };
                    o.onupgradeneeded = function () {
                      o.result.deleteObjectStore(e.storeName);
                    };
                    o.onsuccess = function () {
                      var e = o.result;
                      e.close();
                      t(e);
                    };
                  }).then(function (e) {
                    r.db = e;
                    for (var t = 0; t < o.length; t++) {
                      var n = o[t];
                      n._dbInfo.db = e;
                      y(n._dbInfo);
                    }
                  }).catch(function (t) {
                    (b(e, t) || a.resolve()).catch(function () {});
                    throw t;
                  });
                }
              }) : o.then(function (t) {
                m(e);
                var n = d[e.name];
                var r = n.forages;
                t.close();
                for (var o = 0; o < r.length; o++) {
                  r[o]._dbInfo.db = null;
                }
                return new a(function (t, n) {
                  var r = i.deleteDatabase(e.name);
                  r.onerror = function () {
                    var e = r.result;
                    if (e) {
                      e.close();
                    }
                    n(r.error);
                  };
                  r.onblocked = function () {};
                  r.onsuccess = function () {
                    var e = r.result;
                    if (e) {
                      e.close();
                    }
                    t(e);
                  };
                }).then(function (e) {
                  n.db = e;
                  for (var t = 0; t < r.length; t++) {
                    y(r[t]._dbInfo);
                  }
                }).catch(function (t) {
                  (b(e, t) || a.resolve()).catch(function () {});
                  throw t;
                });
              });
            } else {
              n = a.reject("Invalid arguments");
            }
            s(n, t);
            return n;
          }
        };
        var T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var R = /^~~local_forage_type~([^~]+)~/;
        var C = "__lfsc__:";
        var M = C.length;
        var P = "arbf";
        var D = "blob";
        var j = "si08";
        var I = "ui08";
        var N = "uic8";
        var L = "si16";
        var B = "si32";
        var Z = "ur16";
        var U = "ui32";
        var z = "fl32";
        var F = "fl64";
        var H = M + P.length;
        var G = Object.prototype.toString;
        function V(e) {
          var t;
          var n;
          var r;
          var i;
          var o;
          var a = e.length * 0.75;
          var s = e.length;
          var u = 0;
          if (e[e.length - 1] === "=") {
            a--;
            if (e[e.length - 2] === "=") {
              a--;
            }
          }
          var c = new ArrayBuffer(a);
          var l = new Uint8Array(c);
          for (t = 0; t < s; t += 4) {
            n = T.indexOf(e[t]);
            r = T.indexOf(e[t + 1]);
            i = T.indexOf(e[t + 2]);
            o = T.indexOf(e[t + 3]);
            l[u++] = n << 2 | r >> 4;
            l[u++] = (r & 15) << 4 | i >> 2;
            l[u++] = (i & 3) << 6 | o & 63;
          }
          return c;
        }
        function $(e) {
          var t;
          var n = new Uint8Array(e);
          var r = "";
          for (t = 0; t < n.length; t += 3) {
            r += T[n[t] >> 2];
            r += T[(n[t] & 3) << 4 | n[t + 1] >> 4];
            r += T[(n[t + 1] & 15) << 2 | n[t + 2] >> 6];
            r += T[n[t + 2] & 63];
          }
          if (n.length % 3 == 2) {
            r = r.substring(0, r.length - 1) + "=";
          } else if (n.length % 3 == 1) {
            r = r.substring(0, r.length - 2) + "==";
          }
          return r;
        }
        var W = {
          serialize: function (e, t) {
            var n = "";
            if (e) {
              n = G.call(e);
            }
            if (e && (n === "[object ArrayBuffer]" || e.buffer && G.call(e.buffer) === "[object ArrayBuffer]")) {
              var r;
              var i = C;
              if (e instanceof ArrayBuffer) {
                r = e;
                i += P;
              } else {
                r = e.buffer;
                if (n === "[object Int8Array]") {
                  i += j;
                } else if (n === "[object Uint8Array]") {
                  i += I;
                } else if (n === "[object Uint8ClampedArray]") {
                  i += N;
                } else if (n === "[object Int16Array]") {
                  i += L;
                } else if (n === "[object Uint16Array]") {
                  i += Z;
                } else if (n === "[object Int32Array]") {
                  i += B;
                } else if (n === "[object Uint32Array]") {
                  i += U;
                } else if (n === "[object Float32Array]") {
                  i += z;
                } else if (n === "[object Float64Array]") {
                  i += F;
                } else {
                  t(Error("Failed to get type for BinaryArray"));
                }
              }
              t(i + $(r));
            } else if (n === "[object Blob]") {
              var o = new FileReader();
              o.onload = function () {
                t(C + D + ("~~local_forage_type~" + e.type + "~") + $(this.result));
              };
              o.readAsArrayBuffer(e);
            } else {
              try {
                t(JSON.stringify(e));
              } catch (e) {
                t(null, e);
              }
            }
          },
          deserialize: function (e) {
            if (e.substring(0, M) !== C) {
              return JSON.parse(e);
            }
            var t;
            var n = e.substring(H);
            var r = e.substring(M, H);
            if (r === D && R.test(n)) {
              var i = n.match(R);
              t = i[1];
              n = n.substring(i[0].length);
            }
            var a = V(n);
            switch (r) {
              case P:
                return a;
              case D:
                return o([a], {
                  type: t
                });
              case j:
                return new Int8Array(a);
              case I:
                return new Uint8Array(a);
              case N:
                return new Uint8ClampedArray(a);
              case L:
                return new Int16Array(a);
              case Z:
                return new Uint16Array(a);
              case B:
                return new Int32Array(a);
              case U:
                return new Uint32Array(a);
              case z:
                return new Float32Array(a);
              case F:
                return new Float64Array(a);
              default:
                throw Error("Unkown type: " + r);
            }
          },
          stringToBuffer: V,
          bufferToString: $
        };
        function q(e, t, n, r) {
          e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
        }
        function K(e, t, n, r, i, o) {
          e.executeSql(n, r, i, function (e, a) {
            if (a.code === a.SYNTAX_ERR) {
              e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function (e, s) {
                if (s.rows.length) {
                  o(e, a);
                } else {
                  q(e, t, function () {
                    e.executeSql(n, r, i, o);
                  }, o);
                }
              }, o);
            } else {
              o(e, a);
            }
          }, o);
        }
        function J(e, t, n, r) {
          var i = this;
          e = c(e);
          var o = new a(function (o, a) {
            i.ready().then(function () {
              if (t === undefined) {
                t = null;
              }
              var s = t;
              var u = i._dbInfo;
              u.serializer.serialize(t, function (t, c) {
                if (c) {
                  a(c);
                } else {
                  u.db.transaction(function (n) {
                    K(n, u, "INSERT OR REPLACE INTO " + u.storeName + " (key, value) VALUES (?, ?)", [e, t], function () {
                      o(s);
                    }, function (e, t) {
                      a(t);
                    });
                  }, function (t) {
                    if (t.code === t.QUOTA_ERR) {
                      if (r > 0) {
                        o(J.apply(i, [e, s, n, r - 1]));
                        return;
                      }
                      a(t);
                    }
                  });
                }
              });
            }).catch(a);
          });
          s(o, n);
          return o;
        }
        var X = {
          _driver: "webSQLStorage",
          _initStorage: function (e) {
            var t = this;
            var n = {
              db: null
            };
            if (e) {
              for (var r in e) {
                n[r] = typeof e[r] != "string" ? e[r].toString() : e[r];
              }
            }
            var i = new a(function (e, r) {
              try {
                n.db = openDatabase(n.name, String(n.version), n.description, n.size);
              } catch (e) {
                return r(e);
              }
              n.db.transaction(function (i) {
                q(i, n, function () {
                  t._dbInfo = n;
                  e();
                }, function (e, t) {
                  r(t);
                });
              }, r);
            });
            n.serializer = W;
            return i;
          },
          _support: typeof openDatabase == "function",
          iterate: function (e, t) {
            var n = this;
            var r = new a(function (t, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  K(n, i, "SELECT * FROM " + i.storeName, [], function (n, r) {
                    var o = r.rows;
                    var a = o.length;
                    var s = 0;
                    for (; s < a; s++) {
                      var u = o.item(s);
                      var c = u.value;
                      c &&= i.serializer.deserialize(c);
                      if ((c = e(c, u.key, s + 1)) !== undefined) {
                        t(c);
                        return;
                      }
                    }
                    t();
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          getItem: function (e, t) {
            var n = this;
            e = c(e);
            var r = new a(function (t, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  K(n, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function (e, n) {
                    var r = n.rows.length ? n.rows.item(0).value : null;
                    r &&= i.serializer.deserialize(r);
                    t(r);
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          setItem: function (e, t, n) {
            return J.apply(this, [e, t, n, 1]);
          },
          removeItem: function (e, t) {
            var n = this;
            e = c(e);
            var r = new a(function (t, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  K(n, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [e], function () {
                    t();
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          clear: function (e) {
            var t = this;
            var n = new a(function (e, n) {
              t.ready().then(function () {
                var r = t._dbInfo;
                r.db.transaction(function (t) {
                  K(t, r, "DELETE FROM " + r.storeName, [], function () {
                    e();
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            s(n, e);
            return n;
          },
          length: function (e) {
            var t = this;
            var n = new a(function (e, n) {
              t.ready().then(function () {
                var r = t._dbInfo;
                r.db.transaction(function (t) {
                  K(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (t, n) {
                    e(n.rows.item(0).c);
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            s(n, e);
            return n;
          },
          key: function (e, t) {
            var n = this;
            var r = new a(function (t, r) {
              n.ready().then(function () {
                var i = n._dbInfo;
                i.db.transaction(function (n) {
                  K(n, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [e + 1], function (e, n) {
                    t(n.rows.length ? n.rows.item(0).key : null);
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            s(r, t);
            return r;
          },
          keys: function (e) {
            var t = this;
            var n = new a(function (e, n) {
              t.ready().then(function () {
                var r = t._dbInfo;
                r.db.transaction(function (t) {
                  K(t, r, "SELECT key FROM " + r.storeName, [], function (t, n) {
                    var r = [];
                    var i = 0;
                    for (; i < n.rows.length; i++) {
                      r.push(n.rows.item(i).key);
                    }
                    e(r);
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            s(n, e);
            return n;
          },
          dropInstance: function (e, t) {
            t = l.apply(this, arguments);
            var n;
            var r = this.config();
            if (!(e = typeof e != "function" && e || {}).name) {
              e.name = e.name || r.name;
              e.storeName = e.storeName || r.storeName;
            }
            var i = this;
            s(n = e.name ? new a(function (t) {
              var n;
              n = e.name === r.name ? i._dbInfo.db : openDatabase(e.name, "", "", 0);
              if (e.storeName) {
                t({
                  db: n,
                  storeNames: [e.storeName]
                });
              } else {
                t(new a(function (e, t) {
                  n.transaction(function (r) {
                    r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, r) {
                      var i = [];
                      var o = 0;
                      for (; o < r.rows.length; o++) {
                        i.push(r.rows.item(o).name);
                      }
                      e({
                        db: n,
                        storeNames: i
                      });
                    }, function (e, n) {
                      t(n);
                    });
                  }, function (e) {
                    t(e);
                  });
                }));
              }
            }).then(function (e) {
              return new a(function (t, n) {
                e.db.transaction(function (r) {
                  var i = [];
                  var o = 0;
                  var s = e.storeNames.length;
                  for (; o < s; o++) {
                    i.push(function (e) {
                      return new a(function (t, n) {
                        r.executeSql("DROP TABLE IF EXISTS " + e, [], function () {
                          t();
                        }, function (e, t) {
                          n(t);
                        });
                      });
                    }(e.storeNames[o]));
                  }
                  a.all(i).then(function () {
                    t();
                  }).catch(function (e) {
                    n(e);
                  });
                }, function (e) {
                  n(e);
                });
              });
            }) : a.reject("Invalid arguments"), t);
            return n;
          }
        };
        function Y(e, t) {
          var n = e.name + "/";
          if (e.storeName !== t.storeName) {
            n += e.storeName + "/";
          }
          return n;
        }
        var Q = {
          _driver: "localStorageWrapper",
          _initStorage: function (e) {
            var t = {};
            if (e) {
              for (var n in e) {
                t[n] = e[n];
              }
            }
            t.keyPrefix = Y(e, this._defaultConfig);
            if (!function () {
              var e = "_localforage_support_test";
              try {
                localStorage.setItem(e, true);
                localStorage.removeItem(e);
                return false;
              } catch (e) {
                return true;
              }
            }() || localStorage.length > 0) {
              this._dbInfo = t;
              t.serializer = W;
              return a.resolve();
            } else {
              return a.reject();
            }
          },
          _support: function () {
            try {
              return typeof localStorage != "undefined" && "setItem" in localStorage && !!localStorage.setItem;
            } catch (e) {
              return false;
            }
          }(),
          iterate: function (e, t) {
            var n = this;
            var r = n.ready().then(function () {
              var t = n._dbInfo;
              var r = t.keyPrefix;
              var i = r.length;
              var o = localStorage.length;
              var a = 1;
              var s = 0;
              for (; s < o; s++) {
                var u = localStorage.key(s);
                if (u.indexOf(r) === 0) {
                  var c = localStorage.getItem(u);
                  c &&= t.serializer.deserialize(c);
                  if ((c = e(c, u.substring(i), a++)) !== undefined) {
                    return c;
                  }
                }
              }
            });
            s(r, t);
            return r;
          },
          getItem: function (e, t) {
            var n = this;
            e = c(e);
            var r = n.ready().then(function () {
              var t = n._dbInfo;
              var r = localStorage.getItem(t.keyPrefix + e);
              r &&= t.serializer.deserialize(r);
              return r;
            });
            s(r, t);
            return r;
          },
          setItem: function (e, t, n) {
            var r = this;
            e = c(e);
            var i = r.ready().then(function () {
              if (t === undefined) {
                t = null;
              }
              var n = t;
              return new a(function (i, o) {
                var a = r._dbInfo;
                a.serializer.serialize(t, function (t, r) {
                  if (r) {
                    o(r);
                  } else {
                    try {
                      localStorage.setItem(a.keyPrefix + e, t);
                      i(n);
                    } catch (e) {
                      if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                        o(e);
                      }
                      o(e);
                    }
                  }
                });
              });
            });
            s(i, n);
            return i;
          },
          removeItem: function (e, t) {
            var n = this;
            e = c(e);
            var r = n.ready().then(function () {
              var t = n._dbInfo;
              localStorage.removeItem(t.keyPrefix + e);
            });
            s(r, t);
            return r;
          },
          clear: function (e) {
            var t = this;
            var n = t.ready().then(function () {
              var e = t._dbInfo.keyPrefix;
              var n = localStorage.length - 1;
              for (; n >= 0; n--) {
                var r = localStorage.key(n);
                if (r.indexOf(e) === 0) {
                  localStorage.removeItem(r);
                }
              }
            });
            s(n, e);
            return n;
          },
          length: function (e) {
            var t = this.keys().then(function (e) {
              return e.length;
            });
            s(t, e);
            return t;
          },
          key: function (e, t) {
            var n = this;
            var r = n.ready().then(function () {
              var t;
              var r = n._dbInfo;
              try {
                t = localStorage.key(e);
              } catch (e) {
                t = null;
              }
              t &&= t.substring(r.keyPrefix.length);
              return t;
            });
            s(r, t);
            return r;
          },
          keys: function (e) {
            var t = this;
            var n = t.ready().then(function () {
              var e = t._dbInfo;
              var n = localStorage.length;
              var r = [];
              var i = 0;
              for (; i < n; i++) {
                var o = localStorage.key(i);
                if (o.indexOf(e.keyPrefix) === 0) {
                  r.push(o.substring(e.keyPrefix.length));
                }
              }
              return r;
            });
            s(n, e);
            return n;
          },
          dropInstance: function (e, t) {
            t = l.apply(this, arguments);
            if (!(e = typeof e != "function" && e || {}).name) {
              var n;
              var r = this.config();
              e.name = e.name || r.name;
              e.storeName = e.storeName || r.storeName;
            }
            var i = this;
            s(n = e.name ? new a(function (t) {
              t(e.storeName ? Y(e, i._defaultConfig) : e.name + "/");
            }).then(function (e) {
              for (var t = localStorage.length - 1; t >= 0; t--) {
                var n = localStorage.key(t);
                if (n.indexOf(e) === 0) {
                  localStorage.removeItem(n);
                }
              }
            }) : a.reject("Invalid arguments"), t);
            return n;
          }
        };
        function ee(e, t) {
          var n;
          var r = e.length;
          var i = 0;
          while (i < r) {
            if ((n = e[i]) === t || typeof n == "number" && typeof t == "number" && isNaN(n) && isNaN(t)) {
              return true;
            }
            i++;
          }
          return false;
        }
        var et = Array.isArray || function (e) {
          return Object.prototype.toString.call(e) === "[object Array]";
        };
        var en = {};
        var er = {};
        var ei = {
          INDEXEDDB: A,
          WEBSQL: X,
          LOCALSTORAGE: Q
        };
        var eo = [ei.INDEXEDDB._driver, ei.WEBSQL._driver, ei.LOCALSTORAGE._driver];
        var ea = ["dropInstance"];
        var es = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ea);
        var eu = {
          description: "",
          driver: eo.slice(),
          name: "localforage",
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function ec() {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            if (t) {
              for (var n in t) {
                if (t.hasOwnProperty(n)) {
                  if (et(t[n])) {
                    arguments[0][n] = t[n].slice();
                  } else {
                    arguments[0][n] = t[n];
                  }
                }
              }
            }
          }
          return arguments[0];
        }
        var el = new (function () {
          function e(t) {
            (function (e, t) {
              if (!(e instanceof t)) {
                throw TypeError("Cannot call a class as a function");
              }
            })(this, e);
            for (var n in ei) {
              if (ei.hasOwnProperty(n)) {
                var r = ei[n];
                var i = r._driver;
                this[n] = i;
                if (!en[i]) {
                  this.defineDriver(r);
                }
              }
            }
            this._defaultConfig = ec({}, eu);
            this._config = ec({}, this._defaultConfig, t);
            this._driverSet = null;
            this._initDriver = null;
            this._ready = false;
            this._dbInfo = null;
            this._wrapLibraryMethodsWithReady();
            this.setDriver(this._config.driver).catch(function () {});
          }
          e.prototype.config = function (e) {
            if ((e === undefined ? "undefined" : r(e)) === "object") {
              if (this._ready) {
                return Error("Can't call config() after localforage has been used.");
              }
              for (var t in e) {
                if (t === "storeName") {
                  e[t] = e[t].replace(/\W/g, "_");
                }
                if (t === "version" && typeof e[t] != "number") {
                  return Error("Database version must be a number.");
                }
                this._config[t] = e[t];
              }
              return !("driver" in e) || !e.driver || this.setDriver(this._config.driver);
            }
            if (typeof e == "string") {
              return this._config[e];
            } else {
              return this._config;
            }
          };
          e.prototype.defineDriver = function (e, t, n) {
            var r = new a(function (t, n) {
              try {
                var r = e._driver;
                var i = Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!e._driver) {
                  n(i);
                  return;
                }
                var o = es.concat("_initStorage");
                var u = 0;
                var c = o.length;
                for (; u < c; u++) {
                  var l = o[u];
                  if ((!ee(ea, l) || e[l]) && typeof e[l] != "function") {
                    n(i);
                    return;
                  }
                }
                (function () {
                  function t(e) {
                    return function () {
                      var t = Error("Method " + e + " is not implemented by the current driver");
                      var n = a.reject(t);
                      s(n, arguments[arguments.length - 1]);
                      return n;
                    };
                  }
                  var n = 0;
                  var r = ea.length;
                  for (; n < r; n++) {
                    var i = ea[n];
                    e[i] ||= t(i);
                  }
                })();
                function f(n) {
                  en[r];
                  en[r] = e;
                  er[r] = n;
                  t();
                }
                if ("_support" in e) {
                  if (e._support && typeof e._support == "function") {
                    e._support().then(f, n);
                  } else {
                    f(!!e._support);
                  }
                } else {
                  f(true);
                }
              } catch (e) {
                n(e);
              }
            });
            u(r, t, n);
            return r;
          };
          e.prototype.driver = function () {
            return this._driver || null;
          };
          e.prototype.getDriver = function (e, t, n) {
            var r = en[e] ? a.resolve(en[e]) : a.reject(Error("Driver not found."));
            u(r, t, n);
            return r;
          };
          e.prototype.getSerializer = function (e) {
            var t = a.resolve(W);
            u(t, e);
            return t;
          };
          e.prototype.ready = function (e) {
            var t = this;
            var n = t._driverSet.then(function () {
              if (t._ready === null) {
                t._ready = t._initDriver();
              }
              return t._ready;
            });
            u(n, e, e);
            return n;
          };
          e.prototype.setDriver = function (e, t, n) {
            var r = this;
            if (!et(e)) {
              e = [e];
            }
            var i = this._getSupportedDrivers(e);
            function o() {
              r._config.driver = r.driver();
            }
            function s(e) {
              r._extend(e);
              o();
              r._ready = r._initStorage(r._config);
              return r._ready;
            }
            var c = this._driverSet !== null ? this._driverSet.catch(function () {
              return a.resolve();
            }) : a.resolve();
            this._driverSet = c.then(function () {
              var e = i[0];
              r._dbInfo = null;
              r._ready = null;
              return r.getDriver(e).then(function (e) {
                r._driver = e._driver;
                o();
                r._wrapLibraryMethodsWithReady();
                r._initDriver = function () {
                  var e = 0;
                  return function t() {
                    while (e < i.length) {
                      var n = i[e];
                      e++;
                      r._dbInfo = null;
                      r._ready = null;
                      return r.getDriver(n).then(s).catch(t);
                    }
                    o();
                    var u = Error("No available storage method found.");
                    r._driverSet = a.reject(u);
                    return r._driverSet;
                  }();
                };
              });
            }).catch(function () {
              o();
              var e = Error("No available storage method found.");
              r._driverSet = a.reject(e);
              return r._driverSet;
            });
            u(this._driverSet, t, n);
            return this._driverSet;
          };
          e.prototype.supports = function (e) {
            return !!er[e];
          };
          e.prototype._extend = function (e) {
            ec(this, e);
          };
          e.prototype._getSupportedDrivers = function (e) {
            var t = [];
            var n = 0;
            var r = e.length;
            for (; n < r; n++) {
              var i = e[n];
              if (this.supports(i)) {
                t.push(i);
              }
            }
            return t;
          };
          e.prototype._wrapLibraryMethodsWithReady = function () {
            var e = 0;
            var t = es.length;
            for (; e < t; e++) {
              (function (e, t) {
                e[t] = function () {
                  var n = arguments;
                  return e.ready().then(function () {
                    return e[t].apply(e, n);
                  });
                };
              })(this, es[e]);
            }
          };
          e.prototype.createInstance = function (t) {
            return new e(t);
          };
          return e;
        }())();
        t.exports = el;
      }, {
        3: 3
      }]
    }, {}, [4])(4);
  };
  module.exports = r();
}