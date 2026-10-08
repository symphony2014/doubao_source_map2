// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 383061
         */
module.exports = function (module, exports, require) {
  var n;
  n = function () {
    return function e(t, r, n) {
      function o(a, u) {
        if (!r[a]) {
          if (!t[a]) {
            if (i) {
              return i(a, true);
            }
            var c = Error("Cannot find module '" + a + "'");
            c.code = "MODULE_NOT_FOUND";
            throw c;
          }
          var f = r[a] = {
            exports: {}
          };
          t[a][0].call(f.exports, function (e) {
            return o(t[a][1][e] || e);
          }, f, f.exports, e, t, r, n);
        }
        return r[a].exports;
      }
      var i = undefined;
      var a = 0;
      for (; a < n.length; a++) {
        o(n[a]);
      }
      return o;
    }({
      1: [function (e, t, n) {
        (function (e) {
          "use strict";

          var r;
          var n;
          var o = e.MutationObserver || e.WebKitMutationObserver;
          if (o) {
            var i = 0;
            var a = new o(s);
            var u = e.document.createTextNode("");
            a.observe(u, {
              characterData: true
            });
            r = function () {
              u.data = i = ++i % 2;
            };
          } else if (e.setImmediate || e.MessageChannel === undefined) {
            r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
              var t = e.document.createElement("script");
              t.onreadystatechange = function () {
                s();
                t.onreadystatechange = null;
                t.parentNode.removeChild(t);
                t = null;
              };
              e.document.documentElement.appendChild(t);
            } : function () {
              setTimeout(s, 0);
            };
          } else {
            var c = new e.MessageChannel();
            c.port1.onmessage = s;
            r = function () {
              c.port2.postMessage(0);
            };
          }
          var f = [];
          function s() {
            n = true;
            var e;
            var t;
            var r = f.length;
            while (r) {
              t = f;
              f = [];
              e = -1;
              while (++e < r) {
                t[e]();
              }
              r = f.length;
            }
            n = false;
          }
          t.exports = function (e) {
            if (f.push(e) === 1 && !n) {
              r();
            }
          };
        }).call(this, require.g !== undefined ? require.g : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {}],
      2: [function (e, t, r) {
        "use strict";

        var n = e(1);
        function o() {}
        var i = {};
        var a = ["REJECTED"];
        var u = ["FULFILLED"];
        var c = ["PENDING"];
        function f(e) {
          if (typeof e != "function") {
            throw TypeError("resolver must be a function");
          }
          this.state = c;
          this.queue = [];
          this.outcome = undefined;
          if (e !== o) {
            h(this, e);
          }
        }
        function s(e, t, r) {
          this.promise = e;
          if (typeof t == "function") {
            this.onFulfilled = t;
            this.callFulfilled = this.otherCallFulfilled;
          }
          if (typeof r == "function") {
            this.onRejected = r;
            this.callRejected = this.otherCallRejected;
          }
        }
        function l(e, t, r) {
          n(function () {
            var n;
            try {
              n = t(r);
            } catch (t) {
              return i.reject(e, t);
            }
            if (n === e) {
              i.reject(e, TypeError("Cannot resolve promise with itself"));
            } else {
              i.resolve(e, n);
            }
          });
        }
        function d(e) {
          var t = e && e.then;
          if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") {
            return function () {
              t.apply(e, arguments);
            };
          }
        }
        function h(e, t) {
          var r = false;
          function n(t) {
            if (!r) {
              r = true;
              i.reject(e, t);
            }
          }
          function o(t) {
            if (!r) {
              r = true;
              i.resolve(e, t);
            }
          }
          var a = v(function () {
            t(o, n);
          });
          if (a.status === "error") {
            n(a.value);
          }
        }
        function v(e, t) {
          var r = {};
          try {
            r.value = e(t);
            r.status = "success";
          } catch (e) {
            r.status = "error";
            r.value = e;
          }
          return r;
        }
        t.exports = f;
        f.prototype.catch = function (e) {
          return this.then(null, e);
        };
        f.prototype.then = function (e, t) {
          if (typeof e != "function" && this.state === u || typeof t != "function" && this.state === a) {
            return this;
          }
          var r = new this.constructor(o);
          if (this.state !== c) {
            l(r, this.state === u ? e : t, this.outcome);
          } else {
            this.queue.push(new s(r, e, t));
          }
          return r;
        };
        s.prototype.callFulfilled = function (e) {
          i.resolve(this.promise, e);
        };
        s.prototype.otherCallFulfilled = function (e) {
          l(this.promise, this.onFulfilled, e);
        };
        s.prototype.callRejected = function (e) {
          i.reject(this.promise, e);
        };
        s.prototype.otherCallRejected = function (e) {
          l(this.promise, this.onRejected, e);
        };
        i.resolve = function (e, t) {
          var r = v(d, t);
          if (r.status === "error") {
            return i.reject(e, r.value);
          }
          var n = r.value;
          if (n) {
            h(e, n);
          } else {
            e.state = u;
            e.outcome = t;
            var o = -1;
            var a = e.queue.length;
            while (++o < a) {
              e.queue[o].callFulfilled(t);
            }
          }
          return e;
        };
        i.reject = function (e, t) {
          e.state = a;
          e.outcome = t;
          var r = -1;
          var n = e.queue.length;
          while (++r < n) {
            e.queue[r].callRejected(t);
          }
          return e;
        };
        f.resolve = function (e) {
          if (e instanceof this) {
            return e;
          } else {
            return i.resolve(new this(o), e);
          }
        };
        f.reject = function (e) {
          var t = new this(o);
          return i.reject(t, e);
        };
        f.all = function (e) {
          var t = this;
          if (Object.prototype.toString.call(e) !== "[object Array]") {
            return this.reject(TypeError("must be an array"));
          }
          var r = e.length;
          var n = false;
          if (!r) {
            return this.resolve([]);
          }
          var a = Array(r);
          var u = 0;
          var c = -1;
          var f = new this(o);
          while (++c < r) {
            (function (e, o) {
              t.resolve(e).then(function (e) {
                a[o] = e;
                if (++u === r && !n) {
                  n = true;
                  i.resolve(f, a);
                }
              }, function (e) {
                if (!n) {
                  n = true;
                  i.reject(f, e);
                }
              });
            })(e[c], c);
          }
          return f;
        };
        f.race = function (e) {
          var t = this;
          if (Object.prototype.toString.call(e) !== "[object Array]") {
            return this.reject(TypeError("must be an array"));
          }
          var r = e.length;
          var n = false;
          if (!r) {
            return this.resolve([]);
          }
          var a = -1;
          var u = new this(o);
          while (++a < r) {
            (function (e) {
              t.resolve(e).then(function (e) {
                if (!n) {
                  n = true;
                  i.resolve(u, e);
                }
              }, function (e) {
                if (!n) {
                  n = true;
                  i.reject(u, e);
                }
              });
            })(e[a]);
          }
          return u;
        };
      }, {
        1: 1
      }],
      3: [function (e, t, n) {
        (function (t) {
          "use strict";

          if (typeof t.Promise != "function") {
            t.Promise = e(2);
          }
        }).call(this, require.g !== undefined ? require.g : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
      }, {
        2: 2
      }],
      4: [function (e, t, r) {
        "use strict";

        var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        };
        var o = function () {
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
        function i(e, t) {
          e = e || [];
          t = t || {};
          try {
            return new Blob(e, t);
          } catch (o) {
            if (o.name !== "TypeError") {
              throw o;
            }
            var r = new (typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder)();
            var n = 0;
            for (; n < e.length; n += 1) {
              r.append(e[n]);
            }
            return r.getBlob(t.type);
          }
        }
        if (typeof Promise == "undefined") {
          e(3);
        }
        var a = Promise;
        function u(e, t) {
          if (t) {
            e.then(function (e) {
              t(null, e);
            }, function (e) {
              t(e);
            });
          }
        }
        function c(e, t, r) {
          if (typeof t == "function") {
            e.then(t);
          }
          if (typeof r == "function") {
            e.catch(r);
          }
        }
        function f(e) {
          if (typeof e != "string") {
            e = String(e);
          }
          return e;
        }
        function s() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
            return arguments[arguments.length - 1];
          }
        }
        var l = "local-forage-detect-blob-support";
        var d = undefined;
        var h = {};
        var v = Object.prototype.toString;
        var y = "readonly";
        var g = "readwrite";
        function p(e) {
          var t = h[e.name];
          var r = {};
          r.promise = new a(function (e, t) {
            r.resolve = e;
            r.reject = t;
          });
          t.deferredOperations.push(r);
          if (t.dbReady) {
            t.dbReady = t.dbReady.then(function () {
              return r.promise;
            });
          } else {
            t.dbReady = r.promise;
          }
        }
        function b(e) {
          var t = h[e.name].deferredOperations.pop();
          if (t) {
            t.resolve();
            return t.promise;
          }
        }
        function m(e, t) {
          var r = h[e.name].deferredOperations.pop();
          if (r) {
            r.reject(t);
            return r.promise;
          }
        }
        function _(e, t) {
          return new a(function (r, n) {
            h[e.name] = h[e.name] || N();
            if (e.db) {
              if (!t) {
                return r(e.db);
              }
              p(e);
              e.db.close();
            }
            var i = [e.name];
            if (t) {
              i.push(e.version);
            }
            var a = o.open.apply(o, i);
            if (t) {
              a.onupgradeneeded = function (t) {
                var r = a.result;
                try {
                  r.createObjectStore(e.storeName);
                  if (t.oldVersion <= 1) {
                    r.createObjectStore(l);
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
              n(a.error);
            };
            a.onsuccess = function () {
              var t = a.result;
              t.onversionchange = function (e) {
                e.target.close();
              };
              r(t);
              b(e);
            };
          });
        }
        function S(e, t) {
          if (!e.db) {
            return true;
          }
          var r = !e.db.objectStoreNames.contains(e.storeName);
          var n = e.version < e.db.version;
          var o = e.version > e.db.version;
          if (n) {
            e.version;
            e.version = e.db.version;
          }
          if (o || r) {
            if (r) {
              var i = e.db.version + 1;
              if (i > e.version) {
                e.version = i;
              }
            }
            return true;
          }
          return false;
        }
        function w(e) {
          return i([function (e) {
            var t = e.length;
            var r = new ArrayBuffer(t);
            var n = new Uint8Array(r);
            var o = 0;
            for (; o < t; o++) {
              n[o] = e.charCodeAt(o);
            }
            return r;
          }(atob(e.data))], {
            type: e.type
          });
        }
        function I(e) {
          return e && e.__local_forage_encoded_blob;
        }
        function E(e) {
          var t = this;
          var r = t._initReady().then(function () {
            var e = h[t._dbInfo.name];
            if (e && e.dbReady) {
              return e.dbReady;
            }
          });
          c(r, e, e);
          return r;
        }
        function A(e, t, r, n = 1) {
          try {
            var o = e.db.transaction(e.storeName, t);
            r(null, o);
          } catch (o) {
            if (n > 0 && (!e.db || o.name === "InvalidStateError" || o.name === "NotFoundError")) {
              return a.resolve().then(function () {
                if (!e.db || o.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) {
                  if (e.db) {
                    e.version = e.db.version + 1;
                  }
                  return _(e, true);
                }
              }).then(function () {
                return function (e) {
                  p(e);
                  var t = h[e.name];
                  var r = t.forages;
                  var n = 0;
                  for (; n < r.length; n++) {
                    var o = r[n];
                    if (o._dbInfo.db) {
                      o._dbInfo.db.close();
                      o._dbInfo.db = null;
                    }
                  }
                  e.db = null;
                  return _(e, false).then(function (t) {
                    e.db = t;
                    if (S(e)) {
                      return _(e, true);
                    } else {
                      return t;
                    }
                  }).then(function (n) {
                    e.db = t.db = n;
                    for (var o = 0; o < r.length; o++) {
                      r[o]._dbInfo.db = n;
                    }
                  }).catch(function (t) {
                    m(e, t);
                    throw t;
                  });
                }(e).then(function () {
                  A(e, t, r, n - 1);
                });
              }).catch(r);
            }
            r(o);
          }
        }
        function N() {
          return {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          };
        }
        var O = {
          _driver: "asyncStorage",
          _initStorage: function (e) {
            var t = this;
            var r = {
              db: null
            };
            if (e) {
              for (var n in e) {
                r[n] = e[n];
              }
            }
            var o = h[r.name];
            if (!o) {
              o = N();
              h[r.name] = o;
            }
            o.forages.push(t);
            if (!t._initReady) {
              t._initReady = t.ready;
              t.ready = E;
            }
            var i = [];
            function u() {
              return a.resolve();
            }
            for (var c = 0; c < o.forages.length; c++) {
              var f = o.forages[c];
              if (f !== t) {
                i.push(f._initReady().catch(u));
              }
            }
            var s = o.forages.slice(0);
            return a.all(i).then(function () {
              r.db = o.db;
              return _(r, false);
            }).then(function (e) {
              r.db = e;
              if (S(r, t._defaultConfig.version)) {
                return _(r, true);
              } else {
                return e;
              }
            }).then(function (e) {
              r.db = o.db = e;
              t._dbInfo = r;
              for (var n = 0; n < s.length; n++) {
                var i = s[n];
                if (i !== t) {
                  i._dbInfo.db = r.db;
                  i._dbInfo.version = r.version;
                }
              }
            });
          },
          _support: function () {
            try {
              if (!o || !o.open) {
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
            var r = this;
            var n = new a(function (t, n) {
              r.ready().then(function () {
                A(r._dbInfo, y, function (o, i) {
                  if (o) {
                    return n(o);
                  }
                  try {
                    var a = i.objectStore(r._dbInfo.storeName).openCursor();
                    var u = 1;
                    a.onsuccess = function () {
                      var r = a.result;
                      if (r) {
                        var n = r.value;
                        if (I(n)) {
                          n = w(n);
                        }
                        var o = e(n, r.key, u++);
                        if (o !== undefined) {
                          t(o);
                        } else {
                          r.continue();
                        }
                      } else {
                        t();
                      }
                    };
                    a.onerror = function () {
                      n(a.error);
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          getItem: function (e, t) {
            var r = this;
            e = f(e);
            var n = new a(function (t, n) {
              r.ready().then(function () {
                A(r._dbInfo, y, function (o, i) {
                  if (o) {
                    return n(o);
                  }
                  try {
                    var a = i.objectStore(r._dbInfo.storeName).get(e);
                    a.onsuccess = function () {
                      var e = a.result;
                      if (e === undefined) {
                        e = null;
                      }
                      if (I(e)) {
                        e = w(e);
                      }
                      t(e);
                    };
                    a.onerror = function () {
                      n(a.error);
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          setItem: function (e, t, r) {
            var n = this;
            e = f(e);
            var o = new a(function (r, o) {
              var u;
              n.ready().then(function () {
                u = n._dbInfo;
                if (v.call(t) === "[object Blob]") {
                  return function (e) {
                    if (typeof d == "boolean") {
                      return a.resolve(d);
                    } else {
                      return new a(function (t) {
                        var r = e.transaction(l, g);
                        var n = i([""]);
                        r.objectStore(l).put(n, "key");
                        r.onabort = function (e) {
                          e.preventDefault();
                          e.stopPropagation();
                          t(false);
                        };
                        r.oncomplete = function () {
                          var e = navigator.userAgent.match(/Chrome\/(\d+)/);
                          t(navigator.userAgent.match(/Edge\//) || !e || parseInt(e[1], 10) >= 43);
                        };
                      }).catch(function () {
                        return false;
                      }).then(function (e) {
                        return d = e;
                      });
                    }
                  }(u.db).then(function (e) {
                    if (e) {
                      return t;
                    } else {
                      return new a(function (e, r) {
                        var n = new FileReader();
                        n.onerror = r;
                        n.onloadend = function (r) {
                          e({
                            __local_forage_encoded_blob: true,
                            data: btoa(r.target.result || ""),
                            type: t.type
                          });
                        };
                        n.readAsBinaryString(t);
                      });
                    }
                  });
                } else {
                  return t;
                }
              }).then(function (t) {
                A(n._dbInfo, g, function (i, a) {
                  if (i) {
                    return o(i);
                  }
                  try {
                    var u = a.objectStore(n._dbInfo.storeName);
                    if (t === null) {
                      t = undefined;
                    }
                    var c = u.put(t, e);
                    a.oncomplete = function () {
                      if (t === undefined) {
                        t = null;
                      }
                      r(t);
                    };
                    a.onabort = a.onerror = function () {
                      try {
                        var e = c.error ? c.error : c.transaction.error;
                        o(e);
                      } catch (e) {
                        o(e);
                      }
                    };
                  } catch (e) {
                    o(e);
                  }
                });
              }).catch(o);
            });
            u(o, r);
            return o;
          },
          removeItem: function (e, t) {
            var r = this;
            e = f(e);
            var n = new a(function (t, n) {
              r.ready().then(function () {
                A(r._dbInfo, g, function (o, i) {
                  if (o) {
                    return n(o);
                  }
                  try {
                    var a = i.objectStore(r._dbInfo.storeName).delete(e);
                    i.oncomplete = function () {
                      t();
                    };
                    i.onerror = function () {
                      n(a.error);
                    };
                    i.onabort = function () {
                      try {
                        var e = a.error ? a.error : a.transaction.error;
                        n(e);
                      } catch (e) {
                        n(e);
                      }
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          clear: function (e) {
            var t = this;
            var r = new a(function (e, r) {
              t.ready().then(function () {
                A(t._dbInfo, g, function (n, o) {
                  if (n) {
                    return r(n);
                  }
                  try {
                    var i = o.objectStore(t._dbInfo.storeName).clear();
                    o.oncomplete = function () {
                      e();
                    };
                    o.onabort = o.onerror = function () {
                      try {
                        var e = i.error ? i.error : i.transaction.error;
                        r(e);
                      } catch (e) {
                        r(e);
                      }
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            u(r, e);
            return r;
          },
          length: function (e) {
            var t = this;
            var r = new a(function (e, r) {
              t.ready().then(function () {
                A(t._dbInfo, y, function (n, o) {
                  if (n) {
                    return r(n);
                  }
                  try {
                    var i = o.objectStore(t._dbInfo.storeName).count();
                    i.onsuccess = function () {
                      e(i.result);
                    };
                    i.onerror = function () {
                      r(i.error);
                    };
                  } catch (e) {
                    r(e);
                  }
                });
              }).catch(r);
            });
            u(r, e);
            return r;
          },
          key: function (e, t) {
            var r = this;
            var n = new a(function (t, n) {
              if (e < 0) {
                t(null);
                return;
              }
              r.ready().then(function () {
                A(r._dbInfo, y, function (o, i) {
                  if (o) {
                    return n(o);
                  }
                  try {
                    var a = i.objectStore(r._dbInfo.storeName);
                    var u = false;
                    var c = (a.openKeyCursor || a.openCursor).call(a);
                    c.onsuccess = function () {
                      var r = c.result;
                      if (!r) {
                        t(null);
                        return;
                      }
                      if (e === 0) {
                        t(r.key);
                      } else if (u) {
                        t(r.key);
                      } else {
                        u = true;
                        r.advance(e);
                      }
                    };
                    c.onerror = function () {
                      n(c.error);
                    };
                  } catch (e) {
                    n(e);
                  }
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          keys: function (e) {
            var t = this;
            var r = new a(function (e, r) {
              t.ready().then(function () {
                A(t._dbInfo, y, function (n, o) {
                  if (n) {
                    return r(n);
                  }
                  try {
                    var i = o.objectStore(t._dbInfo.storeName);
                    var a = (i.openKeyCursor || i.openCursor).call(i);
                    var u = [];
                    a.onsuccess = function () {
                      var t = a.result;
                      if (!t) {
                        e(u);
                        return;
                      }
                      u.push(t.key);
                      t.continue();
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
            u(r, e);
            return r;
          },
          dropInstance: function (e, t) {
            t = s.apply(this, arguments);
            var r;
            var n = this.config();
            if (!(e = typeof e != "function" && e || {}).name) {
              e.name = e.name || n.name;
              e.storeName = e.storeName || n.storeName;
            }
            if (e.name) {
              var i = e.name === n.name && this._dbInfo.db ? a.resolve(this._dbInfo.db) : _(e, false).then(function (t) {
                var r = h[e.name];
                var n = r.forages;
                r.db = t;
                for (var o = 0; o < n.length; o++) {
                  n[o]._dbInfo.db = t;
                }
                return t;
              });
              r = e.storeName ? i.then(function (t) {
                if (t.objectStoreNames.contains(e.storeName)) {
                  var r = t.version + 1;
                  p(e);
                  var n = h[e.name];
                  var i = n.forages;
                  t.close();
                  for (var u = 0; u < i.length; u++) {
                    var c = i[u];
                    c._dbInfo.db = null;
                    c._dbInfo.version = r;
                  }
                  return new a(function (t, n) {
                    var i = o.open(e.name, r);
                    i.onerror = function (e) {
                      i.result.close();
                      n(e);
                    };
                    i.onupgradeneeded = function () {
                      i.result.deleteObjectStore(e.storeName);
                    };
                    i.onsuccess = function () {
                      var e = i.result;
                      e.close();
                      t(e);
                    };
                  }).then(function (e) {
                    n.db = e;
                    for (var t = 0; t < i.length; t++) {
                      var r = i[t];
                      r._dbInfo.db = e;
                      b(r._dbInfo);
                    }
                  }).catch(function (t) {
                    (m(e, t) || a.resolve()).catch(function () {});
                    throw t;
                  });
                }
              }) : i.then(function (t) {
                p(e);
                var r = h[e.name];
                var n = r.forages;
                t.close();
                for (var i = 0; i < n.length; i++) {
                  n[i]._dbInfo.db = null;
                }
                return new a(function (t, r) {
                  var n = o.deleteDatabase(e.name);
                  n.onerror = function () {
                    var e = n.result;
                    if (e) {
                      e.close();
                    }
                    r(n.error);
                  };
                  n.onblocked = function () {};
                  n.onsuccess = function () {
                    var e = n.result;
                    if (e) {
                      e.close();
                    }
                    t(e);
                  };
                }).then(function (e) {
                  r.db = e;
                  for (var t = 0; t < n.length; t++) {
                    b(n[t]._dbInfo);
                  }
                }).catch(function (t) {
                  (m(e, t) || a.resolve()).catch(function () {});
                  throw t;
                });
              });
            } else {
              r = a.reject("Invalid arguments");
            }
            u(r, t);
            return r;
          }
        };
        var R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var B = /^~~local_forage_type~([^~]+)~/;
        var j = "__lfsc__:";
        var C = j.length;
        var D = "arbf";
        var k = "blob";
        var x = "si08";
        var L = "ui08";
        var T = "uic8";
        var F = "si16";
        var U = "si32";
        var z = "ur16";
        var M = "ui32";
        var W = "fl32";
        var P = "fl64";
        var H = C + D.length;
        var q = Object.prototype.toString;
        function G(e) {
          var t;
          var r;
          var n;
          var o;
          var i;
          var a = e.length * 0.75;
          var u = e.length;
          var c = 0;
          if (e[e.length - 1] === "=") {
            a--;
            if (e[e.length - 2] === "=") {
              a--;
            }
          }
          var f = new ArrayBuffer(a);
          var s = new Uint8Array(f);
          for (t = 0; t < u; t += 4) {
            r = R.indexOf(e[t]);
            n = R.indexOf(e[t + 1]);
            o = R.indexOf(e[t + 2]);
            i = R.indexOf(e[t + 3]);
            s[c++] = r << 2 | n >> 4;
            s[c++] = (n & 15) << 4 | o >> 2;
            s[c++] = (o & 3) << 6 | i & 63;
          }
          return f;
        }
        function $(e) {
          var t;
          var r = new Uint8Array(e);
          var n = "";
          for (t = 0; t < r.length; t += 3) {
            n += R[r[t] >> 2];
            n += R[(r[t] & 3) << 4 | r[t + 1] >> 4];
            n += R[(r[t + 1] & 15) << 2 | r[t + 2] >> 6];
            n += R[r[t + 2] & 63];
          }
          if (r.length % 3 == 2) {
            n = n.substring(0, n.length - 1) + "=";
          } else if (r.length % 3 == 1) {
            n = n.substring(0, n.length - 2) + "==";
          }
          return n;
        }
        var K = {
          serialize: function (e, t) {
            var r = "";
            if (e) {
              r = q.call(e);
            }
            if (e && (r === "[object ArrayBuffer]" || e.buffer && q.call(e.buffer) === "[object ArrayBuffer]")) {
              var n;
              var o = j;
              if (e instanceof ArrayBuffer) {
                n = e;
                o += D;
              } else {
                n = e.buffer;
                if (r === "[object Int8Array]") {
                  o += x;
                } else if (r === "[object Uint8Array]") {
                  o += L;
                } else if (r === "[object Uint8ClampedArray]") {
                  o += T;
                } else if (r === "[object Int16Array]") {
                  o += F;
                } else if (r === "[object Uint16Array]") {
                  o += z;
                } else if (r === "[object Int32Array]") {
                  o += U;
                } else if (r === "[object Uint32Array]") {
                  o += M;
                } else if (r === "[object Float32Array]") {
                  o += W;
                } else if (r === "[object Float64Array]") {
                  o += P;
                } else {
                  t(Error("Failed to get type for BinaryArray"));
                }
              }
              t(o + $(n));
            } else if (r === "[object Blob]") {
              var i = new FileReader();
              i.onload = function () {
                t(j + k + ("~~local_forage_type~" + e.type + "~") + $(this.result));
              };
              i.readAsArrayBuffer(e);
            } else {
              try {
                t(JSON.stringify(e));
              } catch (e) {
                t(null, e);
              }
            }
          },
          deserialize: function (e) {
            if (e.substring(0, C) !== j) {
              return JSON.parse(e);
            }
            var t;
            var r = e.substring(H);
            var n = e.substring(C, H);
            if (n === k && B.test(r)) {
              var o = r.match(B);
              t = o[1];
              r = r.substring(o[0].length);
            }
            var a = G(r);
            switch (n) {
              case D:
                return a;
              case k:
                return i([a], {
                  type: t
                });
              case x:
                return new Int8Array(a);
              case L:
                return new Uint8Array(a);
              case T:
                return new Uint8ClampedArray(a);
              case F:
                return new Int16Array(a);
              case z:
                return new Uint16Array(a);
              case U:
                return new Int32Array(a);
              case M:
                return new Uint32Array(a);
              case W:
                return new Float32Array(a);
              case P:
                return new Float64Array(a);
              default:
                throw Error("Unkown type: " + n);
            }
          },
          stringToBuffer: G,
          bufferToString: $
        };
        function Y(e, t, r, n) {
          e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, n);
        }
        function Q(e, t, r, n, o, i) {
          e.executeSql(r, n, o, function (e, a) {
            if (a.code === a.SYNTAX_ERR) {
              e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function (e, u) {
                if (u.rows.length) {
                  i(e, a);
                } else {
                  Y(e, t, function () {
                    e.executeSql(r, n, o, i);
                  }, i);
                }
              }, i);
            } else {
              i(e, a);
            }
          }, i);
        }
        function X(e, t, r, n) {
          var o = this;
          e = f(e);
          var i = new a(function (i, a) {
            o.ready().then(function () {
              if (t === undefined) {
                t = null;
              }
              var u = t;
              var c = o._dbInfo;
              c.serializer.serialize(t, function (t, f) {
                if (f) {
                  a(f);
                } else {
                  c.db.transaction(function (r) {
                    Q(r, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], function () {
                      i(u);
                    }, function (e, t) {
                      a(t);
                    });
                  }, function (t) {
                    if (t.code === t.QUOTA_ERR) {
                      if (n > 0) {
                        i(X.apply(o, [e, u, r, n - 1]));
                        return;
                      }
                      a(t);
                    }
                  });
                }
              });
            }).catch(a);
          });
          u(i, r);
          return i;
        }
        var J = {
          _driver: "webSQLStorage",
          _initStorage: function (e) {
            var t = this;
            var r = {
              db: null
            };
            if (e) {
              for (var n in e) {
                r[n] = typeof e[n] != "string" ? e[n].toString() : e[n];
              }
            }
            var o = new a(function (e, n) {
              try {
                r.db = openDatabase(r.name, String(r.version), r.description, r.size);
              } catch (e) {
                return n(e);
              }
              r.db.transaction(function (o) {
                Y(o, r, function () {
                  t._dbInfo = r;
                  e();
                }, function (e, t) {
                  n(t);
                });
              }, n);
            });
            r.serializer = K;
            return o;
          },
          _support: typeof openDatabase == "function",
          iterate: function (e, t) {
            var r = this;
            var n = new a(function (t, n) {
              r.ready().then(function () {
                var o = r._dbInfo;
                o.db.transaction(function (r) {
                  Q(r, o, "SELECT * FROM " + o.storeName, [], function (r, n) {
                    var i = n.rows;
                    var a = i.length;
                    var u = 0;
                    for (; u < a; u++) {
                      var c = i.item(u);
                      var f = c.value;
                      f &&= o.serializer.deserialize(f);
                      if ((f = e(f, c.key, u + 1)) !== undefined) {
                        t(f);
                        return;
                      }
                    }
                    t();
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          getItem: function (e, t) {
            var r = this;
            e = f(e);
            var n = new a(function (t, n) {
              r.ready().then(function () {
                var o = r._dbInfo;
                o.db.transaction(function (r) {
                  Q(r, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function (e, r) {
                    var n = r.rows.length ? r.rows.item(0).value : null;
                    n &&= o.serializer.deserialize(n);
                    t(n);
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          setItem: function (e, t, r) {
            return X.apply(this, [e, t, r, 1]);
          },
          removeItem: function (e, t) {
            var r = this;
            e = f(e);
            var n = new a(function (t, n) {
              r.ready().then(function () {
                var o = r._dbInfo;
                o.db.transaction(function (r) {
                  Q(r, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], function () {
                    t();
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          clear: function (e) {
            var t = this;
            var r = new a(function (e, r) {
              t.ready().then(function () {
                var n = t._dbInfo;
                n.db.transaction(function (t) {
                  Q(t, n, "DELETE FROM " + n.storeName, [], function () {
                    e();
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            u(r, e);
            return r;
          },
          length: function (e) {
            var t = this;
            var r = new a(function (e, r) {
              t.ready().then(function () {
                var n = t._dbInfo;
                n.db.transaction(function (t) {
                  Q(t, n, "SELECT COUNT(key) as c FROM " + n.storeName, [], function (t, r) {
                    e(r.rows.item(0).c);
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            u(r, e);
            return r;
          },
          key: function (e, t) {
            var r = this;
            var n = new a(function (t, n) {
              r.ready().then(function () {
                var o = r._dbInfo;
                o.db.transaction(function (r) {
                  Q(r, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function (e, r) {
                    t(r.rows.length ? r.rows.item(0).key : null);
                  }, function (e, t) {
                    n(t);
                  });
                });
              }).catch(n);
            });
            u(n, t);
            return n;
          },
          keys: function (e) {
            var t = this;
            var r = new a(function (e, r) {
              t.ready().then(function () {
                var n = t._dbInfo;
                n.db.transaction(function (t) {
                  Q(t, n, "SELECT key FROM " + n.storeName, [], function (t, r) {
                    var n = [];
                    var o = 0;
                    for (; o < r.rows.length; o++) {
                      n.push(r.rows.item(o).key);
                    }
                    e(n);
                  }, function (e, t) {
                    r(t);
                  });
                });
              }).catch(r);
            });
            u(r, e);
            return r;
          },
          dropInstance: function (e, t) {
            t = s.apply(this, arguments);
            var r;
            var n = this.config();
            if (!(e = typeof e != "function" && e || {}).name) {
              e.name = e.name || n.name;
              e.storeName = e.storeName || n.storeName;
            }
            var o = this;
            u(r = e.name ? new a(function (t) {
              var r;
              r = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0);
              if (e.storeName) {
                t({
                  db: r,
                  storeNames: [e.storeName]
                });
              } else {
                t(new a(function (e, t) {
                  r.transaction(function (n) {
                    n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, n) {
                      var o = [];
                      var i = 0;
                      for (; i < n.rows.length; i++) {
                        o.push(n.rows.item(i).name);
                      }
                      e({
                        db: r,
                        storeNames: o
                      });
                    }, function (e, r) {
                      t(r);
                    });
                  }, function (e) {
                    t(e);
                  });
                }));
              }
            }).then(function (e) {
              return new a(function (t, r) {
                e.db.transaction(function (n) {
                  var o = [];
                  var i = 0;
                  var u = e.storeNames.length;
                  for (; i < u; i++) {
                    o.push(function (e) {
                      return new a(function (t, r) {
                        n.executeSql("DROP TABLE IF EXISTS " + e, [], function () {
                          t();
                        }, function (e, t) {
                          r(t);
                        });
                      });
                    }(e.storeNames[i]));
                  }
                  a.all(o).then(function () {
                    t();
                  }).catch(function (e) {
                    r(e);
                  });
                }, function (e) {
                  r(e);
                });
              });
            }) : a.reject("Invalid arguments"), t);
            return r;
          }
        };
        function Z(e, t) {
          var r = "";
          if (e.name) {
            r = e.name + "/";
          }
          if (e.storeName !== t.storeName) {
            r += e.storeName + "/";
          }
          return r;
        }
        var V = {
          _driver: "localStorageWrapper",
          _initStorage: function (e) {
            var t = {};
            if (e) {
              for (var r in e) {
                t[r] = e[r];
              }
            }
            t.keyPrefix = Z(e, this._defaultConfig);
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
              t.serializer = K;
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
            var r = this;
            var n = r.ready().then(function () {
              var t = r._dbInfo;
              var n = t.keyPrefix;
              var o = n.length;
              var i = localStorage.length;
              var a = 1;
              var u = 0;
              for (; u < i; u++) {
                var c = localStorage.key(u);
                if (c.indexOf(n) === 0) {
                  var f = localStorage.getItem(c);
                  f &&= t.serializer.deserialize(f);
                  if ((f = e(f, c.substring(o), a++)) !== undefined) {
                    return f;
                  }
                }
              }
            });
            u(n, t);
            return n;
          },
          getItem: function (e, t) {
            var r = this;
            e = f(e);
            var n = r.ready().then(function () {
              var t = r._dbInfo;
              var n = localStorage.getItem(t.keyPrefix + e);
              n &&= t.serializer.deserialize(n);
              return n;
            });
            u(n, t);
            return n;
          },
          setItem: function (e, t, r) {
            var n = this;
            e = f(e);
            var o = n.ready().then(function () {
              if (t === undefined) {
                t = null;
              }
              var r = t;
              return new a(function (o, i) {
                var a = n._dbInfo;
                a.serializer.serialize(t, function (t, n) {
                  if (n) {
                    i(n);
                  } else {
                    try {
                      localStorage.setItem(a.keyPrefix + e, t);
                      o(r);
                    } catch (e) {
                      if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                        i(e);
                      }
                      i(e);
                    }
                  }
                });
              });
            });
            u(o, r);
            return o;
          },
          removeItem: function (e, t) {
            var r = this;
            e = f(e);
            var n = r.ready().then(function () {
              var t = r._dbInfo;
              localStorage.removeItem(t.keyPrefix + e);
            });
            u(n, t);
            return n;
          },
          clear: function (e) {
            var t = this;
            var r = t.ready().then(function () {
              var e = t._dbInfo.keyPrefix;
              var r = localStorage.length - 1;
              for (; r >= 0; r--) {
                var n = localStorage.key(r);
                if (n.indexOf(e) === 0) {
                  localStorage.removeItem(n);
                }
              }
            });
            u(r, e);
            return r;
          },
          length: function (e) {
            var t = this.keys().then(function (e) {
              return e.length;
            });
            u(t, e);
            return t;
          },
          key: function (e, t) {
            var r = this;
            var n = r.ready().then(function () {
              var t;
              var n = r._dbInfo;
              try {
                t = localStorage.key(e);
              } catch (e) {
                t = null;
              }
              t &&= t.substring(n.keyPrefix.length);
              return t;
            });
            u(n, t);
            return n;
          },
          keys: function (e) {
            var t = this;
            var r = t.ready().then(function () {
              var e = t._dbInfo;
              var r = localStorage.length;
              var n = [];
              var o = 0;
              for (; o < r; o++) {
                var i = localStorage.key(o);
                if (i.indexOf(e.keyPrefix) === 0) {
                  n.push(i.substring(e.keyPrefix.length));
                }
              }
              return n;
            });
            u(r, e);
            return r;
          },
          dropInstance: function (e, t) {
            t = s.apply(this, arguments);
            if (!(e = typeof e != "function" && e || {}).name) {
              var r;
              var n = this.config();
              e.name = e.name || n.name;
              e.storeName = e.storeName || n.storeName;
            }
            var o = this;
            u(r = e.name ? new a(function (t) {
              t(e.storeName ? Z(e, o._defaultConfig) : e.name + "/");
            }).then(function (e) {
              for (var t = localStorage.length - 1; t >= 0; t--) {
                var r = localStorage.key(t);
                if (r.indexOf(e) === 0) {
                  localStorage.removeItem(r);
                }
              }
            }) : a.reject("Invalid arguments"), t);
            return r;
          }
        };
        function ee(e, t) {
          var r;
          var n = e.length;
          var o = 0;
          while (o < n) {
            if ((r = e[o]) === t || typeof r == "number" && typeof t == "number" && isNaN(r) && isNaN(t)) {
              return true;
            }
            o++;
          }
          return false;
        }
        var et = Array.isArray || function (e) {
          return Object.prototype.toString.call(e) === "[object Array]";
        };
        var er = {};
        var en = {};
        var eo = {
          INDEXEDDB: O,
          WEBSQL: J,
          LOCALSTORAGE: V
        };
        var ei = [eo.INDEXEDDB._driver, eo.WEBSQL._driver, eo.LOCALSTORAGE._driver];
        var ea = ["dropInstance"];
        var eu = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ea);
        var ec = {
          description: "",
          driver: ei.slice(),
          name: "localforage",
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function ef() {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            if (t) {
              for (var r in t) {
                if (t.hasOwnProperty(r)) {
                  if (et(t[r])) {
                    arguments[0][r] = t[r].slice();
                  } else {
                    arguments[0][r] = t[r];
                  }
                }
              }
            }
          }
          return arguments[0];
        }
        var es = new (function () {
          function e(t) {
            (function (e, t) {
              if (!(e instanceof t)) {
                throw TypeError("Cannot call a class as a function");
              }
            })(this, e);
            for (var r in eo) {
              if (eo.hasOwnProperty(r)) {
                var n = eo[r];
                var o = n._driver;
                this[r] = o;
                if (!er[o]) {
                  this.defineDriver(n);
                }
              }
            }
            this._defaultConfig = ef({}, ec);
            this._config = ef({}, this._defaultConfig, t);
            this._driverSet = null;
            this._initDriver = null;
            this._ready = false;
            this._dbInfo = null;
            this._wrapLibraryMethodsWithReady();
            this.setDriver(this._config.driver).catch(function () {});
          }
          e.prototype.config = function (e) {
            if ((e === undefined ? "undefined" : n(e)) === "object") {
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
          e.prototype.defineDriver = function (e, t, r) {
            var n = new a(function (t, r) {
              try {
                var n = e._driver;
                var o = Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!e._driver) {
                  r(o);
                  return;
                }
                var i = eu.concat("_initStorage");
                var c = 0;
                var f = i.length;
                for (; c < f; c++) {
                  var s = i[c];
                  if ((!ee(ea, s) || e[s]) && typeof e[s] != "function") {
                    r(o);
                    return;
                  }
                }
                (function () {
                  function t(e) {
                    return function () {
                      var t = Error("Method " + e + " is not implemented by the current driver");
                      var r = a.reject(t);
                      u(r, arguments[arguments.length - 1]);
                      return r;
                    };
                  }
                  var r = 0;
                  var n = ea.length;
                  for (; r < n; r++) {
                    var o = ea[r];
                    e[o] ||= t(o);
                  }
                })();
                function l(r) {
                  er[n];
                  er[n] = e;
                  en[n] = r;
                  t();
                }
                if ("_support" in e) {
                  if (e._support && typeof e._support == "function") {
                    e._support().then(l, r);
                  } else {
                    l(!!e._support);
                  }
                } else {
                  l(true);
                }
              } catch (e) {
                r(e);
              }
            });
            c(n, t, r);
            return n;
          };
          e.prototype.driver = function () {
            return this._driver || null;
          };
          e.prototype.getDriver = function (e, t, r) {
            var n = er[e] ? a.resolve(er[e]) : a.reject(Error("Driver not found."));
            c(n, t, r);
            return n;
          };
          e.prototype.getSerializer = function (e) {
            var t = a.resolve(K);
            c(t, e);
            return t;
          };
          e.prototype.ready = function (e) {
            var t = this;
            var r = t._driverSet.then(function () {
              if (t._ready === null) {
                t._ready = t._initDriver();
              }
              return t._ready;
            });
            c(r, e, e);
            return r;
          };
          e.prototype.setDriver = function (e, t, r) {
            var n = this;
            if (!et(e)) {
              e = [e];
            }
            var o = this._getSupportedDrivers(e);
            function i() {
              n._config.driver = n.driver();
            }
            function u(e) {
              n._extend(e);
              i();
              n._ready = n._initStorage(n._config);
              return n._ready;
            }
            var f = this._driverSet !== null ? this._driverSet.catch(function () {
              return a.resolve();
            }) : a.resolve();
            this._driverSet = f.then(function () {
              var e = o[0];
              n._dbInfo = null;
              n._ready = null;
              return n.getDriver(e).then(function (e) {
                n._driver = e._driver;
                i();
                n._wrapLibraryMethodsWithReady();
                n._initDriver = function () {
                  var e = 0;
                  return function t() {
                    while (e < o.length) {
                      var r = o[e];
                      e++;
                      n._dbInfo = null;
                      n._ready = null;
                      return n.getDriver(r).then(u).catch(t);
                    }
                    i();
                    var c = Error("No available storage method found.");
                    n._driverSet = a.reject(c);
                    return n._driverSet;
                  }();
                };
              });
            }).catch(function () {
              i();
              var e = Error("No available storage method found.");
              n._driverSet = a.reject(e);
              return n._driverSet;
            });
            c(this._driverSet, t, r);
            return this._driverSet;
          };
          e.prototype.supports = function (e) {
            return !!en[e];
          };
          e.prototype._extend = function (e) {
            ef(this, e);
          };
          e.prototype._getSupportedDrivers = function (e) {
            var t = [];
            var r = 0;
            var n = e.length;
            for (; r < n; r++) {
              var o = e[r];
              if (this.supports(o)) {
                t.push(o);
              }
            }
            return t;
          };
          e.prototype._wrapLibraryMethodsWithReady = function () {
            var e = 0;
            var t = eu.length;
            for (; e < t; e++) {
              (function (e, t) {
                e[t] = function () {
                  var r = arguments;
                  return e.ready().then(function () {
                    return e[t].apply(e, r);
                  });
                };
              })(this, eu[e]);
            }
          };
          e.prototype.createInstance = function (t) {
            return new e(t);
          };
          return e;
        }())();
        t.exports = es;
      }, {
        3: 3
      }]
    }, {}, [4])(4);
  };
  module.exports = n();
}