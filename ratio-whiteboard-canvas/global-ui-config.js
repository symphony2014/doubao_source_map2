// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'uiGlobalConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 946058
         */
module.exports = function (module, exports, require) {
  var i = {
    global: {
      placeholder: "Please select...",
      notFoundContent: "No results found",
      noOptions: "No options available",
      selectAll: "Select all",
      okText: "Done",
      cancelText: "Cancel",
      more: "More",
      search: "Search"
    },
    components: {
      modal: {
        okText: "Done",
        cancelText: "Cancel"
      },
      popconfirm: {
        okText: "Done",
        cancelText: "Cancel"
      },
      colorPicker: {
        moreColor: "More colors"
      },
      rate: {
        descriptions: ["Rate your experience", "Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"]
      },
      pagination: {
        items_per_page: "/ page",
        jump_to: "Go to",
        jump_to_confirm: "Confirm",
        page: "page",
        prev_page: "Previous page",
        next_page: "Next page",
        prev_5: "Previous 5 pages",
        next_5: "Next 5 pages",
        prev_3: "Previous 3 pages",
        next_3: "Next 3 pages"
      },
      table: {
        filterTitle: "Filter menu",
        filterConfirm: "Done",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert select this page",
        selectionAll: "Select all pages",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "High to low",
        triggerAsc: "Low to high",
        cancelSort: "Clear sorting"
      },
      tabs: {
        more: "More"
      },
      datePicker: {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        ok: "Done",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        today: "Today",
        month: "",
        year: "",
        yesterday: "Yesterday",
        thisWeek: "This week",
        thisMonth: "This month",
        thisBimonthly: "These two months",
        weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"],
        monthsMin: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        currentTime: "Current Time",
        monthYearSelector: {
          f: function (e) {
            return [e.month("MMMM"), " ", e.year("YYYY")];
          }
        },
        longMonthFormat: "MM/YYYY",
        longDateFormat: "MM/DD/YYYY"
      },
      picker: {
        morning: "AM",
        afternoon: "PM",
        timePlaceholder: "Select time",
        hour: "hr",
        minute: "min",
        second: "sec"
      },
      empty: {
        description: "No data"
      },
      form: {
        defaultValidateMessage: {
          default: {
            f: function (e) {
              return "Field validation error for " + e.label;
            }
          },
          required: {
            f: function (e) {
              return "Please enter " + e.label;
            }
          },
          enum: {
            f: function (e) {
              return e.label + " must be one of [" + e.enum + "]";
            }
          },
          whitespace: {
            f: function (e) {
              return e.label + " cannot be a blank character";
            }
          },
          date: {
            format: {
              f: function (e) {
                return e.label + " date format is invalid";
              }
            },
            parse: {
              f: function (e) {
                return e.label + " cannot be converted to a date";
              }
            },
            invalid: {
              f: function (e) {
                return e.label + " is an invalid date";
              }
            }
          },
          types: {
            string: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            method: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            array: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            object: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            number: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            date: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            boolean: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            integer: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            float: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            regexp: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            email: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            url: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            },
            hex: {
              f: function (e) {
                return e.label + " is not a valid " + e.type;
              }
            }
          },
          string: {
            len: {
              f: function (e) {
                return e.label + " must be " + e.len + " characters";
              }
            },
            min: {
              f: function (e) {
                return e.label + " must be at least " + e.min + " characters";
              }
            },
            max: {
              f: function (e) {
                return e.label + " must be at most " + e.max + " characters";
              }
            },
            range: {
              f: function (e) {
                return e.label + " must be between " + e.min + "-" + e.max + " characters";
              }
            }
          },
          number: {
            len: {
              f: function (e) {
                return e.label + " must be equal to " + e.len;
              }
            },
            min: {
              f: function (e) {
                return e.label + " must be minimum " + e.min;
              }
            },
            max: {
              f: function (e) {
                return e.label + " must be maximum " + e.max;
              }
            },
            range: {
              f: function (e) {
                return e.label + " must be between " + e.min + "-" + e.max;
              }
            }
          },
          array: {
            len: {
              f: function (e) {
                return "Must be " + e.len + " " + e.label;
              }
            },
            min: {
              f: function (e) {
                return "At least " + e.min + " " + e.label;
              }
            },
            max: {
              f: function (e) {
                return "At most " + e.max + " " + e.label;
              }
            },
            range: {
              f: function (e) {
                return "The amount of " + e.label + " must be between " + e.min + "-" + e.max;
              }
            }
          },
          pattern: {
            mismatch: {
              f: function (e) {
                return e.label + " does not match the pattern " + e.pattern;
              }
            }
          }
        }
      },
      upload: {
        unknownSize: "Unknown size",
        waiting: "To be uploaded",
        download: "Download",
        delete: "Delete",
        preview: "Preview",
        uploadAgain: "Upload again",
        failed: "Unable to upload",
        downloading: "Downloading",
        downloadFailed: "Unable to download"
      },
      transfer: {
        noOptions: "No options",
        noSearchResult: "No results found",
        noOptionsSelected: "No options selected",
        selected: {
          f: function (e) {
            return "Selected (" + e.selected + ")";
          }
        },
        selectAll: {
          f: function (e) {
            return "All (" + e.selected + "/" + e.total + ")";
          }
        },
        clear: "Clear"
      },
      expandableText: {
        show: "Show",
        fold: "Hide"
      },
      imageViewer: {
        prevArrow: "Previous",
        nextArrow: "Next",
        zoomOut: "Zoom out",
        zoomIn: "Zoom in",
        originSize: "Original size",
        bestFit: "Fit to window",
        rotate: "Rotate",
        download: "Download"
      }
    },
    locale: "en-US"
  };
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var a = {
    rootPrefixCls: "ud",
    locale: i,
    direction: "ltr",
    getPopupContainer: function () {
      if (reactRefEffectUtils.canUseDom()) {
        return document.body;
      } else {
        return {};
      }
    },
    getTargetContainer: function () {
      if (reactRefEffectUtils.canUseDom()) {
        return window;
      } else {
        return {};
      }
    },
    toast: {
      top: 32
    },
    theme: "light",
    componentSize: "medium"
  };
  require.d(exports, {
    uiGlobalConfig: function () {
      return a;
    }
  });
}