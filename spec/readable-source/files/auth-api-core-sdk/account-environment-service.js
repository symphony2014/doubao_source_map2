// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 933389
         */
module.exports = function (module, exports, require) {
  var r = this && this.__awaiter || function (e, t, r, n) {
    return new (r ||= Promise)(function (i, o) {
      function a(e) {
        try {
          c(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          i(e.value);
        } else {
          ((t = e.value) instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((n = n.apply(e, t || [])).next());
    });
  };
  var n = this && this.__generator || function (e, t) {
    var r;
    var n;
    var i;
    var o;
    var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: s(0),
      throw: s(1),
      return: s(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function s(o) {
      return function (s) {
        return function (o) {
          if (r) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              r = 1;
              if (n && (i = o[0] & 2 ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) {
                return i;
              }
              n = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  n = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && a.label < i[1]) {
                    a.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2];
                    a.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              o = t.call(e, a);
            } catch (e) {
              o = [6, e];
              n = 0;
            } finally {
              r = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, s]);
      };
    }
  };
  exports.getEnvironment = undefined;
  exports.getEnvironment = function (e) {
    return r(this, undefined, undefined, function () {
      return n(this, function (t) {
        switch (t.label) {
          case 0:
            t.trys.push([0, 2,, 3]);
            return [4, fetch(`${e || ""}/accounts/environment`, {
              credentials: "include",
              headers: {
                "X-Device-Info": "platform=websdk",
                "X-Api-Version": "1.0.0"
              }
            }).then(function (e) {
              return e.json();
            }).then(function (e) {
              return e.data;
            })];
          case 1:
            return [2, t.sent()];
          case 2:
            t.sent();
            return [2, undefined];
          case 3:
            return [2];
        }
      });
    });
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}