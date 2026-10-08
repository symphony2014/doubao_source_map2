// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'pptTemplateManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 477087
         */
module.exports = function (module, exports, require) {
  function i(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let l = new class {
    addTemplateConfirmListener(e, t) {
      this._templeteConfirmCallback.set(e, t);
    }
    addSelecteChangeListener(e, t) {
      this._selecteChangeListener.set(e, t);
    }
    removeSelecteChangeListener(e) {
      this._selecteChangeListener.delete(e);
    }
    onSelecteChange(e) {
      var t;
      let n = this._pptTemplateRecord.get(e) || {};
      if ((t = this._selecteChangeListener.get(e)) !== null && t !== undefined) {
        t(n);
      }
    }
    removeTemplateConfirmListener(e) {
      this._templeteConfirmCallback.delete(e);
    }
    onTemplateBtnConfirm(e, t) {
      var n;
      let i = this._pptTemplateRecord.get(e) || {};
      i.isAutoComfirm = t;
      this._pptTemplateRecord.set(e, i);
      if ((n = this._templeteConfirmCallback.get(e)) !== null && n !== undefined) {
        n();
      }
    }
    addToggleConfirmBtnListener(e, t) {
      let n = this._toggleConfirmBtnListener.get(e) || new Set();
      n.add(t);
      this._toggleConfirmBtnListener.set(e, n);
      let i = this._confirmBtnStatus.get(e);
      if (i) {
        t(i);
      }
    }
    removeToggleConfirmBtnListener(e, t) {
      let n = this._toggleConfirmBtnListener.get(e) || new Set();
      n.delete(t);
      this._toggleConfirmBtnListener.set(e, n);
    }
    updateConfirmBtnVisible(e, t) {
      var n;
      let i = this._confirmBtnStatus.get(e) || {};
      i.visible = t;
      this._confirmBtnStatus.set(e, i);
      if ((n = this._toggleConfirmBtnListener.get(e)) !== null && n !== undefined) {
        n.forEach(e => {
          try {
            e(i);
          } catch (e) {}
        });
      }
    }
    updateConfirmBtnText(e, t) {
      var n;
      let i = this._confirmBtnStatus.get(e) || {};
      i.textContent = t;
      this._confirmBtnStatus.set(e, i);
      if ((n = this._toggleConfirmBtnListener.get(e)) !== null && n !== undefined) {
        n.forEach(e => {
          try {
            e(i);
          } catch (e) {}
        });
      }
    }
    updateTemplateId(e, t, n, i) {
      if (!e) {
        return;
      }
      let l = this._pptTemplateRecord.get(e) || {};
      l.templateId = t;
      l.card_id = n;
      l.version = i;
      this._pptTemplateRecord.set(e, l);
    }
    updateContentTypeId(e, t, n, i) {
      if (!e) {
        return;
      }
      let l = this._pptTemplateRecord.get(e) || {};
      l.contentTypeId = t;
      l.card_id = n;
      l.version = i;
      this._pptTemplateRecord.set(e, l);
    }
    updatePrecedingMessageId(e, t) {
      if (!e) {
        return;
      }
      let n = this._pptTemplateRecord.get(e) || {};
      n.precedingMessageId = t;
      this._pptTemplateRecord.set(e, n);
    }
    getTemplateId(e) {
      return (this._pptTemplateRecord.get(e) || {}).templateId;
    }
    getContentTypeId(e) {
      return (this._pptTemplateRecord.get(e) || {}).contentTypeId;
    }
    getCardId(e) {
      return (this._pptTemplateRecord.get(e) || {}).card_id;
    }
    isAutoComfirm(e) {
      return (this._pptTemplateRecord.get(e) || {}).isAutoComfirm;
    }
    getPrecedingMessageId(e) {
      return (this._pptTemplateRecord.get(e) || {}).precedingMessageId;
    }
    getVersion(e) {
      return (this._pptTemplateRecord.get(e) || {}).version;
    }
    hasTemplateSettingInfo(e) {
      let {
        templateId: t,
        contentTypeId: n
      } = this._pptTemplateRecord.get(e) || {};
      return t !== undefined || n !== undefined;
    }
    confirmBtnVisible(e) {
      return this._confirmBtnStatus.get(e)?.visible;
    }
    resetSettingInfo(e) {
      this._pptTemplateRecord.delete(e);
    }
    constructor() {
      i(this, "_pptTemplateRecord", new Map());
      i(this, "_toggleConfirmBtnListener", new Map());
      i(this, "_confirmBtnStatus", new Map());
      i(this, "_templeteConfirmCallback", new Map());
      i(this, "_selecteChangeListener", new Map());
    }
  }();
  require.d(exports, {
    pptTemplateManager: function () {
      return l;
    }
  });
}