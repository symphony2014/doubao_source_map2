// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LruCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 145355
         */
module.exports = function (module, exports, require) {
  function n(t, e) {
    this.key = t;
    this.value = e;
  }
  var i = function () {
    function t(t) {
      this._size = 0;
      this._keymap = {};
      this._limit = t;
    }
    t.prototype.get = function (t) {
      var e = this._keymap[t];
      if (e) {
        this._moveToHead(e);
        return e.value;
      }
    };
    t.prototype.set = function (t, e) {
      var i = this._keymap[t];
      if (i) {
        i.value = e;
        this._moveToHead(i);
        return;
      }
      i = new n(t, e);
      this._keymap[t] = i;
      if (this._head) {
        this._head.head = i;
        i.tail = this._head;
      } else {
        this._tail = i;
      }
      this._head = i;
      ++this._size;
      if (this._size > this._limit) {
        this.shift();
      }
    };
    t.prototype.shift = function () {
      var t = this._tail;
      if (t) {
        if (t.head) {
          this._tail = t.head;
          this._tail.tail = undefined;
        } else {
          this._tail = this._head = undefined;
        }
        t.head = t.tail = undefined;
        delete this._keymap[t.key];
        --this._size;
      }
    };
    t.prototype.clear = function () {
      this._size = 0;
      this._tail = this._head = undefined;
      this._keymap = {};
    };
    t.prototype._moveToHead = function (t) {
      if (t !== this._head) {
        if (t.head) {
          if (t === this._tail) {
            this._tail = t.head;
          }
          t.head.tail = t.tail;
        }
        if (t.tail) {
          t.tail.head = t.head;
        }
        t.head = undefined;
        t.tail = this._head;
        if (this._head) {
          this._head.head = t;
        }
        this._head = t;
      }
    };
    return t;
  }();
  exports.LruCache = i;
}