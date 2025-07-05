!(function (e) {
  var t = {};
  function i(s) {
    if (t[s]) return t[s].exports;
    var n = (t[s] = {
      i: s,
      l: !1,
      exports: {},
    });
    return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, s) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: s,
        });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            s,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return s;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 0));
})([
  function (e, t, i) {
    e.exports = i(132);
  },
  function (e, t) {
    !(function (e) {
      const t = "resize-active";
      let i = !1,
        s = null;
      const n = () => {
        (i = !1), document.documentElement.classList.remove(t);
      };
      e.addEventListener("resize", () => {
        i || ((i = !0), document.documentElement.classList.add(t)),
          clearTimeout(s),
          (s = setTimeout(n, 500));
      });
    })(window);
  },
  function (e, t) {
    window.ResponsiveHelper = (function () {
      var e,
        t = [],
        i = window,
        s = !1;
      function n() {
        var s = i.innerWidth;
        s !== e &&
          ((e = s),
          t.forEach((e) => {
            for (key in e.data) {
              const t = e.data[key];
              t.currentActive &&
                !r(t.range[0], t.range[1]) &&
                ((t.currentActive = !1),
                "function" == typeof t.disableCallback && t.disableCallback());
            }
            for (key in e.data) {
              const t = e.data[key];
              !t.currentActive &&
                r(t.range[0], t.range[1]) &&
                ((t.currentActive = !0),
                "function" == typeof t.enableCallback && t.enableCallback());
            }
          }));
      }
      function r(t, i) {
        var n = "";
        return (
          t > 0 && (n += "(min-width: " + t + "px)"),
          i < 1 / 0 && (n += (n ? " and " : "") + "(max-width: " + i + "px)"),
          (function (t, i, n) {
            return window.matchMedia && s
              ? matchMedia(t).matches
              : window.styleMedia
              ? styleMedia.matchMedium(t)
              : window.media
              ? media.matchMedium(t)
              : e >= i && e <= n;
          })(n, t, i)
        );
      }
      function a(e) {
        var t = e.split("..");
        return [parseInt(t[0], 10) || -1 / 0, parseInt(t[1], 10) || 1 / 0].sort(
          function (e, t) {
            return e - t;
          }
        );
      }
      return (
        window.matchMedia &&
          ((window.Window &&
            window.matchMedia === Window.prototype.matchMedia) ||
            window.matchMedia.toString().indexOf("native") > -1) &&
          (s = !0),
        ["load", "resize", "orientationchange"].forEach((e) => {
          window.addEventListener(e, n);
        }),
        {
          addRange: function (i) {
            var s = {
              data: {},
            };
            for (property in i)
              s.data[property] = {
                range: a(property),
                enableCallback: i[property].on,
                disableCallback: i[property].off,
              };
            t.push(s), (e = null), n();
          },
        }
      );
    })();
  },
  function (e, t, i) {
    "use strict";
    (function (e) {
      i(5), i(88), i(104), i(105), i(127);
      !(function (t, s) {
        "object" == typeof exports && void 0 !== e
          ? (e.exports = s())
          : "function" == typeof define && i(128)
          ? define(s)
          : ((t =
              "undefined" != typeof globalThis
                ? globalThis
                : t || self).Swiper = s());
      })(void 0, function () {
        function e(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
          );
        }
        function t(i, s) {
          void 0 === i && (i = {}),
            void 0 === s && (s = {}),
            Object.keys(s).forEach((n) => {
              void 0 === i[n]
                ? (i[n] = s[n])
                : e(s[n]) &&
                  e(i[n]) &&
                  Object.keys(s[n]).length > 0 &&
                  t(i[n], s[n]);
            });
        }
        const i = {
          body: {},
          addEventListener() {},
          removeEventListener() {},
          activeElement: {
            blur() {},
            nodeName: "",
          },
          querySelector: () => null,
          querySelectorAll: () => [],
          getElementById: () => null,
          createEvent: () => ({
            initEvent() {},
          }),
          createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => [],
          }),
          createElementNS: () => ({}),
          importNode: () => null,
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
        };
        function s() {
          const e = "undefined" != typeof document ? document : {};
          return t(e, i), e;
        }
        const n = {
          document: i,
          navigator: {
            userAgent: "",
          },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
          history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {},
          },
          CustomEvent: function () {
            return this;
          },
          addEventListener() {},
          removeEventListener() {},
          getComputedStyle: () => ({
            getPropertyValue: () => "",
          }),
          Image() {},
          Date() {},
          screen: {},
          setTimeout() {},
          clearTimeout() {},
          matchMedia: () => ({}),
          requestAnimationFrame: (e) =>
            "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
          },
        };
        function r() {
          const e = "undefined" != typeof window ? window : {};
          return t(e, n), e;
        }
        class a extends Array {
          constructor(e) {
            "number" == typeof e
              ? super(e)
              : (super(...(e || [])),
                (function (e) {
                  const t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                      t.__proto__ = e;
                    },
                  });
                })(this));
          }
        }
        function o(e) {
          void 0 === e && (e = []);
          const t = [];
          return (
            e.forEach((e) => {
              Array.isArray(e) ? t.push(...o(e)) : t.push(e);
            }),
            t
          );
        }
        function l(e, t) {
          return Array.prototype.filter.call(e, t);
        }
        function c(e, t) {
          const i = r(),
            n = s();
          let o = [];
          if (!t && e instanceof a) return e;
          if (!e) return new a(o);
          if ("string" == typeof e) {
            const i = e.trim();
            if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
              let e = "div";
              0 === i.indexOf("<li") && (e = "ul"),
                0 === i.indexOf("<tr") && (e = "tbody"),
                (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) ||
                  (e = "tr"),
                0 === i.indexOf("<tbody") && (e = "table"),
                0 === i.indexOf("<option") && (e = "select");
              const t = n.createElement(e);
              t.innerHTML = i;
              for (let e = 0; e < t.childNodes.length; e += 1)
                o.push(t.childNodes[e]);
            } else
              o = (function (e, t) {
                if ("string" != typeof e) return [e];
                const i = [],
                  s = t.querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                return i;
              })(e.trim(), t || n);
          } else if (e.nodeType || e === i || e === n) o.push(e);
          else if (Array.isArray(e)) {
            if (e instanceof a) return e;
            o = e;
          }
          return new a(
            (function (e) {
              const t = [];
              for (let i = 0; i < e.length; i += 1)
                -1 === t.indexOf(e[i]) && t.push(e[i]);
              return t;
            })(o)
          );
        }
        c.fn = a.prototype;
        const d = {
          addClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            const s = o(t.map((e) => e.split(" ")));
            return (
              this.forEach((e) => {
                e.classList.add(...s);
              }),
              this
            );
          },
          removeClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            const s = o(t.map((e) => e.split(" ")));
            return (
              this.forEach((e) => {
                e.classList.remove(...s);
              }),
              this
            );
          },
          hasClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            const s = o(t.map((e) => e.split(" ")));
            return (
              l(
                this,
                (e) => s.filter((t) => e.classList.contains(t)).length > 0
              ).length > 0
            );
          },
          toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            const s = o(t.map((e) => e.split(" ")));
            this.forEach((e) => {
              s.forEach((t) => {
                e.classList.toggle(t);
              });
            });
          },
          attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1)
              if (2 === arguments.length) this[i].setAttribute(e, t);
              else
                for (const t in e)
                  (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
            return this;
          },
          removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          transform: function (e) {
            for (let t = 0; t < this.length; t += 1)
              this[t].style.transform = e;
            return this;
          },
          transition: function (e) {
            for (let t = 0; t < this.length; t += 1)
              this[t].style.transitionDuration =
                "string" != typeof e ? "".concat(e, "ms") : e;
            return this;
          },
          on: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            let [s, n, r, a] = t;
            function o(e) {
              const t = e.target;
              if (!t) return;
              const i = e.target.dom7EventData || [];
              if ((i.indexOf(e) < 0 && i.unshift(e), c(t).is(n))) r.apply(t, i);
              else {
                const e = c(t).parents();
                for (let t = 0; t < e.length; t += 1)
                  c(e[t]).is(n) && r.apply(e[t], i);
              }
            }
            function l(e) {
              const t = (e && e.target && e.target.dom7EventData) || [];
              t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t[1] && (([s, r, a] = t), (n = void 0)),
              a || (a = !1);
            const d = s.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
              const t = this[e];
              if (n)
                for (p = 0; p < d.length; p += 1) {
                  const e = d[p];
                  t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                    t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                    t.dom7LiveListeners[e].push({
                      listener: r,
                      proxyListener: o,
                    }),
                    t.addEventListener(e, o, a);
                }
              else
                for (p = 0; p < d.length; p += 1) {
                  const e = d[p];
                  t.dom7Listeners || (t.dom7Listeners = {}),
                    t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                    t.dom7Listeners[e].push({
                      listener: r,
                      proxyListener: l,
                    }),
                    t.addEventListener(e, l, a);
                }
            }
            return this;
          },
          off: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            let [s, n, r, a] = t;
            "function" == typeof t[1] && (([s, r, a] = t), (n = void 0)),
              a || (a = !1);
            const o = s.split(" ");
            for (let e = 0; e < o.length; e += 1) {
              const t = o[e];
              for (let e = 0; e < this.length; e += 1) {
                const i = this[e];
                let s;
                if (
                  (!n && i.dom7Listeners
                    ? (s = i.dom7Listeners[t])
                    : n && i.dom7LiveListeners && (s = i.dom7LiveListeners[t]),
                  s && s.length)
                )
                  for (let e = s.length - 1; e >= 0; e -= 1) {
                    const n = s[e];
                    (r && n.listener === r) ||
                    (r &&
                      n.listener &&
                      n.listener.dom7proxy &&
                      n.listener.dom7proxy === r)
                      ? (i.removeEventListener(t, n.proxyListener, a),
                        s.splice(e, 1))
                      : r ||
                        (i.removeEventListener(t, n.proxyListener, a),
                        s.splice(e, 1));
                  }
              }
            }
            return this;
          },
          trigger: function () {
            const e = r();
            for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++)
              i[s] = arguments[s];
            const n = i[0].split(" "),
              a = i[1];
            for (let t = 0; t < n.length; t += 1) {
              const s = n[t];
              for (let t = 0; t < this.length; t += 1) {
                const n = this[t];
                if (e.CustomEvent) {
                  const t = new e.CustomEvent(s, {
                    detail: a,
                    bubbles: !0,
                    cancelable: !0,
                  });
                  (n.dom7EventData = i.filter((e, t) => t > 0)),
                    n.dispatchEvent(t),
                    (n.dom7EventData = []),
                    delete n.dom7EventData;
                }
              }
            }
            return this;
          },
          transitionEnd: function (e) {
            const t = this;
            return (
              e &&
                t.on("transitionend", function i(s) {
                  s.target === this &&
                    (e.call(this, s), t.off("transitionend", i));
                }),
              this
            );
          },
          outerWidth: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(e.getPropertyValue("margin-right")) +
                  parseFloat(e.getPropertyValue("margin-left"))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(e.getPropertyValue("margin-top")) +
                  parseFloat(e.getPropertyValue("margin-bottom"))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
          },
          offset: function () {
            if (this.length > 0) {
              const e = r(),
                t = s(),
                i = this[0],
                n = i.getBoundingClientRect(),
                a = t.body,
                o = i.clientTop || a.clientTop || 0,
                l = i.clientLeft || a.clientLeft || 0,
                c = i === e ? e.scrollY : i.scrollTop,
                d = i === e ? e.scrollX : i.scrollLeft;
              return {
                top: n.top + c - o,
                left: n.left + d - l,
              };
            }
            return null;
          },
          css: function (e, t) {
            const i = r();
            let s;
            if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (s = 0; s < this.length; s += 1)
                  for (const t in e) this[s].style[t] = e[t];
                return this;
              }
              if (this[0])
                return i.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
              for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
              return this;
            }
            return this;
          },
          each: function (e) {
            return e
              ? (this.forEach((t, i) => {
                  e.apply(t, [t, i]);
                }),
                this)
              : this;
          },
          html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function (e) {
            if (void 0 === e)
              return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function (e) {
            const t = r(),
              i = s(),
              n = this[0];
            let o, l;
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
              if (n.matches) return n.matches(e);
              if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
              if (n.msMatchesSelector) return n.msMatchesSelector(e);
              for (o = c(e), l = 0; l < o.length; l += 1)
                if (o[l] === n) return !0;
              return !1;
            }
            if (e === i) return n === i;
            if (e === t) return n === t;
            if (e.nodeType || e instanceof a) {
              for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
                if (o[l] === n) return !0;
              return !1;
            }
            return !1;
          },
          index: function () {
            let e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return c([]);
            if (e < 0) {
              const i = t + e;
              return c(i < 0 ? [] : [this[i]]);
            }
            return c([this[e]]);
          },
          append: function () {
            let e;
            const t = s();
            for (let i = 0; i < arguments.length; i += 1) {
              e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
              for (let i = 0; i < this.length; i += 1)
                if ("string" == typeof e) {
                  const s = t.createElement("div");
                  for (s.innerHTML = e; s.firstChild; )
                    this[i].appendChild(s.firstChild);
                } else if (e instanceof a)
                  for (let t = 0; t < e.length; t += 1)
                    this[i].appendChild(e[t]);
                else this[i].appendChild(e);
            }
            return this;
          },
          prepend: function (e) {
            const t = s();
            let i, n;
            for (i = 0; i < this.length; i += 1)
              if ("string" == typeof e) {
                const s = t.createElement("div");
                for (
                  s.innerHTML = e, n = s.childNodes.length - 1;
                  n >= 0;
                  n -= 1
                )
                  this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
              } else if (e instanceof a)
                for (n = 0; n < e.length; n += 1)
                  this[i].insertBefore(e[n], this[i].childNodes[0]);
              else this[i].insertBefore(e, this[i].childNodes[0]);
            return this;
          },
          next: function (e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  c(this[0].nextElementSibling).is(e)
                  ? c([this[0].nextElementSibling])
                  : c([])
                : this[0].nextElementSibling
                ? c([this[0].nextElementSibling])
                : c([])
              : c([]);
          },
          nextAll: function (e) {
            const t = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.nextElementSibling; ) {
              const s = i.nextElementSibling;
              e ? c(s).is(e) && t.push(s) : t.push(s), (i = s);
            }
            return c(t);
          },
          prev: function (e) {
            if (this.length > 0) {
              const t = this[0];
              return e
                ? t.previousElementSibling && c(t.previousElementSibling).is(e)
                  ? c([t.previousElementSibling])
                  : c([])
                : t.previousElementSibling
                ? c([t.previousElementSibling])
                : c([]);
            }
            return c([]);
          },
          prevAll: function (e) {
            const t = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.previousElementSibling; ) {
              const s = i.previousElementSibling;
              e ? c(s).is(e) && t.push(s) : t.push(s), (i = s);
            }
            return c(t);
          },
          parent: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1)
              null !== this[i].parentNode &&
                (e
                  ? c(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                  : t.push(this[i].parentNode));
            return c(t);
          },
          parents: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
              let s = this[i].parentNode;
              for (; s; )
                e ? c(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
            }
            return c(t);
          },
          closest: function (e) {
            let t = this;
            return void 0 === e
              ? c([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
              const s = this[i].querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) t.push(s[e]);
            }
            return c(t);
          },
          children: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
              const s = this[i].children;
              for (let i = 0; i < s.length; i += 1)
                (e && !c(s[i]).is(e)) || t.push(s[i]);
            }
            return c(t);
          },
          filter: function (e) {
            return c(l(this, e));
          },
          remove: function () {
            for (let e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
        };
        function p(e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        }
        function h() {
          return Date.now();
        }
        function u(e, t) {
          void 0 === t && (t = "x");
          const i = r();
          let s, n, a;
          const o = (function (e) {
            const t = r();
            let i;
            return (
              t.getComputedStyle && (i = t.getComputedStyle(e, null)),
              !i && e.currentStyle && (i = e.currentStyle),
              i || (i = e.style),
              i
            );
          })(e);
          return (
            i.WebKitCSSMatrix
              ? ((n = o.transform || o.webkitTransform),
                n.split(",").length > 6 &&
                  (n = n
                    .split(", ")
                    .map((e) => e.replace(",", "."))
                    .join(", ")),
                (a = new i.WebKitCSSMatrix("none" === n ? "" : n)))
              : ((a =
                  o.MozTransform ||
                  o.OTransform ||
                  o.MsTransform ||
                  o.msTransform ||
                  o.transform ||
                  o
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,")),
                (s = a.toString().split(","))),
            "x" === t &&
              (n = i.WebKitCSSMatrix
                ? a.m41
                : 16 === s.length
                ? parseFloat(s[12])
                : parseFloat(s[4])),
            "y" === t &&
              (n = i.WebKitCSSMatrix
                ? a.m42
                : 16 === s.length
                ? parseFloat(s[13])
                : parseFloat(s[5])),
            n || 0
          );
        }
        function f(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            "Object" === Object.prototype.toString.call(e).slice(8, -1)
          );
        }
        function m(e) {
          return "undefined" != typeof window && void 0 !== window.HTMLElement
            ? e instanceof HTMLElement
            : e && (1 === e.nodeType || 11 === e.nodeType);
        }
        function g() {
          const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
          for (let i = 1; i < arguments.length; i += 1) {
            const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != s && !m(s)) {
              const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
              for (let t = 0, n = i.length; t < n; t += 1) {
                const n = i[t],
                  r = Object.getOwnPropertyDescriptor(s, n);
                void 0 !== r &&
                  r.enumerable &&
                  (f(e[n]) && f(s[n])
                    ? s[n].__swiper__
                      ? (e[n] = s[n])
                      : g(e[n], s[n])
                    : !f(e[n]) && f(s[n])
                    ? ((e[n] = {}),
                      s[n].__swiper__ ? (e[n] = s[n]) : g(e[n], s[n]))
                    : (e[n] = s[n]));
              }
            }
          }
          return e;
        }
        function v(e, t, i) {
          e.style.setProperty(t, i);
        }
        function y(e) {
          let { swiper: t, targetPosition: i, side: s } = e;
          const n = r(),
            a = -t.translate;
          let o,
            l = null;
          const c = t.params.speed;
          (t.wrapperEl.style.scrollSnapType = "none"),
            n.cancelAnimationFrame(t.cssModeFrameID);
          const d = i > a ? "next" : "prev",
            p = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
            h = () => {
              (o = new Date().getTime()), null === l && (l = o);
              const e = Math.max(Math.min((o - l) / c, 1), 0),
                r = 0.5 - Math.cos(e * Math.PI) / 2;
              let d = a + r * (i - a);
              if (
                (p(d, i) && (d = i),
                t.wrapperEl.scrollTo({
                  [s]: d,
                }),
                p(d, i))
              )
                return (
                  (t.wrapperEl.style.overflow = "hidden"),
                  (t.wrapperEl.style.scrollSnapType = ""),
                  setTimeout(() => {
                    (t.wrapperEl.style.overflow = ""),
                      t.wrapperEl.scrollTo({
                        [s]: d,
                      });
                  }),
                  void n.cancelAnimationFrame(t.cssModeFrameID)
                );
              t.cssModeFrameID = n.requestAnimationFrame(h);
            };
          h();
        }
        let b, w, x;
        function S() {
          return (
            b ||
              (b = (function () {
                const e = r(),
                  t = s();
                return {
                  smoothScroll:
                    t.documentElement &&
                    "scrollBehavior" in t.documentElement.style,
                  touch: !!(
                    "ontouchstart" in e ||
                    (e.DocumentTouch && t instanceof e.DocumentTouch)
                  ),
                  passiveListener: (function () {
                    let t = !1;
                    try {
                      const i = Object.defineProperty({}, "passive", {
                        get() {
                          t = !0;
                        },
                      });
                      e.addEventListener("testPassiveListener", null, i);
                    } catch (e) {}
                    return t;
                  })(),
                  gestures: "ongesturestart" in e,
                };
              })()),
            b
          );
        }
        function T(e) {
          return (
            void 0 === e && (e = {}),
            w ||
              (w = (function (e) {
                let { userAgent: t } = void 0 === e ? {} : e;
                const i = S(),
                  s = r(),
                  n = s.navigator.platform,
                  a = t || s.navigator.userAgent,
                  o = {
                    ios: !1,
                    android: !1,
                  },
                  l = s.screen.width,
                  c = s.screen.height,
                  d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = a.match(/(iPad).*OS\s([\d_]+)/);
                const h = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                  u = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  f = "Win32" === n;
                let m = "MacIntel" === n;
                return (
                  !p &&
                    m &&
                    i.touch &&
                    [
                      "1024x1366",
                      "1366x1024",
                      "834x1194",
                      "1194x834",
                      "834x1112",
                      "1112x834",
                      "768x1024",
                      "1024x768",
                      "820x1180",
                      "1180x820",
                      "810x1080",
                      "1080x810",
                    ].indexOf("".concat(l, "x").concat(c)) >= 0 &&
                    ((p = a.match(/(Version)\/([\d.]+)/)),
                    p || (p = [0, 1, "13_0_0"]),
                    (m = !1)),
                  d && !f && ((o.os = "android"), (o.android = !0)),
                  (p || u || h) && ((o.os = "ios"), (o.ios = !0)),
                  o
                );
              })(e)),
            w
          );
        }
        function E() {
          return (
            x ||
              (x = (function () {
                const e = r();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            x
          );
        }
        Object.keys(d).forEach((e) => {
          Object.defineProperty(c.fn, e, {
            value: d[e],
            writable: !0,
          });
        });
        var C = {
            on(e, t, i) {
              const s = this;
              if (!s.eventsListeners || s.destroyed) return s;
              if ("function" != typeof t) return s;
              const n = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][n](t);
                }),
                s
              );
            },
            once(e, t, i) {
              const s = this;
              if (!s.eventsListeners || s.destroyed) return s;
              if ("function" != typeof t) return s;
              function n() {
                s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                for (
                  var i = arguments.length, r = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  r[a] = arguments[a];
                t.apply(s, r);
              }
              return (n.__emitterProxy = t), s.on(e, n, i);
            },
            onAny(e, t) {
              const i = this;
              if (!i.eventsListeners || i.destroyed) return i;
              if ("function" != typeof e) return i;
              const s = t ? "unshift" : "push";
              return (
                i.eventsAnyListeners.indexOf(e) < 0 &&
                  i.eventsAnyListeners[s](e),
                i
              );
            },
            offAny(e) {
              const t = this;
              if (!t.eventsListeners || t.destroyed) return t;
              if (!t.eventsAnyListeners) return t;
              const i = t.eventsAnyListeners.indexOf(e);
              return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
            },
            off(e, t) {
              const i = this;
              return !i.eventsListeners || i.destroyed
                ? i
                : i.eventsListeners
                ? (e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((s, n) => {
                          (s === t ||
                            (s.__emitterProxy && s.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(n, 1);
                        });
                  }),
                  i)
                : i;
            },
            emit() {
              const e = this;
              if (!e.eventsListeners || e.destroyed) return e;
              if (!e.eventsListeners) return e;
              let t, i, s;
              for (
                var n = arguments.length, r = new Array(n), a = 0;
                a < n;
                a++
              )
                r[a] = arguments[a];
              return (
                "string" == typeof r[0] || Array.isArray(r[0])
                  ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
                  : ((t = r[0].events),
                    (i = r[0].data),
                    (s = r[0].context || e)),
                i.unshift(s),
                (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                  e.eventsAnyListeners &&
                    e.eventsAnyListeners.length &&
                    e.eventsAnyListeners.forEach((e) => {
                      e.apply(s, [t, ...i]);
                    }),
                    e.eventsListeners &&
                      e.eventsListeners[t] &&
                      e.eventsListeners[t].forEach((e) => {
                        e.apply(s, i);
                      });
                }),
                e
              );
            },
          },
          P = {
            updateSize: function () {
              const e = this;
              let t, i;
              const s = e.$el;
              (t =
                void 0 !== e.params.width && null !== e.params.width
                  ? e.params.width
                  : s[0].clientWidth),
                (i =
                  void 0 !== e.params.height && null !== e.params.height
                    ? e.params.height
                    : s[0].clientHeight),
                (0 === t && e.isHorizontal()) ||
                  (0 === i && e.isVertical()) ||
                  ((t =
                    t -
                    parseInt(s.css("padding-left") || 0, 10) -
                    parseInt(s.css("padding-right") || 0, 10)),
                  (i =
                    i -
                    parseInt(s.css("padding-top") || 0, 10) -
                    parseInt(s.css("padding-bottom") || 0, 10)),
                  Number.isNaN(t) && (t = 0),
                  Number.isNaN(i) && (i = 0),
                  Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i,
                  }));
            },
            updateSlides: function () {
              const e = this;
              function t(t) {
                return e.isHorizontal()
                  ? t
                  : {
                      width: "height",
                      "margin-top": "margin-left",
                      "margin-bottom ": "margin-right",
                      "margin-left": "margin-top",
                      "margin-right": "margin-bottom",
                      "padding-left": "padding-top",
                      "padding-right": "padding-bottom",
                      marginRight: "marginBottom",
                    }[t];
              }
              function i(e, i) {
                return parseFloat(e.getPropertyValue(t(i)) || 0);
              }
              const s = e.params,
                { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
                l = e.virtual && s.virtual.enabled,
                c = l ? e.virtual.slides.length : e.slides.length,
                d = n.children(".".concat(e.params.slideClass)),
                p = l ? e.virtual.slides.length : d.length;
              let h = [];
              const u = [],
                f = [];
              let m = s.slidesOffsetBefore;
              "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
              let g = s.slidesOffsetAfter;
              "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
              const y = e.snapGrid.length,
                b = e.slidesGrid.length;
              let w = s.spaceBetween,
                x = -m,
                S = 0,
                T = 0;
              if (void 0 === r) return;
              "string" == typeof w &&
                w.indexOf("%") >= 0 &&
                (w = (parseFloat(w.replace("%", "")) / 100) * r),
                (e.virtualSize = -w),
                a
                  ? d.css({
                      marginLeft: "",
                      marginBottom: "",
                      marginTop: "",
                    })
                  : d.css({
                      marginRight: "",
                      marginBottom: "",
                      marginTop: "",
                    }),
                s.centeredSlides &&
                  s.cssMode &&
                  (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
                  v(e.wrapperEl, "--swiper-centered-offset-after", ""));
              const E = s.grid && s.grid.rows > 1 && e.grid;
              let C;
              E && e.grid.initSlides(p);
              const P =
                "auto" === s.slidesPerView &&
                s.breakpoints &&
                Object.keys(s.breakpoints).filter(
                  (e) => void 0 !== s.breakpoints[e].slidesPerView
                ).length > 0;
              for (let n = 0; n < p; n += 1) {
                C = 0;
                const a = d.eq(n);
                if (
                  (E && e.grid.updateSlide(n, a, p, t),
                  "none" !== a.css("display"))
                ) {
                  if ("auto" === s.slidesPerView) {
                    P && (d[n].style[t("width")] = "");
                    const r = getComputedStyle(a[0]),
                      o = a[0].style.transform,
                      l = a[0].style.webkitTransform;
                    if (
                      (o && (a[0].style.transform = "none"),
                      l && (a[0].style.webkitTransform = "none"),
                      s.roundLengths)
                    )
                      C = e.isHorizontal()
                        ? a.outerWidth(!0)
                        : a.outerHeight(!0);
                    else {
                      const e = i(r, "width"),
                        t = i(r, "padding-left"),
                        s = i(r, "padding-right"),
                        n = i(r, "margin-left"),
                        o = i(r, "margin-right"),
                        l = r.getPropertyValue("box-sizing");
                      if (l && "border-box" === l) C = e + n + o;
                      else {
                        const { clientWidth: i, offsetWidth: r } = a[0];
                        C = e + t + s + n + o + (r - i);
                      }
                    }
                    o && (a[0].style.transform = o),
                      l && (a[0].style.webkitTransform = l),
                      s.roundLengths && (C = Math.floor(C));
                  } else
                    (C = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
                      s.roundLengths && (C = Math.floor(C)),
                      d[n] && (d[n].style[t("width")] = "".concat(C, "px"));
                  d[n] && (d[n].swiperSlideSize = C),
                    f.push(C),
                    s.centeredSlides
                      ? ((x = x + C / 2 + S / 2 + w),
                        0 === S && 0 !== n && (x = x - r / 2 - w),
                        0 === n && (x = x - r / 2 - w),
                        Math.abs(x) < 0.001 && (x = 0),
                        s.roundLengths && (x = Math.floor(x)),
                        T % s.slidesPerGroup == 0 && h.push(x),
                        u.push(x))
                      : (s.roundLengths && (x = Math.floor(x)),
                        (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                          e.params.slidesPerGroup ==
                          0 && h.push(x),
                        u.push(x),
                        (x = x + C + w)),
                    (e.virtualSize += C + w),
                    (S = C),
                    (T += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                a &&
                  o &&
                  ("slide" === s.effect || "coverflow" === s.effect) &&
                  n.css({
                    width: "".concat(e.virtualSize + s.spaceBetween, "px"),
                  }),
                s.setWrapperSize &&
                  n.css({
                    [t("width")]: "".concat(
                      e.virtualSize + s.spaceBetween,
                      "px"
                    ),
                  }),
                E && e.grid.updateWrapperSize(C, h, t),
                !s.centeredSlides)
              ) {
                const t = [];
                for (let i = 0; i < h.length; i += 1) {
                  let n = h[i];
                  s.roundLengths && (n = Math.floor(n)),
                    h[i] <= e.virtualSize - r && t.push(n);
                }
                (h = t),
                  Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) >
                    1 && h.push(e.virtualSize - r);
              }
              if ((0 === h.length && (h = [0]), 0 !== s.spaceBetween)) {
                const i =
                  e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
                  [i]: "".concat(w, "px"),
                });
              }
              if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                f.forEach((t) => {
                  e += t + (s.spaceBetween ? s.spaceBetween : 0);
                }),
                  (e -= s.spaceBetween);
                const t = e - r;
                h = h.map((e) => (e < 0 ? -m : e > t ? t + g : e));
              }
              if (s.centerInsufficientSlides) {
                let e = 0;
                if (
                  (f.forEach((t) => {
                    e += t + (s.spaceBetween ? s.spaceBetween : 0);
                  }),
                  (e -= s.spaceBetween),
                  e < r)
                ) {
                  const t = (r - e) / 2;
                  h.forEach((e, i) => {
                    h[i] = e - t;
                  }),
                    u.forEach((e, i) => {
                      u[i] = e + t;
                    });
                }
              }
              if (
                (Object.assign(e, {
                  slides: d,
                  snapGrid: h,
                  slidesGrid: u,
                  slidesSizesGrid: f,
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
              ) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
                  v(
                    e.wrapperEl,
                    "--swiper-centered-offset-after",
                    e.size / 2 - f[f.length - 1] / 2 + "px"
                  );
                const t = -e.snapGrid[0],
                  i = -e.slidesGrid[0];
                (e.snapGrid = e.snapGrid.map((e) => e + t)),
                  (e.slidesGrid = e.slidesGrid.map((e) => e + i));
              }
              if (
                (p !== c && e.emit("slidesLengthChange"),
                h.length !== y &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                u.length !== b && e.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && e.updateSlidesOffset(),
                !(
                  l ||
                  s.cssMode ||
                  ("slide" !== s.effect && "fade" !== s.effect)
                ))
              ) {
                const t = "".concat(
                    s.containerModifierClass,
                    "backface-hidden"
                  ),
                  i = e.$el.hasClass(t);
                p <= s.maxBackfaceHiddenSlides
                  ? i || e.$el.addClass(t)
                  : i && e.$el.removeClass(t);
              }
            },
            updateAutoHeight: function (e) {
              const t = this,
                i = [],
                s = t.virtual && t.params.virtual.enabled;
              let n,
                r = 0;
              "number" == typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed);
              const a = (e) =>
                s
                  ? t.slides.filter(
                      (t) =>
                        parseInt(
                          t.getAttribute("data-swiper-slide-index"),
                          10
                        ) === e
                    )[0]
                  : t.slides.eq(e)[0];
              if (
                "auto" !== t.params.slidesPerView &&
                t.params.slidesPerView > 1
              )
                if (t.params.centeredSlides)
                  (t.visibleSlides || c([])).each((e) => {
                    i.push(e);
                  });
                else
                  for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    const e = t.activeIndex + n;
                    if (e > t.slides.length && !s) break;
                    i.push(a(e));
                  }
              else i.push(a(t.activeIndex));
              for (n = 0; n < i.length; n += 1)
                if (void 0 !== i[n]) {
                  const e = i[n].offsetHeight;
                  r = e > r ? e : r;
                }
              (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
            },
            updateSlidesOffset: function () {
              const e = this,
                t = e.slides;
              for (let i = 0; i < t.length; i += 1)
                t[i].swiperSlideOffset = e.isHorizontal()
                  ? t[i].offsetLeft
                  : t[i].offsetTop;
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              const t = this,
                i = t.params,
                { slides: s, rtlTranslate: n, snapGrid: r } = t;
              if (0 === s.length) return;
              void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
              let a = -e;
              n && (a = e),
                s.removeClass(i.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (let e = 0; e < s.length; e += 1) {
                const o = s[e];
                let l = o.swiperSlideOffset;
                i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
                const c =
                    (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                    (o.swiperSlideSize + i.spaceBetween),
                  d =
                    (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                    (o.swiperSlideSize + i.spaceBetween),
                  p = -(a - l),
                  h = p + t.slidesSizesGrid[e];
                ((p >= 0 && p < t.size - 1) ||
                  (h > 1 && h <= t.size) ||
                  (p <= 0 && h >= t.size)) &&
                  (t.visibleSlides.push(o),
                  t.visibleSlidesIndexes.push(e),
                  s.eq(e).addClass(i.slideVisibleClass)),
                  (o.progress = n ? -c : c),
                  (o.originalProgress = n ? -d : d);
              }
              t.visibleSlides = c(t.visibleSlides);
            },
            updateProgress: function (e) {
              const t = this;
              if (void 0 === e) {
                const i = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * i) || 0;
              }
              const i = t.params,
                s = t.maxTranslate() - t.minTranslate();
              let { progress: n, isBeginning: r, isEnd: a } = t;
              const o = r,
                l = a;
              0 === s
                ? ((n = 0), (r = !0), (a = !0))
                : ((n = (e - t.minTranslate()) / s),
                  (r = n <= 0),
                  (a = n >= 1)),
                Object.assign(t, {
                  progress: n,
                  isBeginning: r,
                  isEnd: a,
                }),
                (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                  t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                a && !l && t.emit("reachEnd toEdge"),
                ((o && !r) || (l && !a)) && t.emit("fromEdge"),
                t.emit("progress", n);
            },
            updateSlidesClasses: function () {
              const e = this,
                {
                  slides: t,
                  params: i,
                  $wrapperEl: s,
                  activeIndex: n,
                  realIndex: r,
                } = e,
                a = e.virtual && i.virtual.enabled;
              let o;
              t.removeClass(
                ""
                  .concat(i.slideActiveClass, " ")
                  .concat(i.slideNextClass, " ")
                  .concat(i.slidePrevClass, " ")
                  .concat(i.slideDuplicateActiveClass, " ")
                  .concat(i.slideDuplicateNextClass, " ")
                  .concat(i.slideDuplicatePrevClass)
              ),
                (o = a
                  ? e.$wrapperEl.find(
                      "."
                        .concat(i.slideClass, '[data-swiper-slide-index="')
                        .concat(n, '"]')
                    )
                  : t.eq(n)),
                o.addClass(i.slideActiveClass),
                i.loop &&
                  (o.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          "."
                            .concat(i.slideClass, ":not(.")
                            .concat(
                              i.slideDuplicateClass,
                              ')[data-swiper-slide-index="'
                            )
                            .concat(r, '"]')
                        )
                        .addClass(i.slideDuplicateActiveClass)
                    : s
                        .children(
                          "."
                            .concat(i.slideClass, ".")
                            .concat(
                              i.slideDuplicateClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(r, '"]')
                        )
                        .addClass(i.slideDuplicateActiveClass));
              let l = o
                .nextAll(".".concat(i.slideClass))
                .eq(0)
                .addClass(i.slideNextClass);
              i.loop &&
                0 === l.length &&
                ((l = t.eq(0)), l.addClass(i.slideNextClass));
              let c = o
                .prevAll(".".concat(i.slideClass))
                .eq(0)
                .addClass(i.slidePrevClass);
              i.loop &&
                0 === c.length &&
                ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
                i.loop &&
                  (l.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          "."
                            .concat(i.slideClass, ":not(.")
                            .concat(
                              i.slideDuplicateClass,
                              ')[data-swiper-slide-index="'
                            )
                            .concat(l.attr("data-swiper-slide-index"), '"]')
                        )
                        .addClass(i.slideDuplicateNextClass)
                    : s
                        .children(
                          "."
                            .concat(i.slideClass, ".")
                            .concat(
                              i.slideDuplicateClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(l.attr("data-swiper-slide-index"), '"]')
                        )
                        .addClass(i.slideDuplicateNextClass),
                  c.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          "."
                            .concat(i.slideClass, ":not(.")
                            .concat(
                              i.slideDuplicateClass,
                              ')[data-swiper-slide-index="'
                            )
                            .concat(c.attr("data-swiper-slide-index"), '"]')
                        )
                        .addClass(i.slideDuplicatePrevClass)
                    : s
                        .children(
                          "."
                            .concat(i.slideClass, ".")
                            .concat(
                              i.slideDuplicateClass,
                              '[data-swiper-slide-index="'
                            )
                            .concat(c.attr("data-swiper-slide-index"), '"]')
                        )
                        .addClass(i.slideDuplicatePrevClass)),
                e.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              const t = this,
                i = t.rtlTranslate ? t.translate : -t.translate,
                {
                  slidesGrid: s,
                  snapGrid: n,
                  params: r,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: l,
                } = t;
              let c,
                d = e;
              if (void 0 === d) {
                for (let e = 0; e < s.length; e += 1)
                  void 0 !== s[e + 1]
                    ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                      ? (d = e)
                      : i >= s[e] && i < s[e + 1] && (d = e + 1)
                    : i >= s[e] && (d = e);
                r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
              }
              if (n.indexOf(i) >= 0) c = n.indexOf(i);
              else {
                const e = Math.min(r.slidesPerGroupSkip, d);
                c = e + Math.floor((d - e) / r.slidesPerGroup);
              }
              if ((c >= n.length && (c = n.length - 1), d === a))
                return void (
                  c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
                );
              const p = parseInt(
                t.slides.eq(d).attr("data-swiper-slide-index") || d,
                10
              );
              Object.assign(t, {
                snapIndex: c,
                realIndex: p,
                previousIndex: a,
                activeIndex: d,
              }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                o !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) &&
                  t.emit("slideChange");
            },
            updateClickedSlide: function (e) {
              const t = this,
                i = t.params,
                s = c(e).closest(".".concat(i.slideClass))[0];
              let n,
                r = !1;
              if (s)
                for (let e = 0; e < t.slides.length; e += 1)
                  if (t.slides[e] === s) {
                    (r = !0), (n = e);
                    break;
                  }
              if (!s || !r)
                return (
                  (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
                );
              (t.clickedSlide = s),
                t.virtual && t.params.virtual.enabled
                  ? (t.clickedIndex = parseInt(
                      c(s).attr("data-swiper-slide-index"),
                      10
                    ))
                  : (t.clickedIndex = n),
                i.slideToClickedSlide &&
                  void 0 !== t.clickedIndex &&
                  t.clickedIndex !== t.activeIndex &&
                  t.slideToClickedSlide();
            },
          },
          M = {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: i,
                translate: s,
                $wrapperEl: n,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let r = u(n[0], e);
              return i && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
              const i = this,
                {
                  rtlTranslate: s,
                  params: n,
                  $wrapperEl: r,
                  wrapperEl: a,
                  progress: o,
                } = i;
              let l,
                c = 0,
                d = 0;
              i.isHorizontal() ? (c = s ? -e : e) : (d = e),
                n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
                n.cssMode
                  ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      i.isHorizontal() ? -c : -d)
                  : n.virtualTranslate ||
                    r.transform(
                      "translate3d(".concat(c, "px, ").concat(d, "px, 0px)")
                    ),
                (i.previousTranslate = i.translate),
                (i.translate = i.isHorizontal() ? c : d);
              const p = i.maxTranslate() - i.minTranslate();
              (l = 0 === p ? 0 : (e - i.minTranslate()) / p),
                l !== o && i.updateProgress(e),
                i.emit("setTranslate", i.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, s, n) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
              const r = this,
                { params: a, wrapperEl: o } = r;
              if (r.animating && a.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                c = r.maxTranslate();
              let d;
              if (
                ((d = s && e > l ? l : s && e < c ? c : e),
                r.updateProgress(d),
                a.cssMode)
              ) {
                const e = r.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                  if (!r.support.smoothScroll)
                    return (
                      y({
                        swiper: r,
                        targetPosition: -d,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({
                    [e ? "left" : "top"]: -d,
                    behavior: "smooth",
                  });
                }
                return !0;
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(d),
                    i &&
                      (r.emit("beforeTransitionStart", t, n),
                      r.emit("transitionEnd")))
                  : (r.setTransition(t),
                    r.setTranslate(d),
                    i &&
                      (r.emit("beforeTransitionStart", t, n),
                      r.emit("transitionStart")),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            i && r.emit("transitionEnd"));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          };
        function k(e) {
          let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
          const { activeIndex: r, previousIndex: a } = t;
          let o = s;
          if (
            (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
            t.emit("transition".concat(n)),
            i && r !== a)
          ) {
            if ("reset" === o)
              return void t.emit("slideResetTransition".concat(n));
            t.emit("slideChangeTransition".concat(n)),
              "next" === o
                ? t.emit("slideNextTransition".concat(n))
                : t.emit("slidePrevTransition".concat(n));
          }
        }
        var O = {
            slideTo: function (e, t, i, s, n) {
              if (
                (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                "number" != typeof e && "string" != typeof e)
              )
                throw new Error(
                  "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                    typeof e,
                    "] given."
                  )
                );
              if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                  throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                      e,
                      "] given."
                    )
                  );
                e = t;
              }
              const r = this;
              let a = e;
              a < 0 && (a = 0);
              const {
                params: o,
                snapGrid: l,
                slidesGrid: c,
                previousIndex: d,
                activeIndex: p,
                rtlTranslate: h,
                wrapperEl: u,
                enabled: f,
              } = r;
              if (
                (r.animating && o.preventInteractionOnTransition) ||
                (!f && !s && !n)
              )
                return !1;
              const m = Math.min(r.params.slidesPerGroupSkip, a);
              let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
              g >= l.length && (g = l.length - 1),
                (p || o.initialSlide || 0) === (d || 0) &&
                  i &&
                  r.emit("beforeSlideChangeStart");
              const v = -l[g];
              if ((r.updateProgress(v), o.normalizeSlideIndex))
                for (let e = 0; e < c.length; e += 1) {
                  const t = -Math.floor(100 * v),
                    i = Math.floor(100 * c[e]),
                    s = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (a = e)
                      : t >= i && t < s && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (r.initialized && a !== p) {
                if (
                  !r.allowSlideNext &&
                  v < r.translate &&
                  v < r.minTranslate()
                )
                  return !1;
                if (
                  !r.allowSlidePrev &&
                  v > r.translate &&
                  v > r.maxTranslate() &&
                  (p || 0) !== a
                )
                  return !1;
              }
              let b;
              if (
                ((b = a > p ? "next" : a < p ? "prev" : "reset"),
                (h && -v === r.translate) || (!h && v === r.translate))
              )
                return (
                  r.updateActiveIndex(a),
                  o.autoHeight && r.updateAutoHeight(),
                  r.updateSlidesClasses(),
                  "slide" !== o.effect && r.setTranslate(v),
                  "reset" !== b &&
                    (r.transitionStart(i, b), r.transitionEnd(i, b)),
                  !1
                );
              if (o.cssMode) {
                const e = r.isHorizontal(),
                  i = h ? v : -v;
                if (0 === t) {
                  const t = r.virtual && r.params.virtual.enabled;
                  t &&
                    ((r.wrapperEl.style.scrollSnapType = "none"),
                    (r._immediateVirtual = !0)),
                    (u[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (r.wrapperEl.style.scrollSnapType = ""),
                          (r._swiperImmediateVirtual = !1);
                      });
                } else {
                  if (!r.support.smoothScroll)
                    return (
                      y({
                        swiper: r,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  u.scrollTo({
                    [e ? "left" : "top"]: i,
                    behavior: "smooth",
                  });
                }
                return !0;
              }
              return (
                r.setTransition(t),
                r.setTranslate(v),
                r.updateActiveIndex(a),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, s),
                r.transitionStart(i, b),
                0 === t
                  ? r.transitionEnd(i, b)
                  : r.animating ||
                    ((r.animating = !0),
                    r.onSlideToWrapperTransitionEnd ||
                      (r.onSlideToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onSlideToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onSlideToWrapperTransitionEnd
                          ),
                          (r.onSlideToWrapperTransitionEnd = null),
                          delete r.onSlideToWrapperTransitionEnd,
                          r.transitionEnd(i, b));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, s) {
              if (
                (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                "string" == typeof e)
              ) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                  throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                      e,
                      "] given."
                    )
                  );
                e = t;
              }
              const n = this;
              let r = e;
              return (
                n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s)
              );
            },
            slideNext: function (e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              const s = this,
                { animating: n, enabled: r, params: a } = s;
              if (!r) return s;
              let o = a.slidesPerGroup;
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
              const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
              if (a.loop) {
                if (n && a.loopPreventsSlide) return !1;
                s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
              }
              return a.rewind && s.isEnd
                ? s.slideTo(0, e, t, i)
                : s.slideTo(s.activeIndex + l, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              const s = this,
                {
                  params: n,
                  animating: r,
                  snapGrid: a,
                  slidesGrid: o,
                  rtlTranslate: l,
                  enabled: c,
                } = s;
              if (!c) return s;
              if (n.loop) {
                if (r && n.loopPreventsSlide) return !1;
                s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
              }
              function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              const p = d(l ? s.translate : -s.translate),
                h = a.map((e) => d(e));
              let u = a[h.indexOf(p) - 1];
              if (void 0 === u && n.cssMode) {
                let e;
                a.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (u = a[e > 0 ? e - 1 : e]);
              }
              let f = 0;
              if (
                (void 0 !== u &&
                  ((f = o.indexOf(u)),
                  f < 0 && (f = s.activeIndex - 1),
                  "auto" === n.slidesPerView &&
                    1 === n.slidesPerGroup &&
                    n.slidesPerGroupAuto &&
                    ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                    (f = Math.max(f, 0)))),
                n.rewind && s.isBeginning)
              ) {
                const n =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(n, e, t, i);
              }
              return s.slideTo(f, e, t, i);
            },
            slideReset: function (e, t, i) {
              return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
              );
            },
            slideToClosest: function (e, t, i, s) {
              void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = 0.5);
              const n = this;
              let r = n.activeIndex;
              const a = Math.min(n.params.slidesPerGroupSkip, r),
                o = a + Math.floor((r - a) / n.params.slidesPerGroup),
                l = n.rtlTranslate ? n.translate : -n.translate;
              if (l >= n.snapGrid[o]) {
                const e = n.snapGrid[o];
                l - e > (n.snapGrid[o + 1] - e) * s &&
                  (r += n.params.slidesPerGroup);
              } else {
                const e = n.snapGrid[o - 1];
                l - e <= (n.snapGrid[o] - e) * s &&
                  (r -= n.params.slidesPerGroup);
              }
              return (
                (r = Math.max(r, 0)),
                (r = Math.min(r, n.slidesGrid.length - 1)),
                n.slideTo(r, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              const e = this,
                { params: t, $wrapperEl: i } = e,
                s =
                  "auto" === t.slidesPerView
                    ? e.slidesPerViewDynamic()
                    : t.slidesPerView;
              let n,
                r = e.clickedIndex;
              if (t.loop) {
                if (e.animating) return;
                (n = parseInt(
                  c(e.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  t.centeredSlides
                    ? r < e.loopedSlides - s / 2 ||
                      r > e.slides.length - e.loopedSlides + s / 2
                      ? (e.loopFix(),
                        (r = i
                          .children(
                            "."
                              .concat(
                                t.slideClass,
                                '[data-swiper-slide-index="'
                              )
                              .concat(n, '"]:not(.')
                              .concat(t.slideDuplicateClass, ")")
                          )
                          .eq(0)
                          .index()),
                        p(() => {
                          e.slideTo(r);
                        }))
                      : e.slideTo(r)
                    : r > e.slides.length - s
                    ? (e.loopFix(),
                      (r = i
                        .children(
                          "."
                            .concat(t.slideClass, '[data-swiper-slide-index="')
                            .concat(n, '"]:not(.')
                            .concat(t.slideDuplicateClass, ")")
                        )
                        .eq(0)
                        .index()),
                      p(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r);
              } else e.slideTo(r);
            },
          },
          L = {
            loopCreate: function () {
              const e = this,
                t = s(),
                { params: i, $wrapperEl: n } = e,
                r = n.children().length > 0 ? c(n.children()[0].parentNode) : n;
              r.children(
                ".".concat(i.slideClass, ".").concat(i.slideDuplicateClass)
              ).remove();
              let a = r.children(".".concat(i.slideClass));
              if (i.loopFillGroupWithBlank) {
                const e = i.slidesPerGroup - (a.length % i.slidesPerGroup);
                if (e !== i.slidesPerGroup) {
                  for (let s = 0; s < e; s += 1) {
                    const e = c(t.createElement("div")).addClass(
                      "".concat(i.slideClass, " ").concat(i.slideBlankClass)
                    );
                    r.append(e);
                  }
                  a = r.children(".".concat(i.slideClass));
                }
              }
              "auto" !== i.slidesPerView ||
                i.loopedSlides ||
                (i.loopedSlides = a.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(i.loopedSlides || i.slidesPerView, 10)
                )),
                (e.loopedSlides += i.loopAdditionalSlides),
                e.loopedSlides > a.length && (e.loopedSlides = a.length);
              const o = [],
                l = [];
              a.each((t, i) => {
                const s = c(t);
                i < e.loopedSlides && l.push(t),
                  i < a.length && i >= a.length - e.loopedSlides && o.push(t),
                  s.attr("data-swiper-slide-index", i);
              });
              for (let e = 0; e < l.length; e += 1)
                r.append(c(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
              for (let e = o.length - 1; e >= 0; e -= 1)
                r.prepend(
                  c(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass)
                );
            },
            loopFix: function () {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: i,
                loopedSlides: s,
                allowSlidePrev: n,
                allowSlideNext: r,
                snapGrid: a,
                rtlTranslate: o,
              } = e;
              let l;
              (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
              const c = -a[t] - e.getTranslate();
              t < s
                ? ((l = i.length - 3 * s + t),
                  (l += s),
                  e.slideTo(l, 0, !1, !0) &&
                    0 !== c &&
                    e.setTranslate((o ? -e.translate : e.translate) - c))
                : t >= i.length - s &&
                  ((l = -i.length + t + s),
                  (l += s),
                  e.slideTo(l, 0, !1, !0) &&
                    0 !== c &&
                    e.setTranslate((o ? -e.translate : e.translate) - c)),
                (e.allowSlidePrev = n),
                (e.allowSlideNext = r),
                e.emit("loopFix");
            },
            loopDestroy: function () {
              const { $wrapperEl: e, params: t, slides: i } = this;
              e
                .children(
                  "."
                    .concat(t.slideClass, ".")
                    .concat(t.slideDuplicateClass, ",.")
                    .concat(t.slideClass, ".")
                    .concat(t.slideBlankClass)
                )
                .remove(),
                i.removeAttr("data-swiper-slide-index");
            },
          };
        function A(e) {
          const t = this,
            i = s(),
            n = r(),
            a = t.touchEventsData,
            { params: o, touches: l, enabled: d } = t;
          if (!d) return;
          if (t.animating && o.preventInteractionOnTransition) return;
          !t.animating && o.cssMode && o.loop && t.loopFix();
          let p = e;
          p.originalEvent && (p = p.originalEvent);
          let u = c(p.target);
          if (
            "wrapper" === o.touchEventsTarget &&
            !u.closest(t.wrapperEl).length
          )
            return;
          if (
            ((a.isTouchEvent = "touchstart" === p.type),
            !a.isTouchEvent && "which" in p && 3 === p.which)
          )
            return;
          if (!a.isTouchEvent && "button" in p && p.button > 0) return;
          if (a.isTouched && a.isMoved) return;
          o.noSwipingClass &&
            "" !== o.noSwipingClass &&
            p.target &&
            p.target.shadowRoot &&
            e.path &&
            e.path[0] &&
            (u = c(e.path[0]));
          const f = o.noSwipingSelector
              ? o.noSwipingSelector
              : ".".concat(o.noSwipingClass),
            m = !(!p.target || !p.target.shadowRoot);
          if (
            o.noSwiping &&
            (m
              ? (function (e, t) {
                  return (
                    void 0 === t && (t = this),
                    (function t(i) {
                      if (!i || i === s() || i === r()) return null;
                      i.assignedSlot && (i = i.assignedSlot);
                      const n = i.closest(e);
                      return n || i.getRootNode
                        ? n || t(i.getRootNode().host)
                        : null;
                    })(t)
                  );
                })(f, u[0])
              : u.closest(f)[0])
          )
            return void (t.allowClick = !0);
          if (o.swipeHandler && !u.closest(o.swipeHandler)[0]) return;
          (l.currentX =
            "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
            (l.currentY =
              "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
          const g = l.currentX,
            v = l.currentY,
            y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
            b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
          if (y && (g <= b || g >= n.innerWidth - b)) {
            if ("prevent" !== y) return;
            e.preventDefault();
          }
          if (
            (Object.assign(a, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (l.startX = g),
            (l.startY = v),
            (a.touchStartTime = h()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            o.threshold > 0 && (a.allowThresholdMove = !1),
            "touchstart" !== p.type)
          ) {
            let e = !0;
            u.is(a.focusableElements) &&
              ((e = !1), "SELECT" === u[0].nodeName && (a.isTouched = !1)),
              i.activeElement &&
                c(i.activeElement).is(a.focusableElements) &&
                i.activeElement !== u[0] &&
                i.activeElement.blur();
            const s = e && t.allowTouchMove && o.touchStartPreventDefault;
            (!o.touchStartForcePreventDefault && !s) ||
              u[0].isContentEditable ||
              p.preventDefault();
          }
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !o.cssMode &&
            t.freeMode.onTouchStart(),
            t.emit("touchStart", p);
        }
        function z(e) {
          const t = s(),
            i = this,
            n = i.touchEventsData,
            { params: r, touches: a, rtlTranslate: o, enabled: l } = i;
          if (!l) return;
          let d = e;
          if ((d.originalEvent && (d = d.originalEvent), !n.isTouched))
            return void (
              n.startMoving &&
              n.isScrolling &&
              i.emit("touchMoveOpposite", d)
            );
          if (n.isTouchEvent && "touchmove" !== d.type) return;
          const p =
              "touchmove" === d.type &&
              d.targetTouches &&
              (d.targetTouches[0] || d.changedTouches[0]),
            u = "touchmove" === d.type ? p.pageX : d.pageX,
            f = "touchmove" === d.type ? p.pageY : d.pageY;
          if (d.preventedByNestedSwiper)
            return (a.startX = u), void (a.startY = f);
          if (!i.allowTouchMove)
            return (
              c(d.target).is(n.focusableElements) || (i.allowClick = !1),
              void (
                n.isTouched &&
                (Object.assign(a, {
                  startX: u,
                  startY: f,
                  currentX: u,
                  currentY: f,
                }),
                (n.touchStartTime = h()))
              )
            );
          if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (i.isVertical()) {
              if (
                (f < a.startY && i.translate <= i.maxTranslate()) ||
                (f > a.startY && i.translate >= i.minTranslate())
              )
                return (n.isTouched = !1), void (n.isMoved = !1);
            } else if (
              (u < a.startX && i.translate <= i.maxTranslate()) ||
              (u > a.startX && i.translate >= i.minTranslate())
            )
              return;
          if (
            n.isTouchEvent &&
            t.activeElement &&
            d.target === t.activeElement &&
            c(d.target).is(n.focusableElements)
          )
            return (n.isMoved = !0), void (i.allowClick = !1);
          if (
            (n.allowTouchCallbacks && i.emit("touchMove", d),
            d.targetTouches && d.targetTouches.length > 1)
          )
            return;
          (a.currentX = u), (a.currentY = f);
          const m = a.currentX - a.startX,
            g = a.currentY - a.startY;
          if (
            i.params.threshold &&
            Math.sqrt(m ** 2 + g ** 2) < i.params.threshold
          )
            return;
          if (void 0 === n.isScrolling) {
            let e;
            (i.isHorizontal() && a.currentY === a.startY) ||
            (i.isVertical() && a.currentX === a.startX)
              ? (n.isScrolling = !1)
              : m * m + g * g >= 25 &&
                ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
                (n.isScrolling = i.isHorizontal()
                  ? e > r.touchAngle
                  : 90 - e > r.touchAngle));
          }
          if (
            (n.isScrolling && i.emit("touchMoveOpposite", d),
            void 0 === n.startMoving &&
              ((a.currentX === a.startX && a.currentY === a.startY) ||
                (n.startMoving = !0)),
            n.isScrolling)
          )
            return void (n.isTouched = !1);
          if (!n.startMoving) return;
          (i.allowClick = !1),
            !r.cssMode && d.cancelable && d.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && d.stopPropagation(),
            n.isMoved ||
              (r.loop && !r.cssMode && i.loopFix(),
              (n.startTranslate = i.getTranslate()),
              i.setTransition(0),
              i.animating &&
                i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
              (n.allowMomentumBounce = !1),
              !r.grabCursor ||
                (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
                i.setGrabCursor(!0),
              i.emit("sliderFirstMove", d)),
            i.emit("sliderMove", d),
            (n.isMoved = !0);
          let v = i.isHorizontal() ? m : g;
          (a.diff = v),
            (v *= r.touchRatio),
            o && (v = -v),
            (i.swipeDirection = v > 0 ? "prev" : "next"),
            (n.currentTranslate = v + n.startTranslate);
          let y = !0,
            b = r.resistanceRatio;
          if (
            (r.touchReleaseOnEdges && (b = 0),
            v > 0 && n.currentTranslate > i.minTranslate()
              ? ((y = !1),
                r.resistance &&
                  (n.currentTranslate =
                    i.minTranslate() -
                    1 +
                    (-i.minTranslate() + n.startTranslate + v) ** b))
              : v < 0 &&
                n.currentTranslate < i.maxTranslate() &&
                ((y = !1),
                r.resistance &&
                  (n.currentTranslate =
                    i.maxTranslate() +
                    1 -
                    (i.maxTranslate() - n.startTranslate - v) ** b)),
            y && (d.preventedByNestedSwiper = !0),
            !i.allowSlideNext &&
              "next" === i.swipeDirection &&
              n.currentTranslate < n.startTranslate &&
              (n.currentTranslate = n.startTranslate),
            !i.allowSlidePrev &&
              "prev" === i.swipeDirection &&
              n.currentTranslate > n.startTranslate &&
              (n.currentTranslate = n.startTranslate),
            i.allowSlidePrev ||
              i.allowSlideNext ||
              (n.currentTranslate = n.startTranslate),
            r.threshold > 0)
          ) {
            if (!(Math.abs(v) > r.threshold || n.allowThresholdMove))
              return void (n.currentTranslate = n.startTranslate);
            if (!n.allowThresholdMove)
              return (
                (n.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (n.currentTranslate = n.startTranslate),
                void (a.diff = i.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY)
              );
          }
          r.followFinger &&
            !r.cssMode &&
            (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
              r.watchSlidesProgress) &&
              (i.updateActiveIndex(), i.updateSlidesClasses()),
            i.params.freeMode &&
              r.freeMode.enabled &&
              i.freeMode &&
              i.freeMode.onTouchMove(),
            i.updateProgress(n.currentTranslate),
            i.setTranslate(n.currentTranslate));
        }
        function I(e) {
          const t = this,
            i = t.touchEventsData,
            {
              params: s,
              touches: n,
              rtlTranslate: r,
              slidesGrid: a,
              enabled: o,
            } = t;
          if (!o) return;
          let l = e;
          if (
            (l.originalEvent && (l = l.originalEvent),
            i.allowTouchCallbacks && t.emit("touchEnd", l),
            (i.allowTouchCallbacks = !1),
            !i.isTouched)
          )
            return (
              i.isMoved && s.grabCursor && t.setGrabCursor(!1),
              (i.isMoved = !1),
              void (i.startMoving = !1)
            );
          s.grabCursor &&
            i.isMoved &&
            i.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          const c = h(),
            d = c - i.touchStartTime;
          if (t.allowClick) {
            const e = l.path || (l.composedPath && l.composedPath());
            t.updateClickedSlide((e && e[0]) || l.target),
              t.emit("tap click", l),
              d < 300 &&
                c - i.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", l);
          }
          if (
            ((i.lastClickTime = h()),
            p(() => {
              t.destroyed || (t.allowClick = !0);
            }),
            !i.isTouched ||
              !i.isMoved ||
              !t.swipeDirection ||
              0 === n.diff ||
              i.currentTranslate === i.startTranslate)
          )
            return (
              (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
            );
          let u;
          if (
            ((i.isTouched = !1),
            (i.isMoved = !1),
            (i.startMoving = !1),
            (u = s.followFinger
              ? r
                ? t.translate
                : -t.translate
              : -i.currentTranslate),
            s.cssMode)
          )
            return;
          if (t.params.freeMode && s.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
              currentPos: u,
            });
          let f = 0,
            m = t.slidesSizesGrid[0];
          for (
            let e = 0;
            e < a.length;
            e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
          ) {
            const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            void 0 !== a[e + t]
              ? u >= a[e] && u < a[e + t] && ((f = e), (m = a[e + t] - a[e]))
              : u >= a[e] && ((f = e), (m = a[a.length - 1] - a[a.length - 2]));
          }
          let g = null,
            v = null;
          s.rewind &&
            (t.isBeginning
              ? (v =
                  t.params.virtual && t.params.virtual.enabled && t.virtual
                    ? t.virtual.slides.length - 1
                    : t.slides.length - 1)
              : t.isEnd && (g = 0));
          const y = (u - a[f]) / m,
            b = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          if (d > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (y >= s.longSwipesRatio
                ? t.slideTo(s.rewind && t.isEnd ? g : f + b)
                : t.slideTo(f)),
              "prev" === t.swipeDirection &&
                (y > 1 - s.longSwipesRatio
                  ? t.slideTo(f + b)
                  : null !== v && y < 0 && Math.abs(y) > s.longSwipesRatio
                  ? t.slideTo(v)
                  : t.slideTo(f));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation ||
            (l.target !== t.navigation.nextEl &&
              l.target !== t.navigation.prevEl)
              ? ("next" === t.swipeDirection &&
                  t.slideTo(null !== g ? g : f + b),
                "prev" === t.swipeDirection && t.slideTo(null !== v ? v : f))
              : l.target === t.navigation.nextEl
              ? t.slideTo(f + b)
              : t.slideTo(f);
          }
        }
        function $() {
          const e = this,
            { params: t, el: i } = e;
          if (i && 0 === i.offsetWidth) return;
          t.breakpoints && e.setBreakpoint();
          const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = s),
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
        function D(e) {
          const t = this;
          t.enabled &&
            (t.allowClick ||
              (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function Y() {
          const e = this,
            { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
          if (!s) return;
          let n;
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          const r = e.maxTranslate() - e.minTranslate();
          (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
            n !== e.progress &&
              e.updateProgress(i ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
        let R = !1;
        function B() {}
        const _ = (e, t) => {
          const i = s(),
            {
              params: n,
              touchEvents: r,
              el: a,
              wrapperEl: o,
              device: l,
              support: c,
            } = e,
            d = !!n.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            h = t;
          if (c.touch) {
            const t = !(
              "touchstart" !== r.start ||
              !c.passiveListener ||
              !n.passiveListeners
            ) && {
              passive: !0,
              capture: !1,
            };
            a[p](r.start, e.onTouchStart, t),
              a[p](
                r.move,
                e.onTouchMove,
                c.passiveListener
                  ? {
                      passive: !1,
                      capture: d,
                    }
                  : d
              ),
              a[p](r.end, e.onTouchEnd, t),
              r.cancel && a[p](r.cancel, e.onTouchEnd, t);
          } else
            a[p](r.start, e.onTouchStart, !1),
              i[p](r.move, e.onTouchMove, d),
              i[p](r.end, e.onTouchEnd, !1);
          (n.preventClicks || n.preventClicksPropagation) &&
            a[p]("click", e.onClick, !0),
            n.cssMode && o[p]("scroll", e.onScroll),
            n.updateOnWindowResize
              ? e[h](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  $,
                  !0
                )
              : e[h]("observerUpdate", $, !0);
        };
        var X = {
          attachEvents: function () {
            const e = this,
              t = s(),
              { params: i, support: n } = e;
            (e.onTouchStart = A.bind(e)),
              (e.onTouchMove = z.bind(e)),
              (e.onTouchEnd = I.bind(e)),
              i.cssMode && (e.onScroll = Y.bind(e)),
              (e.onClick = D.bind(e)),
              n.touch && !R && (t.addEventListener("touchstart", B), (R = !0)),
              _(e, "on");
          },
          detachEvents: function () {
            _(this, "off");
          },
        };
        const H = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var N = {
            addClasses: function () {
              const e = this,
                {
                  classNames: t,
                  params: i,
                  rtl: s,
                  $el: n,
                  device: r,
                  support: a,
                } = e,
                o = (function (e, t) {
                  const i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    i.direction,
                    {
                      "pointer-events": !a.touch,
                    },
                    {
                      "free-mode": e.params.freeMode && i.freeMode.enabled,
                    },
                    {
                      autoheight: i.autoHeight,
                    },
                    {
                      rtl: s,
                    },
                    {
                      grid: i.grid && i.grid.rows > 1,
                    },
                    {
                      "grid-column":
                        i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                    },
                    {
                      android: r.android,
                    },
                    {
                      ios: r.ios,
                    },
                    {
                      "css-mode": i.cssMode,
                    },
                    {
                      centered: i.cssMode && i.centeredSlides,
                    },
                    {
                      "watch-progress": i.watchSlidesProgress,
                    },
                  ],
                  i.containerModifierClass
                );
              t.push(...o),
                n.addClass([...t].join(" ")),
                e.emitContainerClasses();
            },
            removeClasses: function () {
              const { $el: e, classNames: t } = this;
              e.removeClass(t.join(" ")), this.emitContainerClasses();
            },
          },
          W = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements:
              "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
          };
        function j(e, t) {
          return function (i) {
            void 0 === i && (i = {});
            const s = Object.keys(i)[0],
              n = i[s];
            "object" == typeof n && null !== n
              ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                  !0 === e[s] &&
                  (e[s] = {
                    auto: !0,
                  }),
                s in e && "enabled" in n
                  ? (!0 === e[s] &&
                      (e[s] = {
                        enabled: !0,
                      }),
                    "object" != typeof e[s] ||
                      "enabled" in e[s] ||
                      (e[s].enabled = !0),
                    e[s] ||
                      (e[s] = {
                        enabled: !1,
                      }),
                    g(t, i))
                  : g(t, i))
              : g(t, i);
          };
        }
        const q = {
            eventsEmitter: C,
            update: P,
            translate: M,
            transition: {
              setTransition: function (e, t) {
                const i = this;
                i.params.cssMode || i.$wrapperEl.transition(e),
                  i.emit("setTransition", e, t);
              },
              transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const i = this,
                  { params: s } = i;
                s.cssMode ||
                  (s.autoHeight && i.updateAutoHeight(),
                  k({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "Start",
                  }));
              },
              transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const i = this,
                  { params: s } = i;
                (i.animating = !1),
                  s.cssMode ||
                    (i.setTransition(0),
                    k({
                      swiper: i,
                      runCallbacks: e,
                      direction: t,
                      step: "End",
                    }));
              },
            },
            slide: O,
            loop: L,
            grabCursor: {
              setGrabCursor: function (e) {
                const t = this;
                if (
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
                  return;
                const i =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (i.style.cursor = "move"),
                  (i.style.cursor = e ? "grabbing" : "grab");
              },
              unsetGrabCursor: function () {
                const e = this;
                e.support.touch ||
                  (e.params.watchOverflow && e.isLocked) ||
                  e.params.cssMode ||
                  (e[
                    "container" === e.params.touchEventsTarget
                      ? "el"
                      : "wrapperEl"
                  ].style.cursor = "");
              },
            },
            events: X,
            breakpoints: {
              setBreakpoint: function () {
                const e = this,
                  {
                    activeIndex: t,
                    initialized: i,
                    loopedSlides: s = 0,
                    params: n,
                    $el: r,
                  } = e,
                  a = n.breakpoints;
                if (!a || (a && 0 === Object.keys(a).length)) return;
                const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                if (!o || e.currentBreakpoint === o) return;
                const l = (o in a ? a[o] : void 0) || e.originalParams,
                  c = H(e, n),
                  d = H(e, l),
                  p = n.enabled;
                c && !d
                  ? (r.removeClass(
                      ""
                        .concat(n.containerModifierClass, "grid ")
                        .concat(n.containerModifierClass, "grid-column")
                    ),
                    e.emitContainerClasses())
                  : !c &&
                    d &&
                    (r.addClass("".concat(n.containerModifierClass, "grid")),
                    ((l.grid.fill && "column" === l.grid.fill) ||
                      (!l.grid.fill && "column" === n.grid.fill)) &&
                      r.addClass(
                        "".concat(n.containerModifierClass, "grid-column")
                      ),
                    e.emitContainerClasses()),
                  ["navigation", "pagination", "scrollbar"].forEach((t) => {
                    const i = n[t] && n[t].enabled,
                      s = l[t] && l[t].enabled;
                    i && !s && e[t].disable(), !i && s && e[t].enable();
                  });
                const h = l.direction && l.direction !== n.direction,
                  u = n.loop && (l.slidesPerView !== n.slidesPerView || h);
                h && i && e.changeDirection(), g(e.params, l);
                const f = e.params.enabled;
                Object.assign(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                  p && !f ? e.disable() : !p && f && e.enable(),
                  (e.currentBreakpoint = o),
                  e.emit("_beforeBreakpoint", l),
                  u &&
                    i &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - s + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", l);
              },
              getBreakpoint: function (e, t, i) {
                if (
                  (void 0 === t && (t = "window"),
                  !e || ("container" === t && !i))
                )
                  return;
                let s = !1;
                const n = r(),
                  a = "window" === t ? n.innerHeight : i.clientHeight,
                  o = Object.keys(e).map((e) => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                      const t = parseFloat(e.substr(1));
                      return {
                        value: a * t,
                        point: e,
                      };
                    }
                    return {
                      value: e,
                      point: e,
                    };
                  });
                o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < o.length; e += 1) {
                  const { point: r, value: a } = o[e];
                  "window" === t
                    ? n.matchMedia("(min-width: ".concat(a, "px)")).matches &&
                      (s = r)
                    : a <= i.clientWidth && (s = r);
                }
                return s || "max";
              },
            },
            checkOverflow: {
              checkOverflow: function () {
                const e = this,
                  { isLocked: t, params: i } = e,
                  { slidesOffsetBefore: s } = i;
                if (s) {
                  const t = e.slides.length - 1,
                    i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                  e.isLocked = e.size > i;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                  !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                  t && t !== e.isLocked && (e.isEnd = !1),
                  t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
              },
            },
            classes: N,
            images: {
              loadImage: function (e, t, i, s, n, a) {
                const o = r();
                let l;
                function d() {
                  a && a();
                }
                c(e).parent("picture")[0] || (e.complete && n)
                  ? d()
                  : t
                  ? ((l = new o.Image()),
                    (l.onload = d),
                    (l.onerror = d),
                    s && (l.sizes = s),
                    i && (l.srcset = i),
                    t && (l.src = t))
                  : d();
              },
              preloadImages: function () {
                const e = this;
                function t() {
                  null != e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                  const s = e.imagesToLoad[i];
                  e.loadImage(
                    s,
                    s.currentSrc || s.getAttribute("src"),
                    s.srcset || s.getAttribute("srcset"),
                    s.sizes || s.getAttribute("sizes"),
                    !0,
                    t
                  );
                }
              },
            },
          },
          G = {};
        class V {
          constructor() {
            let e, t;
            for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
              s[n] = arguments[n];
            if (
              (1 === s.length &&
              s[0].constructor &&
              "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
                ? (t = s[0])
                : ([e, t] = s),
              t || (t = {}),
              (t = g({}, t)),
              e && !t.el && (t.el = e),
              t.el && c(t.el).length > 1)
            ) {
              const e = [];
              return (
                c(t.el).each((i) => {
                  const s = g({}, t, {
                    el: i,
                  });
                  e.push(new V(s));
                }),
                e
              );
            }
            const r = this;
            (r.__swiper__ = !0),
              (r.support = S()),
              (r.device = T({
                userAgent: t.userAgent,
              })),
              (r.browser = E()),
              (r.eventsListeners = {}),
              (r.eventsAnyListeners = []),
              (r.modules = [...r.__modules__]),
              t.modules &&
                Array.isArray(t.modules) &&
                r.modules.push(...t.modules);
            const a = {};
            r.modules.forEach((e) => {
              e({
                swiper: r,
                extendParams: j(t, a),
                on: r.on.bind(r),
                once: r.once.bind(r),
                off: r.off.bind(r),
                emit: r.emit.bind(r),
              });
            });
            const o = g({}, W, a);
            return (
              (r.params = g({}, o, G, t)),
              (r.originalParams = g({}, r.params)),
              (r.passedParams = g({}, t)),
              r.params &&
                r.params.on &&
                Object.keys(r.params.on).forEach((e) => {
                  r.on(e, r.params.on[e]);
                }),
              r.params && r.params.onAny && r.onAny(r.params.onAny),
              (r.$ = c),
              Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: c(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: (function () {
                  const e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (r.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (r.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    r.support.touch || !r.params.simulateTouch
                      ? r.touchEventsTouch
                      : r.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: r.params.focusableElements,
                  lastClickTime: h(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              r.emit("_swiper"),
              r.params.init && r.init(),
              r
            );
          }
          enable() {
            const e = this;
            e.enabled ||
              ((e.enabled = !0),
              e.params.grabCursor && e.setGrabCursor(),
              e.emit("enable"));
          }
          disable() {
            const e = this;
            e.enabled &&
              ((e.enabled = !1),
              e.params.grabCursor && e.unsetGrabCursor(),
              e.emit("disable"));
          }
          setProgress(e, t) {
            const i = this;
            e = Math.min(Math.max(e, 0), 1);
            const s = i.minTranslate(),
              n = (i.maxTranslate() - s) * e + s;
            i.translateTo(n, void 0 === t ? 0 : t),
              i.updateActiveIndex(),
              i.updateSlidesClasses();
          }
          emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className
              .split(" ")
              .filter(
                (t) =>
                  0 === t.indexOf("swiper") ||
                  0 === t.indexOf(e.params.containerModifierClass)
              );
            e.emit("_containerClasses", t.join(" "));
          }
          getSlideClasses(e) {
            const t = this;
            return t.destroyed
              ? ""
              : e.className
                  .split(" ")
                  .filter(
                    (e) =>
                      0 === e.indexOf("swiper-slide") ||
                      0 === e.indexOf(t.params.slideClass)
                  )
                  .join(" ");
          }
          emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((i) => {
              const s = e.getSlideClasses(i);
              t.push({
                slideEl: i,
                classNames: s,
              }),
                e.emit("_slideClass", i, s);
            }),
              e.emit("_slideClasses", t);
          }
          slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
              params: i,
              slides: s,
              slidesGrid: n,
              slidesSizesGrid: r,
              size: a,
              activeIndex: o,
            } = this;
            let l = 1;
            if (i.centeredSlides) {
              let e,
                t = s[o].swiperSlideSize;
              for (let i = o + 1; i < s.length; i += 1)
                s[i] &&
                  !e &&
                  ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
              for (let i = o - 1; i >= 0; i -= 1)
                s[i] &&
                  !e &&
                  ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
            } else if ("current" === e)
              for (let e = o + 1; e < s.length; e += 1)
                (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
            else
              for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
            return l;
          }
          update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: i } = e;
            function s() {
              const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let n;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode && e.params.freeMode.enabled
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : ((n =
                    ("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)),
                  n || s()),
              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          changeDirection(e, t) {
            void 0 === t && (t = !0);
            const i = this,
              s = i.params.direction;
            return (
              e || (e = "horizontal" === s ? "vertical" : "horizontal"),
              e === s ||
                ("horizontal" !== e && "vertical" !== e) ||
                (i.$el
                  .removeClass(
                    "".concat(i.params.containerModifierClass).concat(s)
                  )
                  .addClass(
                    "".concat(i.params.containerModifierClass).concat(e)
                  ),
                i.emitContainerClasses(),
                (i.params.direction = e),
                i.slides.each((t) => {
                  "vertical" === e
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                i.emit("changeDirection"),
                t && i.update()),
              i
            );
          }
          changeLanguageDirection(e) {
            const t = this;
            (t.rtl && "rtl" === e) ||
              (!t.rtl && "ltr" === e) ||
              ((t.rtl = "rtl" === e),
              (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
              t.rtl
                ? (t.$el.addClass(
                    "".concat(t.params.containerModifierClass, "rtl")
                  ),
                  (t.el.dir = "rtl"))
                : (t.$el.removeClass(
                    "".concat(t.params.containerModifierClass, "rtl")
                  ),
                  (t.el.dir = "ltr")),
              t.update());
          }
          mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const i = c(e || t.params.el);
            if (!(e = i[0])) return !1;
            e.swiper = t;
            const n = () =>
              ".".concat(
                (t.params.wrapperClass || "").trim().split(" ").join(".")
              );
            let r = (() => {
              if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                const t = c(e.shadowRoot.querySelector(n()));
                return (t.children = (e) => i.children(e)), t;
              }
              return i.children ? i.children(n()) : c(i).children(n());
            })();
            if (0 === r.length && t.params.createElements) {
              const e = s().createElement("div");
              (r = c(e)),
                (e.className = t.params.wrapperClass),
                i.append(e),
                i.children(".".concat(t.params.slideClass)).each((e) => {
                  r.append(e);
                });
            }
            return (
              Object.assign(t, {
                $el: i,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate:
                  "horizontal" === t.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display"),
              }),
              !0
            );
          }
          init(e) {
            const t = this;
            return (
              t.initialized ||
                !1 === t.mount(e) ||
                (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.params.loop && t.loopCreate(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.preloadImages && t.preloadImages(),
                t.params.loop
                  ? t.slideTo(
                      t.params.initialSlide + t.loopedSlides,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    )
                  : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    ),
                t.attachEvents(),
                (t.initialized = !0),
                t.emit("init"),
                t.emit("afterInit")),
              t
            );
          }
          destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const i = this,
              { params: s, $el: n, $wrapperEl: r, slides: a } = i;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t &&
                  (i.removeClasses(),
                  n.removeAttr("style"),
                  r.removeAttr("style"),
                  a &&
                    a.length &&
                    a
                      .removeClass(
                        [
                          s.slideVisibleClass,
                          s.slideActiveClass,
                          s.slideNextClass,
                          s.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach((e) => {
                  i.off(e);
                }),
                !1 !== e &&
                  ((i.$el[0].swiper = null),
                  (function (e) {
                    const t = e;
                    Object.keys(t).forEach((e) => {
                      try {
                        t[e] = null;
                      } catch (e) {}
                      try {
                        delete t[e];
                      } catch (e) {}
                    });
                  })(i)),
                (i.destroyed = !0)),
              null
            );
          }
          static extendDefaults(e) {
            g(G, e);
          }
          static get extendedDefaults() {
            return G;
          }
          static get defaults() {
            return W;
          }
          static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
          }
          static use(e) {
            return Array.isArray(e)
              ? (e.forEach((e) => V.installModule(e)), V)
              : (V.installModule(e), V);
          }
        }
        function F(e, t, i, n) {
          const r = s();
          return (
            e.params.createElements &&
              Object.keys(n).forEach((s) => {
                if (!i[s] && !0 === i.auto) {
                  let a = e.$el.children(".".concat(n[s]))[0];
                  a ||
                    ((a = r.createElement("div")),
                    (a.className = n[s]),
                    e.$el.append(a)),
                    (i[s] = a),
                    (t[s] = a);
                }
              }),
            i
          );
        }
        function U(e) {
          return (
            void 0 === e && (e = ""),
            ".".concat(
              e
                .trim()
                .replace(/([\.:!\/])/g, "\\$1")
                .replace(/ /g, ".")
            )
          );
        }
        function K(e) {
          const t = this,
            { $wrapperEl: i, params: s } = t;
          if (
            (s.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
          else i.append(e);
          s.loop && t.loopCreate(), s.observer || t.update();
        }
        function Z(e) {
          const t = this,
            { params: i, $wrapperEl: s, activeIndex: n } = t;
          i.loop && t.loopDestroy();
          let r = n + 1;
          if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
            r = n + e.length;
          } else s.prepend(e);
          i.loop && t.loopCreate(),
            i.observer || t.update(),
            t.slideTo(r, 0, !1);
        }
        function Q(e, t) {
          const i = this,
            { $wrapperEl: s, params: n, activeIndex: r } = i;
          let a = r;
          n.loop &&
            ((a -= i.loopedSlides),
            i.loopDestroy(),
            (i.slides = s.children(".".concat(n.slideClass))));
          const o = i.slides.length;
          if (e <= 0) return void i.prependSlide(t);
          if (e >= o) return void i.appendSlide(t);
          let l = a > e ? a + 1 : a;
          const c = [];
          for (let t = o - 1; t >= e; t -= 1) {
            const e = i.slides.eq(t);
            e.remove(), c.unshift(e);
          }
          if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
            l = a > e ? a + t.length : a;
          } else s.append(t);
          for (let e = 0; e < c.length; e += 1) s.append(c[e]);
          n.loop && i.loopCreate(),
            n.observer || i.update(),
            n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
        }
        function J(e) {
          const t = this,
            { params: i, $wrapperEl: s, activeIndex: n } = t;
          let r = n;
          i.loop &&
            ((r -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = s.children(".".concat(i.slideClass))));
          let a,
            o = r;
          if ("object" == typeof e && "length" in e) {
            for (let i = 0; i < e.length; i += 1)
              (a = e[i]),
                t.slides[a] && t.slides.eq(a).remove(),
                a < o && (o -= 1);
            o = Math.max(o, 0);
          } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
          i.loop && t.loopCreate(),
            i.observer || t.update(),
            i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
        }
        function ee() {
          const e = this,
            t = [];
          for (let i = 0; i < e.slides.length; i += 1) t.push(i);
          e.removeSlide(t);
        }
        function te(e) {
          const {
            effect: t,
            swiper: i,
            on: s,
            setTranslate: n,
            setTransition: r,
            overwriteParams: a,
            perspective: o,
            recreateShadows: l,
            getEffectParams: c,
          } = e;
          let d;
          s("beforeInit", () => {
            if (i.params.effect !== t) return;
            i.classNames.push(
              "".concat(i.params.containerModifierClass).concat(t)
            ),
              o &&
                o() &&
                i.classNames.push(
                  "".concat(i.params.containerModifierClass, "3d")
                );
            const e = a ? a() : {};
            Object.assign(i.params, e), Object.assign(i.originalParams, e);
          }),
            s("setTranslate", () => {
              i.params.effect === t && n();
            }),
            s("setTransition", (e, s) => {
              i.params.effect === t && r(s);
            }),
            s("transitionEnd", () => {
              if (i.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                i.slides.each((e) => {
                  i.$(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .remove();
                }),
                  l();
              }
            }),
            s("virtualUpdate", () => {
              i.params.effect === t &&
                (i.slides.length || (d = !0),
                requestAnimationFrame(() => {
                  d && i.slides && i.slides.length && (n(), (d = !1));
                }));
            });
        }
        function ie(e, t) {
          return e.transformEl
            ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
            : t;
        }
        function se(e) {
          let { swiper: t, duration: i, transformEl: s, allSlides: n } = e;
          const { slides: r, activeIndex: a, $wrapperEl: o } = t;
          if (t.params.virtualTranslate && 0 !== i) {
            let e,
              i = !1;
            (e = n ? (s ? r.find(s) : r) : s ? r.eq(a).find(s) : r.eq(a)),
              e.transitionEnd(() => {
                if (i) return;
                if (!t || t.destroyed) return;
                (i = !0), (t.animating = !1);
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) o.trigger(e[t]);
              });
          }
        }
        function ne(e, t, i) {
          const s = "swiper-slide-shadow" + (i ? "-".concat(i) : ""),
            n = e.transformEl ? t.find(e.transformEl) : t;
          let r = n.children(".".concat(s));
          return (
            r.length ||
              ((r = c(
                '<div class="swiper-slide-shadow'.concat(
                  i ? "-".concat(i) : "",
                  '"></div>'
                )
              )),
              n.append(r)),
            r
          );
        }
        Object.keys(q).forEach((e) => {
          Object.keys(q[e]).forEach((t) => {
            V.prototype[t] = q[e][t];
          });
        }),
          V.use([
            function (e) {
              let { swiper: t, on: i, emit: s } = e;
              const n = r();
              let a = null,
                o = null;
              const l = () => {
                  t &&
                    !t.destroyed &&
                    t.initialized &&
                    (s("beforeResize"), s("resize"));
                },
                c = () => {
                  t && !t.destroyed && t.initialized && s("orientationchange");
                };
              i("init", () => {
                t.params.resizeObserver && void 0 !== n.ResizeObserver
                  ? t &&
                    !t.destroyed &&
                    t.initialized &&
                    ((a = new ResizeObserver((e) => {
                      o = n.requestAnimationFrame(() => {
                        const { width: i, height: s } = t;
                        let n = i,
                          r = s;
                        e.forEach((e) => {
                          let {
                            contentBoxSize: i,
                            contentRect: s,
                            target: a,
                          } = e;
                          (a && a !== t.el) ||
                            ((n = s ? s.width : (i[0] || i).inlineSize),
                            (r = s ? s.height : (i[0] || i).blockSize));
                        }),
                          (n === i && r === s) || l();
                      });
                    })),
                    a.observe(t.el))
                  : (n.addEventListener("resize", l),
                    n.addEventListener("orientationchange", c));
              }),
                i("destroy", () => {
                  o && n.cancelAnimationFrame(o),
                    a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                    n.removeEventListener("resize", l),
                    n.removeEventListener("orientationchange", c);
                });
            },
            function (e) {
              let { swiper: t, extendParams: i, on: s, emit: n } = e;
              const a = [],
                o = r(),
                l = function (e, t) {
                  void 0 === t && (t = {});
                  const i = new (o.MutationObserver ||
                    o.WebkitMutationObserver)((e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  });
                  i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData:
                      void 0 === t.characterData || t.characterData,
                  }),
                    a.push(i);
                };
              i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1,
              }),
                s("init", () => {
                  if (t.params.observer) {
                    if (t.params.observeParents) {
                      const e = t.$el.parents();
                      for (let t = 0; t < e.length; t += 1) l(e[t]);
                    }
                    l(t.$el[0], {
                      childList: t.params.observeSlideChildren,
                    }),
                      l(t.$wrapperEl[0], {
                        attributes: !1,
                      });
                  }
                }),
                s("destroy", () => {
                  a.forEach((e) => {
                    e.disconnect();
                  }),
                    a.splice(0, a.length);
                });
            },
          ]);
        const re = [
          function (e) {
            let t,
              { swiper: i, extendParams: s, on: n, emit: r } = e;
            function a(e, t) {
              const s = i.params.virtual;
              if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
              const n = s.renderSlide
                ? c(s.renderSlide.call(i, e, t))
                : c(
                    '<div class="'
                      .concat(
                        i.params.slideClass,
                        '" data-swiper-slide-index="'
                      )
                      .concat(t, '">')
                      .concat(e, "</div>")
                  );
              return (
                n.attr("data-swiper-slide-index") ||
                  n.attr("data-swiper-slide-index", t),
                s.cache && (i.virtual.cache[t] = n),
                n
              );
            }
            function o(e) {
              const {
                  slidesPerView: t,
                  slidesPerGroup: s,
                  centeredSlides: n,
                } = i.params,
                { addSlidesBefore: o, addSlidesAfter: l } = i.params.virtual,
                {
                  from: c,
                  to: d,
                  slides: p,
                  slidesGrid: h,
                  offset: u,
                } = i.virtual;
              i.params.cssMode || i.updateActiveIndex();
              const f = i.activeIndex || 0;
              let m, g, v;
              (m = i.rtlTranslate
                ? "right"
                : i.isHorizontal()
                ? "left"
                : "top"),
                n
                  ? ((g = Math.floor(t / 2) + s + l),
                    (v = Math.floor(t / 2) + s + o))
                  : ((g = t + (s - 1) + l), (v = s + o));
              const y = Math.max((f || 0) - v, 0),
                b = Math.min((f || 0) + g, p.length - 1),
                w = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);
              function x() {
                i.updateSlides(),
                  i.updateProgress(),
                  i.updateSlidesClasses(),
                  i.lazy && i.params.lazy.enabled && i.lazy.load(),
                  r("virtualUpdate");
              }
              if (
                (Object.assign(i.virtual, {
                  from: y,
                  to: b,
                  offset: w,
                  slidesGrid: i.slidesGrid,
                }),
                c === y && d === b && !e)
              )
                return (
                  i.slidesGrid !== h &&
                    w !== u &&
                    i.slides.css(m, "".concat(w, "px")),
                  i.updateProgress(),
                  void r("virtualUpdate")
                );
              if (i.params.virtual.renderExternal)
                return (
                  i.params.virtual.renderExternal.call(i, {
                    offset: w,
                    from: y,
                    to: b,
                    slides: (function () {
                      const e = [];
                      for (let t = y; t <= b; t += 1) e.push(p[t]);
                      return e;
                    })(),
                  }),
                  void (i.params.virtual.renderExternalUpdate
                    ? x()
                    : r("virtualUpdate"))
                );
              const S = [],
                T = [];
              if (e)
                i.$wrapperEl.find(".".concat(i.params.slideClass)).remove();
              else
                for (let e = c; e <= d; e += 1)
                  (e < y || e > b) &&
                    i.$wrapperEl
                      .find(
                        "."
                          .concat(
                            i.params.slideClass,
                            '[data-swiper-slide-index="'
                          )
                          .concat(e, '"]')
                      )
                      .remove();
              for (let t = 0; t < p.length; t += 1)
                t >= y &&
                  t <= b &&
                  (void 0 === d || e
                    ? T.push(t)
                    : (t > d && T.push(t), t < c && S.push(t)));
              T.forEach((e) => {
                i.$wrapperEl.append(a(p[e], e));
              }),
                S.sort((e, t) => t - e).forEach((e) => {
                  i.$wrapperEl.prepend(a(p[e], e));
                }),
                i.$wrapperEl
                  .children(".swiper-slide")
                  .css(m, "".concat(w, "px")),
                x();
            }
            s({
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
              },
            }),
              (i.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: [],
              }),
              n("beforeInit", () => {
                i.params.virtual.enabled &&
                  ((i.virtual.slides = i.params.virtual.slides),
                  i.classNames.push(
                    "".concat(i.params.containerModifierClass, "virtual")
                  ),
                  (i.params.watchSlidesProgress = !0),
                  (i.originalParams.watchSlidesProgress = !0),
                  i.params.initialSlide || o());
              }),
              n("setTranslate", () => {
                i.params.virtual.enabled &&
                  (i.params.cssMode && !i._immediateVirtual
                    ? (clearTimeout(t),
                      (t = setTimeout(() => {
                        o();
                      }, 100)))
                    : o());
              }),
              n("init update resize", () => {
                i.params.virtual.enabled &&
                  i.params.cssMode &&
                  v(
                    i.wrapperEl,
                    "--swiper-virtual-size",
                    "".concat(i.virtualSize, "px")
                  );
              }),
              Object.assign(i.virtual, {
                appendSlide: function (e) {
                  if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1)
                      e[t] && i.virtual.slides.push(e[t]);
                  else i.virtual.slides.push(e);
                  o(!0);
                },
                prependSlide: function (e) {
                  const t = i.activeIndex;
                  let s = t + 1,
                    n = 1;
                  if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1)
                      e[t] && i.virtual.slides.unshift(e[t]);
                    (s = t + e.length), (n = e.length);
                  } else i.virtual.slides.unshift(e);
                  if (i.params.virtual.cache) {
                    const e = i.virtual.cache,
                      t = {};
                    Object.keys(e).forEach((i) => {
                      const s = e[i],
                        r = s.attr("data-swiper-slide-index");
                      r &&
                        s.attr("data-swiper-slide-index", parseInt(r, 10) + n),
                        (t[parseInt(i, 10) + n] = s);
                    }),
                      (i.virtual.cache = t);
                  }
                  o(!0), i.slideTo(s, 0);
                },
                removeSlide: function (e) {
                  if (null == e) return;
                  let t = i.activeIndex;
                  if (Array.isArray(e))
                    for (let s = e.length - 1; s >= 0; s -= 1)
                      i.virtual.slides.splice(e[s], 1),
                        i.params.virtual.cache && delete i.virtual.cache[e[s]],
                        e[s] < t && (t -= 1),
                        (t = Math.max(t, 0));
                  else
                    i.virtual.slides.splice(e, 1),
                      i.params.virtual.cache && delete i.virtual.cache[e],
                      e < t && (t -= 1),
                      (t = Math.max(t, 0));
                  o(!0), i.slideTo(t, 0);
                },
                removeAllSlides: function () {
                  (i.virtual.slides = []),
                    i.params.virtual.cache && (i.virtual.cache = {}),
                    o(!0),
                    i.slideTo(0, 0);
                },
                update: o,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: n, emit: a } = e;
            const o = s(),
              l = r();
            function d(e) {
              if (!t.enabled) return;
              const { rtlTranslate: i } = t;
              let s = e;
              s.originalEvent && (s = s.originalEvent);
              const n = s.keyCode || s.charCode,
                r = t.params.keyboard.pageUpDown,
                c = r && 33 === n,
                d = r && 34 === n,
                p = 37 === n,
                h = 39 === n,
                u = 38 === n,
                f = 40 === n;
              if (
                !t.allowSlideNext &&
                ((t.isHorizontal() && h) || (t.isVertical() && f) || d)
              )
                return !1;
              if (
                !t.allowSlidePrev &&
                ((t.isHorizontal() && p) || (t.isVertical() && u) || c)
              )
                return !1;
              if (
                !(
                  s.shiftKey ||
                  s.altKey ||
                  s.ctrlKey ||
                  s.metaKey ||
                  (o.activeElement &&
                    o.activeElement.nodeName &&
                    ("input" === o.activeElement.nodeName.toLowerCase() ||
                      "textarea" === o.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  t.params.keyboard.onlyInViewport &&
                  (c || d || p || h || u || f)
                ) {
                  let e = !1;
                  if (
                    t.$el.parents(".".concat(t.params.slideClass)).length > 0 &&
                    0 ===
                      t.$el.parents(".".concat(t.params.slideActiveClass))
                        .length
                  )
                    return;
                  const s = t.$el,
                    n = s[0].clientWidth,
                    r = s[0].clientHeight,
                    a = l.innerWidth,
                    o = l.innerHeight,
                    c = t.$el.offset();
                  i && (c.left -= t.$el[0].scrollLeft);
                  const d = [
                    [c.left, c.top],
                    [c.left + n, c.top],
                    [c.left, c.top + r],
                    [c.left + n, c.top + r],
                  ];
                  for (let t = 0; t < d.length; t += 1) {
                    const i = d[t];
                    if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= o) {
                      if (0 === i[0] && 0 === i[1]) continue;
                      e = !0;
                    }
                  }
                  if (!e) return;
                }
                t.isHorizontal()
                  ? ((c || d || p || h) &&
                      (s.preventDefault
                        ? s.preventDefault()
                        : (s.returnValue = !1)),
                    (((d || h) && !i) || ((c || p) && i)) && t.slideNext(),
                    (((c || p) && !i) || ((d || h) && i)) && t.slidePrev())
                  : ((c || d || u || f) &&
                      (s.preventDefault
                        ? s.preventDefault()
                        : (s.returnValue = !1)),
                    (d || f) && t.slideNext(),
                    (c || u) && t.slidePrev()),
                  a("keyPress", n);
              }
            }
            function p() {
              t.keyboard.enabled ||
                (c(o).on("keydown", d), (t.keyboard.enabled = !0));
            }
            function h() {
              t.keyboard.enabled &&
                (c(o).off("keydown", d), (t.keyboard.enabled = !1));
            }
            (t.keyboard = {
              enabled: !1,
            }),
              i({
                keyboard: {
                  enabled: !1,
                  onlyInViewport: !0,
                  pageUpDown: !0,
                },
              }),
              n("init", () => {
                t.params.keyboard.enabled && p();
              }),
              n("destroy", () => {
                t.keyboard.enabled && h();
              }),
              Object.assign(t.keyboard, {
                enable: p,
                disable: h,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: n } = e;
            const a = r();
            let o;
            i({
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
              },
            }),
              (t.mousewheel = {
                enabled: !1,
              });
            let l,
              d = h();
            const u = [];
            function f() {
              t.enabled && (t.mouseEntered = !0);
            }
            function m() {
              t.enabled && (t.mouseEntered = !1);
            }
            function g(e) {
              return !(
                (t.params.mousewheel.thresholdDelta &&
                  e.delta < t.params.mousewheel.thresholdDelta) ||
                (t.params.mousewheel.thresholdTime &&
                  h() - d < t.params.mousewheel.thresholdTime) ||
                (!(e.delta >= 6 && h() - d < 60) &&
                  (e.direction < 0
                    ? (t.isEnd && !t.params.loop) ||
                      t.animating ||
                      (t.slideNext(), n("scroll", e.raw))
                    : (t.isBeginning && !t.params.loop) ||
                      t.animating ||
                      (t.slidePrev(), n("scroll", e.raw)),
                  (d = new a.Date().getTime()),
                  1))
              );
            }
            function v(e) {
              let i = e,
                s = !0;
              if (!t.enabled) return;
              const r = t.params.mousewheel;
              t.params.cssMode && i.preventDefault();
              let a = t.$el;
              if (
                ("container" !== t.params.mousewheel.eventsTarget &&
                  (a = c(t.params.mousewheel.eventsTarget)),
                !t.mouseEntered &&
                  !a[0].contains(i.target) &&
                  !r.releaseOnEdges)
              )
                return !0;
              i.originalEvent && (i = i.originalEvent);
              let d = 0;
              const f = t.rtlTranslate ? -1 : 1,
                m = (function (e) {
                  let t = 0,
                    i = 0,
                    s = 0,
                    n = 0;
                  return (
                    "detail" in e && (i = e.detail),
                    "wheelDelta" in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                      e.axis === e.HORIZONTAL_AXIS &&
                      ((t = i), (i = 0)),
                    (s = 10 * t),
                    (n = 10 * i),
                    "deltaY" in e && (n = e.deltaY),
                    "deltaX" in e && (s = e.deltaX),
                    e.shiftKey && !s && ((s = n), (n = 0)),
                    (s || n) &&
                      e.deltaMode &&
                      (1 === e.deltaMode
                        ? ((s *= 40), (n *= 40))
                        : ((s *= 800), (n *= 800))),
                    s && !t && (t = s < 1 ? -1 : 1),
                    n && !i && (i = n < 1 ? -1 : 1),
                    {
                      spinX: t,
                      spinY: i,
                      pixelX: s,
                      pixelY: n,
                    }
                  );
                })(i);
              if (r.forceToAxis)
                if (t.isHorizontal()) {
                  if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
                  d = -m.pixelX * f;
                } else {
                  if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
                  d = -m.pixelY;
                }
              else
                d =
                  Math.abs(m.pixelX) > Math.abs(m.pixelY)
                    ? -m.pixelX * f
                    : -m.pixelY;
              if (0 === d) return !0;
              r.invert && (d = -d);
              let v = t.getTranslate() + d * r.sensitivity;
              if (
                (v >= t.minTranslate() && (v = t.minTranslate()),
                v <= t.maxTranslate() && (v = t.maxTranslate()),
                (s =
                  !!t.params.loop ||
                  !(v === t.minTranslate() || v === t.maxTranslate())),
                s && t.params.nested && i.stopPropagation(),
                t.params.freeMode && t.params.freeMode.enabled)
              ) {
                const e = {
                    time: h(),
                    delta: Math.abs(d),
                    direction: Math.sign(d),
                  },
                  s =
                    l &&
                    e.time < l.time + 500 &&
                    e.delta <= l.delta &&
                    e.direction === l.direction;
                if (!s) {
                  (l = void 0), t.params.loop && t.loopFix();
                  let a = t.getTranslate() + d * r.sensitivity;
                  const c = t.isBeginning,
                    h = t.isEnd;
                  if (
                    (a >= t.minTranslate() && (a = t.minTranslate()),
                    a <= t.maxTranslate() && (a = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(a),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                    ((!c && t.isBeginning) || (!h && t.isEnd)) &&
                      t.updateSlidesClasses(),
                    t.params.freeMode.sticky)
                  ) {
                    clearTimeout(o), (o = void 0), u.length >= 15 && u.shift();
                    const i = u.length ? u[u.length - 1] : void 0,
                      s = u[0];
                    if (
                      (u.push(e),
                      i && (e.delta > i.delta || e.direction !== i.direction))
                    )
                      u.splice(0);
                    else if (
                      u.length >= 15 &&
                      e.time - s.time < 500 &&
                      s.delta - e.delta >= 1 &&
                      e.delta <= 6
                    ) {
                      const i = d > 0 ? 0.8 : 0.2;
                      (l = e),
                        u.splice(0),
                        (o = p(() => {
                          t.slideToClosest(t.params.speed, !0, void 0, i);
                        }, 0));
                    }
                    o ||
                      (o = p(() => {
                        (l = e),
                          u.splice(0),
                          t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                      }, 500));
                  }
                  if (
                    (s || n("scroll", i),
                    t.params.autoplay &&
                      t.params.autoplayDisableOnInteraction &&
                      t.autoplay.stop(),
                    a === t.minTranslate() || a === t.maxTranslate())
                  )
                    return !0;
                }
              } else {
                const i = {
                  time: h(),
                  delta: Math.abs(d),
                  direction: Math.sign(d),
                  raw: e,
                };
                u.length >= 2 && u.shift();
                const s = u.length ? u[u.length - 1] : void 0;
                if (
                  (u.push(i),
                  s
                    ? (i.direction !== s.direction ||
                        i.delta > s.delta ||
                        i.time > s.time + 150) &&
                      g(i)
                    : g(i),
                  (function (e) {
                    const i = t.params.mousewheel;
                    if (e.direction < 0) {
                      if (t.isEnd && !t.params.loop && i.releaseOnEdges)
                        return !0;
                    } else if (
                      t.isBeginning &&
                      !t.params.loop &&
                      i.releaseOnEdges
                    )
                      return !0;
                    return !1;
                  })(i))
                )
                  return !0;
              }
              return (
                i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1
              );
            }
            function y(e) {
              let i = t.$el;
              "container" !== t.params.mousewheel.eventsTarget &&
                (i = c(t.params.mousewheel.eventsTarget)),
                i[e]("mouseenter", f),
                i[e]("mouseleave", m),
                i[e]("wheel", v);
            }
            function b() {
              return t.params.cssMode
                ? (t.wrapperEl.removeEventListener("wheel", v), !0)
                : !t.mousewheel.enabled &&
                    (y("on"), (t.mousewheel.enabled = !0), !0);
            }
            function w() {
              return t.params.cssMode
                ? (t.wrapperEl.addEventListener(event, v), !0)
                : !!t.mousewheel.enabled &&
                    (y("off"), (t.mousewheel.enabled = !1), !0);
            }
            s("init", () => {
              !t.params.mousewheel.enabled && t.params.cssMode && w(),
                t.params.mousewheel.enabled && b();
            }),
              s("destroy", () => {
                t.params.cssMode && b(), t.mousewheel.enabled && w();
              }),
              Object.assign(t.mousewheel, {
                enable: b,
                disable: w,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: n } = e;
            function r(e) {
              let i;
              return (
                e &&
                  ((i = c(e)),
                  t.params.uniqueNavElements &&
                    "string" == typeof e &&
                    i.length > 1 &&
                    1 === t.$el.find(e).length &&
                    (i = t.$el.find(e))),
                i
              );
            }
            function a(e, i) {
              const s = t.params.navigation;
              e &&
                e.length > 0 &&
                (e[i ? "addClass" : "removeClass"](s.disabledClass),
                e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
                t.params.watchOverflow &&
                  t.enabled &&
                  e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
            }
            function o() {
              if (t.params.loop) return;
              const { $nextEl: e, $prevEl: i } = t.navigation;
              a(i, t.isBeginning && !t.params.rewind),
                a(e, t.isEnd && !t.params.rewind);
            }
            function l(e) {
              e.preventDefault(),
                (!t.isBeginning || t.params.loop || t.params.rewind) &&
                  (t.slidePrev(), n("navigationPrev"));
            }
            function d(e) {
              e.preventDefault(),
                (!t.isEnd || t.params.loop || t.params.rewind) &&
                  (t.slideNext(), n("navigationNext"));
            }
            function p() {
              const e = t.params.navigation;
              if (
                ((t.params.navigation = F(
                  t,
                  t.originalParams.navigation,
                  t.params.navigation,
                  {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev",
                  }
                )),
                !e.nextEl && !e.prevEl)
              )
                return;
              const i = r(e.nextEl),
                s = r(e.prevEl);
              i && i.length > 0 && i.on("click", d),
                s && s.length > 0 && s.on("click", l),
                Object.assign(t.navigation, {
                  $nextEl: i,
                  nextEl: i && i[0],
                  $prevEl: s,
                  prevEl: s && s[0],
                }),
                t.enabled ||
                  (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
            }
            function h() {
              const { $nextEl: e, $prevEl: i } = t.navigation;
              e &&
                e.length &&
                (e.off("click", d),
                e.removeClass(t.params.navigation.disabledClass)),
                i &&
                  i.length &&
                  (i.off("click", l),
                  i.removeClass(t.params.navigation.disabledClass));
            }
            i({
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled",
              },
            }),
              (t.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null,
              }),
              s("init", () => {
                !1 === t.params.navigation.enabled ? u() : (p(), o());
              }),
              s("toEdge fromEdge lock unlock", () => {
                o();
              }),
              s("destroy", () => {
                h();
              }),
              s("enable disable", () => {
                const { $nextEl: e, $prevEl: i } = t.navigation;
                e &&
                  e[t.enabled ? "removeClass" : "addClass"](
                    t.params.navigation.lockClass
                  ),
                  i &&
                    i[t.enabled ? "removeClass" : "addClass"](
                      t.params.navigation.lockClass
                    );
              }),
              s("click", (e, i) => {
                const { $nextEl: s, $prevEl: r } = t.navigation,
                  a = i.target;
                if (
                  t.params.navigation.hideOnClick &&
                  !c(a).is(r) &&
                  !c(a).is(s)
                ) {
                  if (
                    t.pagination &&
                    t.params.pagination &&
                    t.params.pagination.clickable &&
                    (t.pagination.el === a || t.pagination.el.contains(a))
                  )
                    return;
                  let e;
                  s
                    ? (e = s.hasClass(t.params.navigation.hiddenClass))
                    : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                    n(!0 === e ? "navigationShow" : "navigationHide"),
                    s && s.toggleClass(t.params.navigation.hiddenClass),
                    r && r.toggleClass(t.params.navigation.hiddenClass);
                }
              });
            const u = () => {
              t.$el.addClass(t.params.navigation.navigationDisabledClass), h();
            };
            Object.assign(t.navigation, {
              enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass),
                  p(),
                  o();
              },
              disable: u,
              update: o,
              init: p,
              destroy: h,
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: n } = e;
            const r = "swiper-pagination";
            let a;
            i({
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: "".concat(r, "-bullet"),
                bulletActiveClass: "".concat(r, "-bullet-active"),
                modifierClass: "".concat(r, "-"),
                currentClass: "".concat(r, "-current"),
                totalClass: "".concat(r, "-total"),
                hiddenClass: "".concat(r, "-hidden"),
                progressbarFillClass: "".concat(r, "-progressbar-fill"),
                progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
                clickableClass: "".concat(r, "-clickable"),
                lockClass: "".concat(r, "-lock"),
                horizontalClass: "".concat(r, "-horizontal"),
                verticalClass: "".concat(r, "-vertical"),
                paginationDisabledClass: "".concat(r, "-disabled"),
              },
            }),
              (t.pagination = {
                el: null,
                $el: null,
                bullets: [],
              });
            let o = 0;
            function l() {
              return (
                !t.params.pagination.el ||
                !t.pagination.el ||
                !t.pagination.$el ||
                0 === t.pagination.$el.length
              );
            }
            function d(e, i) {
              const { bulletActiveClass: s } = t.params.pagination;
              e[i]()
                .addClass("".concat(s, "-").concat(i))
                [i]()
                .addClass("".concat(s, "-").concat(i, "-").concat(i));
            }
            function p() {
              const e = t.rtl,
                i = t.params.pagination;
              if (l()) return;
              const s =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.slides.length
                    : t.slides.length,
                r = t.pagination.$el;
              let p;
              const h = t.params.loop
                ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
                : t.snapGrid.length;
              if (
                (t.params.loop
                  ? ((p = Math.ceil(
                      (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                    )),
                    p > s - 1 - 2 * t.loopedSlides &&
                      (p -= s - 2 * t.loopedSlides),
                    p > h - 1 && (p -= h),
                    p < 0 &&
                      "bullets" !== t.params.paginationType &&
                      (p = h + p))
                  : (p =
                      void 0 !== t.snapIndex
                        ? t.snapIndex
                        : t.activeIndex || 0),
                "bullets" === i.type &&
                  t.pagination.bullets &&
                  t.pagination.bullets.length > 0)
              ) {
                const s = t.pagination.bullets;
                let n, l, h;
                if (
                  (i.dynamicBullets &&
                    ((a = s
                      .eq(0)
                      [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    r.css(
                      t.isHorizontal() ? "width" : "height",
                      a * (i.dynamicMainBullets + 4) + "px"
                    ),
                    i.dynamicMainBullets > 1 &&
                      void 0 !== t.previousIndex &&
                      ((o += p - (t.previousIndex - t.loopedSlides || 0)),
                      o > i.dynamicMainBullets - 1
                        ? (o = i.dynamicMainBullets - 1)
                        : o < 0 && (o = 0)),
                    (n = Math.max(p - o, 0)),
                    (l = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                    (h = (l + n) / 2)),
                  s.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map((e) => "".concat(i.bulletActiveClass).concat(e))
                      .join(" ")
                  ),
                  r.length > 1)
                )
                  s.each((e) => {
                    const t = c(e),
                      s = t.index();
                    s === p && t.addClass(i.bulletActiveClass),
                      i.dynamicBullets &&
                        (s >= n &&
                          s <= l &&
                          t.addClass("".concat(i.bulletActiveClass, "-main")),
                        s === n && d(t, "prev"),
                        s === l && d(t, "next"));
                  });
                else {
                  const e = s.eq(p),
                    r = e.index();
                  if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                    const e = s.eq(n),
                      a = s.eq(l);
                    for (let e = n; e <= l; e += 1)
                      s.eq(e).addClass("".concat(i.bulletActiveClass, "-main"));
                    if (t.params.loop)
                      if (r >= s.length) {
                        for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                          s.eq(s.length - e).addClass(
                            "".concat(i.bulletActiveClass, "-main")
                          );
                        s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                          "".concat(i.bulletActiveClass, "-prev")
                        );
                      } else d(e, "prev"), d(a, "next");
                    else d(e, "prev"), d(a, "next");
                  }
                }
                if (i.dynamicBullets) {
                  const n = Math.min(s.length, i.dynamicMainBullets + 4),
                    r = (a * n - a) / 2 - h * a,
                    o = e ? "right" : "left";
                  s.css(t.isHorizontal() ? o : "top", "".concat(r, "px"));
                }
              }
              if (
                ("fraction" === i.type &&
                  (r
                    .find(U(i.currentClass))
                    .text(i.formatFractionCurrent(p + 1)),
                  r.find(U(i.totalClass)).text(i.formatFractionTotal(h))),
                "progressbar" === i.type)
              ) {
                let e;
                e = i.progressbarOpposite
                  ? t.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : t.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                const s = (p + 1) / h;
                let n = 1,
                  a = 1;
                "horizontal" === e ? (n = s) : (a = s),
                  r
                    .find(U(i.progressbarFillClass))
                    .transform(
                      "translate3d(0,0,0) scaleX("
                        .concat(n, ") scaleY(")
                        .concat(a, ")")
                    )
                    .transition(t.params.speed);
              }
              "custom" === i.type && i.renderCustom
                ? (r.html(i.renderCustom(t, p + 1, h)),
                  n("paginationRender", r[0]))
                : n("paginationUpdate", r[0]),
                t.params.watchOverflow &&
                  t.enabled &&
                  r[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
            }
            function h() {
              const e = t.params.pagination;
              if (l()) return;
              const i =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.slides.length
                    : t.slides.length,
                s = t.pagination.$el;
              let r = "";
              if ("bullets" === e.type) {
                let n = t.params.loop
                  ? Math.ceil(
                      (i - 2 * t.loopedSlides) / t.params.slidesPerGroup
                    )
                  : t.snapGrid.length;
                t.params.freeMode &&
                  t.params.freeMode.enabled &&
                  !t.params.loop &&
                  n > i &&
                  (n = i);
                for (let i = 0; i < n; i += 1)
                  e.renderBullet
                    ? (r += e.renderBullet.call(t, i, e.bulletClass))
                    : (r += "<"
                        .concat(e.bulletElement, ' class="')
                        .concat(e.bulletClass, '"></')
                        .concat(e.bulletElement, ">"));
                s.html(r), (t.pagination.bullets = s.find(U(e.bulletClass)));
              }
              "fraction" === e.type &&
                ((r = e.renderFraction
                  ? e.renderFraction.call(t, e.currentClass, e.totalClass)
                  : '<span class="'
                      .concat(e.currentClass, '"></span> / <span class="')
                      .concat(e.totalClass, '"></span>')),
                s.html(r)),
                "progressbar" === e.type &&
                  ((r = e.renderProgressbar
                    ? e.renderProgressbar.call(t, e.progressbarFillClass)
                    : '<span class="'.concat(
                        e.progressbarFillClass,
                        '"></span>'
                      )),
                  s.html(r)),
                "custom" !== e.type &&
                  n("paginationRender", t.pagination.$el[0]);
            }
            function u() {
              t.params.pagination = F(
                t,
                t.originalParams.pagination,
                t.params.pagination,
                {
                  el: "swiper-pagination",
                }
              );
              const e = t.params.pagination;
              if (!e.el) return;
              let i = c(e.el);
              0 !== i.length &&
                (t.params.uniqueNavElements &&
                  "string" == typeof e.el &&
                  i.length > 1 &&
                  ((i = t.$el.find(e.el)),
                  i.length > 1 &&
                    (i = i.filter((e) => c(e).parents(".swiper")[0] === t.el))),
                "bullets" === e.type &&
                  e.clickable &&
                  i.addClass(e.clickableClass),
                i.addClass(e.modifierClass + e.type),
                i.addClass(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (i.addClass(
                    "".concat(e.modifierClass).concat(e.type, "-dynamic")
                  ),
                  (o = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  i.addClass(e.progressbarOppositeClass),
                e.clickable &&
                  i.on("click", U(e.bulletClass), function (e) {
                    e.preventDefault();
                    let i = c(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                  }),
                Object.assign(t.pagination, {
                  $el: i,
                  el: i[0],
                }),
                t.enabled || i.addClass(e.lockClass));
            }
            function f() {
              const e = t.params.pagination;
              if (l()) return;
              const i = t.pagination.$el;
              i.removeClass(e.hiddenClass),
                i.removeClass(e.modifierClass + e.type),
                i.removeClass(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                t.pagination.bullets &&
                  t.pagination.bullets.removeClass &&
                  t.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && i.off("click", U(e.bulletClass));
            }
            s("init", () => {
              !1 === t.params.pagination.enabled ? m() : (u(), h(), p());
            }),
              s("activeIndexChange", () => {
                (t.params.loop || void 0 === t.snapIndex) && p();
              }),
              s("snapIndexChange", () => {
                t.params.loop || p();
              }),
              s("slidesLengthChange", () => {
                t.params.loop && (h(), p());
              }),
              s("snapGridLengthChange", () => {
                t.params.loop || (h(), p());
              }),
              s("destroy", () => {
                f();
              }),
              s("enable disable", () => {
                const { $el: e } = t.pagination;
                e &&
                  e[t.enabled ? "removeClass" : "addClass"](
                    t.params.pagination.lockClass
                  );
              }),
              s("lock unlock", () => {
                p();
              }),
              s("click", (e, i) => {
                const s = i.target,
                  { $el: r } = t.pagination;
                if (
                  t.params.pagination.el &&
                  t.params.pagination.hideOnClick &&
                  r &&
                  r.length > 0 &&
                  !c(s).hasClass(t.params.pagination.bulletClass)
                ) {
                  if (
                    t.navigation &&
                    ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                      (t.navigation.prevEl && s === t.navigation.prevEl))
                  )
                    return;
                  const e = r.hasClass(t.params.pagination.hiddenClass);
                  n(!0 === e ? "paginationShow" : "paginationHide"),
                    r.toggleClass(t.params.pagination.hiddenClass);
                }
              });
            const m = () => {
              t.$el.addClass(t.params.pagination.paginationDisabledClass),
                t.pagination.$el &&
                  t.pagination.$el.addClass(
                    t.params.pagination.paginationDisabledClass
                  ),
                f();
            };
            Object.assign(t.pagination, {
              enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass),
                  t.pagination.$el &&
                    t.pagination.$el.removeClass(
                      t.params.pagination.paginationDisabledClass
                    ),
                  u(),
                  h(),
                  p();
              },
              disable: m,
              render: h,
              update: p,
              init: u,
              destroy: f,
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: n, emit: r } = e;
            const a = s();
            let o,
              l,
              d,
              h,
              u = !1,
              f = null,
              m = null;
            function g() {
              if (!t.params.scrollbar.el || !t.scrollbar.el) return;
              const { scrollbar: e, rtlTranslate: i, progress: s } = t,
                { $dragEl: n, $el: r } = e,
                a = t.params.scrollbar;
              let o = l,
                c = (d - l) * s;
              i
                ? ((c = -c),
                  c > 0 ? ((o = l - c), (c = 0)) : -c + l > d && (o = d + c))
                : c < 0
                ? ((o = l + c), (c = 0))
                : c + l > d && (o = d - c),
                t.isHorizontal()
                  ? (n.transform("translate3d(".concat(c, "px, 0, 0)")),
                    (n[0].style.width = "".concat(o, "px")))
                  : (n.transform("translate3d(0px, ".concat(c, "px, 0)")),
                    (n[0].style.height = "".concat(o, "px"))),
                a.hide &&
                  (clearTimeout(f),
                  (r[0].style.opacity = 1),
                  (f = setTimeout(() => {
                    (r[0].style.opacity = 0), r.transition(400);
                  }, 1e3)));
            }
            function v() {
              if (!t.params.scrollbar.el || !t.scrollbar.el) return;
              const { scrollbar: e } = t,
                { $dragEl: i, $el: s } = e;
              (i[0].style.width = ""),
                (i[0].style.height = ""),
                (d = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
                (h =
                  t.size /
                  (t.virtualSize +
                    t.params.slidesOffsetBefore -
                    (t.params.centeredSlides ? t.snapGrid[0] : 0))),
                (l =
                  "auto" === t.params.scrollbar.dragSize
                    ? d * h
                    : parseInt(t.params.scrollbar.dragSize, 10)),
                t.isHorizontal()
                  ? (i[0].style.width = "".concat(l, "px"))
                  : (i[0].style.height = "".concat(l, "px")),
                (s[0].style.display = h >= 1 ? "none" : ""),
                t.params.scrollbar.hide && (s[0].style.opacity = 0),
                t.params.watchOverflow &&
                  t.enabled &&
                  e.$el[t.isLocked ? "addClass" : "removeClass"](
                    t.params.scrollbar.lockClass
                  );
            }
            function y(e) {
              return t.isHorizontal()
                ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].clientX
                  : e.clientX
                : "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].clientY
                : e.clientY;
            }
            function b(e) {
              const { scrollbar: i, rtlTranslate: s } = t,
                { $el: n } = i;
              let r;
              (r =
                (y(e) -
                  n.offset()[t.isHorizontal() ? "left" : "top"] -
                  (null !== o ? o : l / 2)) /
                (d - l)),
                (r = Math.max(Math.min(r, 1), 0)),
                s && (r = 1 - r);
              const a =
                t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
              t.updateProgress(a),
                t.setTranslate(a),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            }
            function w(e) {
              const i = t.params.scrollbar,
                { scrollbar: s, $wrapperEl: n } = t,
                { $el: a, $dragEl: l } = s;
              (u = !0),
                (o =
                  e.target === l[0] || e.target === l
                    ? y(e) -
                      e.target.getBoundingClientRect()[
                        t.isHorizontal() ? "left" : "top"
                      ]
                    : null),
                e.preventDefault(),
                e.stopPropagation(),
                n.transition(100),
                l.transition(100),
                b(e),
                clearTimeout(m),
                a.transition(0),
                i.hide && a.css("opacity", 1),
                t.params.cssMode &&
                  t.$wrapperEl.css("scroll-snap-type", "none"),
                r("scrollbarDragStart", e);
            }
            function x(e) {
              const { scrollbar: i, $wrapperEl: s } = t,
                { $el: n, $dragEl: a } = i;
              u &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                b(e),
                s.transition(0),
                n.transition(0),
                a.transition(0),
                r("scrollbarDragMove", e));
            }
            function S(e) {
              const i = t.params.scrollbar,
                { scrollbar: s, $wrapperEl: n } = t,
                { $el: a } = s;
              u &&
                ((u = !1),
                t.params.cssMode &&
                  (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
                i.hide &&
                  (clearTimeout(m),
                  (m = p(() => {
                    a.css("opacity", 0), a.transition(400);
                  }, 1e3))),
                r("scrollbarDragEnd", e),
                i.snapOnRelease && t.slideToClosest());
            }
            function T(e) {
              const {
                  scrollbar: i,
                  touchEventsTouch: s,
                  touchEventsDesktop: n,
                  params: r,
                  support: o,
                } = t,
                l = i.$el;
              if (!l) return;
              const c = l[0],
                d = !(!o.passiveListener || !r.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                p = !(!o.passiveListener || !r.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              if (!c) return;
              const h = "on" === e ? "addEventListener" : "removeEventListener";
              o.touch
                ? (c[h](s.start, w, d), c[h](s.move, x, d), c[h](s.end, S, p))
                : (c[h](n.start, w, d), a[h](n.move, x, d), a[h](n.end, S, p));
            }
            function E() {
              const { scrollbar: e, $el: i } = t;
              t.params.scrollbar = F(
                t,
                t.originalParams.scrollbar,
                t.params.scrollbar,
                {
                  el: "swiper-scrollbar",
                }
              );
              const s = t.params.scrollbar;
              if (!s.el) return;
              let n = c(s.el);
              t.params.uniqueNavElements &&
                "string" == typeof s.el &&
                n.length > 1 &&
                1 === i.find(s.el).length &&
                (n = i.find(s.el)),
                n.addClass(
                  t.isHorizontal() ? s.horizontalClass : s.verticalClass
                );
              let r = n.find(".".concat(t.params.scrollbar.dragClass));
              0 === r.length &&
                ((r = c(
                  '<div class="'.concat(
                    t.params.scrollbar.dragClass,
                    '"></div>'
                  )
                )),
                n.append(r)),
                Object.assign(e, {
                  $el: n,
                  el: n[0],
                  $dragEl: r,
                  dragEl: r[0],
                }),
                s.draggable &&
                  t.params.scrollbar.el &&
                  t.scrollbar.el &&
                  T("on"),
                n &&
                  n[t.enabled ? "removeClass" : "addClass"](
                    t.params.scrollbar.lockClass
                  );
            }
            function C() {
              const e = t.params.scrollbar,
                i = t.scrollbar.$el;
              i &&
                i.removeClass(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                t.params.scrollbar.el && t.scrollbar.el && T("off");
            }
            i({
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical",
              },
            }),
              (t.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null,
              }),
              n("init", () => {
                !1 === t.params.scrollbar.enabled ? P() : (E(), v(), g());
              }),
              n("update resize observerUpdate lock unlock", () => {
                v();
              }),
              n("setTranslate", () => {
                g();
              }),
              n("setTransition", (e, i) => {
                !(function (e) {
                  t.params.scrollbar.el &&
                    t.scrollbar.el &&
                    t.scrollbar.$dragEl.transition(e);
                })(i);
              }),
              n("enable disable", () => {
                const { $el: e } = t.scrollbar;
                e &&
                  e[t.enabled ? "removeClass" : "addClass"](
                    t.params.scrollbar.lockClass
                  );
              }),
              n("destroy", () => {
                C();
              });
            const P = () => {
              t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
                t.scrollbar.$el &&
                  t.scrollbar.$el.addClass(
                    t.params.scrollbar.scrollbarDisabledClass
                  ),
                C();
            };
            Object.assign(t.scrollbar, {
              enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
                  t.scrollbar.$el &&
                    t.scrollbar.$el.removeClass(
                      t.params.scrollbar.scrollbarDisabledClass
                    ),
                  E(),
                  v(),
                  g();
              },
              disable: P,
              updateSize: v,
              setTranslate: g,
              init: E,
              destroy: C,
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              parallax: {
                enabled: !1,
              },
            });
            const n = (e, i) => {
                const { rtl: s } = t,
                  n = c(e),
                  r = s ? -1 : 1,
                  a = n.attr("data-swiper-parallax") || "0";
                let o = n.attr("data-swiper-parallax-x"),
                  l = n.attr("data-swiper-parallax-y");
                const d = n.attr("data-swiper-parallax-scale"),
                  p = n.attr("data-swiper-parallax-opacity");
                if (
                  (o || l
                    ? ((o = o || "0"), (l = l || "0"))
                    : t.isHorizontal()
                    ? ((o = a), (l = "0"))
                    : ((l = a), (o = "0")),
                  (o =
                    o.indexOf("%") >= 0
                      ? parseInt(o, 10) * i * r + "%"
                      : o * i * r + "px"),
                  (l =
                    l.indexOf("%") >= 0
                      ? parseInt(l, 10) * i + "%"
                      : l * i + "px"),
                  null != p)
                ) {
                  const e = p - (p - 1) * (1 - Math.abs(i));
                  n[0].style.opacity = e;
                }
                if (null == d)
                  n.transform(
                    "translate3d(".concat(o, ", ").concat(l, ", 0px)")
                  );
                else {
                  const e = d - (d - 1) * (1 - Math.abs(i));
                  n.transform(
                    "translate3d("
                      .concat(o, ", ")
                      .concat(l, ", 0px) scale(")
                      .concat(e, ")")
                  );
                }
              },
              r = () => {
                const { $el: e, slides: i, progress: s, snapGrid: r } = t;
                e
                  .children(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    n(e, s);
                  }),
                  i.each((e, i) => {
                    let a = e.progress;
                    t.params.slidesPerGroup > 1 &&
                      "auto" !== t.params.slidesPerView &&
                      (a += Math.ceil(i / 2) - s * (r.length - 1)),
                      (a = Math.min(Math.max(a, -1), 1)),
                      c(e)
                        .find(
                          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                        )
                        .each((e) => {
                          n(e, a);
                        });
                  });
              };
            s("beforeInit", () => {
              t.params.parallax.enabled &&
                ((t.params.watchSlidesProgress = !0),
                (t.originalParams.watchSlidesProgress = !0));
            }),
              s("init", () => {
                t.params.parallax.enabled && r();
              }),
              s("setTranslate", () => {
                t.params.parallax.enabled && r();
              }),
              s("setTransition", (e, i) => {
                t.params.parallax.enabled &&
                  (function (e) {
                    void 0 === e && (e = t.params.speed);
                    const { $el: i } = t;
                    i.find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    ).each((t) => {
                      const i = c(t);
                      let s =
                        parseInt(i.attr("data-swiper-parallax-duration"), 10) ||
                        e;
                      0 === e && (s = 0), i.transition(s);
                    });
                  })(i);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: n } = e;
            const a = r();
            i({
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            }),
              (t.zoom = {
                enabled: !1,
              });
            let o,
              l,
              d,
              p = 1,
              h = !1;
            const f = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              g = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              };
            let v = 1;
            function y(e) {
              if (e.targetTouches.length < 2) return 1;
              const t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                s = e.targetTouches[1].pageX,
                n = e.targetTouches[1].pageY;
              return Math.sqrt((s - t) ** 2 + (n - i) ** 2);
            }
            function b(e) {
              const i = t.support,
                s = t.params.zoom;
              if (((l = !1), (d = !1), !i.gestures)) {
                if (
                  "touchstart" !== e.type ||
                  ("touchstart" === e.type && e.targetTouches.length < 2)
                )
                  return;
                (l = !0), (f.scaleStart = y(e));
              }
              (f.$slideEl && f.$slideEl.length) ||
              ((f.$slideEl = c(e.target).closest(
                ".".concat(t.params.slideClass)
              )),
              0 === f.$slideEl.length &&
                (f.$slideEl = t.slides.eq(t.activeIndex)),
              (f.$imageEl = f.$slideEl
                .find(".".concat(s.containerClass))
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (f.$imageWrapEl = f.$imageEl.parent(
                ".".concat(s.containerClass)
              )),
              (f.maxRatio =
                f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
              0 !== f.$imageWrapEl.length)
                ? (f.$imageEl && f.$imageEl.transition(0), (h = !0))
                : (f.$imageEl = void 0);
            }
            function w(e) {
              const i = t.support,
                s = t.params.zoom,
                n = t.zoom;
              if (!i.gestures) {
                if (
                  "touchmove" !== e.type ||
                  ("touchmove" === e.type && e.targetTouches.length < 2)
                )
                  return;
                (d = !0), (f.scaleMove = y(e));
              }
              f.$imageEl && 0 !== f.$imageEl.length
                ? (i.gestures
                    ? (n.scale = e.scale * p)
                    : (n.scale = (f.scaleMove / f.scaleStart) * p),
                  n.scale > f.maxRatio &&
                    (n.scale =
                      f.maxRatio - 1 + (n.scale - f.maxRatio + 1) ** 0.5),
                  n.scale < s.minRatio &&
                    (n.scale =
                      s.minRatio + 1 - (s.minRatio - n.scale + 1) ** 0.5),
                  f.$imageEl.transform(
                    "translate3d(0,0,0) scale(".concat(n.scale, ")")
                  ))
                : "gesturechange" === e.type && b(e);
            }
            function x(e) {
              const i = t.device,
                s = t.support,
                n = t.params.zoom,
                r = t.zoom;
              if (!s.gestures) {
                if (!l || !d) return;
                if (
                  "touchend" !== e.type ||
                  ("touchend" === e.type &&
                    e.changedTouches.length < 2 &&
                    !i.android)
                )
                  return;
                (l = !1), (d = !1);
              }
              f.$imageEl &&
                0 !== f.$imageEl.length &&
                ((r.scale = Math.max(
                  Math.min(r.scale, f.maxRatio),
                  n.minRatio
                )),
                f.$imageEl
                  .transition(t.params.speed)
                  .transform("translate3d(0,0,0) scale(".concat(r.scale, ")")),
                (p = r.scale),
                (h = !1),
                1 === r.scale && (f.$slideEl = void 0));
            }
            function S(e) {
              const i = t.zoom;
              if (!f.$imageEl || 0 === f.$imageEl.length) return;
              if (((t.allowClick = !1), !m.isTouched || !f.$slideEl)) return;
              m.isMoved ||
                ((m.width = f.$imageEl[0].offsetWidth),
                (m.height = f.$imageEl[0].offsetHeight),
                (m.startX = u(f.$imageWrapEl[0], "x") || 0),
                (m.startY = u(f.$imageWrapEl[0], "y") || 0),
                (f.slideWidth = f.$slideEl[0].offsetWidth),
                (f.slideHeight = f.$slideEl[0].offsetHeight),
                f.$imageWrapEl.transition(0));
              const s = m.width * i.scale,
                n = m.height * i.scale;
              if (!(s < f.slideWidth && n < f.slideHeight)) {
                if (
                  ((m.minX = Math.min(f.slideWidth / 2 - s / 2, 0)),
                  (m.maxX = -m.minX),
                  (m.minY = Math.min(f.slideHeight / 2 - n / 2, 0)),
                  (m.maxY = -m.minY),
                  (m.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (m.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !m.isMoved && !h)
                ) {
                  if (
                    t.isHorizontal() &&
                    ((Math.floor(m.minX) === Math.floor(m.startX) &&
                      m.touchesCurrent.x < m.touchesStart.x) ||
                      (Math.floor(m.maxX) === Math.floor(m.startX) &&
                        m.touchesCurrent.x > m.touchesStart.x))
                  )
                    return void (m.isTouched = !1);
                  if (
                    !t.isHorizontal() &&
                    ((Math.floor(m.minY) === Math.floor(m.startY) &&
                      m.touchesCurrent.y < m.touchesStart.y) ||
                      (Math.floor(m.maxY) === Math.floor(m.startY) &&
                        m.touchesCurrent.y > m.touchesStart.y))
                  )
                    return void (m.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (m.isMoved = !0),
                  (m.currentX =
                    m.touchesCurrent.x - m.touchesStart.x + m.startX),
                  (m.currentY =
                    m.touchesCurrent.y - m.touchesStart.y + m.startY),
                  m.currentX < m.minX &&
                    (m.currentX =
                      m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
                  m.currentX > m.maxX &&
                    (m.currentX =
                      m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
                  m.currentY < m.minY &&
                    (m.currentY =
                      m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
                  m.currentY > m.maxY &&
                    (m.currentY =
                      m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
                  g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x),
                  g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y),
                  g.prevTime || (g.prevTime = Date.now()),
                  (g.x =
                    (m.touchesCurrent.x - g.prevPositionX) /
                    (Date.now() - g.prevTime) /
                    2),
                  (g.y =
                    (m.touchesCurrent.y - g.prevPositionY) /
                    (Date.now() - g.prevTime) /
                    2),
                  Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 &&
                    (g.x = 0),
                  Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 &&
                    (g.y = 0),
                  (g.prevPositionX = m.touchesCurrent.x),
                  (g.prevPositionY = m.touchesCurrent.y),
                  (g.prevTime = Date.now()),
                  f.$imageWrapEl.transform(
                    "translate3d("
                      .concat(m.currentX, "px, ")
                      .concat(m.currentY, "px,0)")
                  );
              }
            }
            function T() {
              const e = t.zoom;
              f.$slideEl &&
                t.previousIndex !== t.activeIndex &&
                (f.$imageEl &&
                  f.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                f.$imageWrapEl &&
                  f.$imageWrapEl.transform("translate3d(0,0,0)"),
                (e.scale = 1),
                (p = 1),
                (f.$slideEl = void 0),
                (f.$imageEl = void 0),
                (f.$imageWrapEl = void 0));
            }
            function E(e) {
              const i = t.zoom,
                s = t.params.zoom;
              if (
                (f.$slideEl ||
                  (e &&
                    e.target &&
                    (f.$slideEl = c(e.target).closest(
                      ".".concat(t.params.slideClass)
                    )),
                  f.$slideEl ||
                    (t.params.virtual && t.params.virtual.enabled && t.virtual
                      ? (f.$slideEl = t.$wrapperEl.children(
                          ".".concat(t.params.slideActiveClass)
                        ))
                      : (f.$slideEl = t.slides.eq(t.activeIndex))),
                  (f.$imageEl = f.$slideEl
                    .find(".".concat(s.containerClass))
                    .eq(0)
                    .find("picture, img, svg, canvas, .swiper-zoom-target")
                    .eq(0)),
                  (f.$imageWrapEl = f.$imageEl.parent(
                    ".".concat(s.containerClass)
                  ))),
                !f.$imageEl ||
                  0 === f.$imageEl.length ||
                  !f.$imageWrapEl ||
                  0 === f.$imageWrapEl.length)
              )
                return;
              let n, r, o, l, d, h, u, g, v, y, b, w, x, S, T, E, C, P;
              t.params.cssMode &&
                ((t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.touchAction = "none")),
                f.$slideEl.addClass("".concat(s.zoomedSlideClass)),
                void 0 === m.touchesStart.x && e
                  ? ((n =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    (r =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageY
                        : e.pageY))
                  : ((n = m.touchesStart.x), (r = m.touchesStart.y)),
                (i.scale =
                  f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                (p = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                e
                  ? ((C = f.$slideEl[0].offsetWidth),
                    (P = f.$slideEl[0].offsetHeight),
                    (o = f.$slideEl.offset().left + a.scrollX),
                    (l = f.$slideEl.offset().top + a.scrollY),
                    (d = o + C / 2 - n),
                    (h = l + P / 2 - r),
                    (v = f.$imageEl[0].offsetWidth),
                    (y = f.$imageEl[0].offsetHeight),
                    (b = v * i.scale),
                    (w = y * i.scale),
                    (x = Math.min(C / 2 - b / 2, 0)),
                    (S = Math.min(P / 2 - w / 2, 0)),
                    (T = -x),
                    (E = -S),
                    (u = d * i.scale),
                    (g = h * i.scale),
                    u < x && (u = x),
                    u > T && (u = T),
                    g < S && (g = S),
                    g > E && (g = E))
                  : ((u = 0), (g = 0)),
                f.$imageWrapEl
                  .transition(300)
                  .transform(
                    "translate3d(".concat(u, "px, ").concat(g, "px,0)")
                  ),
                f.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(".concat(i.scale, ")"));
            }
            function C() {
              const e = t.zoom,
                i = t.params.zoom;
              f.$slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (f.$slideEl = t.$wrapperEl.children(
                      ".".concat(t.params.slideActiveClass)
                    ))
                  : (f.$slideEl = t.slides.eq(t.activeIndex)),
                (f.$imageEl = f.$slideEl
                  .find(".".concat(i.containerClass))
                  .eq(0)
                  .find("picture, img, svg, canvas, .swiper-zoom-target")
                  .eq(0)),
                (f.$imageWrapEl = f.$imageEl.parent(
                  ".".concat(i.containerClass)
                ))),
                f.$imageEl &&
                  0 !== f.$imageEl.length &&
                  f.$imageWrapEl &&
                  0 !== f.$imageWrapEl.length &&
                  (t.params.cssMode &&
                    ((t.wrapperEl.style.overflow = ""),
                    (t.wrapperEl.style.touchAction = "")),
                  (e.scale = 1),
                  (p = 1),
                  f.$imageWrapEl
                    .transition(300)
                    .transform("translate3d(0,0,0)"),
                  f.$imageEl
                    .transition(300)
                    .transform("translate3d(0,0,0) scale(1)"),
                  f.$slideEl.removeClass("".concat(i.zoomedSlideClass)),
                  (f.$slideEl = void 0));
            }
            function P(e) {
              const i = t.zoom;
              i.scale && 1 !== i.scale ? C() : E(e);
            }
            function M() {
              const e = t.support;
              return {
                passiveListener: !(
                  "touchstart" !== t.touchEvents.start ||
                  !e.passiveListener ||
                  !t.params.passiveListeners
                ) && {
                  passive: !0,
                  capture: !1,
                },
                activeListenerWithCapture: !e.passiveListener || {
                  passive: !1,
                  capture: !0,
                },
              };
            }
            function k() {
              return ".".concat(t.params.slideClass);
            }
            function O(e) {
              const { passiveListener: i } = M(),
                s = k();
              t.$wrapperEl[e]("gesturestart", s, b, i),
                t.$wrapperEl[e]("gesturechange", s, w, i),
                t.$wrapperEl[e]("gestureend", s, x, i);
            }
            function L() {
              o || ((o = !0), O("on"));
            }
            function A() {
              o && ((o = !1), O("off"));
            }
            function z() {
              const e = t.zoom;
              if (e.enabled) return;
              e.enabled = !0;
              const i = t.support,
                { passiveListener: s, activeListenerWithCapture: n } = M(),
                r = k();
              i.gestures
                ? (t.$wrapperEl.on(t.touchEvents.start, L, s),
                  t.$wrapperEl.on(t.touchEvents.end, A, s))
                : "touchstart" === t.touchEvents.start &&
                  (t.$wrapperEl.on(t.touchEvents.start, r, b, s),
                  t.$wrapperEl.on(t.touchEvents.move, r, w, n),
                  t.$wrapperEl.on(t.touchEvents.end, r, x, s),
                  t.touchEvents.cancel &&
                    t.$wrapperEl.on(t.touchEvents.cancel, r, x, s)),
                t.$wrapperEl.on(
                  t.touchEvents.move,
                  ".".concat(t.params.zoom.containerClass),
                  S,
                  n
                );
            }
            function I() {
              const e = t.zoom;
              if (!e.enabled) return;
              const i = t.support;
              e.enabled = !1;
              const { passiveListener: s, activeListenerWithCapture: n } = M(),
                r = k();
              i.gestures
                ? (t.$wrapperEl.off(t.touchEvents.start, L, s),
                  t.$wrapperEl.off(t.touchEvents.end, A, s))
                : "touchstart" === t.touchEvents.start &&
                  (t.$wrapperEl.off(t.touchEvents.start, r, b, s),
                  t.$wrapperEl.off(t.touchEvents.move, r, w, n),
                  t.$wrapperEl.off(t.touchEvents.end, r, x, s),
                  t.touchEvents.cancel &&
                    t.$wrapperEl.off(t.touchEvents.cancel, r, x, s)),
                t.$wrapperEl.off(
                  t.touchEvents.move,
                  ".".concat(t.params.zoom.containerClass),
                  S,
                  n
                );
            }
            Object.defineProperty(t.zoom, "scale", {
              get: () => v,
              set(e) {
                if (v !== e) {
                  const t = f.$imageEl ? f.$imageEl[0] : void 0,
                    i = f.$slideEl ? f.$slideEl[0] : void 0;
                  n("zoomChange", e, t, i);
                }
                v = e;
              },
            }),
              s("init", () => {
                t.params.zoom.enabled && z();
              }),
              s("destroy", () => {
                I();
              }),
              s("touchStart", (e, i) => {
                t.zoom.enabled &&
                  (function (e) {
                    const i = t.device;
                    f.$imageEl &&
                      0 !== f.$imageEl.length &&
                      (m.isTouched ||
                        (i.android && e.cancelable && e.preventDefault(),
                        (m.isTouched = !0),
                        (m.touchesStart.x =
                          "touchstart" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX),
                        (m.touchesStart.y =
                          "touchstart" === e.type
                            ? e.targetTouches[0].pageY
                            : e.pageY)));
                  })(i);
              }),
              s("touchEnd", (e, i) => {
                t.zoom.enabled &&
                  (function () {
                    const e = t.zoom;
                    if (!f.$imageEl || 0 === f.$imageEl.length) return;
                    if (!m.isTouched || !m.isMoved)
                      return (m.isTouched = !1), void (m.isMoved = !1);
                    (m.isTouched = !1), (m.isMoved = !1);
                    let i = 300,
                      s = 300;
                    const n = g.x * i,
                      r = m.currentX + n,
                      a = g.y * s,
                      o = m.currentY + a;
                    0 !== g.x && (i = Math.abs((r - m.currentX) / g.x)),
                      0 !== g.y && (s = Math.abs((o - m.currentY) / g.y));
                    const l = Math.max(i, s);
                    (m.currentX = r), (m.currentY = o);
                    const c = m.width * e.scale,
                      d = m.height * e.scale;
                    (m.minX = Math.min(f.slideWidth / 2 - c / 2, 0)),
                      (m.maxX = -m.minX),
                      (m.minY = Math.min(f.slideHeight / 2 - d / 2, 0)),
                      (m.maxY = -m.minY),
                      (m.currentX = Math.max(
                        Math.min(m.currentX, m.maxX),
                        m.minX
                      )),
                      (m.currentY = Math.max(
                        Math.min(m.currentY, m.maxY),
                        m.minY
                      )),
                      f.$imageWrapEl
                        .transition(l)
                        .transform(
                          "translate3d("
                            .concat(m.currentX, "px, ")
                            .concat(m.currentY, "px,0)")
                        );
                  })();
              }),
              s("doubleTap", (e, i) => {
                !t.animating &&
                  t.params.zoom.enabled &&
                  t.zoom.enabled &&
                  t.params.zoom.toggle &&
                  P(i);
              }),
              s("transitionEnd", () => {
                t.zoom.enabled && t.params.zoom.enabled && T();
              }),
              s("slideChange", () => {
                t.zoom.enabled &&
                  t.params.zoom.enabled &&
                  t.params.cssMode &&
                  T();
              }),
              Object.assign(t.zoom, {
                enable: z,
                disable: I,
                in: E,
                out: C,
                toggle: P,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: n } = e;
            i({
              lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader",
              },
            }),
              (t.lazy = {});
            let a = !1,
              o = !1;
            function l(e, i) {
              void 0 === i && (i = !0);
              const s = t.params.lazy;
              if (void 0 === e) return;
              if (0 === t.slides.length) return;
              const r =
                  t.virtual && t.params.virtual.enabled
                    ? t.$wrapperEl.children(
                        "."
                          .concat(
                            t.params.slideClass,
                            '[data-swiper-slide-index="'
                          )
                          .concat(e, '"]')
                      )
                    : t.slides.eq(e),
                a = r.find(
                  "."
                    .concat(s.elementClass, ":not(.")
                    .concat(s.loadedClass, "):not(.")
                    .concat(s.loadingClass, ")")
                );
              !r.hasClass(s.elementClass) ||
                r.hasClass(s.loadedClass) ||
                r.hasClass(s.loadingClass) ||
                a.push(r[0]),
                0 !== a.length &&
                  a.each((e) => {
                    const a = c(e);
                    a.addClass(s.loadingClass);
                    const o = a.attr("data-background"),
                      d = a.attr("data-src"),
                      p = a.attr("data-srcset"),
                      h = a.attr("data-sizes"),
                      u = a.parent("picture");
                    t.loadImage(a[0], d || o, p, h, !1, () => {
                      if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (
                          (o
                            ? (a.css(
                                "background-image",
                                'url("'.concat(o, '")')
                              ),
                              a.removeAttr("data-background"))
                            : (p &&
                                (a.attr("srcset", p),
                                a.removeAttr("data-srcset")),
                              h &&
                                (a.attr("sizes", h),
                                a.removeAttr("data-sizes")),
                              u.length &&
                                u.children("source").each((e) => {
                                  const t = c(e);
                                  t.attr("data-srcset") &&
                                    (t.attr("srcset", t.attr("data-srcset")),
                                    t.removeAttr("data-srcset"));
                                }),
                              d &&
                                (a.attr("src", d), a.removeAttr("data-src"))),
                          a.addClass(s.loadedClass).removeClass(s.loadingClass),
                          r.find(".".concat(s.preloaderClass)).remove(),
                          t.params.loop && i)
                        ) {
                          const e = r.attr("data-swiper-slide-index");
                          r.hasClass(t.params.slideDuplicateClass)
                            ? l(
                                t.$wrapperEl
                                  .children(
                                    '[data-swiper-slide-index="'
                                      .concat(e, '"]:not(.')
                                      .concat(t.params.slideDuplicateClass, ")")
                                  )
                                  .index(),
                                !1
                              )
                            : l(
                                t.$wrapperEl
                                  .children(
                                    "."
                                      .concat(
                                        t.params.slideDuplicateClass,
                                        '[data-swiper-slide-index="'
                                      )
                                      .concat(e, '"]')
                                  )
                                  .index(),
                                !1
                              );
                        }
                        n("lazyImageReady", r[0], a[0]),
                          t.params.autoHeight && t.updateAutoHeight();
                      }
                    }),
                      n("lazyImageLoad", r[0], a[0]);
                  });
            }
            function d() {
              const { $wrapperEl: e, params: i, slides: s, activeIndex: n } = t,
                r = t.virtual && i.virtual.enabled,
                a = i.lazy;
              let d = i.slidesPerView;
              function p(t) {
                if (r) {
                  if (
                    e.children(
                      "."
                        .concat(i.slideClass, '[data-swiper-slide-index="')
                        .concat(t, '"]')
                    ).length
                  )
                    return !0;
                } else if (s[t]) return !0;
                return !1;
              }
              function h(e) {
                return r ? c(e).attr("data-swiper-slide-index") : c(e).index();
              }
              if (
                ("auto" === d && (d = 0),
                o || (o = !0),
                t.params.watchSlidesProgress)
              )
                e.children(".".concat(i.slideVisibleClass)).each((e) => {
                  l(r ? c(e).attr("data-swiper-slide-index") : c(e).index());
                });
              else if (d > 1) for (let e = n; e < n + d; e += 1) p(e) && l(e);
              else l(n);
              if (a.loadPrevNext)
                if (
                  d > 1 ||
                  (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)
                ) {
                  const e = a.loadPrevNextAmount,
                    t = Math.ceil(d),
                    i = Math.min(n + t + Math.max(e, t), s.length),
                    r = Math.max(n - Math.max(t, e), 0);
                  for (let e = n + t; e < i; e += 1) p(e) && l(e);
                  for (let e = r; e < n; e += 1) p(e) && l(e);
                } else {
                  const t = e.children(".".concat(i.slideNextClass));
                  t.length > 0 && l(h(t));
                  const s = e.children(".".concat(i.slidePrevClass));
                  s.length > 0 && l(h(s));
                }
            }
            function p() {
              const e = r();
              if (!t || t.destroyed) return;
              const i = t.params.lazy.scrollingElement
                  ? c(t.params.lazy.scrollingElement)
                  : c(e),
                s = i[0] === e,
                n = s ? e.innerWidth : i[0].offsetWidth,
                o = s ? e.innerHeight : i[0].offsetHeight,
                l = t.$el.offset(),
                { rtlTranslate: h } = t;
              let u = !1;
              h && (l.left -= t.$el[0].scrollLeft);
              const f = [
                [l.left, l.top],
                [l.left + t.width, l.top],
                [l.left, l.top + t.height],
                [l.left + t.width, l.top + t.height],
              ];
              for (let e = 0; e < f.length; e += 1) {
                const t = f[e];
                if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= o) {
                  if (0 === t[0] && 0 === t[1]) continue;
                  u = !0;
                }
              }
              const m = !(
                "touchstart" !== t.touchEvents.start ||
                !t.support.passiveListener ||
                !t.params.passiveListeners
              ) && {
                passive: !0,
                capture: !1,
              };
              u
                ? (d(), i.off("scroll", p, m))
                : a || ((a = !0), i.on("scroll", p, m));
            }
            s("beforeInit", () => {
              t.params.lazy.enabled &&
                t.params.preloadImages &&
                (t.params.preloadImages = !1);
            }),
              s("init", () => {
                t.params.lazy.enabled &&
                  (t.params.lazy.checkInView ? p() : d());
              }),
              s("scroll", () => {
                t.params.freeMode &&
                  t.params.freeMode.enabled &&
                  !t.params.freeMode.sticky &&
                  d();
              }),
              s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                t.params.lazy.enabled &&
                  (t.params.lazy.checkInView ? p() : d());
              }),
              s("transitionStart", () => {
                t.params.lazy.enabled &&
                  (t.params.lazy.loadOnTransitionStart ||
                    (!t.params.lazy.loadOnTransitionStart && !o)) &&
                  (t.params.lazy.checkInView ? p() : d());
              }),
              s("transitionEnd", () => {
                t.params.lazy.enabled &&
                  !t.params.lazy.loadOnTransitionStart &&
                  (t.params.lazy.checkInView ? p() : d());
              }),
              s("slideChange", () => {
                const {
                  lazy: e,
                  cssMode: i,
                  watchSlidesProgress: s,
                  touchReleaseOnEdges: n,
                  resistanceRatio: r,
                } = t.params;
                e.enabled && (i || (s && (n || 0 === r))) && d();
              }),
              s("destroy", () => {
                t.$el &&
                  t.$el
                    .find(".".concat(t.params.lazy.loadingClass))
                    .removeClass(t.params.lazy.loadingClass);
              }),
              Object.assign(t.lazy, {
                load: d,
                loadInSlide: l,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            function n(e, t) {
              const i = (function () {
                let e, t, i;
                return (s, n) => {
                  for (t = -1, e = s.length; e - t > 1; )
                    (i = (e + t) >> 1), s[i] <= n ? (t = i) : (e = i);
                  return e;
                };
              })();
              let s, n;
              return (
                (this.x = e),
                (this.y = t),
                (this.lastIndex = e.length - 1),
                (this.interpolate = function (e) {
                  return e
                    ? ((n = i(this.x, e)),
                      (s = n - 1),
                      ((e - this.x[s]) * (this.y[n] - this.y[s])) /
                        (this.x[n] - this.x[s]) +
                        this.y[s])
                    : 0;
                }),
                this
              );
            }
            function r() {
              t.controller.control &&
                t.controller.spline &&
                ((t.controller.spline = void 0), delete t.controller.spline);
            }
            i({
              controller: {
                control: void 0,
                inverse: !1,
                by: "slide",
              },
            }),
              (t.controller = {
                control: void 0,
              }),
              s("beforeInit", () => {
                t.controller.control = t.params.controller.control;
              }),
              s("update", () => {
                r();
              }),
              s("resize", () => {
                r();
              }),
              s("observerUpdate", () => {
                r();
              }),
              s("setTranslate", (e, i, s) => {
                t.controller.control && t.controller.setTranslate(i, s);
              }),
              s("setTransition", (e, i, s) => {
                t.controller.control && t.controller.setTransition(i, s);
              }),
              Object.assign(t.controller, {
                setTranslate: function (e, i) {
                  const s = t.controller.control;
                  let r, a;
                  const o = t.constructor;
                  function l(e) {
                    const i = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by &&
                      ((function (e) {
                        t.controller.spline ||
                          (t.controller.spline = t.params.loop
                            ? new n(t.slidesGrid, e.slidesGrid)
                            : new n(t.snapGrid, e.snapGrid));
                      })(e),
                      (a = -t.controller.spline.interpolate(-i))),
                      (a && "container" !== t.params.controller.by) ||
                        ((r =
                          (e.maxTranslate() - e.minTranslate()) /
                          (t.maxTranslate() - t.minTranslate())),
                        (a = (i - t.minTranslate()) * r + e.minTranslate())),
                      t.params.controller.inverse && (a = e.maxTranslate() - a),
                      e.updateProgress(a),
                      e.setTranslate(a, t),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses();
                  }
                  if (Array.isArray(s))
                    for (let e = 0; e < s.length; e += 1)
                      s[e] !== i && s[e] instanceof o && l(s[e]);
                  else s instanceof o && i !== s && l(s);
                },
                setTransition: function (e, i) {
                  const s = t.constructor,
                    n = t.controller.control;
                  let r;
                  function a(i) {
                    i.setTransition(e, t),
                      0 !== e &&
                        (i.transitionStart(),
                        i.params.autoHeight &&
                          p(() => {
                            i.updateAutoHeight();
                          }),
                        i.$wrapperEl.transitionEnd(() => {
                          n &&
                            (i.params.loop &&
                              "slide" === t.params.controller.by &&
                              i.loopFix(),
                            i.transitionEnd());
                        }));
                  }
                  if (Array.isArray(n))
                    for (r = 0; r < n.length; r += 1)
                      n[r] !== i && n[r] instanceof s && a(n[r]);
                  else n instanceof s && i !== n && a(n);
                },
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null,
              },
            });
            let n = null;
            function r(e) {
              const t = n;
              0 !== t.length && (t.html(""), t.html(e));
            }
            function a(e) {
              e.attr("tabIndex", "0");
            }
            function o(e) {
              e.attr("tabIndex", "-1");
            }
            function l(e, t) {
              e.attr("role", t);
            }
            function d(e, t) {
              e.attr("aria-roledescription", t);
            }
            function p(e, t) {
              e.attr("aria-label", t);
            }
            function h(e) {
              e.attr("aria-disabled", !0);
            }
            function u(e) {
              e.attr("aria-disabled", !1);
            }
            function f(e) {
              if (13 !== e.keyCode && 32 !== e.keyCode) return;
              const i = t.params.a11y,
                s = c(e.target);
              t.navigation &&
                t.navigation.$nextEl &&
                s.is(t.navigation.$nextEl) &&
                ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)),
                t.navigation &&
                  t.navigation.$prevEl &&
                  s.is(t.navigation.$prevEl) &&
                  ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                  t.isBeginning
                    ? r(i.firstSlideMessage)
                    : r(i.prevSlideMessage)),
                t.pagination &&
                  s.is(U(t.params.pagination.bulletClass)) &&
                  s[0].click();
            }
            function m() {
              return (
                t.pagination &&
                t.pagination.bullets &&
                t.pagination.bullets.length
              );
            }
            function g() {
              return m() && t.params.pagination.clickable;
            }
            const v = (e, t, i) => {
                a(e),
                  "BUTTON" !== e[0].tagName &&
                    (l(e, "button"), e.on("keydown", f)),
                  p(e, i),
                  (function (e, t) {
                    e.attr("aria-controls", t);
                  })(e, t);
              },
              y = (e) => {
                const i = e.target.closest(".".concat(t.params.slideClass));
                if (!i || !t.slides.includes(i)) return;
                const s = t.slides.indexOf(i) === t.activeIndex,
                  n =
                    t.params.watchSlidesProgress &&
                    t.visibleSlides &&
                    t.visibleSlides.includes(i);
                s || n || t.slideTo(t.slides.indexOf(i), 0);
              },
              b = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage &&
                  d(c(t.slides), e.itemRoleDescriptionMessage),
                  e.slideRole && l(c(t.slides), e.slideRole);
                const i = t.params.loop
                  ? t.slides.filter(
                      (e) => !e.classList.contains(t.params.slideDuplicateClass)
                    ).length
                  : t.slides.length;
                e.slideLabelMessage &&
                  t.slides.each((s, n) => {
                    const r = c(s),
                      a = t.params.loop
                        ? parseInt(r.attr("data-swiper-slide-index"), 10)
                        : n;
                    p(
                      r,
                      e.slideLabelMessage
                        .replace(/\{\{index\}\}/, a + 1)
                        .replace(/\{\{slidesLength\}\}/, i)
                    );
                  });
              };
            s("beforeInit", () => {
              n = c(
                '<span class="'.concat(
                  t.params.a11y.notificationClass,
                  '" aria-live="assertive" aria-atomic="true"></span>'
                )
              );
            }),
              s("afterInit", () => {
                t.params.a11y.enabled &&
                  (() => {
                    const e = t.params.a11y;
                    t.$el.append(n);
                    const i = t.$el;
                    e.containerRoleDescriptionMessage &&
                      d(i, e.containerRoleDescriptionMessage),
                      e.containerMessage && p(i, e.containerMessage);
                    const s = t.$wrapperEl,
                      r =
                        e.id ||
                        s.attr("id") ||
                        "swiper-wrapper-".concat(
                          (void 0 === (a = 16) && (a = 16),
                          "x"
                            .repeat(a)
                            .replace(/x/g, () =>
                              Math.round(16 * Math.random()).toString(16)
                            ))
                        );
                    var a;
                    const o =
                      t.params.autoplay && t.params.autoplay.enabled
                        ? "off"
                        : "polite";
                    var l;
                    let c, h;
                    (l = r),
                      s.attr("id", l),
                      (function (e, t) {
                        e.attr("aria-live", t);
                      })(s, o),
                      b(),
                      t.navigation &&
                        t.navigation.$nextEl &&
                        (c = t.navigation.$nextEl),
                      t.navigation &&
                        t.navigation.$prevEl &&
                        (h = t.navigation.$prevEl),
                      c && c.length && v(c, r, e.nextSlideMessage),
                      h && h.length && v(h, r, e.prevSlideMessage),
                      g() &&
                        t.pagination.$el.on(
                          "keydown",
                          U(t.params.pagination.bulletClass),
                          f
                        ),
                      t.$el.on("focus", y, !0);
                  })();
              }),
              s(
                "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
                () => {
                  t.params.a11y.enabled && b();
                }
              ),
              s("fromEdge toEdge afterInit lock unlock", () => {
                t.params.a11y.enabled &&
                  (function () {
                    if (t.params.loop || t.params.rewind || !t.navigation)
                      return;
                    const { $nextEl: e, $prevEl: i } = t.navigation;
                    i &&
                      i.length > 0 &&
                      (t.isBeginning ? (h(i), o(i)) : (u(i), a(i))),
                      e &&
                        e.length > 0 &&
                        (t.isEnd ? (h(e), o(e)) : (u(e), a(e)));
                  })();
              }),
              s("paginationUpdate", () => {
                t.params.a11y.enabled &&
                  (function () {
                    const e = t.params.a11y;
                    m() &&
                      t.pagination.bullets.each((i) => {
                        const s = c(i);
                        t.params.pagination.clickable &&
                          (a(s),
                          t.params.pagination.renderBullet ||
                            (l(s, "button"),
                            p(
                              s,
                              e.paginationBulletMessage.replace(
                                /\{\{index\}\}/,
                                s.index() + 1
                              )
                            ))),
                          s.is(
                            ".".concat(t.params.pagination.bulletActiveClass)
                          )
                            ? s.attr("aria-current", "true")
                            : s.removeAttr("aria-current");
                      });
                  })();
              }),
              s("destroy", () => {
                t.params.a11y.enabled &&
                  (function () {
                    let e, i;
                    n && n.length > 0 && n.remove(),
                      t.navigation &&
                        t.navigation.$nextEl &&
                        (e = t.navigation.$nextEl),
                      t.navigation &&
                        t.navigation.$prevEl &&
                        (i = t.navigation.$prevEl),
                      e && e.off("keydown", f),
                      i && i.off("keydown", f),
                      g() &&
                        t.pagination.$el.off(
                          "keydown",
                          U(t.params.pagination.bulletClass),
                          f
                        ),
                      t.$el.off("focus", y, !0);
                  })();
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1,
              },
            });
            let n = !1,
              a = {};
            const o = (e) =>
                e
                  .toString()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--+/g, "-")
                  .replace(/^-+/, "")
                  .replace(/-+$/, ""),
              l = (e) => {
                const t = r();
                let i;
                i = e ? new URL(e) : t.location;
                const s = i.pathname
                    .slice(1)
                    .split("/")
                    .filter((e) => "" !== e),
                  n = s.length;
                return {
                  key: s[n - 2],
                  value: s[n - 1],
                };
              },
              c = (e, i) => {
                const s = r();
                if (!n || !t.params.history.enabled) return;
                let a;
                a = t.params.url ? new URL(t.params.url) : s.location;
                const l = t.slides.eq(i);
                let c = o(l.attr("data-history"));
                if (t.params.history.root.length > 0) {
                  let i = t.params.history.root;
                  "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)),
                    (c = "".concat(i, "/").concat(e, "/").concat(c));
                } else
                  a.pathname.includes(e) || (c = "".concat(e, "/").concat(c));
                t.params.history.keepQuery && (c += a.search);
                const d = s.history.state;
                (d && d.value === c) ||
                  (t.params.history.replaceState
                    ? s.history.replaceState(
                        {
                          value: c,
                        },
                        null,
                        c
                      )
                    : s.history.pushState(
                        {
                          value: c,
                        },
                        null,
                        c
                      ));
              },
              d = (e, i, s) => {
                if (i)
                  for (let n = 0, r = t.slides.length; n < r; n += 1) {
                    const r = t.slides.eq(n);
                    if (
                      o(r.attr("data-history")) === i &&
                      !r.hasClass(t.params.slideDuplicateClass)
                    ) {
                      const i = r.index();
                      t.slideTo(i, e, s);
                    }
                  }
                else t.slideTo(0, e, s);
              },
              p = () => {
                (a = l(t.params.url)), d(t.params.speed, a.value, !1);
              };
            s("init", () => {
              t.params.history.enabled &&
                (() => {
                  const e = r();
                  if (t.params.history) {
                    if (!e.history || !e.history.pushState)
                      return (
                        (t.params.history.enabled = !1),
                        void (t.params.hashNavigation.enabled = !0)
                      );
                    (n = !0),
                      (a = l(t.params.url)),
                      (a.key || a.value) &&
                        (d(0, a.value, t.params.runCallbacksOnInit),
                        t.params.history.replaceState ||
                          e.addEventListener("popstate", p));
                  }
                })();
            }),
              s("destroy", () => {
                t.params.history.enabled &&
                  (() => {
                    const e = r();
                    t.params.history.replaceState ||
                      e.removeEventListener("popstate", p);
                  })();
              }),
              s("transitionEnd _freeModeNoMomentumRelease", () => {
                n && c(t.params.history.key, t.activeIndex);
              }),
              s("slideChange", () => {
                n && t.params.cssMode && c(t.params.history.key, t.activeIndex);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, emit: n, on: a } = e,
              o = !1;
            const l = s(),
              d = r();
            i({
              hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
              },
            });
            const p = () => {
                n("hashChange");
                const e = l.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                  const i = t.$wrapperEl
                    .children(
                      "."
                        .concat(t.params.slideClass, '[data-hash="')
                        .concat(e, '"]')
                    )
                    .index();
                  if (void 0 === i) return;
                  t.slideTo(i);
                }
              },
              h = () => {
                if (o && t.params.hashNavigation.enabled)
                  if (
                    t.params.hashNavigation.replaceState &&
                    d.history &&
                    d.history.replaceState
                  )
                    d.history.replaceState(
                      null,
                      null,
                      "#".concat(
                        t.slides.eq(t.activeIndex).attr("data-hash")
                      ) || !1
                    ),
                      n("hashSet");
                  else {
                    const e = t.slides.eq(t.activeIndex),
                      i = e.attr("data-hash") || e.attr("data-history");
                    (l.location.hash = i || ""), n("hashSet");
                  }
              };
            a("init", () => {
              t.params.hashNavigation.enabled &&
                (() => {
                  if (
                    !t.params.hashNavigation.enabled ||
                    (t.params.history && t.params.history.enabled)
                  )
                    return;
                  o = !0;
                  const e = l.location.hash.replace("#", "");
                  if (e) {
                    const i = 0;
                    for (let s = 0, n = t.slides.length; s < n; s += 1) {
                      const n = t.slides.eq(s);
                      if (
                        (n.attr("data-hash") || n.attr("data-history")) === e &&
                        !n.hasClass(t.params.slideDuplicateClass)
                      ) {
                        const e = n.index();
                        t.slideTo(e, i, t.params.runCallbacksOnInit, !0);
                      }
                    }
                  }
                  t.params.hashNavigation.watchState &&
                    c(d).on("hashchange", p);
                })();
            }),
              a("destroy", () => {
                t.params.hashNavigation.enabled &&
                  t.params.hashNavigation.watchState &&
                  c(d).off("hashchange", p);
              }),
              a("transitionEnd _freeModeNoMomentumRelease", () => {
                o && h();
              }),
              a("slideChange", () => {
                o && t.params.cssMode && h();
              });
          },
          function (e) {
            let t,
              { swiper: i, extendParams: n, on: r, emit: a } = e;
            function o() {
              const e = i.slides.eq(i.activeIndex);
              let s = i.params.autoplay.delay;
              e.attr("data-swiper-autoplay") &&
                (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
                clearTimeout(t),
                (t = p(() => {
                  let e;
                  i.params.autoplay.reverseDirection
                    ? i.params.loop
                      ? (i.loopFix(),
                        (e = i.slidePrev(i.params.speed, !0, !0)),
                        a("autoplay"))
                      : i.isBeginning
                      ? i.params.autoplay.stopOnLastSlide
                        ? c()
                        : ((e = i.slideTo(
                            i.slides.length - 1,
                            i.params.speed,
                            !0,
                            !0
                          )),
                          a("autoplay"))
                      : ((e = i.slidePrev(i.params.speed, !0, !0)),
                        a("autoplay"))
                    : i.params.loop
                    ? (i.loopFix(),
                      (e = i.slideNext(i.params.speed, !0, !0)),
                      a("autoplay"))
                    : i.isEnd
                    ? i.params.autoplay.stopOnLastSlide
                      ? c()
                      : ((e = i.slideTo(0, i.params.speed, !0, !0)),
                        a("autoplay"))
                    : ((e = i.slideNext(i.params.speed, !0, !0)),
                      a("autoplay")),
                    ((i.params.cssMode && i.autoplay.running) || !1 === e) &&
                      o();
                }, s));
            }
            function l() {
              return (
                void 0 === t &&
                !i.autoplay.running &&
                ((i.autoplay.running = !0), a("autoplayStart"), o(), !0)
              );
            }
            function c() {
              return (
                !!i.autoplay.running &&
                void 0 !== t &&
                (t && (clearTimeout(t), (t = void 0)),
                (i.autoplay.running = !1),
                a("autoplayStop"),
                !0)
              );
            }
            function d(e) {
              i.autoplay.running &&
                (i.autoplay.paused ||
                  (t && clearTimeout(t),
                  (i.autoplay.paused = !0),
                  0 !== e && i.params.autoplay.waitForTransition
                    ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                        i.$wrapperEl[0].addEventListener(e, u);
                      })
                    : ((i.autoplay.paused = !1), o())));
            }
            function h() {
              const e = s();
              "hidden" === e.visibilityState && i.autoplay.running && d(),
                "visible" === e.visibilityState &&
                  i.autoplay.paused &&
                  (o(), (i.autoplay.paused = !1));
            }
            function u(e) {
              i &&
                !i.destroyed &&
                i.$wrapperEl &&
                e.target === i.$wrapperEl[0] &&
                (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  i.$wrapperEl[0].removeEventListener(e, u);
                }),
                (i.autoplay.paused = !1),
                i.autoplay.running ? o() : c());
            }
            function f() {
              i.params.autoplay.disableOnInteraction
                ? c()
                : (a("autoplayPause"), d()),
                ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  i.$wrapperEl[0].removeEventListener(e, u);
                });
            }
            function m() {
              i.params.autoplay.disableOnInteraction ||
                ((i.autoplay.paused = !1), a("autoplayResume"), o());
            }
            (i.autoplay = {
              running: !1,
              paused: !1,
            }),
              n({
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1,
                },
              }),
              r("init", () => {
                i.params.autoplay.enabled &&
                  (l(),
                  s().addEventListener("visibilitychange", h),
                  i.params.autoplay.pauseOnMouseEnter &&
                    (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)));
              }),
              r("beforeTransitionStart", (e, t, s) => {
                i.autoplay.running &&
                  (s || !i.params.autoplay.disableOnInteraction
                    ? i.autoplay.pause(t)
                    : c());
              }),
              r("sliderFirstMove", () => {
                i.autoplay.running &&
                  (i.params.autoplay.disableOnInteraction ? c() : d());
              }),
              r("touchEnd", () => {
                i.params.cssMode &&
                  i.autoplay.paused &&
                  !i.params.autoplay.disableOnInteraction &&
                  o();
              }),
              r("destroy", () => {
                i.$el.off("mouseenter", f),
                  i.$el.off("mouseleave", m),
                  i.autoplay.running && c(),
                  s().removeEventListener("visibilitychange", h);
              }),
              Object.assign(i.autoplay, {
                pause: d,
                run: o,
                start: l,
                stop: c,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs",
              },
            });
            let n = !1,
              r = !1;
            function a() {
              const e = t.thumbs.swiper;
              if (!e || e.destroyed) return;
              const i = e.clickedIndex,
                s = e.clickedSlide;
              if (s && c(s).hasClass(t.params.thumbs.slideThumbActiveClass))
                return;
              if (null == i) return;
              let n;
              if (
                ((n = e.params.loop
                  ? parseInt(
                      c(e.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : i),
                t.params.loop)
              ) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
                  (t.loopFix(),
                  (t._clientLeft = t.$wrapperEl[0].clientLeft),
                  (e = t.activeIndex));
                const i = t.slides
                    .eq(e)
                    .prevAll('[data-swiper-slide-index="'.concat(n, '"]'))
                    .eq(0)
                    .index(),
                  s = t.slides
                    .eq(e)
                    .nextAll('[data-swiper-slide-index="'.concat(n, '"]'))
                    .eq(0)
                    .index();
                n = void 0 === i ? s : void 0 === s ? i : s - e < e - i ? s : i;
              }
              t.slideTo(n);
            }
            function o() {
              const { thumbs: e } = t.params;
              if (n) return !1;
              n = !0;
              const i = t.constructor;
              if (e.swiper instanceof i)
                (t.thumbs.swiper = e.swiper),
                  Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  });
              else if (f(e.swiper)) {
                const s = Object.assign({}, e.swiper);
                Object.assign(s, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                  (t.thumbs.swiper = new i(s)),
                  (r = !0);
              }
              return (
                t.thumbs.swiper.$el.addClass(
                  t.params.thumbs.thumbsContainerClass
                ),
                t.thumbs.swiper.on("tap", a),
                !0
              );
            }
            function l(e) {
              const i = t.thumbs.swiper;
              if (!i || i.destroyed) return;
              const s =
                "auto" === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView;
              let n = 1;
              const r = t.params.thumbs.slideThumbActiveClass;
              if (
                (t.params.slidesPerView > 1 &&
                  !t.params.centeredSlides &&
                  (n = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (n = 1),
                (n = Math.floor(n)),
                i.slides.removeClass(r),
                i.params.loop || (i.params.virtual && i.params.virtual.enabled))
              )
                for (let e = 0; e < n; e += 1)
                  i.$wrapperEl
                    .children(
                      '[data-swiper-slide-index="'.concat(t.realIndex + e, '"]')
                    )
                    .addClass(r);
              else
                for (let e = 0; e < n; e += 1)
                  i.slides.eq(t.realIndex + e).addClass(r);
              const a = t.params.thumbs.autoScrollOffset,
                o = a && !i.params.loop;
              if (t.realIndex !== i.realIndex || o) {
                let n,
                  r,
                  l = i.activeIndex;
                if (i.params.loop) {
                  i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                    (i.loopFix(),
                    (i._clientLeft = i.$wrapperEl[0].clientLeft),
                    (l = i.activeIndex));
                  const e = i.slides
                      .eq(l)
                      .prevAll(
                        '[data-swiper-slide-index="'.concat(t.realIndex, '"]')
                      )
                      .eq(0)
                      .index(),
                    s = i.slides
                      .eq(l)
                      .nextAll(
                        '[data-swiper-slide-index="'.concat(t.realIndex, '"]')
                      )
                      .eq(0)
                      .index();
                  (n =
                    void 0 === e
                      ? s
                      : void 0 === s
                      ? e
                      : s - l == l - e
                      ? i.params.slidesPerGroup > 1
                        ? s
                        : l
                      : s - l < l - e
                      ? s
                      : e),
                    (r = t.activeIndex > t.previousIndex ? "next" : "prev");
                } else
                  (n = t.realIndex),
                    (r = n > t.previousIndex ? "next" : "prev");
                o && (n += "next" === r ? a : -1 * a),
                  i.visibleSlidesIndexes &&
                    i.visibleSlidesIndexes.indexOf(n) < 0 &&
                    (i.params.centeredSlides
                      ? (n =
                          n > l
                            ? n - Math.floor(s / 2) + 1
                            : n + Math.floor(s / 2) - 1)
                      : n > l && i.params.slidesPerGroup,
                    i.slideTo(n, e ? 0 : void 0));
              }
            }
            (t.thumbs = {
              swiper: null,
            }),
              s("beforeInit", () => {
                const { thumbs: e } = t.params;
                e && e.swiper && (o(), l(!0));
              }),
              s("slideChange update resize observerUpdate", () => {
                l();
              }),
              s("setTransition", (e, i) => {
                const s = t.thumbs.swiper;
                s && !s.destroyed && s.setTransition(i);
              }),
              s("beforeDestroy", () => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && r && e.destroy();
              }),
              Object.assign(t.thumbs, {
                init: o,
                update: l,
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, emit: s, once: n } = e;
            i({
              freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: 0.02,
              },
            }),
              Object.assign(t, {
                freeMode: {
                  onTouchStart: function () {
                    const e = t.getTranslate();
                    t.setTranslate(e),
                      t.setTransition(0),
                      (t.touchEventsData.velocities.length = 0),
                      t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate,
                      });
                  },
                  onTouchMove: function () {
                    const { touchEventsData: e, touches: i } = t;
                    0 === e.velocities.length &&
                      e.velocities.push({
                        position: i[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime,
                      }),
                      e.velocities.push({
                        position: i[t.isHorizontal() ? "currentX" : "currentY"],
                        time: h(),
                      });
                  },
                  onTouchEnd: function (e) {
                    let { currentPos: i } = e;
                    const {
                        params: r,
                        $wrapperEl: a,
                        rtlTranslate: o,
                        snapGrid: l,
                        touchEventsData: c,
                      } = t,
                      d = h() - c.touchStartTime;
                    if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (i > -t.maxTranslate())
                      t.slides.length < l.length
                        ? t.slideTo(l.length - 1)
                        : t.slideTo(t.slides.length - 1);
                    else {
                      if (r.freeMode.momentum) {
                        if (c.velocities.length > 1) {
                          const e = c.velocities.pop(),
                            i = c.velocities.pop(),
                            s = e.position - i.position,
                            n = e.time - i.time;
                          (t.velocity = s / n),
                            (t.velocity /= 2),
                            Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                              (t.velocity = 0),
                            (n > 150 || h() - e.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= r.freeMode.momentumVelocityRatio),
                          (c.velocities.length = 0);
                        let e = 1e3 * r.freeMode.momentumRatio;
                        const i = t.velocity * e;
                        let d = t.translate + i;
                        o && (d = -d);
                        let p,
                          u = !1;
                        const f =
                          20 *
                          Math.abs(t.velocity) *
                          r.freeMode.momentumBounceRatio;
                        let m;
                        if (d < t.maxTranslate())
                          r.freeMode.momentumBounce
                            ? (d + t.maxTranslate() < -f &&
                                (d = t.maxTranslate() - f),
                              (p = t.maxTranslate()),
                              (u = !0),
                              (c.allowMomentumBounce = !0))
                            : (d = t.maxTranslate()),
                            r.loop && r.centeredSlides && (m = !0);
                        else if (d > t.minTranslate())
                          r.freeMode.momentumBounce
                            ? (d - t.minTranslate() > f &&
                                (d = t.minTranslate() + f),
                              (p = t.minTranslate()),
                              (u = !0),
                              (c.allowMomentumBounce = !0))
                            : (d = t.minTranslate()),
                            r.loop && r.centeredSlides && (m = !0);
                        else if (r.freeMode.sticky) {
                          let e;
                          for (let t = 0; t < l.length; t += 1)
                            if (l[t] > -d) {
                              e = t;
                              break;
                            }
                          (d =
                            Math.abs(l[e] - d) < Math.abs(l[e - 1] - d) ||
                            "next" === t.swipeDirection
                              ? l[e]
                              : l[e - 1]),
                            (d = -d);
                        }
                        if (
                          (m &&
                            n("transitionEnd", () => {
                              t.loopFix();
                            }),
                          0 !== t.velocity)
                        ) {
                          if (
                            ((e = o
                              ? Math.abs((-d - t.translate) / t.velocity)
                              : Math.abs((d - t.translate) / t.velocity)),
                            r.freeMode.sticky)
                          ) {
                            const i = Math.abs((o ? -d : d) - t.translate),
                              s = t.slidesSizesGrid[t.activeIndex];
                            e =
                              i < s
                                ? r.speed
                                : i < 2 * s
                                ? 1.5 * r.speed
                                : 2.5 * r.speed;
                          }
                        } else if (r.freeMode.sticky)
                          return void t.slideToClosest();
                        r.freeMode.momentumBounce && u
                          ? (t.updateProgress(p),
                            t.setTransition(e),
                            t.setTranslate(d),
                            t.transitionStart(!0, t.swipeDirection),
                            (t.animating = !0),
                            a.transitionEnd(() => {
                              t &&
                                !t.destroyed &&
                                c.allowMomentumBounce &&
                                (s("momentumBounce"),
                                t.setTransition(r.speed),
                                setTimeout(() => {
                                  t.setTranslate(p),
                                    a.transitionEnd(() => {
                                      t && !t.destroyed && t.transitionEnd();
                                    });
                                }, 0));
                            }))
                          : t.velocity
                          ? (s("_freeModeNoMomentumRelease"),
                            t.updateProgress(d),
                            t.setTransition(e),
                            t.setTranslate(d),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating ||
                              ((t.animating = !0),
                              a.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd();
                              })))
                          : t.updateProgress(d),
                          t.updateActiveIndex(),
                          t.updateSlidesClasses();
                      } else {
                        if (r.freeMode.sticky) return void t.slideToClosest();
                        r.freeMode && s("_freeModeNoMomentumRelease");
                      }
                      (!r.freeMode.momentum || d >= r.longSwipesMs) &&
                        (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses());
                    }
                  },
                },
              });
          },
          function (e) {
            let t,
              i,
              s,
              { swiper: n, extendParams: r } = e;
            r({
              grid: {
                rows: 1,
                fill: "column",
              },
            }),
              (n.grid = {
                initSlides: (e) => {
                  const { slidesPerView: r } = n.params,
                    { rows: a, fill: o } = n.params.grid;
                  (i = t / a),
                    (s = Math.floor(e / a)),
                    (t =
                      Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a),
                    "auto" !== r && "row" === o && (t = Math.max(t, r * a));
                },
                updateSlide: (e, r, a, o) => {
                  const { slidesPerGroup: l, spaceBetween: c } = n.params,
                    { rows: d, fill: p } = n.params.grid;
                  let h, u, f;
                  if ("row" === p && l > 1) {
                    const i = Math.floor(e / (l * d)),
                      s = e - d * l * i,
                      n =
                        0 === i
                          ? l
                          : Math.min(Math.ceil((a - i * d * l) / d), l);
                    (f = Math.floor(s / n)),
                      (u = s - f * n + i * l),
                      (h = u + (f * t) / d),
                      r.css({
                        "-webkit-order": h,
                        order: h,
                      });
                  } else
                    "column" === p
                      ? ((u = Math.floor(e / d)),
                        (f = e - u * d),
                        (u > s || (u === s && f === d - 1)) &&
                          ((f += 1), f >= d && ((f = 0), (u += 1))))
                      : ((f = Math.floor(e / i)), (u = e - f * i));
                  r.css(
                    o("margin-top"),
                    0 !== f ? c && "".concat(c, "px") : ""
                  );
                },
                updateWrapperSize: (e, i, s) => {
                  const {
                      spaceBetween: r,
                      centeredSlides: a,
                      roundLengths: o,
                    } = n.params,
                    { rows: l } = n.params.grid;
                  if (
                    ((n.virtualSize = (e + r) * t),
                    (n.virtualSize = Math.ceil(n.virtualSize / l) - r),
                    n.$wrapperEl.css({
                      [s("width")]: "".concat(n.virtualSize + r, "px"),
                    }),
                    a)
                  ) {
                    i.splice(0, i.length);
                    const e = [];
                    for (let t = 0; t < i.length; t += 1) {
                      let s = i[t];
                      o && (s = Math.floor(s)),
                        i[t] < n.virtualSize + i[0] && e.push(s);
                    }
                    i.push(...e);
                  }
                },
              });
          },
          function (e) {
            let { swiper: t } = e;
            Object.assign(t, {
              appendSlide: K.bind(t),
              prependSlide: Z.bind(t),
              addSlide: Q.bind(t),
              removeSlide: J.bind(t),
              removeAllSlides: ee.bind(t),
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              fadeEffect: {
                crossFade: !1,
                transformEl: null,
              },
            }),
              te({
                effect: "fade",
                swiper: t,
                on: s,
                setTranslate: () => {
                  const { slides: e } = t,
                    i = t.params.fadeEffect;
                  for (let s = 0; s < e.length; s += 1) {
                    const e = t.slides.eq(s);
                    let n = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (n -= t.translate);
                    let r = 0;
                    t.isHorizontal() || ((r = n), (n = 0));
                    const a = t.params.fadeEffect.crossFade
                      ? Math.max(1 - Math.abs(e[0].progress), 0)
                      : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    ie(i, e)
                      .css({
                        opacity: a,
                      })
                      .transform(
                        "translate3d(".concat(n, "px, ").concat(r, "px, 0px)")
                      );
                  }
                },
                setTransition: (e) => {
                  const { transformEl: i } = t.params.fadeEffect;
                  (i ? t.slides.find(i) : t.slides).transition(e),
                    se({
                      swiper: t,
                      duration: e,
                      transformEl: i,
                      allSlides: !0,
                    });
                },
                overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !t.params.cssMode,
                }),
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            });
            const n = (e, t, i) => {
              let s = i
                  ? e.find(".swiper-slide-shadow-left")
                  : e.find(".swiper-slide-shadow-top"),
                n = i
                  ? e.find(".swiper-slide-shadow-right")
                  : e.find(".swiper-slide-shadow-bottom");
              0 === s.length &&
                ((s = c(
                  '<div class="swiper-slide-shadow-'.concat(
                    i ? "left" : "top",
                    '"></div>'
                  )
                )),
                e.append(s)),
                0 === n.length &&
                  ((n = c(
                    '<div class="swiper-slide-shadow-'.concat(
                      i ? "right" : "bottom",
                      '"></div>'
                    )
                  )),
                  e.append(n)),
                s.length && (s[0].style.opacity = Math.max(-t, 0)),
                n.length && (n[0].style.opacity = Math.max(t, 0));
            };
            te({
              effect: "cube",
              swiper: t,
              on: s,
              setTranslate: () => {
                const {
                    $el: e,
                    $wrapperEl: i,
                    slides: s,
                    width: r,
                    height: a,
                    rtlTranslate: o,
                    size: l,
                    browser: d,
                  } = t,
                  p = t.params.cubeEffect,
                  h = t.isHorizontal(),
                  u = t.virtual && t.params.virtual.enabled;
                let f,
                  m = 0;
                p.shadow &&
                  (h
                    ? ((f = i.find(".swiper-cube-shadow")),
                      0 === f.length &&
                        ((f = c('<div class="swiper-cube-shadow"></div>')),
                        i.append(f)),
                      f.css({
                        height: "".concat(r, "px"),
                      }))
                    : ((f = e.find(".swiper-cube-shadow")),
                      0 === f.length &&
                        ((f = c('<div class="swiper-cube-shadow"></div>')),
                        e.append(f))));
                for (let e = 0; e < s.length; e += 1) {
                  const t = s.eq(e);
                  let i = e;
                  u && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
                  let r = 90 * i,
                    a = Math.floor(r / 360);
                  o && ((r = -r), (a = Math.floor(-r / 360)));
                  const c = Math.max(Math.min(t[0].progress, 1), -1);
                  let d = 0,
                    f = 0,
                    g = 0;
                  i % 4 == 0
                    ? ((d = 4 * -a * l), (g = 0))
                    : (i - 1) % 4 == 0
                    ? ((d = 0), (g = 4 * -a * l))
                    : (i - 2) % 4 == 0
                    ? ((d = l + 4 * a * l), (g = l))
                    : (i - 3) % 4 == 0 && ((d = -l), (g = 3 * l + 4 * l * a)),
                    o && (d = -d),
                    h || ((f = d), (d = 0));
                  const v = "rotateX("
                    .concat(h ? 0 : -r, "deg) rotateY(")
                    .concat(h ? r : 0, "deg) translate3d(")
                    .concat(d, "px, ")
                    .concat(f, "px, ")
                    .concat(g, "px)");
                  c <= 1 &&
                    c > -1 &&
                    ((m = 90 * i + 90 * c), o && (m = 90 * -i - 90 * c)),
                    t.transform(v),
                    p.slideShadows && n(t, c, h);
                }
                if (
                  (i.css({
                    "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
                    "transform-origin": "50% 50% -".concat(l / 2, "px"),
                  }),
                  p.shadow)
                )
                  if (h)
                    f.transform(
                      "translate3d(0px, "
                        .concat(r / 2 + p.shadowOffset, "px, ")
                        .concat(
                          -r / 2,
                          "px) rotateX(90deg) rotateZ(0deg) scale("
                        )
                        .concat(p.shadowScale, ")")
                    );
                  else {
                    const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                      t =
                        1.5 -
                        (Math.sin((2 * e * Math.PI) / 360) / 2 +
                          Math.cos((2 * e * Math.PI) / 360) / 2),
                      i = p.shadowScale,
                      s = p.shadowScale / t,
                      n = p.shadowOffset;
                    f.transform(
                      "scale3d("
                        .concat(i, ", 1, ")
                        .concat(s, ") translate3d(0px, ")
                        .concat(a / 2 + n, "px, ")
                        .concat(-a / 2 / s, "px) rotateX(-90deg)")
                    );
                  }
                const g = d.isSafari || d.isWebView ? -l / 2 : 0;
                i.transform(
                  "translate3d(0px,0,"
                    .concat(g, "px) rotateX(")
                    .concat(t.isHorizontal() ? 0 : m, "deg) rotateY(")
                    .concat(t.isHorizontal() ? -m : 0, "deg)")
                ),
                  i[0].style.setProperty(
                    "--swiper-cube-translate-z",
                    "".concat(g, "px")
                  );
              },
              setTransition: (e) => {
                const { $el: i, slides: s } = t;
                s
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e),
                  t.params.cubeEffect.shadow &&
                    !t.isHorizontal() &&
                    i.find(".swiper-cube-shadow").transition(e);
              },
              recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t) => {
                  const i = Math.max(Math.min(t.progress, 1), -1);
                  n(c(t), i, e);
                });
              },
              getEffectParams: () => t.params.cubeEffect,
              perspective: () => !0,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              }),
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null,
              },
            });
            const n = (e, i, s) => {
              let n = t.isHorizontal()
                  ? e.find(".swiper-slide-shadow-left")
                  : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal()
                  ? e.find(".swiper-slide-shadow-right")
                  : e.find(".swiper-slide-shadow-bottom");
              0 === n.length &&
                (n = ne(s, e, t.isHorizontal() ? "left" : "top")),
                0 === r.length &&
                  (r = ne(s, e, t.isHorizontal() ? "right" : "bottom")),
                n.length && (n[0].style.opacity = Math.max(-i, 0)),
                r.length && (r[0].style.opacity = Math.max(i, 0));
            };
            te({
              effect: "flip",
              swiper: t,
              on: s,
              setTranslate: () => {
                const { slides: e, rtlTranslate: i } = t,
                  s = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                  const a = e.eq(r);
                  let o = a[0].progress;
                  t.params.flipEffect.limitRotation &&
                    (o = Math.max(Math.min(a[0].progress, 1), -1));
                  const l = a[0].swiperSlideOffset;
                  let c = -180 * o,
                    d = 0,
                    p = t.params.cssMode ? -l - t.translate : -l,
                    h = 0;
                  t.isHorizontal()
                    ? i && (c = -c)
                    : ((h = p), (p = 0), (d = -c), (c = 0)),
                    (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length),
                    s.slideShadows && n(a, o, s);
                  const u = "translate3d("
                    .concat(p, "px, ")
                    .concat(h, "px, 0px) rotateX(")
                    .concat(d, "deg) rotateY(")
                    .concat(c, "deg)");
                  ie(s, a).transform(u);
                }
              },
              setTransition: (e) => {
                const { transformEl: i } = t.params.flipEffect;
                (i ? t.slides.find(i) : t.slides)
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e),
                  se({
                    swiper: t,
                    duration: e,
                    transformEl: i,
                  });
              },
              recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((i) => {
                  const s = c(i);
                  let r = s[0].progress;
                  t.params.flipEffect.limitRotation &&
                    (r = Math.max(Math.min(i.progress, 1), -1)),
                    n(s, r, e);
                });
              },
              getEffectParams: () => t.params.flipEffect,
              perspective: () => !0,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode,
              }),
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null,
              },
            }),
              te({
                effect: "coverflow",
                swiper: t,
                on: s,
                setTranslate: () => {
                  const {
                      width: e,
                      height: i,
                      slides: s,
                      slidesSizesGrid: n,
                    } = t,
                    r = t.params.coverflowEffect,
                    a = t.isHorizontal(),
                    o = t.translate,
                    l = a ? e / 2 - o : i / 2 - o,
                    c = a ? r.rotate : -r.rotate,
                    d = r.depth;
                  for (let e = 0, t = s.length; e < t; e += 1) {
                    const t = s.eq(e),
                      i = n[e],
                      o = (l - t[0].swiperSlideOffset - i / 2) / i,
                      p =
                        "function" == typeof r.modifier
                          ? r.modifier(o)
                          : o * r.modifier;
                    let h = a ? c * p : 0,
                      u = a ? 0 : c * p,
                      f = -d * Math.abs(p),
                      m = r.stretch;
                    "string" == typeof m &&
                      -1 !== m.indexOf("%") &&
                      (m = (parseFloat(r.stretch) / 100) * i);
                    let g = a ? 0 : m * p,
                      v = a ? m * p : 0,
                      y = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < 0.001 && (v = 0),
                      Math.abs(g) < 0.001 && (g = 0),
                      Math.abs(f) < 0.001 && (f = 0),
                      Math.abs(h) < 0.001 && (h = 0),
                      Math.abs(u) < 0.001 && (u = 0),
                      Math.abs(y) < 0.001 && (y = 0);
                    const b = "translate3d("
                      .concat(v, "px,")
                      .concat(g, "px,")
                      .concat(f, "px)  rotateX(")
                      .concat(u, "deg) rotateY(")
                      .concat(h, "deg) scale(")
                      .concat(y, ")");
                    if (
                      (ie(r, t).transform(b),
                      (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                      r.slideShadows)
                    ) {
                      let e = a
                          ? t.find(".swiper-slide-shadow-left")
                          : t.find(".swiper-slide-shadow-top"),
                        i = a
                          ? t.find(".swiper-slide-shadow-right")
                          : t.find(".swiper-slide-shadow-bottom");
                      0 === e.length && (e = ne(r, t, a ? "left" : "top")),
                        0 === i.length &&
                          (i = ne(r, t, a ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = p > 0 ? p : 0),
                        i.length && (i[0].style.opacity = -p > 0 ? -p : 0);
                    }
                  }
                },
                setTransition: (e) => {
                  const { transformEl: i } = t.params.coverflowEffect;
                  (i ? t.slides.find(i) : t.slides)
                    .transition(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e);
                },
                perspective: () => !0,
                overwriteParams: () => ({
                  watchSlidesProgress: !0,
                }),
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1,
                },
                next: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1,
                },
              },
            });
            const n = (e) => ("string" == typeof e ? e : "".concat(e, "px"));
            te({
              effect: "creative",
              swiper: t,
              on: s,
              setTranslate: () => {
                const { slides: e, $wrapperEl: i, slidesSizesGrid: s } = t,
                  r = t.params.creativeEffect,
                  { progressMultiplier: a } = r,
                  o = t.params.centeredSlides;
                if (o) {
                  const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                  i.transform("translateX(calc(50% - ".concat(e, "px))"));
                }
                for (let i = 0; i < e.length; i += 1) {
                  const s = e.eq(i),
                    l = s[0].progress,
                    c = Math.min(
                      Math.max(s[0].progress, -r.limitProgress),
                      r.limitProgress
                    );
                  let d = c;
                  o ||
                    (d = Math.min(
                      Math.max(s[0].originalProgress, -r.limitProgress),
                      r.limitProgress
                    ));
                  const p = s[0].swiperSlideOffset,
                    h = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                    u = [0, 0, 0];
                  let f = !1;
                  t.isHorizontal() || ((h[1] = h[0]), (h[0] = 0));
                  let m = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1,
                  };
                  c < 0
                    ? ((m = r.next), (f = !0))
                    : c > 0 && ((m = r.prev), (f = !0)),
                    h.forEach((e, t) => {
                      h[t] = "calc("
                        .concat(e, "px + (")
                        .concat(n(m.translate[t]), " * ")
                        .concat(Math.abs(c * a), "))");
                    }),
                    u.forEach((e, t) => {
                      u[t] = m.rotate[t] * Math.abs(c * a);
                    }),
                    (s[0].style.zIndex = -Math.abs(Math.round(l)) + e.length);
                  const g = h.join(", "),
                    v = "rotateX("
                      .concat(u[0], "deg) rotateY(")
                      .concat(u[1], "deg) rotateZ(")
                      .concat(u[2], "deg)"),
                    y = "scale(".concat(
                      d < 0
                        ? 1 + (1 - m.scale) * d * a
                        : 1 - (1 - m.scale) * d * a,
                      ")"
                    ),
                    b =
                      d < 0
                        ? 1 + (1 - m.opacity) * d * a
                        : 1 - (1 - m.opacity) * d * a,
                    w = "translate3d(".concat(g, ") ").concat(v, " ").concat(y);
                  if ((f && m.shadow) || !f) {
                    let e = s.children(".swiper-slide-shadow");
                    if (
                      (0 === e.length && m.shadow && (e = ne(r, s)), e.length)
                    ) {
                      const t = r.shadowPerProgress
                        ? c * (1 / r.limitProgress)
                        : c;
                      e[0].style.opacity = Math.min(
                        Math.max(Math.abs(t), 0),
                        1
                      );
                    }
                  }
                  const x = ie(r, s);
                  x.transform(w).css({
                    opacity: b,
                  }),
                    m.origin && x.css("transform-origin", m.origin);
                }
              },
              setTransition: (e) => {
                const { transformEl: i } = t.params.creativeEffect;
                (i ? t.slides.find(i) : t.slides)
                  .transition(e)
                  .find(".swiper-slide-shadow")
                  .transition(e),
                  se({
                    swiper: t,
                    duration: e,
                    transformEl: i,
                    allSlides: !0,
                  });
              },
              perspective: () => t.params.creativeEffect.perspective,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode,
              }),
            });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s } = e;
            i({
              cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0,
              },
            }),
              te({
                effect: "cards",
                swiper: t,
                on: s,
                setTranslate: () => {
                  const { slides: e, activeIndex: i } = t,
                    s = t.params.cardsEffect,
                    { startTranslate: n, isTouched: r } = t.touchEventsData,
                    a = t.translate;
                  for (let o = 0; o < e.length; o += 1) {
                    const l = e.eq(o),
                      c = l[0].progress,
                      d = Math.min(Math.max(c, -4), 4);
                    let p = l[0].swiperSlideOffset;
                    t.params.centeredSlides &&
                      !t.params.cssMode &&
                      t.$wrapperEl.transform(
                        "translateX(".concat(t.minTranslate(), "px)")
                      ),
                      t.params.centeredSlides &&
                        t.params.cssMode &&
                        (p -= e[0].swiperSlideOffset);
                    let h = t.params.cssMode ? -p - t.translate : -p,
                      u = 0;
                    const f = -100 * Math.abs(d);
                    let m = 1,
                      g = -2 * d,
                      v = 8 - 0.75 * Math.abs(d);
                    const y =
                        t.virtual && t.params.virtual.enabled
                          ? t.virtual.from + o
                          : o,
                      b =
                        (y === i || y === i - 1) &&
                        d > 0 &&
                        d < 1 &&
                        (r || t.params.cssMode) &&
                        a < n,
                      w =
                        (y === i || y === i + 1) &&
                        d < 0 &&
                        d > -1 &&
                        (r || t.params.cssMode) &&
                        a > n;
                    if (b || w) {
                      const e =
                        (1 - Math.abs((Math.abs(d) - 0.5) / 0.5)) ** 0.5;
                      (g += -28 * d * e),
                        (m += -0.5 * e),
                        (v += 96 * e),
                        (u = -25 * e * Math.abs(d) + "%");
                    }
                    if (
                      ((h =
                        d < 0
                          ? "calc("
                              .concat(h, "px + (")
                              .concat(v * Math.abs(d), "%))")
                          : d > 0
                          ? "calc("
                              .concat(h, "px + (-")
                              .concat(v * Math.abs(d), "%))")
                          : "".concat(h, "px")),
                      !t.isHorizontal())
                    ) {
                      const e = u;
                      (u = h), (h = e);
                    }
                    const x =
                        d < 0 ? "" + (1 + (1 - m) * d) : "" + (1 - (1 - m) * d),
                      S = "\n        translate3d("
                        .concat(h, ", ")
                        .concat(u, ", ")
                        .concat(f, "px)\n        rotateZ(")
                        .concat(s.rotate ? g : 0, "deg)\n        scale(")
                        .concat(x, ")\n      ");
                    if (s.slideShadows) {
                      let e = l.find(".swiper-slide-shadow");
                      0 === e.length && (e = ne(s, l)),
                        e.length &&
                          (e[0].style.opacity = Math.min(
                            Math.max((Math.abs(d) - 0.5) / 0.5, 0),
                            1
                          ));
                    }
                    (l[0].style.zIndex = -Math.abs(Math.round(c)) + e.length),
                      ie(s, l).transform(S);
                  }
                },
                setTransition: (e) => {
                  const { transformEl: i } = t.params.cardsEffect;
                  (i ? t.slides.find(i) : t.slides)
                    .transition(e)
                    .find(".swiper-slide-shadow")
                    .transition(e),
                    se({
                      swiper: t,
                      duration: e,
                      transformEl: i,
                    });
                },
                perspective: () => !0,
                overwriteParams: () => ({
                  watchSlidesProgress: !0,
                  virtualTranslate: !t.params.cssMode,
                }),
              });
          },
        ];
        return V.use(re), V;
      });
    }).call(this, i(4)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", {
            enumerable: !0,
          }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, i) {
    var s = i(6),
      n = i(8),
      r = i(9),
      a = i(13),
      o = i(67),
      l = i(22),
      c = l("iterator"),
      d = l("toStringTag"),
      p = a.values,
      h = function (e, t) {
        if (e) {
          if (e[c] !== p)
            try {
              o(e, c, p);
            } catch (t) {
              e[c] = p;
            }
          if ((e[d] || o(e, d, t), n[t]))
            for (var i in a)
              if (e[i] !== a[i])
                try {
                  o(e, i, a[i]);
                } catch (t) {
                  e[i] = a[i];
                }
        }
      };
    for (var u in n) h(s[u] && s[u].prototype, u);
    h(r, "DOMTokenList");
  },
  function (e, t, i) {
    (function (t) {
      var i = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        i("object" == typeof globalThis && globalThis) ||
        i("object" == typeof window && window) ||
        i("object" == typeof self && self) ||
        i("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }).call(this, i(7));
  },
  function (e, t) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (i = window);
    }
    e.exports = i;
  },
  function (e, t) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (e, t, i) {
    var s = i(10)("span").classList,
      n = s && s.constructor && s.constructor.prototype;
    e.exports = n === Object.prototype ? void 0 : n;
  },
  function (e, t, i) {
    var s = i(6),
      n = i(11),
      r = s.document,
      a = n(r) && n(r.createElement);
    e.exports = function (e) {
      return a ? r.createElement(e) : {};
    };
  },
  function (e, t, i) {
    var s = i(12);
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : s(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "function" == typeof e;
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(14),
      n = i(21),
      r = i(63),
      a = i(64),
      o = i(40).f,
      l = i(69),
      c = i(24),
      d = i(38),
      p = "Array Iterator",
      h = a.set,
      u = a.getterFor(p);
    e.exports = l(
      Array,
      "Array",
      function (e, t) {
        h(this, {
          type: p,
          target: s(e),
          index: 0,
          kind: t,
        });
      },
      function () {
        var e = u(this),
          t = e.target,
          i = e.kind,
          s = e.index++;
        return !t || s >= t.length
          ? ((e.target = void 0),
            {
              value: void 0,
              done: !0,
            })
          : "keys" == i
          ? {
              value: s,
              done: !1,
            }
          : "values" == i
          ? {
              value: t[s],
              done: !1,
            }
          : {
              value: [s, t[s]],
              done: !1,
            };
      },
      "values"
    );
    var f = (r.Arguments = r.Array);
    if ((n("keys"), n("values"), n("entries"), !c && d && "values" !== f.name))
      try {
        o(f, "name", {
          value: "values",
        });
      } catch (e) {}
  },
  function (e, t, i) {
    var s = i(15),
      n = i(20);
    e.exports = function (e) {
      return s(n(e));
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(18),
      r = i(19),
      a = Object,
      o = s("".split);
    e.exports = n(function () {
      return !a("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == r(e) ? o(e, "") : a(e);
        }
      : a;
  },
  function (e, t, i) {
    var s = i(17),
      n = Function.prototype,
      r = n.bind,
      a = n.call,
      o = s && r.bind(a, a);
    e.exports = s
      ? function (e) {
          return e && o(e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return a.apply(e, arguments);
            }
          );
        };
  },
  function (e, t, i) {
    var s = i(18);
    e.exports = !s(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    });
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = s({}.toString),
      r = s("".slice);
    e.exports = function (e) {
      return r(n(e), 8, -1);
    };
  },
  function (e, t) {
    var i = TypeError;
    e.exports = function (e) {
      if (null == e) throw i("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, i) {
    var s = i(22),
      n = i(35),
      r = i(40).f,
      a = s("unscopables"),
      o = Array.prototype;
    null == o[a] &&
      r(o, a, {
        configurable: !0,
        value: n(null),
      }),
      (e.exports = function (e) {
        o[a][e] = !0;
      });
  },
  function (e, t, i) {
    var s = i(6),
      n = i(23),
      r = i(27),
      a = i(29),
      o = i(30),
      l = i(34),
      c = n("wks"),
      d = s.Symbol,
      p = d && d.for,
      h = l ? d : (d && d.withoutSetter) || a;
    e.exports = function (e) {
      if (!r(c, e) || (!o && "string" != typeof c[e])) {
        var t = "Symbol." + e;
        o && r(d, e) ? (c[e] = d[e]) : (c[e] = l && p ? p(t) : h(t));
      }
      return c[e];
    };
  },
  function (e, t, i) {
    var s = i(24),
      n = i(25);
    (e.exports = function (e, t) {
      return n[e] || (n[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.23.3",
      mode: s ? "pure" : "global",
      copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, i) {
    var s = i(6),
      n = i(26),
      r = "__core-js_shared__",
      a = s[r] || n(r, {});
    e.exports = a;
  },
  function (e, t, i) {
    var s = i(6),
      n = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        n(s, e, {
          value: t,
          configurable: !0,
          writable: !0,
        });
      } catch (i) {
        s[e] = t;
      }
      return t;
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(28),
      r = s({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return r(n(e), t);
      };
  },
  function (e, t, i) {
    var s = i(20),
      n = Object;
    e.exports = function (e) {
      return n(s(e));
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = 0,
      r = Math.random(),
      a = s((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++n + r, 36);
    };
  },
  function (e, t, i) {
    var s = i(31),
      n = i(18);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && s && s < 41)
        );
      });
  },
  function (e, t, i) {
    var s,
      n,
      r = i(6),
      a = i(32),
      o = r.process,
      l = r.Deno,
      c = (o && o.versions) || (l && l.version),
      d = c && c.v8;
    d && (n = (s = d.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])),
      !n &&
        a &&
        (!(s = a.match(/Edge\/(\d+)/)) || s[1] >= 74) &&
        (s = a.match(/Chrome\/(\d+)/)) &&
        (n = +s[1]),
      (e.exports = n);
  },
  function (e, t, i) {
    var s = i(33);
    e.exports = s("navigator", "userAgent") || "";
  },
  function (e, t, i) {
    var s = i(6),
      n = i(12),
      r = function (e) {
        return n(e) ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? r(s[e]) : s[e] && s[e][t];
    };
  },
  function (e, t, i) {
    var s = i(30);
    e.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, i) {
    var s,
      n = i(36),
      r = i(37),
      a = i(60),
      o = i(59),
      l = i(61),
      c = i(10),
      d = i(62),
      p = d("IE_PROTO"),
      h = function () {},
      u = function (e) {
        return "<script>" + e + "</" + "script>";
      },
      f = function (e) {
        e.write(u("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      m = function () {
        try {
          s = new ActiveXObject("htmlfile");
        } catch (e) {}
        m =
          "undefined" != typeof document
            ? document.domain && s
              ? f(s)
              : (function () {
                  var e,
                    t = c("iframe");
                  return (
                    (t.style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(u("document.F=Object")),
                    e.close(),
                    e.F
                  );
                })()
            : f(s);
        for (var e = a.length; e--; ) delete m.prototype[a[e]];
        return m();
      };
    (o[p] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var i;
          return (
            null !== e
              ? ((h.prototype = n(e)),
                (i = new h()),
                (h.prototype = null),
                (i[p] = e))
              : (i = m()),
            void 0 === t ? i : r.f(i, t)
          );
        });
  },
  function (e, t, i) {
    var s = i(11),
      n = String,
      r = TypeError;
    e.exports = function (e) {
      if (s(e)) return e;
      throw r(n(e) + " is not an object");
    };
  },
  function (e, t, i) {
    var s = i(38),
      n = i(39),
      r = i(40),
      a = i(36),
      o = i(14),
      l = i(51);
    t.f =
      s && !n
        ? Object.defineProperties
        : function (e, t) {
            a(e);
            for (var i, s = o(t), n = l(t), c = n.length, d = 0; c > d; )
              r.f(e, (i = n[d++]), s[i]);
            return e;
          };
  },
  function (e, t, i) {
    var s = i(18);
    e.exports = !s(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t, i) {
    var s = i(38),
      n = i(18);
    e.exports =
      s &&
      n(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  function (e, t, i) {
    var s = i(38),
      n = i(41),
      r = i(39),
      a = i(36),
      o = i(42),
      l = TypeError,
      c = Object.defineProperty,
      d = Object.getOwnPropertyDescriptor,
      p = "enumerable",
      h = "configurable",
      u = "writable";
    t.f = s
      ? r
        ? function (e, t, i) {
            if (
              (a(e),
              (t = o(t)),
              a(i),
              "function" == typeof e &&
                "prototype" === t &&
                "value" in i &&
                u in i &&
                !i.writable)
            ) {
              var s = d(e, t);
              s &&
                s.writable &&
                ((e[t] = i.value),
                (i = {
                  configurable: h in i ? i.configurable : s.configurable,
                  enumerable: p in i ? i.enumerable : s.enumerable,
                  writable: !1,
                }));
            }
            return c(e, t, i);
          }
        : c
      : function (e, t, i) {
          if ((a(e), (t = o(t)), a(i), n))
            try {
              return c(e, t, i);
            } catch (e) {}
          if ("get" in i || "set" in i) throw l("Accessors not supported");
          return "value" in i && (e[t] = i.value), e;
        };
  },
  function (e, t, i) {
    var s = i(38),
      n = i(18),
      r = i(10);
    e.exports =
      !s &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(r("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, i) {
    var s = i(43),
      n = i(45);
    e.exports = function (e) {
      var t = s(e, "string");
      return n(t) ? t : t + "";
    };
  },
  function (e, t, i) {
    var s = i(44),
      n = i(11),
      r = i(45),
      a = i(47),
      o = i(50),
      l = i(22),
      c = TypeError,
      d = l("toPrimitive");
    e.exports = function (e, t) {
      if (!n(e) || r(e)) return e;
      var i,
        l = a(e, d);
      if (l) {
        if ((void 0 === t && (t = "default"), (i = s(l, e, t)), !n(i) || r(i)))
          return i;
        throw c("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), o(e, t);
    };
  },
  function (e, t, i) {
    var s = i(17),
      n = Function.prototype.call;
    e.exports = s
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (e, t, i) {
    var s = i(33),
      n = i(12),
      r = i(46),
      a = i(34),
      o = Object;
    e.exports = a
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = s("Symbol");
          return n(t) && r(t.prototype, o(e));
        };
  },
  function (e, t, i) {
    var s = i(16);
    e.exports = s({}.isPrototypeOf);
  },
  function (e, t, i) {
    var s = i(48);
    e.exports = function (e, t) {
      var i = e[t];
      return null == i ? void 0 : s(i);
    };
  },
  function (e, t, i) {
    var s = i(12),
      n = i(49),
      r = TypeError;
    e.exports = function (e) {
      if (s(e)) return e;
      throw r(n(e) + " is not a function");
    };
  },
  function (e, t) {
    var i = String;
    e.exports = function (e) {
      try {
        return i(e);
      } catch (e) {
        return "Object";
      }
    };
  },
  function (e, t, i) {
    var s = i(44),
      n = i(12),
      r = i(11),
      a = TypeError;
    e.exports = function (e, t) {
      var i, o;
      if ("string" === t && n((i = e.toString)) && !r((o = s(i, e)))) return o;
      if (n((i = e.valueOf)) && !r((o = s(i, e)))) return o;
      if ("string" !== t && n((i = e.toString)) && !r((o = s(i, e)))) return o;
      throw a("Can't convert object to primitive value");
    };
  },
  function (e, t, i) {
    var s = i(52),
      n = i(60);
    e.exports =
      Object.keys ||
      function (e) {
        return s(e, n);
      };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(27),
      r = i(14),
      a = i(53).indexOf,
      o = i(59),
      l = s([].push);
    e.exports = function (e, t) {
      var i,
        s = r(e),
        c = 0,
        d = [];
      for (i in s) !n(o, i) && n(s, i) && l(d, i);
      for (; t.length > c; ) n(s, (i = t[c++])) && (~a(d, i) || l(d, i));
      return d;
    };
  },
  function (e, t, i) {
    var s = i(14),
      n = i(54),
      r = i(57),
      a = function (e) {
        return function (t, i, a) {
          var o,
            l = s(t),
            c = r(l),
            d = n(a, c);
          if (e && i != i) {
            for (; c > d; ) if ((o = l[d++]) != o) return !0;
          } else
            for (; c > d; d++)
              if ((e || d in l) && l[d] === i) return e || d || 0;
          return !e && -1;
        };
      };
    e.exports = {
      includes: a(!0),
      indexOf: a(!1),
    };
  },
  function (e, t, i) {
    var s = i(55),
      n = Math.max,
      r = Math.min;
    e.exports = function (e, t) {
      var i = s(e);
      return i < 0 ? n(i + t, 0) : r(i, t);
    };
  },
  function (e, t, i) {
    var s = i(56);
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : s(t);
    };
  },
  function (e, t) {
    var i = Math.ceil,
      s = Math.floor;
    e.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? s : i)(t);
      };
  },
  function (e, t, i) {
    var s = i(58);
    e.exports = function (e) {
      return s(e.length);
    };
  },
  function (e, t, i) {
    var s = i(55),
      n = Math.min;
    e.exports = function (e) {
      return e > 0 ? n(s(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t, i) {
    var s = i(33);
    e.exports = s("document", "documentElement");
  },
  function (e, t, i) {
    var s = i(23),
      n = i(29),
      r = s("keys");
    e.exports = function (e) {
      return r[e] || (r[e] = n(e));
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, i) {
    var s,
      n,
      r,
      a = i(65),
      o = i(6),
      l = i(16),
      c = i(11),
      d = i(67),
      p = i(27),
      h = i(25),
      u = i(62),
      f = i(59),
      m = "Object already initialized",
      g = o.TypeError,
      v = o.WeakMap;
    if (a || h.state) {
      var y = h.state || (h.state = new v()),
        b = l(y.get),
        w = l(y.has),
        x = l(y.set);
      (s = function (e, t) {
        if (w(y, e)) throw new g(m);
        return (t.facade = e), x(y, e, t), t;
      }),
        (n = function (e) {
          return b(y, e) || {};
        }),
        (r = function (e) {
          return w(y, e);
        });
    } else {
      var S = u("state");
      (f[S] = !0),
        (s = function (e, t) {
          if (p(e, S)) throw new g(m);
          return (t.facade = e), d(e, S, t), t;
        }),
        (n = function (e) {
          return p(e, S) ? e[S] : {};
        }),
        (r = function (e) {
          return p(e, S);
        });
    }
    e.exports = {
      set: s,
      get: n,
      has: r,
      enforce: function (e) {
        return r(e) ? n(e) : s(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var i;
          if (!c(t) || (i = n(t)).type !== e)
            throw g("Incompatible receiver, " + e + " required");
          return i;
        };
      },
    };
  },
  function (e, t, i) {
    var s = i(6),
      n = i(12),
      r = i(66),
      a = s.WeakMap;
    e.exports = n(a) && /native code/.test(r(a));
  },
  function (e, t, i) {
    var s = i(16),
      n = i(12),
      r = i(25),
      a = s(Function.toString);
    n(r.inspectSource) ||
      (r.inspectSource = function (e) {
        return a(e);
      }),
      (e.exports = r.inspectSource);
  },
  function (e, t, i) {
    var s = i(38),
      n = i(40),
      r = i(68);
    e.exports = s
      ? function (e, t, i) {
          return n.f(e, t, r(1, i));
        }
      : function (e, t, i) {
          return (e[t] = i), e;
        };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(70),
      n = i(44),
      r = i(24),
      a = i(75),
      o = i(12),
      l = i(81),
      c = i(83),
      d = i(86),
      p = i(85),
      h = i(67),
      u = i(73),
      f = i(22),
      m = i(63),
      g = i(82),
      v = a.PROPER,
      y = a.CONFIGURABLE,
      b = g.IteratorPrototype,
      w = g.BUGGY_SAFARI_ITERATORS,
      x = f("iterator"),
      S = "keys",
      T = "values",
      E = "entries",
      C = function () {
        return this;
      };
    e.exports = function (e, t, i, a, f, g, P) {
      l(i, t, a);
      var M,
        k,
        O,
        L = function (e) {
          if (e === f && D) return D;
          if (!w && e in I) return I[e];
          switch (e) {
            case S:
            case T:
            case E:
              return function () {
                return new i(this, e);
              };
          }
          return function () {
            return new i(this);
          };
        },
        A = t + " Iterator",
        z = !1,
        I = e.prototype,
        $ = I[x] || I["@@iterator"] || (f && I[f]),
        D = (!w && $) || L(f),
        Y = ("Array" == t && I.entries) || $;
      if (
        (Y &&
          (M = c(Y.call(new e()))) !== Object.prototype &&
          M.next &&
          (r || c(M) === b || (d ? d(M, b) : o(M[x]) || u(M, x, C)),
          p(M, A, !0, !0),
          r && (m[A] = C)),
        v &&
          f == T &&
          $ &&
          $.name !== T &&
          (!r && y
            ? h(I, "name", T)
            : ((z = !0),
              (D = function () {
                return n($, this);
              }))),
        f)
      )
        if (
          ((k = {
            values: L(T),
            keys: g ? D : L(S),
            entries: L(E),
          }),
          P)
        )
          for (O in k) (w || z || !(O in I)) && u(I, O, k[O]);
        else
          s(
            {
              target: t,
              proto: !0,
              forced: w || z,
            },
            k
          );
      return (
        (r && !P) ||
          I[x] === D ||
          u(I, x, D, {
            name: f,
          }),
        (m[t] = D),
        k
      );
    };
  },
  function (e, t, i) {
    var s = i(6),
      n = i(71).f,
      r = i(67),
      a = i(73),
      o = i(26),
      l = i(76),
      c = i(80);
    e.exports = function (e, t) {
      var i,
        d,
        p,
        h,
        u,
        f = e.target,
        m = e.global,
        g = e.stat;
      if ((i = m ? s : g ? s[f] || o(f, {}) : (s[f] || {}).prototype))
        for (d in t) {
          if (
            ((h = t[d]),
            (p = e.dontCallGetSet ? (u = n(i, d)) && u.value : i[d]),
            !c(m ? d : f + (g ? "." : "#") + d, e.forced) && void 0 !== p)
          ) {
            if (typeof h == typeof p) continue;
            l(h, p);
          }
          (e.sham || (p && p.sham)) && r(h, "sham", !0), a(i, d, h, e);
        }
    };
  },
  function (e, t, i) {
    var s = i(38),
      n = i(44),
      r = i(72),
      a = i(68),
      o = i(14),
      l = i(42),
      c = i(27),
      d = i(41),
      p = Object.getOwnPropertyDescriptor;
    t.f = s
      ? p
      : function (e, t) {
          if (((e = o(e)), (t = l(t)), d))
            try {
              return p(e, t);
            } catch (e) {}
          if (c(e, t)) return a(!n(r.f, e, t), e[t]);
        };
  },
  function (e, t, i) {
    "use strict";
    var s = {}.propertyIsEnumerable,
      n = Object.getOwnPropertyDescriptor,
      r =
        n &&
        !s.call(
          {
            1: 2,
          },
          1
        );
    t.f = r
      ? function (e) {
          var t = n(this, e);
          return !!t && t.enumerable;
        }
      : s;
  },
  function (e, t, i) {
    var s = i(12),
      n = i(40),
      r = i(74),
      a = i(26);
    e.exports = function (e, t, i, o) {
      o || (o = {});
      var l = o.enumerable,
        c = void 0 !== o.name ? o.name : t;
      if ((s(i) && r(i, c, o), o.global)) l ? (e[t] = i) : a(t, i);
      else {
        try {
          o.unsafe ? e[t] && (l = !0) : delete e[t];
        } catch (e) {}
        l
          ? (e[t] = i)
          : n.f(e, t, {
              value: i,
              enumerable: !1,
              configurable: !o.nonConfigurable,
              writable: !o.nonWritable,
            });
      }
      return e;
    };
  },
  function (e, t, i) {
    var s = i(18),
      n = i(12),
      r = i(27),
      a = i(38),
      o = i(75).CONFIGURABLE,
      l = i(66),
      c = i(64),
      d = c.enforce,
      p = c.get,
      h = Object.defineProperty,
      u =
        a &&
        !s(function () {
          return (
            8 !==
            h(function () {}, "length", {
              value: 8,
            }).length
          );
        }),
      f = String(String).split("String"),
      m = (e.exports = function (e, t, i) {
        "Symbol(" === String(t).slice(0, 7) &&
          (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          i && i.getter && (t = "get " + t),
          i && i.setter && (t = "set " + t),
          (!r(e, "name") || (o && e.name !== t)) &&
            (a
              ? h(e, "name", {
                  value: t,
                  configurable: !0,
                })
              : (e.name = t)),
          u &&
            i &&
            r(i, "arity") &&
            e.length !== i.arity &&
            h(e, "length", {
              value: i.arity,
            });
        try {
          i && r(i, "constructor") && i.constructor
            ? a &&
              h(e, "prototype", {
                writable: !1,
              })
            : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var s = d(e);
        return (
          r(s, "source") || (s.source = f.join("string" == typeof t ? t : "")),
          e
        );
      });
    Function.prototype.toString = m(function () {
      return (n(this) && p(this).source) || l(this);
    }, "toString");
  },
  function (e, t, i) {
    var s = i(38),
      n = i(27),
      r = Function.prototype,
      a = s && Object.getOwnPropertyDescriptor,
      o = n(r, "name"),
      l = o && "something" === function () {}.name,
      c = o && (!s || (s && a(r, "name").configurable));
    e.exports = {
      EXISTS: o,
      PROPER: l,
      CONFIGURABLE: c,
    };
  },
  function (e, t, i) {
    var s = i(27),
      n = i(77),
      r = i(71),
      a = i(40);
    e.exports = function (e, t, i) {
      for (var o = n(t), l = a.f, c = r.f, d = 0; d < o.length; d++) {
        var p = o[d];
        s(e, p) || (i && s(i, p)) || l(e, p, c(t, p));
      }
    };
  },
  function (e, t, i) {
    var s = i(33),
      n = i(16),
      r = i(78),
      a = i(79),
      o = i(36),
      l = n([].concat);
    e.exports =
      s("Reflect", "ownKeys") ||
      function (e) {
        var t = r.f(o(e)),
          i = a.f;
        return i ? l(t, i(e)) : t;
      };
  },
  function (e, t, i) {
    var s = i(52),
      n = i(60).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return s(e, n);
      };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, i) {
    var s = i(18),
      n = i(12),
      r = /#|\.prototype\./,
      a = function (e, t) {
        var i = l[o(e)];
        return i == d || (i != c && (n(t) ? s(t) : !!t));
      },
      o = (a.normalize = function (e) {
        return String(e).replace(r, ".").toLowerCase();
      }),
      l = (a.data = {}),
      c = (a.NATIVE = "N"),
      d = (a.POLYFILL = "P");
    e.exports = a;
  },
  function (e, t, i) {
    "use strict";
    var s = i(82).IteratorPrototype,
      n = i(35),
      r = i(68),
      a = i(85),
      o = i(63),
      l = function () {
        return this;
      };
    e.exports = function (e, t, i, c) {
      var d = t + " Iterator";
      return (
        (e.prototype = n(s, {
          next: r(+!c, i),
        })),
        a(e, d, !1, !0),
        (o[d] = l),
        e
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var s,
      n,
      r,
      a = i(18),
      o = i(12),
      l = i(35),
      c = i(83),
      d = i(73),
      p = i(22),
      h = i(24),
      u = p("iterator"),
      f = !1;
    [].keys &&
      ("next" in (r = [].keys())
        ? (n = c(c(r))) !== Object.prototype && (s = n)
        : (f = !0)),
      null == s ||
      a(function () {
        var e = {};
        return s[u].call(e) !== e;
      })
        ? (s = {})
        : h && (s = l(s)),
      o(s[u]) ||
        d(s, u, function () {
          return this;
        }),
      (e.exports = {
        IteratorPrototype: s,
        BUGGY_SAFARI_ITERATORS: f,
      });
  },
  function (e, t, i) {
    var s = i(27),
      n = i(12),
      r = i(28),
      a = i(62),
      o = i(84),
      l = a("IE_PROTO"),
      c = Object,
      d = c.prototype;
    e.exports = o
      ? c.getPrototypeOf
      : function (e) {
          var t = r(e);
          if (s(t, l)) return t[l];
          var i = t.constructor;
          return n(i) && t instanceof i
            ? i.prototype
            : t instanceof c
            ? d
            : null;
        };
  },
  function (e, t, i) {
    var s = i(18);
    e.exports = !s(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    });
  },
  function (e, t, i) {
    var s = i(40).f,
      n = i(27),
      r = i(22)("toStringTag");
    e.exports = function (e, t, i) {
      e && !i && (e = e.prototype),
        e &&
          !n(e, r) &&
          s(e, r, {
            configurable: !0,
            value: t,
          });
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(36),
      r = i(87);
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              i = {};
            try {
              (e = s(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              ))(i, []),
                (t = i instanceof Array);
            } catch (e) {}
            return function (i, s) {
              return n(i), r(s), t ? e(i, s) : (i.__proto__ = s), i;
            };
          })()
        : void 0);
  },
  function (e, t, i) {
    var s = i(12),
      n = String,
      r = TypeError;
    e.exports = function (e) {
      if ("object" == typeof e || s(e)) return e;
      throw r("Can't set " + n(e) + " as a prototype");
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(89),
      n = i(44),
      r = i(16),
      a = i(90),
      o = i(18),
      l = i(36),
      c = i(12),
      d = i(55),
      p = i(58),
      h = i(93),
      u = i(20),
      f = i(100),
      m = i(47),
      g = i(102),
      v = i(103),
      y = i(22)("replace"),
      b = Math.max,
      w = Math.min,
      x = r([].concat),
      S = r([].push),
      T = r("".indexOf),
      E = r("".slice),
      C = function (e) {
        return void 0 === e ? e : String(e);
      },
      P = (function () {
        return "$0" === "a".replace(/./, "$0");
      })(),
      M = (function () {
        return !!/./[y] && "" === /./[y]("a", "$0");
      })();
    a(
      "replace",
      function (e, t, i) {
        var r = M ? "$" : "$0";
        return [
          function (e, i) {
            var s = u(this),
              r = null == e ? void 0 : m(e, y);
            return r ? n(r, e, s, i) : n(t, h(s), e, i);
          },
          function (e, n) {
            var a = l(this),
              o = h(e);
            if ("string" == typeof n && -1 === T(n, r) && -1 === T(n, "$<")) {
              var u = i(t, a, o, n);
              if (u.done) return u.value;
            }
            var m = c(n);
            m || (n = h(n));
            var y = a.global;
            if (y) {
              var P = a.unicode;
              a.lastIndex = 0;
            }
            for (var M = []; ; ) {
              var k = v(a, o);
              if (null === k) break;
              if ((S(M, k), !y)) break;
              "" === h(k[0]) && (a.lastIndex = f(o, p(a.lastIndex), P));
            }
            for (var O = "", L = 0, A = 0; A < M.length; A++) {
              for (
                var z = h((k = M[A])[0]),
                  I = b(w(d(k.index), o.length), 0),
                  $ = [],
                  D = 1;
                D < k.length;
                D++
              )
                S($, C(k[D]));
              var Y = k.groups;
              if (m) {
                var R = x([z], $, I, o);
                void 0 !== Y && S(R, Y);
                var B = h(s(n, void 0, R));
              } else B = g(z, o, I, $, Y, n);
              I >= L && ((O += E(o, L, I) + B), (L = I + z.length));
            }
            return O + E(o, L);
          },
        ];
      },
      !!o(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (
              (e.groups = {
                a: "7",
              }),
              e
            );
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }) ||
        !P ||
        M
    );
  },
  function (e, t, i) {
    var s = i(17),
      n = Function.prototype,
      r = n.apply,
      a = n.call;
    e.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (s
        ? a.bind(r)
        : function () {
            return a.apply(r, arguments);
          });
  },
  function (e, t, i) {
    "use strict";
    i(91);
    var s = i(16),
      n = i(73),
      r = i(92),
      a = i(18),
      o = i(22),
      l = i(67),
      c = o("species"),
      d = RegExp.prototype;
    e.exports = function (e, t, i, p) {
      var h = o(e),
        u = !a(function () {
          var t = {};
          return (
            (t[h] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        f =
          u &&
          !a(function () {
            var t = !1,
              i = /a/;
            return (
              "split" === e &&
                (((i = {}).constructor = {}),
                (i.constructor[c] = function () {
                  return i;
                }),
                (i.flags = ""),
                (i[h] = /./[h])),
              (i.exec = function () {
                return (t = !0), null;
              }),
              i[h](""),
              !t
            );
          });
      if (!u || !f || i) {
        var m = s(/./[h]),
          g = t(h, ""[e], function (e, t, i, n, a) {
            var o = s(e),
              l = t.exec;
            return l === r || l === d.exec
              ? u && !a
                ? {
                    done: !0,
                    value: m(t, i, n),
                  }
                : {
                    done: !0,
                    value: o(i, t, n),
                  }
              : {
                  done: !1,
                };
          });
        n(String.prototype, e, g[0]), n(d, h, g[1]);
      }
      p && l(d[h], "sham", !0);
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(70),
      n = i(92);
    s(
      {
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== n,
      },
      {
        exec: n,
      }
    );
  },
  function (e, t, i) {
    "use strict";
    var s = i(44),
      n = i(16),
      r = i(93),
      a = i(96),
      o = i(97),
      l = i(23),
      c = i(35),
      d = i(64).get,
      p = i(98),
      h = i(99),
      u = l("native-string-replace", String.prototype.replace),
      f = RegExp.prototype.exec,
      m = f,
      g = n("".charAt),
      v = n("".indexOf),
      y = n("".replace),
      b = n("".slice),
      w = (function () {
        var e = /a/,
          t = /b*/g;
        return (
          s(f, e, "a"), s(f, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        );
      })(),
      x = o.BROKEN_CARET,
      S = void 0 !== /()??/.exec("")[1];
    (w || S || x || p || h) &&
      (m = function (e) {
        var t,
          i,
          n,
          o,
          l,
          p,
          h,
          T = this,
          E = d(T),
          C = r(e),
          P = E.raw;
        if (P)
          return (
            (P.lastIndex = T.lastIndex),
            (t = s(m, P, C)),
            (T.lastIndex = P.lastIndex),
            t
          );
        var M = E.groups,
          k = x && T.sticky,
          O = s(a, T),
          L = T.source,
          A = 0,
          z = C;
        if (
          (k &&
            ((O = y(O, "y", "")),
            -1 === v(O, "g") && (O += "g"),
            (z = b(C, T.lastIndex)),
            T.lastIndex > 0 &&
              (!T.multiline ||
                (T.multiline && "\n" !== g(C, T.lastIndex - 1))) &&
              ((L = "(?: " + L + ")"), (z = " " + z), A++),
            (i = new RegExp("^(?:" + L + ")", O))),
          S && (i = new RegExp("^" + L + "$(?!\\s)", O)),
          w && (n = T.lastIndex),
          (o = s(f, k ? i : T, z)),
          k
            ? o
              ? ((o.input = b(o.input, A)),
                (o[0] = b(o[0], A)),
                (o.index = T.lastIndex),
                (T.lastIndex += o[0].length))
              : (T.lastIndex = 0)
            : w && o && (T.lastIndex = T.global ? o.index + o[0].length : n),
          S &&
            o &&
            o.length > 1 &&
            s(u, o[0], i, function () {
              for (l = 1; l < arguments.length - 2; l++)
                void 0 === arguments[l] && (o[l] = void 0);
            }),
          o && M)
        )
          for (o.groups = p = c(null), l = 0; l < M.length; l++)
            p[(h = M[l])[0]] = o[h[1]];
        return o;
      }),
      (e.exports = m);
  },
  function (e, t, i) {
    var s = i(94),
      n = String;
    e.exports = function (e) {
      if ("Symbol" === s(e))
        throw TypeError("Cannot convert a Symbol value to a string");
      return n(e);
    };
  },
  function (e, t, i) {
    var s = i(95),
      n = i(12),
      r = i(19),
      a = i(22)("toStringTag"),
      o = Object,
      l =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    e.exports = s
      ? r
      : function (e) {
          var t, i, s;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (i = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = o(e)), a))
            ? i
            : l
            ? r(t)
            : "Object" == (s = r(t)) && n(t.callee)
            ? "Arguments"
            : s;
        };
  },
  function (e, t, i) {
    var s = {};
    (s[i(22)("toStringTag")] = "z"), (e.exports = "[object z]" === String(s));
  },
  function (e, t, i) {
    "use strict";
    var s = i(36);
    e.exports = function () {
      var e = s(this),
        t = "";
      return (
        e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function (e, t, i) {
    var s = i(18),
      n = i(6).RegExp,
      r = s(function () {
        var e = n("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      }),
      a =
        r ||
        s(function () {
          return !n("a", "y").sticky;
        }),
      o =
        r ||
        s(function () {
          var e = n("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        });
    e.exports = {
      BROKEN_CARET: o,
      MISSED_STICKY: a,
      UNSUPPORTED_Y: r,
    };
  },
  function (e, t, i) {
    var s = i(18),
      n = i(6).RegExp;
    e.exports = s(function () {
      var e = n(".", "s");
      return !(e.dotAll && e.exec("\n") && "s" === e.flags);
    });
  },
  function (e, t, i) {
    var s = i(18),
      n = i(6).RegExp;
    e.exports = s(function () {
      var e = n("(?<a>b)", "g");
      return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
    });
  },
  function (e, t, i) {
    "use strict";
    var s = i(101).charAt;
    e.exports = function (e, t, i) {
      return t + (i ? s(e, t).length : 1);
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(55),
      r = i(93),
      a = i(20),
      o = s("".charAt),
      l = s("".charCodeAt),
      c = s("".slice),
      d = function (e) {
        return function (t, i) {
          var s,
            d,
            p = r(a(t)),
            h = n(i),
            u = p.length;
          return h < 0 || h >= u
            ? e
              ? ""
              : void 0
            : (s = l(p, h)) < 55296 ||
              s > 56319 ||
              h + 1 === u ||
              (d = l(p, h + 1)) < 56320 ||
              d > 57343
            ? e
              ? o(p, h)
              : s
            : e
            ? c(p, h, h + 2)
            : d - 56320 + ((s - 55296) << 10) + 65536;
        };
      };
    e.exports = {
      codeAt: d(!1),
      charAt: d(!0),
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(28),
      r = Math.floor,
      a = s("".charAt),
      o = s("".replace),
      l = s("".slice),
      c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      d = /\$([$&'`]|\d{1,2})/g;
    e.exports = function (e, t, i, s, p, h) {
      var u = i + e.length,
        f = s.length,
        m = d;
      return (
        void 0 !== p && ((p = n(p)), (m = c)),
        o(h, m, function (n, o) {
          var c;
          switch (a(o, 0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return l(t, 0, i);
            case "'":
              return l(t, u);
            case "<":
              c = p[l(o, 1, -1)];
              break;
            default:
              var d = +o;
              if (0 === d) return n;
              if (d > f) {
                var h = r(d / 10);
                return 0 === h
                  ? n
                  : h <= f
                  ? void 0 === s[h - 1]
                    ? a(o, 1)
                    : s[h - 1] + a(o, 1)
                  : n;
              }
              c = s[d - 1];
          }
          return void 0 === c ? "" : c;
        })
      );
    };
  },
  function (e, t, i) {
    var s = i(44),
      n = i(36),
      r = i(12),
      a = i(19),
      o = i(92),
      l = TypeError;
    e.exports = function (e, t) {
      var i = e.exec;
      if (r(i)) {
        var c = s(i, e, t);
        return null !== c && n(c), c;
      }
      if ("RegExp" === a(e)) return s(o, e, t);
      throw l("RegExp#exec called on incompatible receiver");
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(70),
      n = i(53).includes,
      r = i(18),
      a = i(21);
    s(
      {
        target: "Array",
        proto: !0,
        forced: r(function () {
          return !Array(1).includes();
        }),
      },
      {
        includes: function (e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      a("includes");
  },
  function (e, t, i) {
    i(106);
  },
  function (e, t, i) {
    "use strict";
    i(107);
    var s,
      n = i(70),
      r = i(38),
      a = i(108),
      o = i(6),
      l = i(109),
      c = i(16),
      d = i(73),
      p = i(110),
      h = i(111),
      u = i(27),
      f = i(112),
      m = i(113),
      g = i(121),
      v = i(101).codeAt,
      y = i(122),
      b = i(93),
      w = i(85),
      x = i(123),
      S = i(124),
      T = i(64),
      E = T.set,
      C = T.getterFor("URL"),
      P = S.URLSearchParams,
      M = S.getState,
      k = o.URL,
      O = o.TypeError,
      L = o.parseInt,
      A = Math.floor,
      z = Math.pow,
      I = c("".charAt),
      $ = c(/./.exec),
      D = c([].join),
      Y = c((1).toString),
      R = c([].pop),
      B = c([].push),
      _ = c("".replace),
      X = c([].shift),
      H = c("".split),
      N = c("".slice),
      W = c("".toLowerCase),
      j = c([].unshift),
      q = "Invalid scheme",
      G = "Invalid host",
      V = "Invalid port",
      F = /[a-z]/i,
      U = /[\d+-.a-z]/i,
      K = /\d/,
      Z = /^0x/i,
      Q = /^[0-7]+$/,
      J = /^\d+$/,
      ee = /^[\da-f]+$/i,
      te = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
      ie = /[\0\t\n\r #/:<>?@[\\\]^|]/,
      se = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
      ne = /[\t\n\r]/g,
      re = function (e) {
        var t, i, s, n;
        if ("number" == typeof e) {
          for (t = [], i = 0; i < 4; i++) j(t, e % 256), (e = A(e / 256));
          return D(t, ".");
        }
        if ("object" == typeof e) {
          for (
            t = "",
              s = (function (e) {
                for (var t = null, i = 1, s = null, n = 0, r = 0; r < 8; r++)
                  0 !== e[r]
                    ? (n > i && ((t = s), (i = n)), (s = null), (n = 0))
                    : (null === s && (s = r), ++n);
                return n > i && ((t = s), (i = n)), t;
              })(e),
              i = 0;
            i < 8;
            i++
          )
            (n && 0 === e[i]) ||
              (n && (n = !1),
              s === i
                ? ((t += i ? ":" : "::"), (n = !0))
                : ((t += Y(e[i], 16)), i < 7 && (t += ":")));
          return "[" + t + "]";
        }
        return e;
      },
      ae = {},
      oe = f({}, ae, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1,
      }),
      le = f({}, oe, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1,
      }),
      ce = f({}, le, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      de = function (e, t) {
        var i = v(e, 0);
        return i > 32 && i < 127 && !u(t, e) ? e : encodeURIComponent(e);
      },
      pe = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443,
      },
      he = function (e, t) {
        var i;
        return (
          2 == e.length &&
          $(F, I(e, 0)) &&
          (":" == (i = I(e, 1)) || (!t && "|" == i))
        );
      },
      ue = function (e) {
        var t;
        return (
          e.length > 1 &&
          he(N(e, 0, 2)) &&
          (2 == e.length ||
            "/" === (t = I(e, 2)) ||
            "\\" === t ||
            "?" === t ||
            "#" === t)
        );
      },
      fe = function (e) {
        return "." === e || "%2e" === W(e);
      },
      me = function (e) {
        return (
          ".." === (e = W(e)) || "%2e." === e || ".%2e" === e || "%2e%2e" === e
        );
      },
      ge = {},
      ve = {},
      ye = {},
      be = {},
      we = {},
      xe = {},
      Se = {},
      Te = {},
      Ee = {},
      Ce = {},
      Pe = {},
      Me = {},
      ke = {},
      Oe = {},
      Le = {},
      Ae = {},
      ze = {},
      Ie = {},
      $e = {},
      De = {},
      Ye = {},
      Re = function (e, t, i) {
        var s,
          n,
          r,
          a = b(e);
        if (t) {
          if ((n = this.parse(a))) throw O(n);
          this.searchParams = null;
        } else {
          if (
            (void 0 !== i && (s = new Re(i, !0)), (n = this.parse(a, null, s)))
          )
            throw O(n);
          (r = M(new P())).bindURL(this), (this.searchParams = r);
        }
      };
    Re.prototype = {
      type: "URL",
      parse: function (e, t, i) {
        var n,
          r,
          a,
          o,
          l = this,
          c = t || ge,
          d = 0,
          p = "",
          h = !1,
          f = !1,
          v = !1;
        for (
          e = b(e),
            t ||
              ((l.scheme = ""),
              (l.username = ""),
              (l.password = ""),
              (l.host = null),
              (l.port = null),
              (l.path = []),
              (l.query = null),
              (l.fragment = null),
              (l.cannotBeABaseURL = !1),
              (e = _(e, se, ""))),
            e = _(e, ne, ""),
            n = m(e);
          d <= n.length;

        ) {
          switch (((r = n[d]), c)) {
            case ge:
              if (!r || !$(F, r)) {
                if (t) return q;
                c = ye;
                continue;
              }
              (p += W(r)), (c = ve);
              break;
            case ve:
              if (r && ($(U, r) || "+" == r || "-" == r || "." == r)) p += W(r);
              else {
                if (":" != r) {
                  if (t) return q;
                  (p = ""), (c = ye), (d = 0);
                  continue;
                }
                if (
                  t &&
                  (l.isSpecial() != u(pe, p) ||
                    ("file" == p &&
                      (l.includesCredentials() || null !== l.port)) ||
                    ("file" == l.scheme && !l.host))
                )
                  return;
                if (((l.scheme = p), t))
                  return void (
                    l.isSpecial() &&
                    pe[l.scheme] == l.port &&
                    (l.port = null)
                  );
                (p = ""),
                  "file" == l.scheme
                    ? (c = Oe)
                    : l.isSpecial() && i && i.scheme == l.scheme
                    ? (c = be)
                    : l.isSpecial()
                    ? (c = Te)
                    : "/" == n[d + 1]
                    ? ((c = we), d++)
                    : ((l.cannotBeABaseURL = !0), B(l.path, ""), (c = $e));
              }
              break;
            case ye:
              if (!i || (i.cannotBeABaseURL && "#" != r)) return q;
              if (i.cannotBeABaseURL && "#" == r) {
                (l.scheme = i.scheme),
                  (l.path = g(i.path)),
                  (l.query = i.query),
                  (l.fragment = ""),
                  (l.cannotBeABaseURL = !0),
                  (c = Ye);
                break;
              }
              c = "file" == i.scheme ? Oe : xe;
              continue;
            case be:
              if ("/" != r || "/" != n[d + 1]) {
                c = xe;
                continue;
              }
              (c = Ee), d++;
              break;
            case we:
              if ("/" == r) {
                c = Ce;
                break;
              }
              c = Ie;
              continue;
            case xe:
              if (((l.scheme = i.scheme), r == s))
                (l.username = i.username),
                  (l.password = i.password),
                  (l.host = i.host),
                  (l.port = i.port),
                  (l.path = g(i.path)),
                  (l.query = i.query);
              else if ("/" == r || ("\\" == r && l.isSpecial())) c = Se;
              else if ("?" == r)
                (l.username = i.username),
                  (l.password = i.password),
                  (l.host = i.host),
                  (l.port = i.port),
                  (l.path = g(i.path)),
                  (l.query = ""),
                  (c = De);
              else {
                if ("#" != r) {
                  (l.username = i.username),
                    (l.password = i.password),
                    (l.host = i.host),
                    (l.port = i.port),
                    (l.path = g(i.path)),
                    l.path.length--,
                    (c = Ie);
                  continue;
                }
                (l.username = i.username),
                  (l.password = i.password),
                  (l.host = i.host),
                  (l.port = i.port),
                  (l.path = g(i.path)),
                  (l.query = i.query),
                  (l.fragment = ""),
                  (c = Ye);
              }
              break;
            case Se:
              if (!l.isSpecial() || ("/" != r && "\\" != r)) {
                if ("/" != r) {
                  (l.username = i.username),
                    (l.password = i.password),
                    (l.host = i.host),
                    (l.port = i.port),
                    (c = Ie);
                  continue;
                }
                c = Ce;
              } else c = Ee;
              break;
            case Te:
              if (((c = Ee), "/" != r || "/" != I(p, d + 1))) continue;
              d++;
              break;
            case Ee:
              if ("/" != r && "\\" != r) {
                c = Ce;
                continue;
              }
              break;
            case Ce:
              if ("@" == r) {
                h && (p = "%40" + p), (h = !0), (a = m(p));
                for (var y = 0; y < a.length; y++) {
                  var w = a[y];
                  if (":" != w || v) {
                    var x = de(w, ce);
                    v ? (l.password += x) : (l.username += x);
                  } else v = !0;
                }
                p = "";
              } else if (
                r == s ||
                "/" == r ||
                "?" == r ||
                "#" == r ||
                ("\\" == r && l.isSpecial())
              ) {
                if (h && "" == p) return "Invalid authority";
                (d -= m(p).length + 1), (p = ""), (c = Pe);
              } else p += r;
              break;
            case Pe:
            case Me:
              if (t && "file" == l.scheme) {
                c = Ae;
                continue;
              }
              if (":" != r || f) {
                if (
                  r == s ||
                  "/" == r ||
                  "?" == r ||
                  "#" == r ||
                  ("\\" == r && l.isSpecial())
                ) {
                  if (l.isSpecial() && "" == p) return G;
                  if (
                    t &&
                    "" == p &&
                    (l.includesCredentials() || null !== l.port)
                  )
                    return;
                  if ((o = l.parseHost(p))) return o;
                  if (((p = ""), (c = ze), t)) return;
                  continue;
                }
                "[" == r ? (f = !0) : "]" == r && (f = !1), (p += r);
              } else {
                if ("" == p) return G;
                if ((o = l.parseHost(p))) return o;
                if (((p = ""), (c = ke), t == Me)) return;
              }
              break;
            case ke:
              if (!$(K, r)) {
                if (
                  r == s ||
                  "/" == r ||
                  "?" == r ||
                  "#" == r ||
                  ("\\" == r && l.isSpecial()) ||
                  t
                ) {
                  if ("" != p) {
                    var S = L(p, 10);
                    if (S > 65535) return V;
                    (l.port = l.isSpecial() && S === pe[l.scheme] ? null : S),
                      (p = "");
                  }
                  if (t) return;
                  c = ze;
                  continue;
                }
                return V;
              }
              p += r;
              break;
            case Oe:
              if (((l.scheme = "file"), "/" == r || "\\" == r)) c = Le;
              else {
                if (!i || "file" != i.scheme) {
                  c = Ie;
                  continue;
                }
                if (r == s)
                  (l.host = i.host), (l.path = g(i.path)), (l.query = i.query);
                else if ("?" == r)
                  (l.host = i.host),
                    (l.path = g(i.path)),
                    (l.query = ""),
                    (c = De);
                else {
                  if ("#" != r) {
                    ue(D(g(n, d), "")) ||
                      ((l.host = i.host),
                      (l.path = g(i.path)),
                      l.shortenPath()),
                      (c = Ie);
                    continue;
                  }
                  (l.host = i.host),
                    (l.path = g(i.path)),
                    (l.query = i.query),
                    (l.fragment = ""),
                    (c = Ye);
                }
              }
              break;
            case Le:
              if ("/" == r || "\\" == r) {
                c = Ae;
                break;
              }
              i &&
                "file" == i.scheme &&
                !ue(D(g(n, d), "")) &&
                (he(i.path[0], !0) ? B(l.path, i.path[0]) : (l.host = i.host)),
                (c = Ie);
              continue;
            case Ae:
              if (r == s || "/" == r || "\\" == r || "?" == r || "#" == r) {
                if (!t && he(p)) c = Ie;
                else if ("" == p) {
                  if (((l.host = ""), t)) return;
                  c = ze;
                } else {
                  if ((o = l.parseHost(p))) return o;
                  if (("localhost" == l.host && (l.host = ""), t)) return;
                  (p = ""), (c = ze);
                }
                continue;
              }
              p += r;
              break;
            case ze:
              if (l.isSpecial()) {
                if (((c = Ie), "/" != r && "\\" != r)) continue;
              } else if (t || "?" != r)
                if (t || "#" != r) {
                  if (r != s && ((c = Ie), "/" != r)) continue;
                } else (l.fragment = ""), (c = Ye);
              else (l.query = ""), (c = De);
              break;
            case Ie:
              if (
                r == s ||
                "/" == r ||
                ("\\" == r && l.isSpecial()) ||
                (!t && ("?" == r || "#" == r))
              ) {
                if (
                  (me(p)
                    ? (l.shortenPath(),
                      "/" == r || ("\\" == r && l.isSpecial()) || B(l.path, ""))
                    : fe(p)
                    ? "/" == r || ("\\" == r && l.isSpecial()) || B(l.path, "")
                    : ("file" == l.scheme &&
                        !l.path.length &&
                        he(p) &&
                        (l.host && (l.host = ""), (p = I(p, 0) + ":")),
                      B(l.path, p)),
                  (p = ""),
                  "file" == l.scheme && (r == s || "?" == r || "#" == r))
                )
                  for (; l.path.length > 1 && "" === l.path[0]; ) X(l.path);
                "?" == r
                  ? ((l.query = ""), (c = De))
                  : "#" == r && ((l.fragment = ""), (c = Ye));
              } else p += de(r, le);
              break;
            case $e:
              "?" == r
                ? ((l.query = ""), (c = De))
                : "#" == r
                ? ((l.fragment = ""), (c = Ye))
                : r != s && (l.path[0] += de(r, ae));
              break;
            case De:
              t || "#" != r
                ? r != s &&
                  ("'" == r && l.isSpecial()
                    ? (l.query += "%27")
                    : (l.query += "#" == r ? "%23" : de(r, ae)))
                : ((l.fragment = ""), (c = Ye));
              break;
            case Ye:
              r != s && (l.fragment += de(r, oe));
          }
          d++;
        }
      },
      parseHost: function (e) {
        var t, i, s;
        if ("[" == I(e, 0)) {
          if ("]" != I(e, e.length - 1)) return G;
          if (
            ((t = (function (e) {
              var t,
                i,
                s,
                n,
                r,
                a,
                o,
                l = [0, 0, 0, 0, 0, 0, 0, 0],
                c = 0,
                d = null,
                p = 0,
                h = function () {
                  return I(e, p);
                };
              if (":" == h()) {
                if (":" != I(e, 1)) return;
                (p += 2), (d = ++c);
              }
              for (; h(); ) {
                if (8 == c) return;
                if (":" != h()) {
                  for (t = i = 0; i < 4 && $(ee, h()); )
                    (t = 16 * t + L(h(), 16)), p++, i++;
                  if ("." == h()) {
                    if (0 == i) return;
                    if (((p -= i), c > 6)) return;
                    for (s = 0; h(); ) {
                      if (((n = null), s > 0)) {
                        if (!("." == h() && s < 4)) return;
                        p++;
                      }
                      if (!$(K, h())) return;
                      for (; $(K, h()); ) {
                        if (((r = L(h(), 10)), null === n)) n = r;
                        else {
                          if (0 == n) return;
                          n = 10 * n + r;
                        }
                        if (n > 255) return;
                        p++;
                      }
                      (l[c] = 256 * l[c] + n), (2 != ++s && 4 != s) || c++;
                    }
                    if (4 != s) return;
                    break;
                  }
                  if (":" == h()) {
                    if ((p++, !h())) return;
                  } else if (h()) return;
                  l[c++] = t;
                } else {
                  if (null !== d) return;
                  p++, (d = ++c);
                }
              }
              if (null !== d)
                for (a = c - d, c = 7; 0 != c && a > 0; )
                  (o = l[c]), (l[c--] = l[d + a - 1]), (l[d + --a] = o);
              else if (8 != c) return;
              return l;
            })(N(e, 1, -1))),
            !t)
          )
            return G;
          this.host = t;
        } else if (this.isSpecial()) {
          if (((e = y(e)), $(te, e))) return G;
          if (
            ((t = (function (e) {
              var t,
                i,
                s,
                n,
                r,
                a,
                o,
                l = H(e, ".");
              if (
                (l.length && "" == l[l.length - 1] && l.length--,
                (t = l.length) > 4)
              )
                return e;
              for (i = [], s = 0; s < t; s++) {
                if ("" == (n = l[s])) return e;
                if (
                  ((r = 10),
                  n.length > 1 &&
                    "0" == I(n, 0) &&
                    ((r = $(Z, n) ? 16 : 8), (n = N(n, 8 == r ? 1 : 2))),
                  "" === n)
                )
                  a = 0;
                else {
                  if (!$(10 == r ? J : 8 == r ? Q : ee, n)) return e;
                  a = L(n, r);
                }
                B(i, a);
              }
              for (s = 0; s < t; s++)
                if (((a = i[s]), s == t - 1)) {
                  if (a >= z(256, 5 - t)) return null;
                } else if (a > 255) return null;
              for (o = R(i), s = 0; s < i.length; s++)
                o += i[s] * z(256, 3 - s);
              return o;
            })(e)),
            null === t)
          )
            return G;
          this.host = t;
        } else {
          if ($(ie, e)) return G;
          for (t = "", i = m(e), s = 0; s < i.length; s++) t += de(i[s], ae);
          this.host = t;
        }
      },
      cannotHaveUsernamePasswordPort: function () {
        return !this.host || this.cannotBeABaseURL || "file" == this.scheme;
      },
      includesCredentials: function () {
        return "" != this.username || "" != this.password;
      },
      isSpecial: function () {
        return u(pe, this.scheme);
      },
      shortenPath: function () {
        var e = this.path,
          t = e.length;
        !t || ("file" == this.scheme && 1 == t && he(e[0], !0)) || e.length--;
      },
      serialize: function () {
        var e = this,
          t = e.scheme,
          i = e.username,
          s = e.password,
          n = e.host,
          r = e.port,
          a = e.path,
          o = e.query,
          l = e.fragment,
          c = t + ":";
        return (
          null !== n
            ? ((c += "//"),
              e.includesCredentials() && (c += i + (s ? ":" + s : "") + "@"),
              (c += re(n)),
              null !== r && (c += ":" + r))
            : "file" == t && (c += "//"),
          (c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + D(a, "/") : ""),
          null !== o && (c += "?" + o),
          null !== l && (c += "#" + l),
          c
        );
      },
      setHref: function (e) {
        var t = this.parse(e);
        if (t) throw O(t);
        this.searchParams.update();
      },
      getOrigin: function () {
        var e = this.scheme,
          t = this.port;
        if ("blob" == e)
          try {
            return new Be(e.path[0]).origin;
          } catch (e) {
            return "null";
          }
        return "file" != e && this.isSpecial()
          ? e + "://" + re(this.host) + (null !== t ? ":" + t : "")
          : "null";
      },
      getProtocol: function () {
        return this.scheme + ":";
      },
      setProtocol: function (e) {
        this.parse(b(e) + ":", ge);
      },
      getUsername: function () {
        return this.username;
      },
      setUsername: function (e) {
        var t = m(b(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
          this.username = "";
          for (var i = 0; i < t.length; i++) this.username += de(t[i], ce);
        }
      },
      getPassword: function () {
        return this.password;
      },
      setPassword: function (e) {
        var t = m(b(e));
        if (!this.cannotHaveUsernamePasswordPort()) {
          this.password = "";
          for (var i = 0; i < t.length; i++) this.password += de(t[i], ce);
        }
      },
      getHost: function () {
        var e = this.host,
          t = this.port;
        return null === e ? "" : null === t ? re(e) : re(e) + ":" + t;
      },
      setHost: function (e) {
        this.cannotBeABaseURL || this.parse(e, Pe);
      },
      getHostname: function () {
        var e = this.host;
        return null === e ? "" : re(e);
      },
      setHostname: function (e) {
        this.cannotBeABaseURL || this.parse(e, Me);
      },
      getPort: function () {
        var e = this.port;
        return null === e ? "" : b(e);
      },
      setPort: function (e) {
        this.cannotHaveUsernamePasswordPort() ||
          ("" == (e = b(e)) ? (this.port = null) : this.parse(e, ke));
      },
      getPathname: function () {
        var e = this.path;
        return this.cannotBeABaseURL ? e[0] : e.length ? "/" + D(e, "/") : "";
      },
      setPathname: function (e) {
        this.cannotBeABaseURL || ((this.path = []), this.parse(e, ze));
      },
      getSearch: function () {
        var e = this.query;
        return e ? "?" + e : "";
      },
      setSearch: function (e) {
        "" == (e = b(e))
          ? (this.query = null)
          : ("?" == I(e, 0) && (e = N(e, 1)),
            (this.query = ""),
            this.parse(e, De)),
          this.searchParams.update();
      },
      getSearchParams: function () {
        return this.searchParams.facade;
      },
      getHash: function () {
        var e = this.fragment;
        return e ? "#" + e : "";
      },
      setHash: function (e) {
        "" != (e = b(e))
          ? ("#" == I(e, 0) && (e = N(e, 1)),
            (this.fragment = ""),
            this.parse(e, Ye))
          : (this.fragment = null);
      },
      update: function () {
        this.query = this.searchParams.serialize() || null;
      },
    };
    var Be = function (e) {
        var t = h(this, _e),
          i = x(arguments.length, 1) > 1 ? arguments[1] : void 0,
          s = E(t, new Re(e, !1, i));
        r ||
          ((t.href = s.serialize()),
          (t.origin = s.getOrigin()),
          (t.protocol = s.getProtocol()),
          (t.username = s.getUsername()),
          (t.password = s.getPassword()),
          (t.host = s.getHost()),
          (t.hostname = s.getHostname()),
          (t.port = s.getPort()),
          (t.pathname = s.getPathname()),
          (t.search = s.getSearch()),
          (t.searchParams = s.getSearchParams()),
          (t.hash = s.getHash()));
      },
      _e = Be.prototype,
      Xe = function (e, t) {
        return {
          get: function () {
            return C(this)[e]();
          },
          set:
            t &&
            function (e) {
              return C(this)[t](e);
            },
          configurable: !0,
          enumerable: !0,
        };
      };
    if (
      (r &&
        (p(_e, "href", Xe("serialize", "setHref")),
        p(_e, "origin", Xe("getOrigin")),
        p(_e, "protocol", Xe("getProtocol", "setProtocol")),
        p(_e, "username", Xe("getUsername", "setUsername")),
        p(_e, "password", Xe("getPassword", "setPassword")),
        p(_e, "host", Xe("getHost", "setHost")),
        p(_e, "hostname", Xe("getHostname", "setHostname")),
        p(_e, "port", Xe("getPort", "setPort")),
        p(_e, "pathname", Xe("getPathname", "setPathname")),
        p(_e, "search", Xe("getSearch", "setSearch")),
        p(_e, "searchParams", Xe("getSearchParams")),
        p(_e, "hash", Xe("getHash", "setHash"))),
      d(
        _e,
        "toJSON",
        function () {
          return C(this).serialize();
        },
        {
          enumerable: !0,
        }
      ),
      d(
        _e,
        "toString",
        function () {
          return C(this).serialize();
        },
        {
          enumerable: !0,
        }
      ),
      k)
    ) {
      var He = k.createObjectURL,
        Ne = k.revokeObjectURL;
      He && d(Be, "createObjectURL", l(He, k)),
        Ne && d(Be, "revokeObjectURL", l(Ne, k));
    }
    w(Be, "URL"),
      n(
        {
          global: !0,
          constructor: !0,
          forced: !a,
          sham: !r,
        },
        {
          URL: Be,
        }
      );
  },
  function (e, t, i) {
    "use strict";
    var s = i(101).charAt,
      n = i(93),
      r = i(64),
      a = i(69),
      o = "String Iterator",
      l = r.set,
      c = r.getterFor(o);
    a(
      String,
      "String",
      function (e) {
        l(this, {
          type: o,
          string: n(e),
          index: 0,
        });
      },
      function () {
        var e,
          t = c(this),
          i = t.string,
          n = t.index;
        return n >= i.length
          ? {
              value: void 0,
              done: !0,
            }
          : ((e = s(i, n)),
            (t.index += e.length),
            {
              value: e,
              done: !1,
            });
      }
    );
  },
  function (e, t, i) {
    var s = i(18),
      n = i(22),
      r = i(24),
      a = n("iterator");
    e.exports = !s(function () {
      var e = new URL("b?a=1&b=2&c=3", "http://a"),
        t = e.searchParams,
        i = "";
      return (
        (e.pathname = "c%20d"),
        t.forEach(function (e, s) {
          t.delete("b"), (i += s + e);
        }),
        (r && !e.toJSON) ||
          !t.sort ||
          "http://a/c%20d?a=1&c=3" !== e.href ||
          "3" !== t.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !t[a] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== i ||
          "x" !== new URL("http://x", void 0).host
      );
    });
  },
  function (e, t, i) {
    var s = i(16),
      n = i(48),
      r = i(17),
      a = s(s.bind);
    e.exports = function (e, t) {
      return (
        n(e),
        void 0 === t
          ? e
          : r
          ? a(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  },
  function (e, t, i) {
    var s = i(74),
      n = i(40);
    e.exports = function (e, t, i) {
      return (
        i.get &&
          s(i.get, t, {
            getter: !0,
          }),
        i.set &&
          s(i.set, t, {
            setter: !0,
          }),
        n.f(e, t, i)
      );
    };
  },
  function (e, t, i) {
    var s = i(46),
      n = TypeError;
    e.exports = function (e, t) {
      if (s(t, e)) return e;
      throw n("Incorrect invocation");
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(38),
      n = i(16),
      r = i(44),
      a = i(18),
      o = i(51),
      l = i(79),
      c = i(72),
      d = i(28),
      p = i(15),
      h = Object.assign,
      u = Object.defineProperty,
      f = n([].concat);
    e.exports =
      !h ||
      a(function () {
        if (
          s &&
          1 !==
            h(
              {
                b: 1,
              },
              h(
                u({}, "a", {
                  enumerable: !0,
                  get: function () {
                    u(this, "b", {
                      value: 3,
                      enumerable: !1,
                    });
                  },
                }),
                {
                  b: 2,
                }
              )
            ).b
        )
          return !0;
        var e = {},
          t = {},
          i = Symbol(),
          n = "abcdefghijklmnopqrst";
        return (
          (e[i] = 7),
          n.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != h({}, e)[i] || o(h({}, t)).join("") != n
        );
      })
        ? function (e, t) {
            for (
              var i = d(e), n = arguments.length, a = 1, h = l.f, u = c.f;
              n > a;

            )
              for (
                var m,
                  g = p(arguments[a++]),
                  v = h ? f(o(g), h(g)) : o(g),
                  y = v.length,
                  b = 0;
                y > b;

              )
                (m = v[b++]), (s && !r(u, g, m)) || (i[m] = g[m]);
            return i;
          }
        : h;
  },
  function (e, t, i) {
    "use strict";
    var s = i(109),
      n = i(44),
      r = i(28),
      a = i(114),
      o = i(116),
      l = i(117),
      c = i(57),
      d = i(118),
      p = i(119),
      h = i(120),
      u = Array;
    e.exports = function (e) {
      var t = r(e),
        i = l(this),
        f = arguments.length,
        m = f > 1 ? arguments[1] : void 0,
        g = void 0 !== m;
      g && (m = s(m, f > 2 ? arguments[2] : void 0));
      var v,
        y,
        b,
        w,
        x,
        S,
        T = h(t),
        E = 0;
      if (!T || (this === u && o(T)))
        for (v = c(t), y = i ? new this(v) : u(v); v > E; E++)
          (S = g ? m(t[E], E) : t[E]), d(y, E, S);
      else
        for (
          x = (w = p(t, T)).next, y = i ? new this() : [];
          !(b = n(x, w)).done;
          E++
        )
          (S = g ? a(w, m, [b.value, E], !0) : b.value), d(y, E, S);
      return (y.length = E), y;
    };
  },
  function (e, t, i) {
    var s = i(36),
      n = i(115);
    e.exports = function (e, t, i, r) {
      try {
        return r ? t(s(i)[0], i[1]) : t(i);
      } catch (t) {
        n(e, "throw", t);
      }
    };
  },
  function (e, t, i) {
    var s = i(44),
      n = i(36),
      r = i(47);
    e.exports = function (e, t, i) {
      var a, o;
      n(e);
      try {
        if (!(a = r(e, "return"))) {
          if ("throw" === t) throw i;
          return i;
        }
        a = s(a, e);
      } catch (e) {
        (o = !0), (a = e);
      }
      if ("throw" === t) throw i;
      if (o) throw a;
      return n(a), i;
    };
  },
  function (e, t, i) {
    var s = i(22),
      n = i(63),
      r = s("iterator"),
      a = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (n.Array === e || a[r] === e);
    };
  },
  function (e, t, i) {
    var s = i(16),
      n = i(18),
      r = i(12),
      a = i(94),
      o = i(33),
      l = i(66),
      c = function () {},
      d = [],
      p = o("Reflect", "construct"),
      h = /^\s*(?:class|function)\b/,
      u = s(h.exec),
      f = !h.exec(c),
      m = function (e) {
        if (!r(e)) return !1;
        try {
          return p(c, d, e), !0;
        } catch (e) {
          return !1;
        }
      },
      g = function (e) {
        if (!r(e)) return !1;
        switch (a(e)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return f || !!u(h, l(e));
        } catch (e) {
          return !0;
        }
      };
    (g.sham = !0),
      (e.exports =
        !p ||
        n(function () {
          var e;
          return (
            m(m.call) ||
            !m(Object) ||
            !m(function () {
              e = !0;
            }) ||
            e
          );
        })
          ? g
          : m);
  },
  function (e, t, i) {
    "use strict";
    var s = i(42),
      n = i(40),
      r = i(68);
    e.exports = function (e, t, i) {
      var a = s(t);
      a in e ? n.f(e, a, r(0, i)) : (e[a] = i);
    };
  },
  function (e, t, i) {
    var s = i(44),
      n = i(48),
      r = i(36),
      a = i(49),
      o = i(120),
      l = TypeError;
    e.exports = function (e, t) {
      var i = arguments.length < 2 ? o(e) : t;
      if (n(i)) return r(s(i, e));
      throw l(a(e) + " is not iterable");
    };
  },
  function (e, t, i) {
    var s = i(94),
      n = i(47),
      r = i(63),
      a = i(22)("iterator");
    e.exports = function (e) {
      if (null != e) return n(e, a) || n(e, "@@iterator") || r[s(e)];
    };
  },
  function (e, t, i) {
    var s = i(54),
      n = i(57),
      r = i(118),
      a = Array,
      o = Math.max;
    e.exports = function (e, t, i) {
      for (
        var l = n(e),
          c = s(t, l),
          d = s(void 0 === i ? l : i, l),
          p = a(o(d - c, 0)),
          h = 0;
        c < d;
        c++, h++
      )
        r(p, h, e[c]);
      return (p.length = h), p;
    };
  },
  function (e, t, i) {
    "use strict";
    var s = i(16),
      n = 2147483647,
      r = /[^\0-\u007E]/,
      a = /[.\u3002\uFF0E\uFF61]/g,
      o = "Overflow: input needs wider integers to process",
      l = RangeError,
      c = s(a.exec),
      d = Math.floor,
      p = String.fromCharCode,
      h = s("".charCodeAt),
      u = s([].join),
      f = s([].push),
      m = s("".replace),
      g = s("".split),
      v = s("".toLowerCase),
      y = function (e) {
        return e + 22 + 75 * (e < 26);
      },
      b = function (e, t, i) {
        var s = 0;
        for (e = i ? d(e / 700) : e >> 1, e += d(e / t); e > 455; )
          (e = d(e / 35)), (s += 36);
        return d(s + (36 * e) / (e + 38));
      },
      w = function (e) {
        var t = [];
        e = (function (e) {
          for (var t = [], i = 0, s = e.length; i < s; ) {
            var n = h(e, i++);
            if (n >= 55296 && n <= 56319 && i < s) {
              var r = h(e, i++);
              56320 == (64512 & r)
                ? f(t, ((1023 & n) << 10) + (1023 & r) + 65536)
                : (f(t, n), i--);
            } else f(t, n);
          }
          return t;
        })(e);
        var i,
          s,
          r = e.length,
          a = 128,
          c = 0,
          m = 72;
        for (i = 0; i < e.length; i++) (s = e[i]) < 128 && f(t, p(s));
        var g = t.length,
          v = g;
        for (g && f(t, "-"); v < r; ) {
          var w = n;
          for (i = 0; i < e.length; i++) (s = e[i]) >= a && s < w && (w = s);
          var x = v + 1;
          if (w - a > d((n - c) / x)) throw l(o);
          for (c += (w - a) * x, a = w, i = 0; i < e.length; i++) {
            if ((s = e[i]) < a && ++c > n) throw l(o);
            if (s == a) {
              for (var S = c, T = 36; ; ) {
                var E = T <= m ? 1 : T >= m + 26 ? 26 : T - m;
                if (S < E) break;
                var C = S - E,
                  P = 36 - E;
                f(t, p(y(E + (C % P)))), (S = d(C / P)), (T += 36);
              }
              f(t, p(y(S))), (m = b(c, x, v == g)), (c = 0), v++;
            }
          }
          c++, a++;
        }
        return u(t, "");
      };
    e.exports = function (e) {
      var t,
        i,
        s = [],
        n = g(m(v(e), a, "."), ".");
      for (t = 0; t < n.length; t++)
        (i = n[t]), f(s, c(r, i) ? "xn--" + w(i) : i);
      return u(s, ".");
    };
  },
  function (e, t) {
    var i = TypeError;
    e.exports = function (e, t) {
      if (e < t) throw i("Not enough arguments");
      return e;
    };
  },
  function (e, t, i) {
    "use strict";
    i(13);
    var s = i(70),
      n = i(6),
      r = i(44),
      a = i(16),
      o = i(38),
      l = i(108),
      c = i(73),
      d = i(125),
      p = i(85),
      h = i(81),
      u = i(64),
      f = i(111),
      m = i(12),
      g = i(27),
      v = i(109),
      y = i(94),
      b = i(36),
      w = i(11),
      x = i(93),
      S = i(35),
      T = i(68),
      E = i(119),
      C = i(120),
      P = i(123),
      M = i(22),
      k = i(126),
      O = M("iterator"),
      L = "URLSearchParams",
      A = "URLSearchParamsIterator",
      z = u.set,
      I = u.getterFor(L),
      $ = u.getterFor(A),
      D = Object.getOwnPropertyDescriptor,
      Y = function (e) {
        if (!o) return n[e];
        var t = D(n, e);
        return t && t.value;
      },
      R = Y("fetch"),
      B = Y("Request"),
      _ = Y("Headers"),
      X = B && B.prototype,
      H = _ && _.prototype,
      N = n.RegExp,
      W = n.TypeError,
      j = n.decodeURIComponent,
      q = n.encodeURIComponent,
      G = a("".charAt),
      V = a([].join),
      F = a([].push),
      U = a("".replace),
      K = a([].shift),
      Z = a([].splice),
      Q = a("".split),
      J = a("".slice),
      ee = /\+/g,
      te = Array(4),
      ie = function (e) {
        return (
          te[e - 1] || (te[e - 1] = N("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        );
      },
      se = function (e) {
        try {
          return j(e);
        } catch (t) {
          return e;
        }
      },
      ne = function (e) {
        var t = U(e, ee, " "),
          i = 4;
        try {
          return j(t);
        } catch (e) {
          for (; i; ) t = U(t, ie(i--), se);
          return t;
        }
      },
      re = /[!'()~]|%20/g,
      ae = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      oe = function (e) {
        return ae[e];
      },
      le = function (e) {
        return U(q(e), re, oe);
      },
      ce = h(
        function (e, t) {
          z(this, {
            type: A,
            iterator: E(I(e).entries),
            kind: t,
          });
        },
        "Iterator",
        function () {
          var e = $(this),
            t = e.kind,
            i = e.iterator.next(),
            s = i.value;
          return (
            i.done ||
              (i.value =
                "keys" === t
                  ? s.key
                  : "values" === t
                  ? s.value
                  : [s.key, s.value]),
            i
          );
        },
        !0
      ),
      de = function (e) {
        (this.entries = []),
          (this.url = null),
          void 0 !== e &&
            (w(e)
              ? this.parseObject(e)
              : this.parseQuery(
                  "string" == typeof e ? ("?" === G(e, 0) ? J(e, 1) : e) : x(e)
                ));
      };
    de.prototype = {
      type: L,
      bindURL: function (e) {
        (this.url = e), this.update();
      },
      parseObject: function (e) {
        var t,
          i,
          s,
          n,
          a,
          o,
          l,
          c = C(e);
        if (c)
          for (i = (t = E(e, c)).next; !(s = r(i, t)).done; ) {
            if (
              ((a = (n = E(b(s.value))).next),
              (o = r(a, n)).done || (l = r(a, n)).done || !r(a, n).done)
            )
              throw W("Expected sequence with length 2");
            F(this.entries, {
              key: x(o.value),
              value: x(l.value),
            });
          }
        else
          for (var d in e)
            g(e, d) &&
              F(this.entries, {
                key: d,
                value: x(e[d]),
              });
      },
      parseQuery: function (e) {
        if (e)
          for (var t, i, s = Q(e, "&"), n = 0; n < s.length; )
            (t = s[n++]).length &&
              ((i = Q(t, "=")),
              F(this.entries, {
                key: ne(K(i)),
                value: ne(V(i, "=")),
              }));
      },
      serialize: function () {
        for (var e, t = this.entries, i = [], s = 0; s < t.length; )
          (e = t[s++]), F(i, le(e.key) + "=" + le(e.value));
        return V(i, "&");
      },
      update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
      },
      updateURL: function () {
        this.url && this.url.update();
      },
    };
    var pe = function () {
        f(this, he);
        var e = arguments.length > 0 ? arguments[0] : void 0;
        z(this, new de(e));
      },
      he = pe.prototype;
    if (
      (d(
        he,
        {
          append: function (e, t) {
            P(arguments.length, 2);
            var i = I(this);
            F(i.entries, {
              key: x(e),
              value: x(t),
            }),
              i.updateURL();
          },
          delete: function (e) {
            P(arguments.length, 1);
            for (
              var t = I(this), i = t.entries, s = x(e), n = 0;
              n < i.length;

            )
              i[n].key === s ? Z(i, n, 1) : n++;
            t.updateURL();
          },
          get: function (e) {
            P(arguments.length, 1);
            for (var t = I(this).entries, i = x(e), s = 0; s < t.length; s++)
              if (t[s].key === i) return t[s].value;
            return null;
          },
          getAll: function (e) {
            P(arguments.length, 1);
            for (
              var t = I(this).entries, i = x(e), s = [], n = 0;
              n < t.length;
              n++
            )
              t[n].key === i && F(s, t[n].value);
            return s;
          },
          has: function (e) {
            P(arguments.length, 1);
            for (var t = I(this).entries, i = x(e), s = 0; s < t.length; )
              if (t[s++].key === i) return !0;
            return !1;
          },
          set: function (e, t) {
            P(arguments.length, 1);
            for (
              var i,
                s = I(this),
                n = s.entries,
                r = !1,
                a = x(e),
                o = x(t),
                l = 0;
              l < n.length;
              l++
            )
              (i = n[l]).key === a &&
                (r ? Z(n, l--, 1) : ((r = !0), (i.value = o)));
            r ||
              F(n, {
                key: a,
                value: o,
              }),
              s.updateURL();
          },
          sort: function () {
            var e = I(this);
            k(e.entries, function (e, t) {
              return e.key > t.key ? 1 : -1;
            }),
              e.updateURL();
          },
          forEach: function (e) {
            for (
              var t,
                i = I(this).entries,
                s = v(e, arguments.length > 1 ? arguments[1] : void 0),
                n = 0;
              n < i.length;

            )
              s((t = i[n++]).value, t.key, this);
          },
          keys: function () {
            return new ce(this, "keys");
          },
          values: function () {
            return new ce(this, "values");
          },
          entries: function () {
            return new ce(this, "entries");
          },
        },
        {
          enumerable: !0,
        }
      ),
      c(he, O, he.entries, {
        name: "entries",
      }),
      c(
        he,
        "toString",
        function () {
          return I(this).serialize();
        },
        {
          enumerable: !0,
        }
      ),
      p(pe, L),
      s(
        {
          global: !0,
          constructor: !0,
          forced: !l,
        },
        {
          URLSearchParams: pe,
        }
      ),
      !l && m(_))
    ) {
      var ue = a(H.has),
        fe = a(H.set),
        me = function (e) {
          if (w(e)) {
            var t,
              i = e.body;
            if (y(i) === L)
              return (
                (t = e.headers ? new _(e.headers) : new _()),
                ue(t, "content-type") ||
                  fe(
                    t,
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ),
                S(e, {
                  body: T(0, x(i)),
                  headers: T(0, t),
                })
              );
          }
          return e;
        };
      if (
        (m(R) &&
          s(
            {
              global: !0,
              enumerable: !0,
              dontCallGetSet: !0,
              forced: !0,
            },
            {
              fetch: function (e) {
                return R(e, arguments.length > 1 ? me(arguments[1]) : {});
              },
            }
          ),
        m(B))
      ) {
        var ge = function (e) {
          return (
            f(this, X), new B(e, arguments.length > 1 ? me(arguments[1]) : {})
          );
        };
        (X.constructor = ge),
          (ge.prototype = X),
          s(
            {
              global: !0,
              constructor: !0,
              dontCallGetSet: !0,
              forced: !0,
            },
            {
              Request: ge,
            }
          );
      }
    }
    e.exports = {
      URLSearchParams: pe,
      getState: I,
    };
  },
  function (e, t, i) {
    var s = i(73);
    e.exports = function (e, t, i) {
      for (var n in t) s(e, n, t[n], i);
      return e;
    };
  },
  function (e, t, i) {
    var s = i(121),
      n = Math.floor,
      r = function (e, t) {
        var i = e.length,
          l = n(i / 2);
        return i < 8 ? a(e, t) : o(e, r(s(e, 0, l), t), r(s(e, l), t), t);
      },
      a = function (e, t) {
        for (var i, s, n = e.length, r = 1; r < n; ) {
          for (s = r, i = e[r]; s && t(e[s - 1], i) > 0; ) e[s] = e[--s];
          s !== r++ && (e[s] = i);
        }
        return e;
      },
      o = function (e, t, i, s) {
        for (var n = t.length, r = i.length, a = 0, o = 0; a < n || o < r; )
          e[a + o] =
            a < n && o < r
              ? s(t[a], i[o]) <= 0
                ? t[a++]
                : i[o++]
              : a < n
              ? t[a++]
              : i[o++];
        return e;
      };
    e.exports = r;
  },
  function (e, t, i) {
    i(124);
  },
  function (e, t) {
    (function (t) {
      e.exports = t;
    }).call(this, {});
  },
  function (e, t, i) {
    "use strict";
    (function (e) {
      i(88);
      !(function (t, s, n) {
        var r =
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            t.msRequestAnimationFrame ||
            function (e) {
              t.setTimeout(e, 1e3 / 60);
            },
          a = (function () {
            var e = {},
              i = s.createElement("div").style,
              r = (function () {
                for (
                  var e = ["t", "webkitT", "MozT", "msT", "OT"],
                    t = 0,
                    s = e.length;
                  t < s;
                  t++
                )
                  if (e[t] + "ransform" in i)
                    return e[t].substr(0, e[t].length - 1);
                return !1;
              })();
            function a(e) {
              return (
                !1 !== r &&
                ("" === r ? e : r + e.charAt(0).toUpperCase() + e.substr(1))
              );
            }
            (e.getTime =
              Date.now ||
              function () {
                return new Date().getTime();
              }),
              (e.extend = function (e, t) {
                for (var i in t) e[i] = t[i];
              }),
              (e.addEvent = function (e, t, i, s) {
                e.addEventListener(t, i, !!s);
              }),
              (e.removeEvent = function (e, t, i, s) {
                e.removeEventListener(t, i, !!s);
              }),
              (e.prefixPointerEvent = function (e) {
                return t.MSPointerEvent
                  ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8)
                  : e;
              }),
              (e.momentum = function (e, t, i, s, r, a) {
                var o,
                  l,
                  c = e - t,
                  d = n.abs(c) / i;
                return (
                  (l = d / (a = void 0 === a ? 6e-4 : a)),
                  (o = e + ((d * d) / (2 * a)) * (c < 0 ? -1 : 1)) < s
                    ? ((o = r ? s - (r / 2.5) * (d / 8) : s),
                      (l = (c = n.abs(o - e)) / d))
                    : o > 0 &&
                      ((o = r ? (r / 2.5) * (d / 8) : 0),
                      (l = (c = n.abs(e) + o) / d)),
                  {
                    destination: n.round(o),
                    duration: l,
                  }
                );
              });
            var o = a("transform");
            return (
              e.extend(e, {
                hasTransform: !1 !== o,
                hasPerspective: a("perspective") in i,
                hasTouch: "ontouchstart" in t,
                hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                hasTransition: a("transition") in i,
              }),
              (e.isBadAndroid = (function () {
                var e = t.navigator.appVersion;
                if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                  var i = e.match(/Safari\/(\d+.\d)/);
                  return (
                    !(i && "object" == typeof i && i.length >= 2) ||
                    parseFloat(i[1]) < 535.19
                  );
                }
                return !1;
              })()),
              e.extend((e.style = {}), {
                transform: o,
                transitionTimingFunction: a("transitionTimingFunction"),
                transitionDuration: a("transitionDuration"),
                transitionDelay: a("transitionDelay"),
                transformOrigin: a("transformOrigin"),
                touchAction: a("touchAction"),
              }),
              (e.hasClass = function (e, t) {
                return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
              }),
              (e.addClass = function (t, i) {
                if (!e.hasClass(t, i)) {
                  var s = t.className.split(" ");
                  s.push(i), (t.className = s.join(" "));
                }
              }),
              (e.removeClass = function (t, i) {
                if (e.hasClass(t, i)) {
                  var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                  t.className = t.className.replace(s, " ");
                }
              }),
              (e.offset = function (e) {
                for (
                  var t = -e.offsetLeft, i = -e.offsetTop;
                  (e = e.offsetParent);

                )
                  (t -= e.offsetLeft), (i -= e.offsetTop);
                return {
                  left: t,
                  top: i,
                };
              }),
              (e.preventDefaultException = function (e, t) {
                for (var i in t) if (t[i].test(e[i])) return !0;
                return !1;
              }),
              e.extend((e.eventType = {}), {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3,
              }),
              e.extend((e.ease = {}), {
                quadratic: {
                  style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  fn: function (e) {
                    return e * (2 - e);
                  },
                },
                circular: {
                  style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                  fn: function (e) {
                    return n.sqrt(1 - --e * e);
                  },
                },
                back: {
                  style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  fn: function (e) {
                    return (e -= 1) * e * (5 * e + 4) + 1;
                  },
                },
                bounce: {
                  style: "",
                  fn: function (e) {
                    return (e /= 1) < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : e < 2.5 / 2.75
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                  },
                },
                elastic: {
                  style: "",
                  fn: function (e) {
                    return 0 === e
                      ? 0
                      : 1 == e
                      ? 1
                      : 0.4 *
                          n.pow(2, -10 * e) *
                          n.sin(((e - 0.055) * (2 * n.PI)) / 0.22) +
                        1;
                  },
                },
              }),
              (e.tap = function (e, t) {
                var i = s.createEvent("Event");
                i.initEvent(t, !0, !0),
                  (i.pageX = e.pageX),
                  (i.pageY = e.pageY),
                  e.target.dispatchEvent(i);
              }),
              (e.click = function (e) {
                var i,
                  n = e.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) ||
                  ((i = s.createEvent(
                    t.MouseEvent ? "MouseEvents" : "Event"
                  )).initEvent("click", !0, !0),
                  (i.view = e.view || t),
                  (i.detail = 1),
                  (i.screenX = n.screenX || 0),
                  (i.screenY = n.screenY || 0),
                  (i.clientX = n.clientX || 0),
                  (i.clientY = n.clientY || 0),
                  (i.ctrlKey = !!e.ctrlKey),
                  (i.altKey = !!e.altKey),
                  (i.shiftKey = !!e.shiftKey),
                  (i.metaKey = !!e.metaKey),
                  (i.button = 0),
                  (i.relatedTarget = null),
                  (i._constructed = !0),
                  n.dispatchEvent(i));
              }),
              (e.getTouchAction = function (e, t) {
                var i = "none";
                return (
                  "vertical" === e
                    ? (i = "pan-y")
                    : "horizontal" === e && (i = "pan-x"),
                  t && "none" != i && (i += " pinch-zoom"),
                  i
                );
              }),
              (e.getRect = function (e) {
                if (e instanceof SVGElement) {
                  var t = e.getBoundingClientRect();
                  return {
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    height: t.height,
                  };
                }
                return {
                  top: e.offsetTop,
                  left: e.offsetLeft,
                  width: e.offsetWidth,
                  height: e.offsetHeight,
                };
              }),
              e
            );
          })();
        function o(e, i) {
          for (var n in ((this.wrapper =
            "string" == typeof e ? s.querySelector(e) : e),
          (this.scroller = this.wrapper.children[0]),
          (this.scrollerStyle = this.scroller.style),
          (this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            disablePointer: !a.hasPointer,
            disableTouch: a.hasPointer || !a.hasTouch,
            disableMouse: a.hasPointer || a.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
              tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/,
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === t.onmousedown,
          }),
          i))
            this.options[n] = i[n];
          (this.translateZ =
            this.options.HWCompositing && a.hasPerspective
              ? " translateZ(0)"
              : ""),
            (this.options.useTransition =
              a.hasTransition && this.options.useTransition),
            (this.options.useTransform =
              a.hasTransform && this.options.useTransform),
            (this.options.eventPassthrough =
              !0 === this.options.eventPassthrough
                ? "vertical"
                : this.options.eventPassthrough),
            (this.options.preventDefault =
              !this.options.eventPassthrough && this.options.preventDefault),
            (this.options.scrollY =
              "vertical" != this.options.eventPassthrough &&
              this.options.scrollY),
            (this.options.scrollX =
              "horizontal" != this.options.eventPassthrough &&
              this.options.scrollX),
            (this.options.freeScroll =
              this.options.freeScroll && !this.options.eventPassthrough),
            (this.options.directionLockThreshold = this.options.eventPassthrough
              ? 0
              : this.options.directionLockThreshold),
            (this.options.bounceEasing =
              "string" == typeof this.options.bounceEasing
                ? a.ease[this.options.bounceEasing] || a.ease.circular
                : this.options.bounceEasing),
            (this.options.resizePolling =
              void 0 === this.options.resizePolling
                ? 60
                : this.options.resizePolling),
            !0 === this.options.tap && (this.options.tap = "tap"),
            this.options.useTransition ||
              this.options.useTransform ||
              /relative|absolute/i.test(this.scrollerStyle.position) ||
              (this.scrollerStyle.position = "relative"),
            "scale" == this.options.shrinkScrollbars &&
              (this.options.useTransition = !1),
            (this.options.invertWheelDirection = this.options
              .invertWheelDirection
              ? -1
              : 1),
            (this.x = 0),
            (this.y = 0),
            (this.directionX = 0),
            (this.directionY = 0),
            (this._events = {}),
            this._init(),
            this.refresh(),
            this.scrollTo(this.options.startX, this.options.startY),
            this.enable();
        }
        function l(e, t, i) {
          var n = s.createElement("div"),
            r = s.createElement("div");
          return (
            !0 === i &&
              ((n.style.cssText = "position:absolute;z-index:9999"),
              (r.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
            (r.className = "iScrollIndicator"),
            "h" == e
              ? (!0 === i &&
                  ((n.style.cssText +=
                    ";height:7px;left:2px;right:2px;bottom:0"),
                  (r.style.height = "100%")),
                (n.className = "iScrollHorizontalScrollbar"))
              : (!0 === i &&
                  ((n.style.cssText +=
                    ";width:7px;bottom:2px;top:2px;right:1px"),
                  (r.style.width = "100%")),
                (n.className = "iScrollVerticalScrollbar")),
            (n.style.cssText += ";overflow:hidden"),
            t || (n.style.pointerEvents = "none"),
            n.appendChild(r),
            n
          );
        }
        function c(e, i) {
          for (var n in ((this.wrapper =
            "string" == typeof i.el ? s.querySelector(i.el) : i.el),
          (this.wrapperStyle = this.wrapper.style),
          (this.indicator = this.wrapper.children[0]),
          (this.indicatorStyle = this.indicator.style),
          (this.scroller = e),
          (this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0,
          }),
          i))
            this.options[n] = i[n];
          if (
            ((this.sizeRatioX = 1),
            (this.sizeRatioY = 1),
            (this.maxPosX = 0),
            (this.maxPosY = 0),
            this.options.interactive &&
              (this.options.disableTouch ||
                (a.addEvent(this.indicator, "touchstart", this),
                a.addEvent(t, "touchend", this)),
              this.options.disablePointer ||
                (a.addEvent(
                  this.indicator,
                  a.prefixPointerEvent("pointerdown"),
                  this
                ),
                a.addEvent(t, a.prefixPointerEvent("pointerup"), this)),
              this.options.disableMouse ||
                (a.addEvent(this.indicator, "mousedown", this),
                a.addEvent(t, "mouseup", this))),
            this.options.fade)
          ) {
            this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
            var o = a.style.transitionDuration;
            if (!o) return;
            this.wrapperStyle[o] = a.isBadAndroid ? "0.0001ms" : "0ms";
            var l = this;
            a.isBadAndroid &&
              r(function () {
                "0.0001ms" === l.wrapperStyle[o] && (l.wrapperStyle[o] = "0s");
              }),
              (this.wrapperStyle.opacity = "0");
          }
        }
        (o.prototype = {
          version: "5.2.0-snapshot",
          _init: function () {
            this._initEvents(),
              (this.options.scrollbars || this.options.indicators) &&
                this._initIndicators(),
              this.options.mouseWheel && this._initWheel(),
              this.options.snap && this._initSnap(),
              this.options.keyBindings && this._initKeys();
          },
          destroy: function () {
            this._initEvents(!0),
              clearTimeout(this.resizeTimeout),
              (this.resizeTimeout = null),
              this._execEvent("destroy");
          },
          _transitionEnd: function (e) {
            e.target == this.scroller &&
              this.isInTransition &&
              (this._transitionTime(),
              this.resetPosition(this.options.bounceTime) ||
                ((this.isInTransition = !1), this._execEvent("scrollEnd")));
          },
          _start: function (e) {
            if (
              1 != a.eventType[e.type] &&
              0 !==
                (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2)
            )
              return;
            if (
              this.enabled &&
              (!this.initiated || a.eventType[e.type] === this.initiated)
            ) {
              !this.options.preventDefault ||
                a.isBadAndroid ||
                a.preventDefaultException(
                  e.target,
                  this.options.preventDefaultException
                ) ||
                e.preventDefault();
              var t,
                i = e.touches ? e.touches[0] : e;
              (this.initiated = a.eventType[e.type]),
                (this.moved = !1),
                (this.distX = 0),
                (this.distY = 0),
                (this.directionX = 0),
                (this.directionY = 0),
                (this.directionLocked = 0),
                (this.startTime = a.getTime()),
                this.options.useTransition && this.isInTransition
                  ? (this._transitionTime(),
                    (this.isInTransition = !1),
                    (t = this.getComputedPosition()),
                    this._translate(n.round(t.x), n.round(t.y)),
                    this._execEvent("scrollEnd"))
                  : !this.options.useTransition &&
                    this.isAnimating &&
                    ((this.isAnimating = !1), this._execEvent("scrollEnd")),
                (this.startX = this.x),
                (this.startY = this.y),
                (this.absStartX = this.x),
                (this.absStartY = this.y),
                (this.pointX = i.pageX),
                (this.pointY = i.pageY),
                this._execEvent("beforeScrollStart");
            }
          },
          _move: function (e) {
            if (this.enabled && a.eventType[e.type] === this.initiated) {
              this.options.preventDefault && e.preventDefault();
              var t,
                i,
                s,
                r,
                o = e.touches ? e.touches[0] : e,
                l = o.pageX - this.pointX,
                c = o.pageY - this.pointY,
                d = a.getTime();
              if (
                ((this.pointX = o.pageX),
                (this.pointY = o.pageY),
                (this.distX += l),
                (this.distY += c),
                (s = n.abs(this.distX)),
                (r = n.abs(this.distY)),
                !(d - this.endTime > 300 && s < 10 && r < 10))
              ) {
                if (
                  (this.directionLocked ||
                    this.options.freeScroll ||
                    (s > r + this.options.directionLockThreshold
                      ? (this.directionLocked = "h")
                      : r >= s + this.options.directionLockThreshold
                      ? (this.directionLocked = "v")
                      : (this.directionLocked = "n")),
                  "h" == this.directionLocked)
                ) {
                  if ("vertical" == this.options.eventPassthrough)
                    e.preventDefault();
                  else if ("horizontal" == this.options.eventPassthrough)
                    return void (this.initiated = !1);
                  c = 0;
                } else if ("v" == this.directionLocked) {
                  if ("horizontal" == this.options.eventPassthrough)
                    e.preventDefault();
                  else if ("vertical" == this.options.eventPassthrough)
                    return void (this.initiated = !1);
                  l = 0;
                }
                (l = this.hasHorizontalScroll ? l : 0),
                  (c = this.hasVerticalScroll ? c : 0),
                  (t = this.x + l),
                  (i = this.y + c),
                  (t > 0 || t < this.maxScrollX) &&
                    (t = this.options.bounce
                      ? this.x + l / 3
                      : t > 0
                      ? 0
                      : this.maxScrollX),
                  (i > 0 || i < this.maxScrollY) &&
                    (i = this.options.bounce
                      ? this.y + c / 3
                      : i > 0
                      ? 0
                      : this.maxScrollY),
                  (this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0),
                  (this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0),
                  this.moved || this._execEvent("scrollStart"),
                  (this.moved = !0),
                  this._translate(t, i),
                  d - this.startTime > 300 &&
                    ((this.startTime = d),
                    (this.startX = this.x),
                    (this.startY = this.y));
              }
            }
          },
          _end: function (e) {
            if (this.enabled && a.eventType[e.type] === this.initiated) {
              this.options.preventDefault &&
                !a.preventDefaultException(
                  e.target,
                  this.options.preventDefaultException
                ) &&
                e.preventDefault();
              e.changedTouches && e.changedTouches[0];
              var t,
                i,
                s = a.getTime() - this.startTime,
                r = n.round(this.x),
                o = n.round(this.y),
                l = n.abs(r - this.startX),
                c = n.abs(o - this.startY),
                d = 0,
                p = "";
              if (
                ((this.isInTransition = 0),
                (this.initiated = 0),
                (this.endTime = a.getTime()),
                !this.resetPosition(this.options.bounceTime))
              ) {
                if ((this.scrollTo(r, o), !this.moved))
                  return (
                    this.options.tap && a.tap(e, this.options.tap),
                    this.options.click && a.click(e),
                    void this._execEvent("scrollCancel")
                  );
                if (this._events.flick && s < 200 && l < 100 && c < 100)
                  this._execEvent("flick");
                else {
                  if (
                    (this.options.momentum &&
                      s < 300 &&
                      ((t = this.hasHorizontalScroll
                        ? a.momentum(
                            this.x,
                            this.startX,
                            s,
                            this.maxScrollX,
                            this.options.bounce ? this.wrapperWidth : 0,
                            this.options.deceleration
                          )
                        : {
                            destination: r,
                            duration: 0,
                          }),
                      (i = this.hasVerticalScroll
                        ? a.momentum(
                            this.y,
                            this.startY,
                            s,
                            this.maxScrollY,
                            this.options.bounce ? this.wrapperHeight : 0,
                            this.options.deceleration
                          )
                        : {
                            destination: o,
                            duration: 0,
                          }),
                      (r = t.destination),
                      (o = i.destination),
                      (d = n.max(t.duration, i.duration)),
                      (this.isInTransition = 1)),
                    this.options.snap)
                  ) {
                    var h = this._nearestSnap(r, o);
                    (this.currentPage = h),
                      (d =
                        this.options.snapSpeed ||
                        n.max(
                          n.max(
                            n.min(n.abs(r - h.x), 1e3),
                            n.min(n.abs(o - h.y), 1e3)
                          ),
                          300
                        )),
                      (r = h.x),
                      (o = h.y),
                      (this.directionX = 0),
                      (this.directionY = 0),
                      (p = this.options.bounceEasing);
                  }
                  if (r != this.x || o != this.y)
                    return (
                      (r > 0 ||
                        r < this.maxScrollX ||
                        o > 0 ||
                        o < this.maxScrollY) &&
                        (p = a.ease.quadratic),
                      void this.scrollTo(r, o, d, p)
                    );
                  this._execEvent("scrollEnd");
                }
              }
            }
          },
          _resize: function () {
            var e = this;
            clearTimeout(this.resizeTimeout),
              (this.resizeTimeout = setTimeout(function () {
                e.refresh();
              }, this.options.resizePolling));
          },
          resetPosition: function (e) {
            var t = this.x,
              i = this.y;
            return (
              (e = e || 0),
              !this.hasHorizontalScroll || this.x > 0
                ? (t = 0)
                : this.x < this.maxScrollX && (t = this.maxScrollX),
              !this.hasVerticalScroll || this.y > 0
                ? (i = 0)
                : this.y < this.maxScrollY && (i = this.maxScrollY),
              (t != this.x || i != this.y) &&
                (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
            );
          },
          disable: function () {
            this.enabled = !1;
          },
          enable: function () {
            this.enabled = !0;
          },
          refresh: function () {
            a.getRect(this.wrapper),
              (this.wrapperWidth = this.wrapper.clientWidth),
              (this.wrapperHeight = this.wrapper.clientHeight);
            var e = a.getRect(this.scroller);
            (this.scrollerWidth = e.width),
              (this.scrollerHeight = e.height),
              (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
              (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
              (this.hasHorizontalScroll =
                this.options.scrollX && this.maxScrollX < 0),
              (this.hasVerticalScroll =
                this.options.scrollY && this.maxScrollY < 0),
              this.hasHorizontalScroll ||
                ((this.maxScrollX = 0),
                (this.scrollerWidth = this.wrapperWidth)),
              this.hasVerticalScroll ||
                ((this.maxScrollY = 0),
                (this.scrollerHeight = this.wrapperHeight)),
              (this.endTime = 0),
              (this.directionX = 0),
              (this.directionY = 0),
              a.hasPointer &&
                !this.options.disablePointer &&
                ((this.wrapper.style[a.style.touchAction] = a.getTouchAction(
                  this.options.eventPassthrough,
                  !0
                )),
                this.wrapper.style[a.style.touchAction] ||
                  (this.wrapper.style[a.style.touchAction] = a.getTouchAction(
                    this.options.eventPassthrough,
                    !1
                  ))),
              (this.wrapperOffset = a.offset(this.wrapper)),
              this._execEvent("refresh"),
              this.resetPosition();
          },
          on: function (e, t) {
            this._events[e] || (this._events[e] = []), this._events[e].push(t);
          },
          off: function (e, t) {
            if (this._events[e]) {
              var i = this._events[e].indexOf(t);
              i > -1 && this._events[e].splice(i, 1);
            }
          },
          _execEvent: function (e) {
            if (this._events[e]) {
              var t = 0,
                i = this._events[e].length;
              if (i)
                for (; t < i; t++)
                  this._events[e][t].apply(this, [].slice.call(arguments, 1));
            }
          },
          scrollBy: function (e, t, i, s) {
            (e = this.x + e),
              (t = this.y + t),
              (i = i || 0),
              this.scrollTo(e, t, i, s);
          },
          scrollTo: function (e, t, i, s) {
            (s = s || a.ease.circular),
              (this.isInTransition = this.options.useTransition && i > 0);
            var n = this.options.useTransition && s.style;
            !i || n
              ? (n &&
                  (this._transitionTimingFunction(s.style),
                  this._transitionTime(i)),
                this._translate(e, t))
              : this._animate(e, t, i, s.fn);
          },
          scrollToElement: function (e, t, i, s, r) {
            if ((e = e.nodeType ? e : this.scroller.querySelector(e))) {
              var o = a.offset(e);
              (o.left -= this.wrapperOffset.left),
                (o.top -= this.wrapperOffset.top);
              var l = a.getRect(e),
                c = a.getRect(this.wrapper);
              !0 === i && (i = n.round(l.width / 2 - c.width / 2)),
                !0 === s && (s = n.round(l.height / 2 - c.height / 2)),
                (o.left -= i || 0),
                (o.top -= s || 0),
                (o.left =
                  o.left > 0
                    ? 0
                    : o.left < this.maxScrollX
                    ? this.maxScrollX
                    : o.left),
                (o.top =
                  o.top > 0
                    ? 0
                    : o.top < this.maxScrollY
                    ? this.maxScrollY
                    : o.top),
                (t =
                  null == t || "auto" === t
                    ? n.max(n.abs(this.x - o.left), n.abs(this.y - o.top))
                    : t),
                this.scrollTo(o.left, o.top, t, r);
            }
          },
          _transitionTime: function (e) {
            if (this.options.useTransition) {
              e = e || 0;
              var t = a.style.transitionDuration;
              if (t) {
                if (
                  ((this.scrollerStyle[t] = e + "ms"), !e && a.isBadAndroid)
                ) {
                  this.scrollerStyle[t] = "0.0001ms";
                  var i = this;
                  r(function () {
                    "0.0001ms" === i.scrollerStyle[t] &&
                      (i.scrollerStyle[t] = "0s");
                  });
                }
                if (this.indicators)
                  for (var s = this.indicators.length; s--; )
                    this.indicators[s].transitionTime(e);
              }
            }
          },
          _transitionTimingFunction: function (e) {
            if (
              ((this.scrollerStyle[a.style.transitionTimingFunction] = e),
              this.indicators)
            )
              for (var t = this.indicators.length; t--; )
                this.indicators[t].transitionTimingFunction(e);
          },
          _translate: function (e, t) {
            if (
              (this.options.useTransform
                ? (this.scrollerStyle[a.style.transform] =
                    "translate(" + e + "px," + t + "px)" + this.translateZ)
                : ((e = n.round(e)),
                  (t = n.round(t)),
                  (this.scrollerStyle.left = e + "px"),
                  (this.scrollerStyle.top = t + "px")),
              (this.x = e),
              (this.y = t),
              this.indicators)
            )
              for (var i = this.indicators.length; i--; )
                this.indicators[i].updatePosition();
          },
          _initEvents: function (e) {
            var i = e ? a.removeEvent : a.addEvent,
              s = this.options.bindToWrapper ? this.wrapper : t;
            i(t, "orientationchange", this),
              i(t, "resize", this),
              this.options.click && i(this.wrapper, "click", this, !0),
              this.options.disableMouse ||
                (i(this.wrapper, "mousedown", this),
                i(s, "mousemove", this),
                i(s, "mousecancel", this),
                i(s, "mouseup", this)),
              a.hasPointer &&
                !this.options.disablePointer &&
                (i(this.wrapper, a.prefixPointerEvent("pointerdown"), this),
                i(s, a.prefixPointerEvent("pointermove"), this),
                i(s, a.prefixPointerEvent("pointercancel"), this),
                i(s, a.prefixPointerEvent("pointerup"), this)),
              a.hasTouch &&
                !this.options.disableTouch &&
                (i(this.wrapper, "touchstart", this),
                i(s, "touchmove", this),
                i(s, "touchcancel", this),
                i(s, "touchend", this)),
              i(this.scroller, "transitionend", this),
              i(this.scroller, "webkitTransitionEnd", this),
              i(this.scroller, "oTransitionEnd", this),
              i(this.scroller, "MSTransitionEnd", this);
          },
          getComputedPosition: function () {
            var e,
              i,
              s = t.getComputedStyle(this.scroller, null);
            return (
              this.options.useTransform
                ? ((e = +(
                    (s = s[a.style.transform].split(")")[0].split(", "))[12] ||
                    s[4]
                  )),
                  (i = +(s[13] || s[5])))
                : ((e = +s.left.replace(/[^-\d.]/g, "")),
                  (i = +s.top.replace(/[^-\d.]/g, ""))),
              {
                x: e,
                y: i,
              }
            );
          },
          _initIndicators: function () {
            var e,
              t = this.options.interactiveScrollbars,
              i = "string" != typeof this.options.scrollbars,
              s = [],
              n = this;
            (this.indicators = []),
              this.options.scrollbars &&
                (this.options.scrollY &&
                  ((e = {
                    el: l("v", t, this.options.scrollbars),
                    interactive: t,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1,
                  }),
                  this.wrapper.appendChild(e.el),
                  s.push(e)),
                this.options.scrollX &&
                  ((e = {
                    el: l("h", t, this.options.scrollbars),
                    interactive: t,
                    defaultScrollbars: !0,
                    customStyle: i,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1,
                  }),
                  this.wrapper.appendChild(e.el),
                  s.push(e))),
              this.options.indicators &&
                (s = s.concat(this.options.indicators));
            for (var r = s.length; r--; )
              this.indicators.push(new c(this, s[r]));
            function a(e) {
              if (n.indicators)
                for (var t = n.indicators.length; t--; )
                  e.call(n.indicators[t]);
            }
            this.options.fadeScrollbars &&
              (this.on("scrollEnd", function () {
                a(function () {
                  this.fade();
                });
              }),
              this.on("scrollCancel", function () {
                a(function () {
                  this.fade();
                });
              }),
              this.on("scrollStart", function () {
                a(function () {
                  this.fade(1);
                });
              }),
              this.on("beforeScrollStart", function () {
                a(function () {
                  this.fade(1, !0);
                });
              })),
              this.on("refresh", function () {
                a(function () {
                  this.refresh();
                });
              }),
              this.on("destroy", function () {
                a(function () {
                  this.destroy();
                }),
                  delete this.indicators;
              });
          },
          _initWheel: function () {
            a.addEvent(this.wrapper, "wheel", this),
              a.addEvent(this.wrapper, "mousewheel", this),
              a.addEvent(this.wrapper, "DOMMouseScroll", this),
              this.on("destroy", function () {
                clearTimeout(this.wheelTimeout),
                  (this.wheelTimeout = null),
                  a.removeEvent(this.wrapper, "wheel", this),
                  a.removeEvent(this.wrapper, "mousewheel", this),
                  a.removeEvent(this.wrapper, "DOMMouseScroll", this);
              });
          },
          _wheel: function (e) {
            if (this.enabled) {
              e.preventDefault();
              var t,
                i,
                s,
                r,
                a = this;
              if (
                (void 0 === this.wheelTimeout && a._execEvent("scrollStart"),
                clearTimeout(this.wheelTimeout),
                (this.wheelTimeout = setTimeout(function () {
                  a.options.snap || a._execEvent("scrollEnd"),
                    (a.wheelTimeout = void 0);
                }, 400)),
                "deltaX" in e)
              )
                1 === e.deltaMode
                  ? ((t = -e.deltaX * this.options.mouseWheelSpeed),
                    (i = -e.deltaY * this.options.mouseWheelSpeed))
                  : ((t = -e.deltaX), (i = -e.deltaY));
              else if ("wheelDeltaX" in e)
                (t = (e.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
                  (i = (e.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
              else if ("wheelDelta" in e)
                t = i = (e.wheelDelta / 120) * this.options.mouseWheelSpeed;
              else {
                if (!("detail" in e)) return;
                t = i = (-e.detail / 3) * this.options.mouseWheelSpeed;
              }
              if (
                ((t *= this.options.invertWheelDirection),
                (i *= this.options.invertWheelDirection),
                this.hasVerticalScroll || ((t = i), (i = 0)),
                this.options.snap)
              )
                return (
                  (s = this.currentPage.pageX),
                  (r = this.currentPage.pageY),
                  t > 0 ? s-- : t < 0 && s++,
                  i > 0 ? r-- : i < 0 && r++,
                  void this.goToPage(s, r)
                );
              (s = this.x + n.round(this.hasHorizontalScroll ? t : 0)),
                (r = this.y + n.round(this.hasVerticalScroll ? i : 0)),
                (this.directionX = t > 0 ? -1 : t < 0 ? 1 : 0),
                (this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0),
                s > 0 ? (s = 0) : s < this.maxScrollX && (s = this.maxScrollX),
                r > 0 ? (r = 0) : r < this.maxScrollY && (r = this.maxScrollY),
                this.scrollTo(s, r, 0);
            }
          },
          _initSnap: function () {
            (this.currentPage = {}),
              "string" == typeof this.options.snap &&
                (this.options.snap = this.scroller.querySelectorAll(
                  this.options.snap
                )),
              this.on("refresh", function () {
                var e,
                  t,
                  i,
                  s,
                  r,
                  o,
                  l,
                  c = 0,
                  d = 0,
                  p = 0,
                  h = this.options.snapStepX || this.wrapperWidth,
                  u = this.options.snapStepY || this.wrapperHeight;
                if (
                  ((this.pages = []),
                  this.wrapperWidth &&
                    this.wrapperHeight &&
                    this.scrollerWidth &&
                    this.scrollerHeight)
                ) {
                  if (!0 === this.options.snap)
                    for (
                      i = n.round(h / 2), s = n.round(u / 2);
                      p > -this.scrollerWidth;

                    ) {
                      for (
                        this.pages[c] = [], e = 0, r = 0;
                        r > -this.scrollerHeight;

                      )
                        (this.pages[c][e] = {
                          x: n.max(p, this.maxScrollX),
                          y: n.max(r, this.maxScrollY),
                          width: h,
                          height: u,
                          cx: p - i,
                          cy: r - s,
                        }),
                          (r -= u),
                          e++;
                      (p -= h), c++;
                    }
                  else
                    for (e = (o = this.options.snap).length, t = -1; c < e; c++)
                      (l = a.getRect(o[c])),
                        (0 === c || l.left <= a.getRect(o[c - 1]).left) &&
                          ((d = 0), t++),
                        this.pages[d] || (this.pages[d] = []),
                        (p = n.max(-l.left, this.maxScrollX)),
                        (r = n.max(-l.top, this.maxScrollY)),
                        (i = p - n.round(l.width / 2)),
                        (s = r - n.round(l.height / 2)),
                        (this.pages[d][t] = {
                          x: p,
                          y: r,
                          width: l.width,
                          height: l.height,
                          cx: i,
                          cy: s,
                        }),
                        p > this.maxScrollX && d++;
                  this.goToPage(
                    this.currentPage.pageX || 0,
                    this.currentPage.pageY || 0,
                    0
                  ),
                    this.options.snapThreshold % 1 == 0
                      ? ((this.snapThresholdX = this.options.snapThreshold),
                        (this.snapThresholdY = this.options.snapThreshold))
                      : ((this.snapThresholdX = n.round(
                          this.pages[this.currentPage.pageX][
                            this.currentPage.pageY
                          ].width * this.options.snapThreshold
                        )),
                        (this.snapThresholdY = n.round(
                          this.pages[this.currentPage.pageX][
                            this.currentPage.pageY
                          ].height * this.options.snapThreshold
                        )));
                }
              }),
              this.on("flick", function () {
                var e =
                  this.options.snapSpeed ||
                  n.max(
                    n.max(
                      n.min(n.abs(this.x - this.startX), 1e3),
                      n.min(n.abs(this.y - this.startY), 1e3)
                    ),
                    300
                  );
                this.goToPage(
                  this.currentPage.pageX + this.directionX,
                  this.currentPage.pageY + this.directionY,
                  e
                );
              });
          },
          _nearestSnap: function (e, t) {
            if (!this.pages.length)
              return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0,
              };
            var i = 0,
              s = this.pages.length,
              r = 0;
            if (
              n.abs(e - this.absStartX) < this.snapThresholdX &&
              n.abs(t - this.absStartY) < this.snapThresholdY
            )
              return this.currentPage;
            for (
              e > 0 ? (e = 0) : e < this.maxScrollX && (e = this.maxScrollX),
                t > 0 ? (t = 0) : t < this.maxScrollY && (t = this.maxScrollY);
              i < s;
              i++
            )
              if (e >= this.pages[i][0].cx) {
                e = this.pages[i][0].x;
                break;
              }
            for (s = this.pages[i].length; r < s; r++)
              if (t >= this.pages[0][r].cy) {
                t = this.pages[0][r].y;
                break;
              }
            return (
              i == this.currentPage.pageX &&
                ((i += this.directionX) < 0
                  ? (i = 0)
                  : i >= this.pages.length && (i = this.pages.length - 1),
                (e = this.pages[i][0].x)),
              r == this.currentPage.pageY &&
                ((r += this.directionY) < 0
                  ? (r = 0)
                  : r >= this.pages[0].length && (r = this.pages[0].length - 1),
                (t = this.pages[0][r].y)),
              {
                x: e,
                y: t,
                pageX: i,
                pageY: r,
              }
            );
          },
          goToPage: function (e, t, i, s) {
            (s = s || this.options.bounceEasing),
              e >= this.pages.length
                ? (e = this.pages.length - 1)
                : e < 0 && (e = 0),
              t >= this.pages[e].length
                ? (t = this.pages[e].length - 1)
                : t < 0 && (t = 0);
            var r = this.pages[e][t].x,
              a = this.pages[e][t].y;
            (i =
              void 0 === i
                ? this.options.snapSpeed ||
                  n.max(
                    n.max(
                      n.min(n.abs(r - this.x), 1e3),
                      n.min(n.abs(a - this.y), 1e3)
                    ),
                    300
                  )
                : i),
              (this.currentPage = {
                x: r,
                y: a,
                pageX: e,
                pageY: t,
              }),
              this.scrollTo(r, a, i, s);
          },
          next: function (e, t) {
            var i = this.currentPage.pageX,
              s = this.currentPage.pageY;
            ++i >= this.pages.length &&
              this.hasVerticalScroll &&
              ((i = 0), s++),
              this.goToPage(i, s, e, t);
          },
          prev: function (e, t) {
            var i = this.currentPage.pageX,
              s = this.currentPage.pageY;
            --i < 0 && this.hasVerticalScroll && ((i = 0), s--),
              this.goToPage(i, s, e, t);
          },
          _initKeys: function (e) {
            var i,
              s = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
              };
            if ("object" == typeof this.options.keyBindings)
              for (i in this.options.keyBindings)
                "string" == typeof this.options.keyBindings[i] &&
                  (this.options.keyBindings[i] = this.options.keyBindings[i]
                    .toUpperCase()
                    .charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in s)
              this.options.keyBindings[i] = this.options.keyBindings[i] || s[i];
            a.addEvent(t, "keydown", this),
              this.on("destroy", function () {
                a.removeEvent(t, "keydown", this);
              });
          },
          _key: function (e) {
            if (this.enabled) {
              var t,
                i = this.options.snap,
                s = i ? this.currentPage.pageX : this.x,
                r = i ? this.currentPage.pageY : this.y,
                o = a.getTime(),
                l = this.keyTime || 0;
              switch (
                (this.options.useTransition &&
                  this.isInTransition &&
                  ((t = this.getComputedPosition()),
                  this._translate(n.round(t.x), n.round(t.y)),
                  (this.isInTransition = !1)),
                (this.keyAcceleration =
                  o - l < 200 ? n.min(this.keyAcceleration + 0.25, 50) : 0),
                e.keyCode)
              ) {
                case this.options.keyBindings.pageUp:
                  this.hasHorizontalScroll && !this.hasVerticalScroll
                    ? (s += i ? 1 : this.wrapperWidth)
                    : (r += i ? 1 : this.wrapperHeight);
                  break;
                case this.options.keyBindings.pageDown:
                  this.hasHorizontalScroll && !this.hasVerticalScroll
                    ? (s -= i ? 1 : this.wrapperWidth)
                    : (r -= i ? 1 : this.wrapperHeight);
                  break;
                case this.options.keyBindings.end:
                  (s = i ? this.pages.length - 1 : this.maxScrollX),
                    (r = i ? this.pages[0].length - 1 : this.maxScrollY);
                  break;
                case this.options.keyBindings.home:
                  (s = 0), (r = 0);
                  break;
                case this.options.keyBindings.left:
                  s += i ? -1 : (5 + this.keyAcceleration) >> 0;
                  break;
                case this.options.keyBindings.up:
                  r += i ? 1 : (5 + this.keyAcceleration) >> 0;
                  break;
                case this.options.keyBindings.right:
                  s -= i ? -1 : (5 + this.keyAcceleration) >> 0;
                  break;
                case this.options.keyBindings.down:
                  r -= i ? 1 : (5 + this.keyAcceleration) >> 0;
                  break;
                default:
                  return;
              }
              i
                ? this.goToPage(s, r)
                : (s > 0
                    ? ((s = 0), (this.keyAcceleration = 0))
                    : s < this.maxScrollX &&
                      ((s = this.maxScrollX), (this.keyAcceleration = 0)),
                  r > 0
                    ? ((r = 0), (this.keyAcceleration = 0))
                    : r < this.maxScrollY &&
                      ((r = this.maxScrollY), (this.keyAcceleration = 0)),
                  this.scrollTo(s, r, 0),
                  (this.keyTime = o));
            }
          },
          _animate: function (e, t, i, s) {
            var n = this,
              o = this.x,
              l = this.y,
              c = a.getTime(),
              d = c + i;
            (this.isAnimating = !0),
              (function p() {
                var h,
                  u,
                  f,
                  m = a.getTime();
                if (m >= d)
                  return (
                    (n.isAnimating = !1),
                    n._translate(e, t),
                    void (
                      n.resetPosition(n.options.bounceTime) ||
                      n._execEvent("scrollEnd")
                    )
                  );
                (f = s((m = (m - c) / i))),
                  (h = (e - o) * f + o),
                  (u = (t - l) * f + l),
                  n._translate(h, u),
                  n.isAnimating && r(p);
              })();
          },
          handleEvent: function (e) {
            switch (e.type) {
              case "touchstart":
              case "pointerdown":
              case "MSPointerDown":
              case "mousedown":
                this._start(e);
                break;
              case "touchmove":
              case "pointermove":
              case "MSPointerMove":
              case "mousemove":
                this._move(e);
                break;
              case "touchend":
              case "pointerup":
              case "MSPointerUp":
              case "mouseup":
              case "touchcancel":
              case "pointercancel":
              case "MSPointerCancel":
              case "mousecancel":
                this._end(e);
                break;
              case "orientationchange":
              case "resize":
                this._resize();
                break;
              case "transitionend":
              case "webkitTransitionEnd":
              case "oTransitionEnd":
              case "MSTransitionEnd":
                this._transitionEnd(e);
                break;
              case "wheel":
              case "DOMMouseScroll":
              case "mousewheel":
                this._wheel(e);
                break;
              case "keydown":
                this._key(e);
                break;
              case "click":
                this.enabled &&
                  !e._constructed &&
                  (e.preventDefault(), e.stopPropagation());
            }
          },
        }),
          (c.prototype = {
            handleEvent: function (e) {
              switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                  this._start(e);
                  break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                  this._move(e);
                  break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                  this._end(e);
              }
            },
            destroy: function () {
              this.options.fadeScrollbars &&
                (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
                this.options.interactive &&
                  (a.removeEvent(this.indicator, "touchstart", this),
                  a.removeEvent(
                    this.indicator,
                    a.prefixPointerEvent("pointerdown"),
                    this
                  ),
                  a.removeEvent(this.indicator, "mousedown", this),
                  a.removeEvent(t, "touchmove", this),
                  a.removeEvent(t, a.prefixPointerEvent("pointermove"), this),
                  a.removeEvent(t, "mousemove", this),
                  a.removeEvent(t, "touchend", this),
                  a.removeEvent(t, a.prefixPointerEvent("pointerup"), this),
                  a.removeEvent(t, "mouseup", this)),
                this.options.defaultScrollbars &&
                  this.wrapper.parentNode &&
                  this.wrapper.parentNode.removeChild(this.wrapper);
            },
            _start: function (e) {
              var i = e.touches ? e.touches[0] : e;
              e.preventDefault(),
                e.stopPropagation(),
                this.transitionTime(),
                (this.initiated = !0),
                (this.moved = !1),
                (this.lastPointX = i.pageX),
                (this.lastPointY = i.pageY),
                (this.startTime = a.getTime()),
                this.options.disableTouch || a.addEvent(t, "touchmove", this),
                this.options.disablePointer ||
                  a.addEvent(t, a.prefixPointerEvent("pointermove"), this),
                this.options.disableMouse || a.addEvent(t, "mousemove", this),
                this.scroller._execEvent("beforeScrollStart");
            },
            _move: function (e) {
              var t,
                i,
                s,
                n,
                r = e.touches ? e.touches[0] : e;
              a.getTime();
              this.moved || this.scroller._execEvent("scrollStart"),
                (this.moved = !0),
                (t = r.pageX - this.lastPointX),
                (this.lastPointX = r.pageX),
                (i = r.pageY - this.lastPointY),
                (this.lastPointY = r.pageY),
                (s = this.x + t),
                (n = this.y + i),
                this._pos(s, n),
                e.preventDefault(),
                e.stopPropagation();
            },
            _end: function (e) {
              if (this.initiated) {
                if (
                  ((this.initiated = !1),
                  e.preventDefault(),
                  e.stopPropagation(),
                  a.removeEvent(t, "touchmove", this),
                  a.removeEvent(t, a.prefixPointerEvent("pointermove"), this),
                  a.removeEvent(t, "mousemove", this),
                  this.scroller.options.snap)
                ) {
                  var i = this.scroller._nearestSnap(
                      this.scroller.x,
                      this.scroller.y
                    ),
                    s =
                      this.options.snapSpeed ||
                      n.max(
                        n.max(
                          n.min(n.abs(this.scroller.x - i.x), 1e3),
                          n.min(n.abs(this.scroller.y - i.y), 1e3)
                        ),
                        300
                      );
                  (this.scroller.x == i.x && this.scroller.y == i.y) ||
                    ((this.scroller.directionX = 0),
                    (this.scroller.directionY = 0),
                    (this.scroller.currentPage = i),
                    this.scroller.scrollTo(
                      i.x,
                      i.y,
                      s,
                      this.scroller.options.bounceEasing
                    ));
                }
                this.moved && this.scroller._execEvent("scrollEnd");
              }
            },
            transitionTime: function (e) {
              e = e || 0;
              var t = a.style.transitionDuration;
              if (
                t &&
                ((this.indicatorStyle[t] = e + "ms"), !e && a.isBadAndroid)
              ) {
                this.indicatorStyle[t] = "0.0001ms";
                var i = this;
                r(function () {
                  "0.0001ms" === i.indicatorStyle[t] &&
                    (i.indicatorStyle[t] = "0s");
                });
              }
            },
            transitionTimingFunction: function (e) {
              this.indicatorStyle[a.style.transitionTimingFunction] = e;
            },
            refresh: function () {
              this.transitionTime(),
                this.options.listenX && !this.options.listenY
                  ? (this.indicatorStyle.display = this.scroller
                      .hasHorizontalScroll
                      ? "block"
                      : "none")
                  : this.options.listenY && !this.options.listenX
                  ? (this.indicatorStyle.display = this.scroller
                      .hasVerticalScroll
                      ? "block"
                      : "none")
                  : (this.indicatorStyle.display =
                      this.scroller.hasHorizontalScroll ||
                      this.scroller.hasVerticalScroll
                        ? "block"
                        : "none"),
                this.scroller.hasHorizontalScroll &&
                this.scroller.hasVerticalScroll
                  ? (a.addClass(this.wrapper, "iScrollBothScrollbars"),
                    a.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                    this.options.defaultScrollbars &&
                      this.options.customStyle &&
                      (this.options.listenX
                        ? (this.wrapper.style.right = "8px")
                        : (this.wrapper.style.bottom = "8px")))
                  : (a.removeClass(this.wrapper, "iScrollBothScrollbars"),
                    a.addClass(this.wrapper, "iScrollLoneScrollbar"),
                    this.options.defaultScrollbars &&
                      this.options.customStyle &&
                      (this.options.listenX
                        ? (this.wrapper.style.right = "2px")
                        : (this.wrapper.style.bottom = "2px"))),
                a.getRect(this.wrapper),
                this.options.listenX &&
                  ((this.wrapperWidth = this.wrapper.clientWidth),
                  this.options.resize
                    ? ((this.indicatorWidth = n.max(
                        n.round(
                          (this.wrapperWidth * this.wrapperWidth) /
                            (this.scroller.scrollerWidth ||
                              this.wrapperWidth ||
                              1)
                        ),
                        8
                      )),
                      (this.indicatorStyle.width = this.indicatorWidth + "px"))
                    : (this.indicatorWidth = this.indicator.clientWidth),
                  (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
                  "clip" == this.options.shrink
                    ? ((this.minBoundaryX = 8 - this.indicatorWidth),
                      (this.maxBoundaryX = this.wrapperWidth - 8))
                    : ((this.minBoundaryX = 0),
                      (this.maxBoundaryX = this.maxPosX)),
                  (this.sizeRatioX =
                    this.options.speedRatioX ||
                    (this.scroller.maxScrollX &&
                      this.maxPosX / this.scroller.maxScrollX))),
                this.options.listenY &&
                  ((this.wrapperHeight = this.wrapper.clientHeight),
                  this.options.resize
                    ? ((this.indicatorHeight = n.max(
                        n.round(
                          (this.wrapperHeight * this.wrapperHeight) /
                            (this.scroller.scrollerHeight ||
                              this.wrapperHeight ||
                              1)
                        ),
                        8
                      )),
                      (this.indicatorStyle.height =
                        this.indicatorHeight + "px"))
                    : (this.indicatorHeight = this.indicator.clientHeight),
                  (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                  "clip" == this.options.shrink
                    ? ((this.minBoundaryY = 8 - this.indicatorHeight),
                      (this.maxBoundaryY = this.wrapperHeight - 8))
                    : ((this.minBoundaryY = 0),
                      (this.maxBoundaryY = this.maxPosY)),
                  (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                  (this.sizeRatioY =
                    this.options.speedRatioY ||
                    (this.scroller.maxScrollY &&
                      this.maxPosY / this.scroller.maxScrollY))),
                this.updatePosition();
            },
            updatePosition: function () {
              var e =
                  (this.options.listenX &&
                    n.round(this.sizeRatioX * this.scroller.x)) ||
                  0,
                t =
                  (this.options.listenY &&
                    n.round(this.sizeRatioY * this.scroller.y)) ||
                  0;
              this.options.ignoreBoundaries ||
                (e < this.minBoundaryX
                  ? ("scale" == this.options.shrink &&
                      ((this.width = n.max(this.indicatorWidth + e, 8)),
                      (this.indicatorStyle.width = this.width + "px")),
                    (e = this.minBoundaryX))
                  : e > this.maxBoundaryX
                  ? "scale" == this.options.shrink
                    ? ((this.width = n.max(
                        this.indicatorWidth - (e - this.maxPosX),
                        8
                      )),
                      (this.indicatorStyle.width = this.width + "px"),
                      (e = this.maxPosX + this.indicatorWidth - this.width))
                    : (e = this.maxBoundaryX)
                  : "scale" == this.options.shrink &&
                    this.width != this.indicatorWidth &&
                    ((this.width = this.indicatorWidth),
                    (this.indicatorStyle.width = this.width + "px")),
                t < this.minBoundaryY
                  ? ("scale" == this.options.shrink &&
                      ((this.height = n.max(this.indicatorHeight + 3 * t, 8)),
                      (this.indicatorStyle.height = this.height + "px")),
                    (t = this.minBoundaryY))
                  : t > this.maxBoundaryY
                  ? "scale" == this.options.shrink
                    ? ((this.height = n.max(
                        this.indicatorHeight - 3 * (t - this.maxPosY),
                        8
                      )),
                      (this.indicatorStyle.height = this.height + "px"),
                      (t = this.maxPosY + this.indicatorHeight - this.height))
                    : (t = this.maxBoundaryY)
                  : "scale" == this.options.shrink &&
                    this.height != this.indicatorHeight &&
                    ((this.height = this.indicatorHeight),
                    (this.indicatorStyle.height = this.height + "px"))),
                (this.x = e),
                (this.y = t),
                this.scroller.options.useTransform
                  ? (this.indicatorStyle[a.style.transform] =
                      "translate(" +
                      e +
                      "px," +
                      t +
                      "px)" +
                      this.scroller.translateZ)
                  : ((this.indicatorStyle.left = e + "px"),
                    (this.indicatorStyle.top = t + "px"));
            },
            _pos: function (e, t) {
              e < 0 ? (e = 0) : e > this.maxPosX && (e = this.maxPosX),
                t < 0 ? (t = 0) : t > this.maxPosY && (t = this.maxPosY),
                (e = this.options.listenX
                  ? n.round(e / this.sizeRatioX)
                  : this.scroller.x),
                (t = this.options.listenY
                  ? n.round(t / this.sizeRatioY)
                  : this.scroller.y),
                this.scroller.scrollTo(e, t);
            },
            fade: function (e, t) {
              if (!t || this.visible) {
                clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
                var i = e ? 250 : 500,
                  s = e ? 0 : 300;
                (e = e ? "1" : "0"),
                  (this.wrapperStyle[a.style.transitionDuration] = i + "ms"),
                  (this.fadeTimeout = setTimeout(
                    function (e) {
                      (this.wrapperStyle.opacity = e), (this.visible = +e);
                    }.bind(this, e),
                    s
                  ));
              }
            },
          }),
          (o.utils = a),
          e.exports
            ? (e.exports = o)
            : "function" == typeof define && i(128)
            ? define(function () {
                return o;
              })
            : (t.IScroll = o);
      })(window, document, Math);
    }).call(this, i(4)(e));
  },
  ,
  ,
  function (e, t, i) {
    "use strict";
    i.r(t);
    i(1);
    const s = document.documentElement;
    document.body;
    var n = (Document.prototype.ready = (e) => {
      e &&
        "function" == typeof e &&
        document.addEventListener("DOMContentLoaded", () => {
          if (
            "interactive" === document.readyState ||
            "complete" === document.readyState
          )
            return e();
        });
    });
    i(2);
    class r {
      constructor(e, t) {
        (this.holder = e),
          (this.options = Object.assign(
            {
              activeClass: "active",
              opener: ".opener",
              drop: ".slide",
              parent: "li",
              animationSpeed: 400,
              hideSiblings: !0,
            },
            t
          )),
          this.init(),
          (this.holder.AccordionInst = this);
      }
      init() {
        this.findElements(), this.attachEvents(), this.openActiveDrops();
      }
      findElements() {
        (this.opener = this.holder.querySelectorAll(this.options.opener)),
          (this.drop = this.holder.querySelectorAll(this.options.drop));
      }
      attachEvents() {
        (this.openerEvents = []),
          this.opener.forEach((e) => {
            const t = this.clickHandler.bind(this);
            e.addEventListener("click", t),
              this.openerEvents.push({
                item: e,
                fn: t,
              });
          });
      }
      openActiveDrops() {
        const e = this,
          t = this.holder.querySelectorAll(
            ".".concat(this.options.activeClass)
          );
        function i(t) {
          t.querySelector(e.options.drop) &&
            (t.classList.add(e.options.activeClass),
            (t.querySelector(e.options.drop).style.display = "block"));
          const s = t.closest(e.options.drop);
          if (!s) return;
          const n = s.closest(e.options.parent);
          n.classList.add(e.options.activeClass),
            (s.style.display = "block"),
            i(n);
        }
        t.length && t.forEach((e) => i(e), !1);
      }
      clickHandler(e) {
        e.preventDefault(),
          document.body.classList.contains("animation-active") ||
            this.toggleDrop(e.target);
      }
      toggleDrop(e) {
        const t = e.parentNode.querySelector(this.options.drop),
          i = t.closest(this.options.parent),
          s = !i.classList.contains(this.options.activeClass);
        this.options.hideSiblings &&
          s &&
          this.hideSiblings(
            (function (e) {
              let t = [];
              if (!e.parentNode) return t;
              let i = e.parentNode.firstChild;
              for (; i; )
                1 === i.nodeType && i !== e && t.push(i), (i = i.nextSibling);
              return t;
            })(i)
          ),
          this.toggleActiveClass(i, s),
          s
            ? (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 500;
                document.body.classList.add("animation-active"),
                  e.style.removeProperty("display");
                let i = window.getComputedStyle(e).display;
                "none" === i && (i = "block");
                e.style.display = i;
                let s = e.offsetHeight;
                (e.style.overflow = "hidden"),
                  (e.style.height = 0),
                  (e.style.paddingTop = 0),
                  (e.style.paddingBottom = 0),
                  (e.style.marginTop = 0),
                  (e.style.marginBottom = 0),
                  e.offsetHeight,
                  (e.style.boxSizing = "border-box"),
                  (e.style.transitionProperty = "height, margin, padding"),
                  (e.style.transitionDuration = t + "ms"),
                  (e.style.height = s + "px"),
                  e.style.removeProperty("padding-top"),
                  e.style.removeProperty("padding-bottom"),
                  e.style.removeProperty("margin-top"),
                  e.style.removeProperty("margin-bottom"),
                  window.setTimeout(() => {
                    e.style.removeProperty("height"),
                      e.style.removeProperty("overflow"),
                      e.style.removeProperty("transition-duration"),
                      e.style.removeProperty("transition-property"),
                      document.body.classList.remove("animation-active");
                  }, t);
              })(t, this.options.animationSpeed)
            : a(t, this.options.animationSpeed);
      }
      hideSiblings(e) {
        e.forEach((e) => {
          e.classList.contains(this.options.activeClass) &&
            (this.toggleActiveClass(e, !1),
            a(e.querySelector(this.options.drop), this.options.animationSpeed));
        });
      }
      toggleActiveClass(e, t) {
        e.classList[t ? "add" : "remove"](this.options.activeClass);
      }
      destroy() {
        this.openerEvents.forEach((e) =>
          e.item.removeEventListener("click", e.fn)
        ),
          this.holder
            .querySelectorAll(".".concat(this.options.activeClass))
            .forEach((e) => e.classList.remove(this.options.activeClass)),
          this.holder
            .querySelectorAll(this.options.drop)
            .forEach((e) => e.removeAttribute("style")),
          (this.holder.AccordionInst = null);
      }
    }
    function a(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
      document.body.classList.add("animation-active"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.boxSizing = "border-box"),
        (e.style.height = e.offsetHeight + "px"),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = 0),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.style.display = "none"),
            e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            document.body.classList.remove("animation-active");
        }, t);
    }
    i(3);
    class o {
      constructor(e, t) {
        (this.holder = e),
          (this.options = Object.assign(
            {
              activeClass: "active",
              opener: ".opener",
              drop: ".drop",
              hideOnClickOutside: !0,
              hideOnElemsClick: !1,
            },
            t
          )),
          this.init();
      }
      init() {
        this.findElements(), this.attachEvents();
      }
      findElements() {
        (this.opener = this.holder.querySelectorAll(this.options.opener)),
          (this.drop = this.holder.querySelector(this.options.drop));
      }
      attachEvents() {
        const e = this;
        function t(t) {
          t.preventDefault();
          const i = e.holder.classList.contains(e.options.activeClass)
            ? "remove"
            : "add";
          setTimeout(() => {
            e.toggleActiveClass(i);
          });
        }
        this.opener.forEach((e) => e.addEventListener("click", t)),
          this.options.hideOnElemsClick &&
            this.holder
              .querySelectorAll(this.options.hideOnElemsClick)
              .forEach((e) => {
                e.addEventListener("click", () =>
                  this.toggleActiveClass("remove")
                );
              }),
          this.options.hideOnClickOutside &&
            window.addEventListener("click", function (t) {
              if (
                !e.holder.classList.contains(e.options.activeClass) ||
                t.target.classList.contains(e.options.drop) ||
                t.target.closest(e.options.drop)
              )
                return;
              e.toggleActiveClass("remove");
            });
      }
      toggleActiveClass(e) {
        this.holder.classList[e](this.options.activeClass);
      }
    }
    i(5);
    class l {
      constructor(e, t) {
        (this.holder = e),
          (this.options = Object.assign(
            {
              activeClass: "active",
              linkParent: null,
              formActiveClass: "form-active",
              preventAnchors: !1,
            },
            t
          )),
          this.init();
      }
      init() {
        this.findElements(), this.attachEvents(), this.defaultTab();
      }
      findElements() {
        this.tabLinks = this.holder.querySelectorAll("a");
      }
      attachEvents() {
        const e = this;
        function t(t) {
          (e.options.preventAnchors || window.innerWidth > 767) &&
            t.preventDefault();
          const i = this.getAttribute("href");
          i && e.switchTab(i);
        }
        this.tabLinks.forEach((e) => e.addEventListener("click", t));
      }
      defaultTab() {
        const e = this.holder.querySelector(
          ".".concat(this.options.activeClass)
        );
        if (e) {
          const t = (
            this.options.linkParent ? e.querySelector("a") : e
          ).getAttribute("href");
          this.switchTab(t);
        }
      }
      switchTab(e) {
        if (!e)
          return (
            this.prevLink.classList.remove(this.options.activeClass),
            void this.prevTab.classList.remove(this.options.activeClass)
          );
        const t = document.querySelector(e),
          [i] = [...this.tabLinks].filter((t) => t.getAttribute("href") === e);
        this.toggleActiveClass(i, t), ([this.prevLink, this.prevTab] = [i, t]);
      }
      toggleActiveClass(e, t) {
        var i = this;
        const s = this.options.linkParent
            ? e.closest(this.options.linkParent)
            : e,
          n = this.prevLink
            ? this.options.linkParent
              ? this.prevLink.closest(this.options.linkParent)
              : this.prevLink
            : null;
        function r(e, t, s) {
          (e || t) &&
            (e.classList[s](i.options.activeClass),
            t.classList[s](i.options.activeClass));
        }
        n && r(n, this.prevTab, "remove"), r(s, t, "add");
      }
    }
    i(88);
    const c = (() => {
      const e = ".stickySidebar",
        t = {
          topSpacing: 0,
          bottomSpacing: 0,
          containerSelector: !1,
          innerWrapperSelector: ".inner-wrapper-sticky",
          stickyClass: "is-affixed",
          resizeSensor: !0,
          minWidth: !1,
        };
      class i {
        constructor(e) {
          let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            ((this.options = i.extend(t, s)),
            (this.sidebar =
              "string" == typeof e ? document.querySelector(e) : e),
            void 0 === this.sidebar)
          )
            throw new Error("There is no specific sidebar element.");
          (this.sidebarInner = !1),
            (this.container = this.sidebar.parentElement),
            (this.affixedType = "STATIC"),
            (this.direction = "down"),
            (this.support = {
              transform: !1,
              transform3d: !1,
            }),
            (this._initialized = !1),
            (this._reStyle = !1),
            (this._breakpoint = !1),
            (this.dimensions = {
              translateY: 0,
              maxTranslateY: 0,
              topSpacing: 0,
              lastTopSpacing: 0,
              bottomSpacing: 0,
              lastBottomSpacing: 0,
              sidebarHeight: 0,
              sidebarWidth: 0,
              containerTop: 0,
              containerHeight: 0,
              viewportHeight: 0,
              viewportTop: 0,
              lastViewportTop: 0,
            }),
            ["handleEvent"].forEach((e) => {
              this[e] = this[e].bind(this);
            }),
            this.initialize();
        }
        initialize() {
          if (
            (this._setSupportFeatures(),
            this.options.innerWrapperSelector &&
              ((this.sidebarInner = this.sidebar.querySelector(
                this.options.innerWrapperSelector
              )),
              null === this.sidebarInner && (this.sidebarInner = !1)),
            !this.sidebarInner)
          ) {
            let e = document.createElement("div");
            for (
              e.setAttribute("class", "inner-wrapper-sticky"),
                this.sidebar.appendChild(e);
              this.sidebar.firstChild != e;

            )
              e.appendChild(this.sidebar.firstChild);
            this.sidebarInner = this.sidebar.querySelector(
              ".inner-wrapper-sticky"
            );
          }
          if (this.options.containerSelector) {
            let e = document.querySelectorAll(this.options.containerSelector);
            if (
              ((e = Array.prototype.slice.call(e)),
              e.forEach((e, t) => {
                e.contains(this.sidebar) && (this.container = e);
              }),
              !e.length)
            )
              throw new Error(
                "The container does not contains on the sidebar."
              );
          }
          "function" != typeof this.options.topSpacing &&
            (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
            "function" != typeof this.options.bottomSpacing &&
              (this.options.bottomSpacing =
                parseInt(this.options.bottomSpacing) || 0),
            this._widthBreakpoint(),
            this.calcDimensions(),
            this.stickyPosition(),
            this.bindEvents(),
            (this._initialized = !0);
        }
        bindEvents() {
          window.addEventListener("resize", this, {
            passive: !0,
            capture: !1,
          }),
            window.addEventListener("scroll", this, {
              passive: !0,
              capture: !1,
            }),
            this.sidebar.addEventListener("update" + e, this),
            this.options.resizeSensor &&
              "undefined" != typeof ResizeSensor &&
              (new ResizeSensor(this.sidebarInner, this.handleEvent),
              new ResizeSensor(this.container, this.handleEvent));
        }
        handleEvent(e) {
          this.updateSticky(e);
        }
        calcDimensions() {
          if (!this._breakpoint) {
            var e = this.dimensions;
            (e.containerTop = i.offsetRelative(this.container).top),
              (e.containerHeight = this.container.clientHeight),
              (e.containerBottom = e.containerTop + e.containerHeight),
              (e.sidebarHeight = this.sidebarInner.offsetHeight),
              (e.sidebarWidth = this.sidebarInner.offsetWidth),
              (e.viewportHeight = window.innerHeight),
              (e.maxTranslateY = e.containerHeight - e.sidebarHeight),
              this._calcDimensionsWithScroll();
          }
        }
        _calcDimensionsWithScroll() {
          var e = this.dimensions;
          (e.sidebarLeft = i.offsetRelative(this.sidebar).left),
            (e.viewportTop =
              document.documentElement.scrollTop || document.body.scrollTop),
            (e.viewportBottom = e.viewportTop + e.viewportHeight),
            (e.viewportLeft =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (e.topSpacing = this.options.topSpacing),
            (e.bottomSpacing = this.options.bottomSpacing),
            "function" == typeof e.topSpacing &&
              (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0),
            "function" == typeof e.bottomSpacing &&
              (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0),
            "VIEWPORT-TOP" === this.affixedType
              ? e.topSpacing < e.lastTopSpacing &&
                ((e.translateY += e.lastTopSpacing - e.topSpacing),
                (this._reStyle = !0))
              : "VIEWPORT-BOTTOM" === this.affixedType &&
                e.bottomSpacing < e.lastBottomSpacing &&
                ((e.translateY += e.lastBottomSpacing - e.bottomSpacing),
                (this._reStyle = !0)),
            (e.lastTopSpacing = e.topSpacing),
            (e.lastBottomSpacing = e.bottomSpacing);
        }
        isSidebarFitsViewport() {
          let e = this.dimensions,
            t =
              "down" === this.scrollDirection
                ? e.lastBottomSpacing
                : e.lastTopSpacing;
          return (
            this.dimensions.sidebarHeight + t < this.dimensions.viewportHeight
          );
        }
        observeScrollDir() {
          var e = this.dimensions;
          if (e.lastViewportTop !== e.viewportTop) {
            var t = "down" === this.direction ? Math.min : Math.max;
            e.viewportTop === t(e.viewportTop, e.lastViewportTop) &&
              (this.direction = "down" === this.direction ? "up" : "down");
          }
        }
        getAffixType() {
          this._calcDimensionsWithScroll();
          var e = this.dimensions,
            t = e.viewportTop + e.topSpacing,
            i = this.affixedType;
          return (
            t <= e.containerTop || e.containerHeight <= e.sidebarHeight
              ? ((e.translateY = 0), (i = "STATIC"))
              : (i =
                  "up" === this.direction
                    ? this._getAffixTypeScrollingUp()
                    : this._getAffixTypeScrollingDown()),
            (e.translateY = Math.max(0, e.translateY)),
            (e.translateY = Math.min(e.containerHeight, e.translateY)),
            (e.translateY = Math.round(e.translateY)),
            (e.lastViewportTop = e.viewportTop),
            i
          );
        }
        _getAffixTypeScrollingDown() {
          var e = this.dimensions,
            t = e.sidebarHeight + e.containerTop,
            i = e.viewportTop + e.topSpacing,
            s = e.viewportBottom - e.bottomSpacing,
            n = this.affixedType;
          return (
            this.isSidebarFitsViewport()
              ? e.sidebarHeight + i >= e.containerBottom
                ? ((e.translateY = e.containerBottom - t),
                  (n = "CONTAINER-BOTTOM"))
                : i >= e.containerTop &&
                  ((e.translateY = i - e.containerTop), (n = "VIEWPORT-TOP"))
              : e.containerBottom <= s
              ? ((e.translateY = e.containerBottom - t),
                (n = "CONTAINER-BOTTOM"))
              : t + e.translateY <= s
              ? ((e.translateY = s - t), (n = "VIEWPORT-BOTTOM"))
              : e.containerTop + e.translateY <= i &&
                0 !== e.translateY &&
                e.maxTranslateY !== e.translateY &&
                (n = "VIEWPORT-UNBOTTOM"),
            n
          );
        }
        _getAffixTypeScrollingUp() {
          var e = this.dimensions,
            t = e.sidebarHeight + e.containerTop,
            i = e.viewportTop + e.topSpacing,
            s = e.viewportBottom - e.bottomSpacing,
            n = this.affixedType;
          return (
            i <= e.translateY + e.containerTop
              ? ((e.translateY = i - e.containerTop), (n = "VIEWPORT-TOP"))
              : e.containerBottom <= s
              ? ((e.translateY = e.containerBottom - t),
                (n = "CONTAINER-BOTTOM"))
              : this.isSidebarFitsViewport() ||
                (e.containerTop <= i &&
                  0 !== e.translateY &&
                  e.maxTranslateY !== e.translateY &&
                  (n = "VIEWPORT-UNBOTTOM")),
            n
          );
        }
        _getStyle(e) {
          if (void 0 !== e) {
            var t = {
                inner: {},
                outer: {},
              },
              s = this.dimensions;
            switch (e) {
              case "VIEWPORT-TOP":
                t.inner = {
                  position: "fixed",
                  top: s.topSpacing,
                  left: s.sidebarLeft - s.viewportLeft,
                  width: s.sidebarWidth,
                };
                break;
              case "VIEWPORT-BOTTOM":
                t.inner = {
                  position: "fixed",
                  top: "auto",
                  left: s.sidebarLeft,
                  bottom: s.bottomSpacing,
                  width: s.sidebarWidth,
                };
                break;
              case "CONTAINER-BOTTOM":
              case "VIEWPORT-UNBOTTOM":
                let e = this._getTranslate(0, s.translateY + "px");
                t.inner = e
                  ? {
                      transform: e,
                    }
                  : {
                      position: "absolute",
                      top: s.translateY,
                      width: s.sidebarWidth,
                    };
            }
            switch (e) {
              case "VIEWPORT-TOP":
              case "VIEWPORT-BOTTOM":
              case "VIEWPORT-UNBOTTOM":
              case "CONTAINER-BOTTOM":
                t.outer = {
                  height: s.sidebarHeight,
                  position: "relative",
                };
            }
            return (
              (t.outer = i.extend(
                {
                  height: "",
                  position: "",
                },
                t.outer
              )),
              (t.inner = i.extend(
                {
                  position: "relative",
                  top: "",
                  left: "",
                  bottom: "",
                  width: "",
                  transform: "",
                },
                t.inner
              )),
              t
            );
          }
        }
        stickyPosition(t) {
          if (!this._breakpoint) {
            t = this._reStyle || t || !1;
            this.options.topSpacing, this.options.bottomSpacing;
            var s = this.getAffixType(),
              n = this._getStyle(s);
            if ((this.affixedType != s || t) && s) {
              let t = "affix." + s.toLowerCase().replace("viewport-", "") + e;
              i.eventTrigger(this.sidebar, t),
                "STATIC" === s
                  ? i.removeClass(this.sidebar, this.options.stickyClass)
                  : i.addClass(this.sidebar, this.options.stickyClass);
              for (let e in n.outer) {
                let t = "number" == typeof n.outer[e] ? "px" : "";
                this.sidebar.style[e] = n.outer[e] + t;
              }
              for (let e in n.inner) {
                let t = "number" == typeof n.inner[e] ? "px" : "";
                this.sidebarInner.style[e] = n.inner[e] + t;
              }
              let r = "affixed." + s.toLowerCase().replace("viewport-", "") + e;
              i.eventTrigger(this.sidebar, r);
            } else
              this._initialized &&
                (this.sidebarInner.style.left = n.inner.left);
            this.affixedType = s;
          }
        }
        _widthBreakpoint() {
          window.innerWidth <= this.options.minWidth
            ? ((this._breakpoint = !0),
              (this.affixedType = "STATIC"),
              this.sidebar.removeAttribute("style"),
              i.removeClass(this.sidebar, this.options.stickyClass),
              this.sidebarInner.removeAttribute("style"))
            : (this._breakpoint = !1);
        }
        updateSticky() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._running ||
            ((this._running = !0),
            ((e) => {
              requestAnimationFrame(() => {
                if ("scroll" === e)
                  this._calcDimensionsWithScroll(),
                    this.observeScrollDir(),
                    this.stickyPosition();
                else
                  this._widthBreakpoint(),
                    this.calcDimensions(),
                    this.stickyPosition(!0);
                this._running = !1;
              });
            })(e.type));
        }
        _setSupportFeatures() {
          var e = this.support;
          (e.transform = i.supportTransform()),
            (e.transform3d = i.supportTransform(!0));
        }
        _getTranslate() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return this.support.transform3d
            ? "translate3d(" + e + ", " + t + ", " + i + ")"
            : !!this.support.translate && "translate(" + e + ", " + t + ")";
        }
        destroy() {
          window.removeEventListener("resize", this, {
            capture: !1,
          }),
            window.removeEventListener("scroll", this, {
              capture: !1,
            }),
            this.sidebar.classList.remove(this.options.stickyClass),
            (this.sidebar.style.minHeight = ""),
            this.sidebar.removeEventListener("update" + e, this);
          var t = {
            inner: {},
            outer: {},
          };
          (t.inner = {
            position: "",
            top: "",
            left: "",
            bottom: "",
            width: "",
            transform: "",
          }),
            (t.outer = {
              height: "",
              position: "",
            });
          for (let e in t.outer) this.sidebar.style[e] = t.outer[e];
          for (let e in t.inner) this.sidebarInner.style[e] = t.inner[e];
          this.options.resizeSensor &&
            "undefined" != typeof ResizeSensor &&
            (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
            ResizeSensor.detach(this.container, this.handleEvent));
        }
        static supportTransform(e) {
          var t = !1,
            i = e ? "perspective" : "transform",
            s = i.charAt(0).toUpperCase() + i.slice(1),
            n = document.createElement("support").style;
          return (
            (i + " " + ["Webkit", "Moz", "O", "ms"].join(s + " ") + s)
              .split(" ")
              .forEach(function (e, i) {
                if (void 0 !== n[e]) return (t = e), !1;
              }),
            t
          );
        }
        static eventTrigger(e, t, i) {
          try {
            var s = new CustomEvent(t, {
              detail: i,
            });
          } catch (e) {
            (s = document.createEvent("CustomEvent")).initCustomEvent(
              t,
              !0,
              !0,
              i
            );
          }
          e.dispatchEvent(s);
        }
        static extend(e, t) {
          var i = {};
          for (let s in e) void 0 !== t[s] ? (i[s] = t[s]) : (i[s] = e[s]);
          return i;
        }
        static offsetRelative(e) {
          var t = {
            left: 0,
            top: 0,
          };
          do {
            let i = e.offsetTop,
              s = e.offsetLeft;
            isNaN(i) || (t.top += i),
              isNaN(s) || (t.left += s),
              (e = "BODY" === e.tagName ? e.parentElement : e.offsetParent);
          } while (e);
          return t;
        }
        static addClass(e, t) {
          i.hasClass(e, t) ||
            (e.classList ? e.classList.add(t) : (e.className += " " + t));
        }
        static removeClass(e, t) {
          i.hasClass(e, t) &&
            (e.classList
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                )));
        }
        static hasClass(e, t) {
          return e.classList
            ? e.classList.contains(t)
            : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
        }
        static get defaults() {
          return t;
        }
      }
      return i;
    })();
    window.StickySidebar = c;
    i(129);
    function d() {
      if (
        (() =>
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0)()
      )
        return;
      let e = null;
      ResponsiveHelper.addRange({
        "1024..": {
          on: function () {
            document.querySelectorAll(".nav-drop").forEach((t) => {
              e = new IScroll(t, {
                scrollbars: !0,
                mouseWheel: !0,
              });
            });
          },
          off: function () {
            e && (e.destroy(), (e = null));
          },
        },
      });
    }
    n(() => {
      !(function () {
        document.querySelectorAll(".accordion").forEach((e) => new r(e)),
          ResponsiveHelper.addRange({
            "..1023": {
              on: function () {
                document
                  .querySelectorAll(".nav-accordion")
                  .forEach((e) => new r(e));
              },
              off: function () {
                document.querySelectorAll(".nav-accordion").forEach((e) => {
                  e.AccordionInst && e.AccordionInst.destroy();
                });
              },
            },
          });
      })(),
        (function () {
          document.querySelectorAll(".testimonials-carousel").forEach((e) => {
            const t = e.querySelector(".btn-next"),
              i = e.querySelector(".btn-prev");
            new Swiper(e, {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: !0,
              navigation: {
                nextEl: t,
                prevEl: i,
              },
              breakpoints: {
                576: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1170: {
                  slidesPerView: 4,
                },
              },
            });
          }),
            document.querySelectorAll(".products-carousel").forEach((e) => {
              const t = e.querySelector(".btn-next"),
                i = e.querySelector(".btn-prev");
              new Swiper(e, {
                slidesPerView: 2,
                spaceBetween: 16,
                loop: !0,
                navigation: {
                  nextEl: t,
                  prevEl: i,
                },
                breakpoints: {
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1170: {
                    slidesPerView: 6,
                  },
                },
              });
            }),
            document.querySelectorAll(".slideshow").forEach((e) => {
              const t = e.querySelector(".slides"),
                i = e.querySelector(".thumbs-slider");
              i.querySelectorAll(".swiper-slide").length < 5 &&
                e.classList.add("hide-arrows");
              const s = new Swiper(i, {
                direction: "vertical",
                slidesPerView: 4,
                spaceBetween: 15,
                autoHeight: !0,
                freeMode: !0,
                watchSlidesProgress: !0,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
              new Swiper(t, {
                effect: "fade",
                thumbs: {
                  swiper: s,
                },
              });
            });
        })(),
        (function () {
          document.querySelectorAll("body").forEach(
            (e) =>
              new o(e, {
                activeClass: "nav-active",
                opener: ".nav-opener",
                drop: ".nav-slide",
              })
          ),
            document.querySelectorAll(".dropdown-holder").forEach(
              (e) =>
                new o(e, {
                  activeClass: "dropdown-active",
                  opener: ".dropdown-opener",
                  drop: ".dropdown",
                })
            ),
            document.querySelectorAll(".anchor-nav-holder").forEach(
              (e) =>
                new o(e, {
                  activeClass: "anchor-nav-active",
                  opener: ".anchor-nav-opener",
                  drop: ".anchor-nav-drop",
                  hideOnElemsClick: ".anchor-nav li a",
                })
            );
        })(),
        (function () {
          document.querySelectorAll(".tabset").forEach(
            (e) =>
              new l(e, {
                linkParent: "li",
              })
          ),
            document.querySelectorAll(".custom-toggler").forEach(
              (e) =>
                new l(e, {
                  linkParent: "li",
                  preventAnchors: !0,
                })
            );
        })(),
        d(),
        (function () {
          document.querySelectorAll(".tooltip").forEach((e) => {
            const t = (t) =>
              e.classList[t ? "add" : "remove"]("tooltip-active");
            (() => {
              const t = document.createElement("span");
              t.classList.add("tooltip-content"),
                (t.innerHTML = e.getAttribute("data-tooltip-content")),
                e.appendChild(t);
            })(),
              e.addEventListener("mouseover", () => {
                t(!0);
              }),
              e.addEventListener("mouseleave", () => {
                t(!1);
              });
          });
        })(),
        (function () {
          document.querySelectorAll(".alert").forEach((e) => {
            const t = e.querySelector(".close");
            t &&
              t.addEventListener("click", (t) => {
                t.preventDefault(), (e.style.display = "none");
              });
          });
        })(),
        s.classList.add("is-loaded");
    }),
      window.addEventListener("load", function () {
        !(function () {
          document.querySelectorAll(".sticky-block").forEach((e) => {
            const t = e.closest(".sidebar-wrap"),
              i = e.querySelector(".sidebar-holder"),
              s = new StickySidebar(e, {
                containerSelector: ".sidebar-wrap",
                innerWrapperSelector: ".sidebar-holder",
              }),
              n = new ResizeObserver((e) => {
                s.updateSticky();
              });
            t && n.observe(t), i && n.observe(i);
          });
        })();
      });
  },
]);
