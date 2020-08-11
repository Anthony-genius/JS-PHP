! function(t, e) {
    var i = function(t) {
        var e = {};

        function i(a) {
            if (e[a]) return e[a].exports;
            var n = e[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, a) {
            i.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, i.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 297)
    }({
        1: function(t, e) {
            t.exports = window.jQuery
        },
        296: function(t, e, i) {
            "use strict";
            /*!
             * Cropper v4.0.0
             * https://github.com/fengyuanchen/cropper
             *
             * Copyright (c) 2014-2018 Chen Fengyuan
             * Released under the MIT license
             *
             * Date: 2018-04-01T06:27:27.267Z
             */
            var a, n = (a = i(1)) && "object" == typeof a && "default" in a ? a.default : a,
                o = "undefined" != typeof window,
                r = o ? window : {},
                h = "cropper-hidden",
                s = r.PointerEvent ? "pointerdown" : "touchstart mousedown",
                c = r.PointerEvent ? "pointermove" : "touchmove mousemove",
                d = r.PointerEvent ? "pointerup pointercancel" : "touchend touchcancel mouseup",
                l = /^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,
                p = /^data:/,
                m = /^data:image\/jpeg;base64,/,
                u = /^(?:img|canvas)$/i,
                g = {
                    viewMode: 0,
                    dragMode: "crop",
                    aspectRatio: NaN,
                    data: null,
                    preview: "",
                    responsive: !0,
                    restore: !0,
                    checkCrossOrigin: !0,
                    checkOrientation: !0,
                    modal: !0,
                    guides: !0,
                    center: !0,
                    highlight: !0,
                    background: !0,
                    autoCrop: !0,
                    autoCropArea: .8,
                    movable: !0,
                    rotatable: !0,
                    scalable: !0,
                    zoomable: !0,
                    zoomOnTouch: !0,
                    zoomOnWheel: !0,
                    wheelZoomRatio: .1,
                    cropBoxMovable: !0,
                    cropBoxResizable: !0,
                    toggleDragModeOnDblclick: !0,
                    minCanvasWidth: 0,
                    minCanvasHeight: 0,
                    minCropBoxWidth: 0,
                    minCropBoxHeight: 0,
                    minContainerWidth: 200,
                    minContainerHeight: 100,
                    ready: null,
                    cropstart: null,
                    cropmove: null,
                    cropend: null,
                    crop: null,
                    zoom: null
                },
                f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                v = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                w = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var a = e[i];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(e, i, a) {
                        return i && t(e.prototype, i), a && t(e, a), e
                    }
                }(),
                b = function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                        return i
                    }
                    return Array.from(t)
                },
                x = Number.isNaN || r.isNaN;

            function y(t) {
                return "number" == typeof t && !x(t)
            }

            function M(t) {
                return void 0 === t
            }

            function C(t) {
                return "object" === (void 0 === t ? "undefined" : f(t)) && null !== t
            }
            var D = Object.prototype.hasOwnProperty;

            function B(t) {
                if (!C(t)) return !1;
                try {
                    var e = t.constructor,
                        i = e.prototype;
                    return e && i && D.call(i, "isPrototypeOf")
                } catch (t) {
                    return !1
                }
            }

            function k(t) {
                return "function" == typeof t
            }

            function T(t, e) {
                if (t && k(e))
                    if (Array.isArray(t) || y(t.length)) {
                        var i = t.length,
                            a = void 0;
                        for (a = 0; a < i && !1 !== e.call(t, t[a], a, t); a += 1);
                    } else C(t) && Object.keys(t).forEach(function(i) {
                        e.call(t, t[i], i, t)
                    });
                return t
            }
            var W = Object.assign || function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) i[a - 1] = arguments[a];
                    return C(t) && i.length > 0 && i.forEach(function(e) {
                        C(e) && Object.keys(e).forEach(function(i) {
                            t[i] = e[i]
                        })
                    }), t
                },
                E = /\.\d*(?:0|9){12}\d*$/i;

            function H(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
                return E.test(t) ? Math.round(t * e) / e : t
            }
            var N = /^(?:width|height|left|top|marginLeft|marginTop)$/;

            function O(t, e) {
                var i = t.style;
                T(e, function(t, e) {
                    N.test(e) && y(t) && (t += "px"), i[e] = t
                })
            }

            function z(t, e) {
                if (e)
                    if (y(t.length)) T(t, function(t) {
                        z(t, e)
                    });
                    else if (t.classList) t.classList.add(e);
                else {
                    var i = t.className.trim();
                    i ? i.indexOf(e) < 0 && (t.className = i + " " + e) : t.className = e
                }
            }

            function L(t, e) {
                e && (y(t.length) ? T(t, function(t) {
                    L(t, e)
                }) : t.classList ? t.classList.remove(e) : t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, "")))
            }

            function Y(t, e, i) {
                e && (y(t.length) ? T(t, function(t) {
                    Y(t, e, i)
                }) : i ? z(t, e) : L(t, e))
            }
            var X = /([a-z\d])([A-Z])/g;

            function R(t) {
                return t.replace(X, "$1-$2").toLowerCase()
            }

            function S(t, e) {
                return C(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-" + R(e))
            }

            function j(t, e, i) {
                C(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-" + R(e), i)
            }

            function A(t, e) {
                if (C(t[e])) try {
                    delete t[e]
                } catch (i) {
                    t[e] = void 0
                } else if (t.dataset) try {
                    delete t.dataset[e]
                } catch (i) {
                    t.dataset[e] = void 0
                } else t.removeAttribute("data-" + R(e))
            }
            var I = /\s\s*/,
                P = function() {
                    var t = !1;
                    if (o) {
                        var e = !1,
                            i = function() {},
                            a = Object.defineProperty({}, "once", {
                                get: function() {
                                    return t = !0, e
                                },
                                set: function(t) {
                                    e = t
                                }
                            });
                        r.addEventListener("test", i, a), r.removeEventListener("test", i, a)
                    }
                    return t
                }();

            function U(t, e, i) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    n = i;
                e.trim().split(I).forEach(function(e) {
                    if (!P) {
                        var o = t.listeners;
                        o && o[e] && o[e][i] && (n = o[e][i], delete o[e][i], 0 === Object.keys(o[e]).length && delete o[e], 0 === Object.keys(o).length && delete t.listeners)
                    }
                    t.removeEventListener(e, n, a)
                })
            }

            function q(t, e, i) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    n = i;
                e.trim().split(I).forEach(function(e) {
                    if (a.once && !P) {
                        var o = t.listeners,
                            r = void 0 === o ? {} : o;
                        n = function() {
                            for (var o = arguments.length, h = Array(o), s = 0; s < o; s++) h[s] = arguments[s];
                            delete r[e][i], t.removeEventListener(e, n, a), i.apply(t, h)
                        }, r[e] || (r[e] = {}), r[e][i] && t.removeEventListener(e, r[e][i], a), r[e][i] = n, t.listeners = r
                    }
                    t.addEventListener(e, n, a)
                })
            }

            function $(t, e, i) {
                var a = void 0;
                return k(Event) && k(CustomEvent) ? a = new CustomEvent(e, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                }) : (a = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i), t.dispatchEvent(a)
            }

            function _(t) {
                var e = t.getBoundingClientRect();
                return {
                    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
                    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
                }
            }
            var Q = r.location,
                F = /^(https?:)\/\/([^:/?#]+):?(\d*)/i;

            function Z(t) {
                var e = t.match(F);
                return e && (e[1] !== Q.protocol || e[2] !== Q.hostname || e[3] !== Q.port)
            }

            function K(t) {
                var e = "timestamp=" + (new Date).getTime();
                return t + (-1 === t.indexOf("?") ? "?" : "&") + e
            }

            function V(t) {
                var e = t.rotate,
                    i = t.scaleX,
                    a = t.scaleY,
                    n = t.translateX,
                    o = t.translateY,
                    r = [];
                y(n) && 0 !== n && r.push("translateX(" + n + "px)"), y(o) && 0 !== o && r.push("translateY(" + o + "px)"), y(e) && 0 !== e && r.push("rotate(" + e + "deg)"), y(i) && 1 !== i && r.push("scaleX(" + i + ")"), y(a) && 1 !== a && r.push("scaleY(" + a + ")");
                var h = r.length ? r.join(" ") : "none";
                return {
                    WebkitTransform: h,
                    msTransform: h,
                    transform: h
                }
            }

            function G(t, e) {
                var i = t.pageX,
                    a = t.pageY,
                    n = {
                        endX: i,
                        endY: a
                    };
                return e ? n : W({
                    startX: i,
                    startY: a
                }, n)
            }
            var J = Number.isFinite || r.isFinite;

            function tt(t) {
                var e = t.aspectRatio,
                    i = t.height,
                    a = t.width,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain",
                    o = function(t) {
                        return J(t) && t > 0
                    };
                if (o(a) && o(i)) {
                    var r = i * e;
                    "contain" === n && r > a || "cover" === n && r < a ? i = a / e : a = i * e
                } else o(a) ? i = a / e : o(i) && (a = i * e);
                return {
                    width: a,
                    height: i
                }
            }
            var et = String.fromCharCode,
                it = /^data:.*,/;

            function at(t) {
                var e = new DataView(t),
                    i = void 0,
                    a = void 0,
                    n = void 0,
                    o = void 0;
                if (255 === e.getUint8(0) && 216 === e.getUint8(1))
                    for (var r = e.byteLength, h = 2; h < r;) {
                        if (255 === e.getUint8(h) && 225 === e.getUint8(h + 1)) {
                            n = h;
                            break
                        }
                        h += 1
                    }
                if (n) {
                    var s = n + 4,
                        c = n + 10;
                    if ("Exif" === function(t, e, i) {
                            var a = "",
                                n = void 0;
                            for (i += e, n = e; n < i; n += 1) a += et(t.getUint8(n));
                            return a
                        }(e, s, 4)) {
                        var d = e.getUint16(c);
                        if (((a = 18761 === d) || 19789 === d) && 42 === e.getUint16(c + 2, a)) {
                            var l = e.getUint32(c + 4, a);
                            l >= 8 && (o = c + l)
                        }
                    }
                }
                if (o) {
                    var p = e.getUint16(o, a),
                        m = void 0,
                        u = void 0;
                    for (u = 0; u < p; u += 1)
                        if (m = o + 12 * u + 2, 274 === e.getUint16(m, a)) {
                            m += 8, i = e.getUint16(m, a), e.setUint16(m, 1, a);
                            break
                        }
                }
                return i
            }
            var nt = {
                    render: function() {
                        this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
                    },
                    initContainer: function() {
                        var t = this.element,
                            e = this.options,
                            i = this.container,
                            a = this.cropper;
                        z(a, h), L(t, h);
                        var n = {
                            width: Math.max(i.offsetWidth, Number(e.minContainerWidth) || 200),
                            height: Math.max(i.offsetHeight, Number(e.minContainerHeight) || 100)
                        };
                        this.containerData = n, O(a, {
                            width: n.width,
                            height: n.height
                        }), z(t, h), L(a, h)
                    },
                    initCanvas: function() {
                        var t = this.containerData,
                            e = this.imageData,
                            i = this.options.viewMode,
                            a = Math.abs(e.rotate) % 180 == 90,
                            n = a ? e.naturalHeight : e.naturalWidth,
                            o = a ? e.naturalWidth : e.naturalHeight,
                            r = n / o,
                            h = t.width,
                            s = t.height;
                        t.height * r > t.width ? 3 === i ? h = t.height * r : s = t.width / r : 3 === i ? s = t.width / r : h = t.height * r;
                        var c = {
                            aspectRatio: r,
                            naturalWidth: n,
                            naturalHeight: o,
                            width: h,
                            height: s
                        };
                        c.left = (t.width - h) / 2, c.top = (t.height - s) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.canvasData = c, this.limited = 1 === i || 2 === i, this.limitCanvas(!0, !0), this.initialImageData = W({}, e), this.initialCanvasData = W({}, c)
                    },
                    limitCanvas: function(t, e) {
                        var i = this.options,
                            a = this.containerData,
                            n = this.canvasData,
                            o = this.cropBoxData,
                            r = i.viewMode,
                            h = n.aspectRatio,
                            s = this.cropped && o;
                        if (t) {
                            var c = Number(i.minCanvasWidth) || 0,
                                d = Number(i.minCanvasHeight) || 0;
                            r > 1 ? (c = Math.max(c, a.width), d = Math.max(d, a.height), 3 === r && (d * h > c ? c = d * h : d = c / h)) : r > 0 && (c ? c = Math.max(c, s ? o.width : 0) : d ? d = Math.max(d, s ? o.height : 0) : s && (c = o.width, (d = o.height) * h > c ? c = d * h : d = c / h));
                            var l = tt({
                                aspectRatio: h,
                                width: c,
                                height: d
                            });
                            c = l.width, d = l.height, n.minWidth = c, n.minHeight = d, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0
                        }
                        if (e)
                            if (r) {
                                var p = a.width - n.width,
                                    m = a.height - n.height;
                                n.minLeft = Math.min(0, p), n.minTop = Math.min(0, m), n.maxLeft = Math.max(0, p), n.maxTop = Math.max(0, m), s && this.limited && (n.minLeft = Math.min(o.left, o.left + (o.width - n.width)), n.minTop = Math.min(o.top, o.top + (o.height - n.height)), n.maxLeft = o.left, n.maxTop = o.top, 2 === r && (n.width >= a.width && (n.minLeft = Math.min(0, p), n.maxLeft = Math.max(0, p)), n.height >= a.height && (n.minTop = Math.min(0, m), n.maxTop = Math.max(0, m))))
                            } else n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height
                    },
                    renderCanvas: function(t, e) {
                        var i = this.canvasData,
                            a = this.imageData;
                        if (e) {
                            var n = function(t) {
                                    var e = t.width,
                                        i = t.height,
                                        a = t.degree;
                                    if (90 == (a = Math.abs(a) % 180)) return {
                                        width: i,
                                        height: e
                                    };
                                    var n = a % 90 * Math.PI / 180,
                                        o = Math.sin(n),
                                        r = Math.cos(n),
                                        h = e * r + i * o,
                                        s = e * o + i * r;
                                    return a > 90 ? {
                                        width: s,
                                        height: h
                                    } : {
                                        width: h,
                                        height: s
                                    }
                                }({
                                    width: a.naturalWidth * Math.abs(a.scaleX || 1),
                                    height: a.naturalHeight * Math.abs(a.scaleY || 1),
                                    degree: a.rotate || 0
                                }),
                                o = n.width,
                                r = n.height,
                                h = i.width * (o / i.naturalWidth),
                                s = i.height * (r / i.naturalHeight);
                            i.left -= (h - i.width) / 2, i.top -= (s - i.height) / 2, i.width = h, i.height = s, i.aspectRatio = o / r, i.naturalWidth = o, i.naturalHeight = r, this.limitCanvas(!0, !1)
                        }(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, O(this.canvas, W({
                            width: i.width,
                            height: i.height
                        }, V({
                            translateX: i.left,
                            translateY: i.top
                        }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0)
                    },
                    renderImage: function(t) {
                        var e = this.canvasData,
                            i = this.imageData,
                            a = i.naturalWidth * (e.width / e.naturalWidth),
                            n = i.naturalHeight * (e.height / e.naturalHeight);
                        W(i, {
                            width: a,
                            height: n,
                            left: (e.width - a) / 2,
                            top: (e.height - n) / 2
                        }), O(this.image, W({
                            width: i.width,
                            height: i.height
                        }, V(W({
                            translateX: i.left,
                            translateY: i.top
                        }, i)))), t && this.output()
                    },
                    initCropBox: function() {
                        var t = this.options,
                            e = this.canvasData,
                            i = t.aspectRatio,
                            a = Number(t.autoCropArea) || .8,
                            n = {
                                width: e.width,
                                height: e.height
                            };
                        i && (e.height * i > e.width ? n.height = n.width / i : n.width = n.height * i), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = e.left + (e.width - n.width) / 2, n.top = e.top + (e.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = W({}, n)
                    },
                    limitCropBox: function(t, e) {
                        var i = this.options,
                            a = this.containerData,
                            n = this.canvasData,
                            o = this.cropBoxData,
                            r = this.limited,
                            h = i.aspectRatio;
                        if (t) {
                            var s = Number(i.minCropBoxWidth) || 0,
                                c = Number(i.minCropBoxHeight) || 0,
                                d = Math.min(a.width, r ? n.width : a.width),
                                l = Math.min(a.height, r ? n.height : a.height);
                            s = Math.min(s, a.width), c = Math.min(c, a.height), h && (s && c ? c * h > s ? c = s / h : s = c * h : s ? c = s / h : c && (s = c * h), l * h > d ? l = d / h : d = l * h), o.minWidth = Math.min(s, d), o.minHeight = Math.min(c, l), o.maxWidth = d, o.maxHeight = l
                        }
                        e && (r ? (o.minLeft = Math.max(0, n.left), o.minTop = Math.max(0, n.top), o.maxLeft = Math.min(a.width, n.left + n.width) - o.width, o.maxTop = Math.min(a.height, n.top + n.height) - o.height) : (o.minLeft = 0, o.minTop = 0, o.maxLeft = a.width - o.width, o.maxTop = a.height - o.height))
                    },
                    renderCropBox: function() {
                        var t = this.options,
                            e = this.containerData,
                            i = this.cropBoxData;
                        (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && j(this.face, "action", i.width >= e.width && i.height >= e.height ? "move" : "all"), O(this.cropBox, W({
                            width: i.width,
                            height: i.height
                        }, V({
                            translateX: i.left,
                            translateY: i.top
                        }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
                    },
                    output: function() {
                        this.preview(), $(this.element, "crop", this.getData())
                    }
                },
                ot = {
                    initPreview: function() {
                        var t = this.crossOrigin,
                            e = this.options.preview,
                            i = t ? this.crossOriginUrl : this.url,
                            a = document.createElement("img");
                        if (t && (a.crossOrigin = t), a.src = i, this.viewBox.appendChild(a), this.viewBoxImage = a, e) {
                            var n = e;
                            "string" == typeof e ? n = this.element.ownerDocument.querySelectorAll(e) : e.querySelector && (n = [e]), this.previews = n, T(n, function(e) {
                                var a = document.createElement("img");
                                j(e, "preview", {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight,
                                    html: e.innerHTML
                                }), t && (a.crossOrigin = t), a.src = i, a.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', e.innerHTML = "", e.appendChild(a)
                            })
                        }
                    },
                    resetPreview: function() {
                        T(this.previews, function(t) {
                            var e = S(t, "preview");
                            O(t, {
                                width: e.width,
                                height: e.height
                            }), t.innerHTML = e.html, A(t, "preview")
                        })
                    },
                    preview: function() {
                        var t = this.imageData,
                            e = this.canvasData,
                            i = this.cropBoxData,
                            a = i.width,
                            n = i.height,
                            o = t.width,
                            r = t.height,
                            h = i.left - e.left - t.left,
                            s = i.top - e.top - t.top;
                        this.cropped && !this.disabled && (O(this.viewBoxImage, W({
                            width: o,
                            height: r
                        }, V(W({
                            translateX: -h,
                            translateY: -s
                        }, t)))), T(this.previews, function(e) {
                            var i = S(e, "preview"),
                                c = i.width,
                                d = i.height,
                                l = c,
                                p = d,
                                m = 1;
                            a && (p = n * (m = c / a)), n && p > d && (l = a * (m = d / n), p = d), O(e, {
                                width: l,
                                height: p
                            }), O(e.getElementsByTagName("img")[0], W({
                                width: o * m,
                                height: r * m
                            }, V(W({
                                translateX: -h * m,
                                translateY: -s * m
                            }, t))))
                        }))
                    }
                },
                rt = {
                    bind: function() {
                        var t = this.element,
                            e = this.options,
                            i = this.cropper;
                        k(e.cropstart) && q(t, "cropstart", e.cropstart), k(e.cropmove) && q(t, "cropmove", e.cropmove), k(e.cropend) && q(t, "cropend", e.cropend), k(e.crop) && q(t, "crop", e.crop), k(e.zoom) && q(t, "zoom", e.zoom), q(i, s, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && q(i, "wheel mousewheel DOMMouseScroll", this.onWheel = this.wheel.bind(this)), e.toggleDragModeOnDblclick && q(i, "dblclick", this.onDblclick = this.dblclick.bind(this)), q(t.ownerDocument, c, this.onCropMove = this.cropMove.bind(this)), q(t.ownerDocument, d, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && q(window, "resize", this.onResize = this.resize.bind(this))
                    },
                    unbind: function() {
                        var t = this.element,
                            e = this.options,
                            i = this.cropper;
                        k(e.cropstart) && U(t, "cropstart", e.cropstart), k(e.cropmove) && U(t, "cropmove", e.cropmove), k(e.cropend) && U(t, "cropend", e.cropend), k(e.crop) && U(t, "crop", e.crop), k(e.zoom) && U(t, "zoom", e.zoom), U(i, s, this.onCropStart), e.zoomable && e.zoomOnWheel && U(i, "wheel mousewheel DOMMouseScroll", this.onWheel), e.toggleDragModeOnDblclick && U(i, "dblclick", this.onDblclick), U(t.ownerDocument, c, this.onCropMove), U(t.ownerDocument, d, this.onCropEnd), e.responsive && U(window, "resize", this.onResize)
                    }
                },
                ht = {
                    resize: function() {
                        var t = this.options,
                            e = this.container,
                            i = this.containerData,
                            a = Number(t.minContainerWidth) || 200,
                            n = Number(t.minContainerHeight) || 100;
                        if (!(this.disabled || i.width <= a || i.height <= n)) {
                            var o = e.offsetWidth / i.width;
                            if (1 !== o || e.offsetHeight !== i.height) {
                                var r = void 0,
                                    h = void 0;
                                t.restore && (r = this.getCanvasData(), h = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(T(r, function(t, e) {
                                    r[e] = t * o
                                })), this.setCropBoxData(T(h, function(t, e) {
                                    h[e] = t * o
                                })))
                            }
                        }
                    },
                    dblclick: function() {
                        var t, e;
                        this.disabled || "none" === this.options.dragMode || this.setDragMode((t = this.dragBox, e = "cropper-crop", (t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1) ? "move" : "crop"))
                    },
                    wheel: function(t) {
                        var e = this,
                            i = Number(this.options.wheelZoomRatio) || .1,
                            a = 1;
                        this.disabled || (t.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout(function() {
                            e.wheeling = !1
                        }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * i, t)))
                    },
                    cropStart: function(t) {
                        if (!this.disabled) {
                            var e = this.options,
                                i = this.pointers,
                                a = void 0;
                            t.changedTouches ? T(t.changedTouches, function(t) {
                                i[t.identifier] = G(t)
                            }) : i[t.pointerId || 0] = G(t), a = Object.keys(i).length > 1 && e.zoomable && e.zoomOnTouch ? "zoom" : S(t.target, "action"), l.test(a) && !1 !== $(this.element, "cropstart", {
                                originalEvent: t,
                                action: a
                            }) && (t.preventDefault(), this.action = a, this.cropping = !1, "crop" === a && (this.cropping = !0, z(this.dragBox, "cropper-modal")))
                        }
                    },
                    cropMove: function(t) {
                        var e = this.action;
                        if (!this.disabled && e) {
                            var i = this.pointers;
                            t.preventDefault(), !1 !== $(this.element, "cropmove", {
                                originalEvent: t,
                                action: e
                            }) && (t.changedTouches ? T(t.changedTouches, function(t) {
                                W(i[t.identifier], G(t, !0))
                            }) : W(i[t.pointerId || 0], G(t, !0)), this.change(t))
                        }
                    },
                    cropEnd: function(t) {
                        if (!this.disabled) {
                            var e = this.action,
                                i = this.pointers;
                            t.changedTouches ? T(t.changedTouches, function(t) {
                                delete i[t.identifier]
                            }) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, Y(this.dragBox, "cropper-modal", this.cropped && this.options.modal)), $(this.element, "cropend", {
                                originalEvent: t,
                                action: e
                            }))
                        }
                    }
                },
                st = {
                    change: function(t) {
                        var e = this.options,
                            i = this.canvasData,
                            a = this.containerData,
                            n = this.cropBoxData,
                            o = this.pointers,
                            r = this.action,
                            s = e.aspectRatio,
                            c = n.left,
                            d = n.top,
                            l = n.width,
                            p = n.height,
                            m = c + l,
                            u = d + p,
                            g = 0,
                            f = 0,
                            v = a.width,
                            w = a.height,
                            b = !0,
                            x = void 0;
                        !s && t.shiftKey && (s = l && p ? l / p : 1), this.limited && (g = n.minLeft, f = n.minTop, v = g + Math.min(a.width, i.width, i.left + i.width), w = f + Math.min(a.height, i.height, i.top + i.height));
                        var y = o[Object.keys(o)[0]],
                            M = {
                                x: y.endX - y.startX,
                                y: y.endY - y.startY
                            },
                            C = function(t) {
                                switch (t) {
                                    case "e":
                                        m + M.x > v && (M.x = v - m);
                                        break;
                                    case "w":
                                        c + M.x < g && (M.x = g - c);
                                        break;
                                    case "n":
                                        d + M.y < f && (M.y = f - d);
                                        break;
                                    case "s":
                                        u + M.y > w && (M.y = w - u)
                                }
                            };
                        switch (r) {
                            case "all":
                                c += M.x, d += M.y;
                                break;
                            case "e":
                                if (M.x >= 0 && (m >= v || s && (d <= f || u >= w))) {
                                    b = !1;
                                    break
                                }
                                C("e"), l += M.x, s && (p = l / s, d -= M.x / s / 2), l < 0 && (r = "w", l = 0);
                                break;
                            case "n":
                                if (M.y <= 0 && (d <= f || s && (c <= g || m >= v))) {
                                    b = !1;
                                    break
                                }
                                C("n"), p -= M.y, d += M.y, s && (l = p * s, c += M.y * s / 2), p < 0 && (r = "s", p = 0);
                                break;
                            case "w":
                                if (M.x <= 0 && (c <= g || s && (d <= f || u >= w))) {
                                    b = !1;
                                    break
                                }
                                C("w"), l -= M.x, c += M.x, s && (p = l / s, d += M.x / s / 2), l < 0 && (r = "e", l = 0);
                                break;
                            case "s":
                                if (M.y >= 0 && (u >= w || s && (c <= g || m >= v))) {
                                    b = !1;
                                    break
                                }
                                C("s"), p += M.y, s && (l = p * s, c -= M.y * s / 2), p < 0 && (r = "n", p = 0);
                                break;
                            case "ne":
                                if (s) {
                                    if (M.y <= 0 && (d <= f || m >= v)) {
                                        b = !1;
                                        break
                                    }
                                    C("n"), p -= M.y, d += M.y, l = p * s
                                } else C("n"), C("e"), M.x >= 0 ? m < v ? l += M.x : M.y <= 0 && d <= f && (b = !1) : l += M.x, M.y <= 0 ? d > f && (p -= M.y, d += M.y) : (p -= M.y, d += M.y);
                                l < 0 && p < 0 ? (r = "sw", p = 0, l = 0) : l < 0 ? (r = "nw", l = 0) : p < 0 && (r = "se", p = 0);
                                break;
                            case "nw":
                                if (s) {
                                    if (M.y <= 0 && (d <= f || c <= g)) {
                                        b = !1;
                                        break
                                    }
                                    C("n"), p -= M.y, d += M.y, l = p * s, c += M.y * s
                                } else C("n"), C("w"), M.x <= 0 ? c > g ? (l -= M.x, c += M.x) : M.y <= 0 && d <= f && (b = !1) : (l -= M.x, c += M.x), M.y <= 0 ? d > f && (p -= M.y, d += M.y) : (p -= M.y, d += M.y);
                                l < 0 && p < 0 ? (r = "se", p = 0, l = 0) : l < 0 ? (r = "ne", l = 0) : p < 0 && (r = "sw", p = 0);
                                break;
                            case "sw":
                                if (s) {
                                    if (M.x <= 0 && (c <= g || u >= w)) {
                                        b = !1;
                                        break
                                    }
                                    C("w"), l -= M.x, c += M.x, p = l / s
                                } else C("s"), C("w"), M.x <= 0 ? c > g ? (l -= M.x, c += M.x) : M.y >= 0 && u >= w && (b = !1) : (l -= M.x, c += M.x), M.y >= 0 ? u < w && (p += M.y) : p += M.y;
                                l < 0 && p < 0 ? (r = "ne", p = 0, l = 0) : l < 0 ? (r = "se", l = 0) : p < 0 && (r = "nw", p = 0);
                                break;
                            case "se":
                                if (s) {
                                    if (M.x >= 0 && (m >= v || u >= w)) {
                                        b = !1;
                                        break
                                    }
                                    C("e"), l += M.x, p = l / s
                                } else C("s"), C("e"), M.x >= 0 ? m < v ? l += M.x : M.y >= 0 && u >= w && (b = !1) : l += M.x, M.y >= 0 ? u < w && (p += M.y) : p += M.y;
                                l < 0 && p < 0 ? (r = "nw", p = 0, l = 0) : l < 0 ? (r = "sw", l = 0) : p < 0 && (r = "ne", p = 0);
                                break;
                            case "move":
                                this.move(M.x, M.y), b = !1;
                                break;
                            case "zoom":
                                this.zoom(function(t) {
                                    var e = W({}, t),
                                        i = [];
                                    return T(t, function(t, a) {
                                        delete e[a], T(e, function(e) {
                                            var a = Math.abs(t.startX - e.startX),
                                                n = Math.abs(t.startY - e.startY),
                                                o = Math.abs(t.endX - e.endX),
                                                r = Math.abs(t.endY - e.endY),
                                                h = Math.sqrt(a * a + n * n),
                                                s = (Math.sqrt(o * o + r * r) - h) / h;
                                            i.push(s)
                                        })
                                    }), i.sort(function(t, e) {
                                        return Math.abs(t) < Math.abs(e)
                                    }), i[0]
                                }(o), t), b = !1;
                                break;
                            case "crop":
                                if (!M.x || !M.y) {
                                    b = !1;
                                    break
                                }
                                x = _(this.cropper), c = y.startX - x.left, d = y.startY - x.top, l = n.minWidth, p = n.minHeight, M.x > 0 ? r = M.y > 0 ? "se" : "ne" : M.x < 0 && (c -= l, r = M.y > 0 ? "sw" : "nw"), M.y < 0 && (d -= p), this.cropped || (L(this.cropBox, h), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
                        }
                        b && (n.width = l, n.height = p, n.left = c, n.top = d, this.action = r, this.renderCropBox()), T(o, function(t) {
                            t.startX = t.endX, t.startY = t.endY
                        })
                    }
                },
                ct = {
                    crop: function() {
                        return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && z(this.dragBox, "cropper-modal"), L(this.cropBox, h), this.setCropBoxData(this.initialCropBoxData)), this
                    },
                    reset: function() {
                        return this.ready && !this.disabled && (this.imageData = W({}, this.initialImageData), this.canvasData = W({}, this.initialCanvasData), this.cropBoxData = W({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
                    },
                    clear: function() {
                        return this.cropped && !this.disabled && (W(this.cropBoxData, {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), L(this.dragBox, "cropper-modal"), z(this.cropBox, h)), this
                    },
                    replace: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, T(this.previews, function(e) {
                            e.getElementsByTagName("img")[0].src = t
                        }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this
                    },
                    enable: function() {
                        return this.ready && this.disabled && (this.disabled = !1, L(this.cropper, "cropper-disabled")), this
                    },
                    disable: function() {
                        return this.ready && !this.disabled && (this.disabled = !0, z(this.cropper, "cropper-disabled")), this
                    },
                    destroy: function() {
                        var t = this.element;
                        return S(t, "cropper") ? (this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), A(t, "cropper"), this) : this
                    },
                    move: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                            i = this.canvasData,
                            a = i.left,
                            n = i.top;
                        return this.moveTo(M(t) ? t : a + Number(t), M(e) ? e : n + Number(e))
                    },
                    moveTo: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                            i = this.canvasData,
                            a = !1;
                        return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (y(t) && (i.left = t, a = !0), y(e) && (i.top = e, a = !0), a && this.renderCanvas(!0)), this
                    },
                    zoom: function(t, e) {
                        var i = this.canvasData;
                        return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t, this.zoomTo(i.width * t / i.naturalWidth, null, e)
                    },
                    zoomTo: function(t, e, i) {
                        var a = this.options,
                            n = this.canvasData,
                            o = n.width,
                            r = n.height,
                            h = n.naturalWidth,
                            s = n.naturalHeight;
                        if ((t = Number(t)) >= 0 && this.ready && !this.disabled && a.zoomable) {
                            var c = h * t,
                                d = s * t;
                            if (!1 === $(this.element, "zoom", {
                                    originalEvent: i,
                                    oldRatio: o / h,
                                    ratio: c / h
                                })) return this;
                            if (i) {
                                var l = this.pointers,
                                    p = _(this.cropper),
                                    m = l && Object.keys(l).length ? function(t) {
                                        var e = 0,
                                            i = 0,
                                            a = 0;
                                        return T(t, function(t) {
                                            var n = t.startX,
                                                o = t.startY;
                                            e += n, i += o, a += 1
                                        }), {
                                            pageX: e /= a,
                                            pageY: i /= a
                                        }
                                    }(l) : {
                                        pageX: i.pageX,
                                        pageY: i.pageY
                                    };
                                n.left -= (c - o) * ((m.pageX - p.left - n.left) / o), n.top -= (d - r) * ((m.pageY - p.top - n.top) / r)
                            } else B(e) && y(e.x) && y(e.y) ? (n.left -= (c - o) * ((e.x - n.left) / o), n.top -= (d - r) * ((e.y - n.top) / r)) : (n.left -= (c - o) / 2, n.top -= (d - r) / 2);
                            n.width = c, n.height = d, this.renderCanvas(!0)
                        }
                        return this
                    },
                    rotate: function(t) {
                        return this.rotateTo((this.imageData.rotate || 0) + Number(t))
                    },
                    rotateTo: function(t) {
                        return y(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this
                    },
                    scaleX: function(t) {
                        var e = this.imageData.scaleY;
                        return this.scale(t, y(e) ? e : 1)
                    },
                    scaleY: function(t) {
                        var e = this.imageData.scaleX;
                        return this.scale(y(e) ? e : 1, t)
                    },
                    scale: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                            i = this.imageData,
                            a = !1;
                        return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (y(t) && (i.scaleX = t, a = !0), y(e) && (i.scaleY = e, a = !0), a && this.renderCanvas(!0, !0)), this
                    },
                    getData: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = this.options,
                            i = this.imageData,
                            a = this.canvasData,
                            n = this.cropBoxData,
                            o = void 0;
                        if (this.ready && this.cropped) {
                            o = {
                                x: n.left - a.left,
                                y: n.top - a.top,
                                width: n.width,
                                height: n.height
                            };
                            var r = i.width / i.naturalWidth;
                            T(o, function(e, i) {
                                e /= r, o[i] = t ? Math.round(e) : e
                            })
                        } else o = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        return e.rotatable && (o.rotate = i.rotate || 0), e.scalable && (o.scaleX = i.scaleX || 1, o.scaleY = i.scaleY || 1), o
                    },
                    setData: function(t) {
                        var e = this.options,
                            i = this.imageData,
                            a = this.canvasData,
                            n = {};
                        if (this.ready && !this.disabled && B(t)) {
                            var o = !1;
                            e.rotatable && y(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, o = !0), e.scalable && (y(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, o = !0), y(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
                            var r = i.width / i.naturalWidth;
                            y(t.x) && (n.left = t.x * r + a.left), y(t.y) && (n.top = t.y * r + a.top), y(t.width) && (n.width = t.width * r), y(t.height) && (n.height = t.height * r), this.setCropBoxData(n)
                        }
                        return this
                    },
                    getContainerData: function() {
                        return this.ready ? W({}, this.containerData) : {}
                    },
                    getImageData: function() {
                        return this.sized ? W({}, this.imageData) : {}
                    },
                    getCanvasData: function() {
                        var t = this.canvasData,
                            e = {};
                        return this.ready && T(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
                            e[i] = t[i]
                        }), e
                    },
                    setCanvasData: function(t) {
                        var e = this.canvasData,
                            i = e.aspectRatio;
                        return this.ready && !this.disabled && B(t) && (y(t.left) && (e.left = t.left), y(t.top) && (e.top = t.top), y(t.width) ? (e.width = t.width, e.height = t.width / i) : y(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this
                    },
                    getCropBoxData: function() {
                        var t = this.cropBoxData,
                            e = void 0;
                        return this.ready && this.cropped && (e = {
                            left: t.left,
                            top: t.top,
                            width: t.width,
                            height: t.height
                        }), e || {}
                    },
                    setCropBoxData: function(t) {
                        var e = this.cropBoxData,
                            i = this.options.aspectRatio,
                            a = void 0,
                            n = void 0;
                        return this.ready && this.cropped && !this.disabled && B(t) && (y(t.left) && (e.left = t.left), y(t.top) && (e.top = t.top), y(t.width) && t.width !== e.width && (a = !0, e.width = t.width), y(t.height) && t.height !== e.height && (n = !0, e.height = t.height), i && (a ? e.height = e.width / i : n && (e.width = e.height * i)), this.renderCropBox()), this
                    },
                    getCroppedCanvas: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!this.ready || !window.HTMLCanvasElement) return null;
                        var e = this.canvasData,
                            i = function(t, e, i, a) {
                                var n = e.aspectRatio,
                                    o = e.naturalWidth,
                                    r = e.naturalHeight,
                                    h = e.rotate,
                                    s = void 0 === h ? 0 : h,
                                    c = e.scaleX,
                                    d = void 0 === c ? 1 : c,
                                    l = e.scaleY,
                                    p = void 0 === l ? 1 : l,
                                    m = i.aspectRatio,
                                    u = i.naturalWidth,
                                    g = i.naturalHeight,
                                    f = a.fillColor,
                                    v = void 0 === f ? "transparent" : f,
                                    w = a.imageSmoothingEnabled,
                                    x = void 0 === w || w,
                                    y = a.imageSmoothingQuality,
                                    M = void 0 === y ? "low" : y,
                                    C = a.maxWidth,
                                    D = void 0 === C ? 1 / 0 : C,
                                    B = a.maxHeight,
                                    k = void 0 === B ? 1 / 0 : B,
                                    T = a.minWidth,
                                    W = void 0 === T ? 0 : T,
                                    E = a.minHeight,
                                    N = void 0 === E ? 0 : E,
                                    O = document.createElement("canvas"),
                                    z = O.getContext("2d"),
                                    L = tt({
                                        aspectRatio: m,
                                        width: D,
                                        height: k
                                    }),
                                    Y = tt({
                                        aspectRatio: m,
                                        width: W,
                                        height: N
                                    }, "cover"),
                                    X = Math.min(L.width, Math.max(Y.width, u)),
                                    R = Math.min(L.height, Math.max(Y.height, g)),
                                    S = tt({
                                        aspectRatio: n,
                                        width: D,
                                        height: k
                                    }),
                                    j = tt({
                                        aspectRatio: n,
                                        width: W,
                                        height: N
                                    }, "cover"),
                                    A = Math.min(S.width, Math.max(j.width, o)),
                                    I = Math.min(S.height, Math.max(j.height, r)),
                                    P = [-A / 2, -I / 2, A, I];
                                return O.width = H(X), O.height = H(R), z.fillStyle = v, z.fillRect(0, 0, X, R), z.save(), z.translate(X / 2, R / 2), z.rotate(s * Math.PI / 180), z.scale(d, p), z.imageSmoothingEnabled = x, z.imageSmoothingQuality = M, z.drawImage.apply(z, [t].concat(b(P.map(function(t) {
                                    return Math.floor(H(t))
                                })))), z.restore(), O
                            }(this.image, this.imageData, e, t);
                        if (!this.cropped) return i;
                        var a = this.getData(),
                            n = a.x,
                            o = a.y,
                            r = a.width,
                            h = a.height,
                            s = i.width / Math.floor(e.naturalWidth);
                        1 !== s && (n *= s, o *= s, r *= s, h *= s);
                        var c = r / h,
                            d = tt({
                                aspectRatio: c,
                                width: t.maxWidth || 1 / 0,
                                height: t.maxHeight || 1 / 0
                            }),
                            l = tt({
                                aspectRatio: c,
                                width: t.minWidth || 0,
                                height: t.minHeight || 0
                            }, "cover"),
                            p = tt({
                                aspectRatio: c,
                                width: t.width || (1 !== s ? i.width : r),
                                height: t.height || (1 !== s ? i.height : h)
                            }),
                            m = p.width,
                            u = p.height;
                        m = Math.min(d.width, Math.max(l.width, m)), u = Math.min(d.height, Math.max(l.height, u));
                        var g = document.createElement("canvas"),
                            f = g.getContext("2d");
                        g.width = H(m), g.height = H(u), f.fillStyle = t.fillColor || "transparent", f.fillRect(0, 0, m, u);
                        var v = t.imageSmoothingEnabled,
                            w = void 0 === v || v,
                            x = t.imageSmoothingQuality;
                        f.imageSmoothingEnabled = w, x && (f.imageSmoothingQuality = x);
                        var y = i.width,
                            M = i.height,
                            C = n,
                            D = o,
                            B = void 0,
                            k = void 0,
                            T = void 0,
                            W = void 0,
                            E = void 0,
                            N = void 0;
                        C <= -r || C > y ? (C = 0, B = 0, T = 0, E = 0) : C <= 0 ? (T = -C, C = 0, B = Math.min(y, r + C), E = B) : C <= y && (T = 0, B = Math.min(r, y - C), E = B), B <= 0 || D <= -h || D > M ? (D = 0, k = 0, W = 0, N = 0) : D <= 0 ? (W = -D, D = 0, k = Math.min(M, h + D), N = k) : D <= M && (W = 0, k = Math.min(h, M - D), N = k);
                        var O = [C, D, B, k];
                        if (E > 0 && N > 0) {
                            var z = m / r;
                            O.push(T * z, W * z, E * z, N * z)
                        }
                        return f.drawImage.apply(f, [i].concat(b(O.map(function(t) {
                            return Math.floor(H(t))
                        })))), g
                    },
                    setAspectRatio: function(t) {
                        var e = this.options;
                        return this.disabled || M(t) || (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
                    },
                    setDragMode: function(t) {
                        var e = this.options,
                            i = this.dragBox,
                            a = this.face;
                        if (this.ready && !this.disabled) {
                            var n = "crop" === t,
                                o = e.movable && "move" === t;
                            t = n || o ? t : "none", e.dragMode = t, j(i, "action", t), Y(i, "cropper-crop", n), Y(i, "cropper-move", o), e.cropBoxMovable || (j(a, "action", t), Y(a, "cropper-crop", n), Y(a, "cropper-move", o))
                        }
                        return this
                    }
                },
                dt = r.Cropper,
                lt = function() {
                    function t(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (v(this, t), !e || !u.test(e.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                        this.element = e, this.options = W({}, g, B(i) && i), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
                    }
                    return w(t, [{
                        key: "init",
                        value: function() {
                            var t = this.element,
                                e = t.tagName.toLowerCase(),
                                i = void 0;
                            if (!S(t, "cropper")) {
                                if (j(t, "cropper", this), "img" === e) {
                                    if (this.isImg = !0, i = t.getAttribute("src") || "", this.originalUrl = i, !i) return;
                                    i = t.src
                                } else "canvas" === e && window.HTMLCanvasElement && (i = t.toDataURL());
                                this.load(i)
                            }
                        }
                    }, {
                        key: "load",
                        value: function(t) {
                            var e = this;
                            if (t) {
                                this.url = t, this.imageData = {};
                                var i = this.element,
                                    a = this.options;
                                if (a.checkOrientation && window.ArrayBuffer)
                                    if (p.test(t)) m.test(t) ? this.read((n = t.replace(it, ""), o = atob(n), r = new ArrayBuffer(o.length), T(h = new Uint8Array(r), function(t, e) {
                                        h[e] = o.charCodeAt(e)
                                    }), r)) : this.clone();
                                    else {
                                        var n, o, r, h, s = new XMLHttpRequest;
                                        this.reloading = !0, this.xhr = s;
                                        var c = function() {
                                            e.reloading = !1, e.xhr = null
                                        };
                                        s.ontimeout = c, s.onabort = c, s.onerror = function() {
                                            c(), e.clone()
                                        }, s.onload = function() {
                                            c(), e.read(s.response)
                                        }, a.checkCrossOrigin && Z(t) && i.crossOrigin && (t = K(t)), s.open("get", t), s.responseType = "arraybuffer", s.withCredentials = "use-credentials" === i.crossOrigin, s.send()
                                    }
                                else this.clone()
                            }
                        }
                    }, {
                        key: "read",
                        value: function(t) {
                            var e = this.options,
                                i = this.imageData,
                                a = at(t),
                                n = 0,
                                o = 1,
                                r = 1;
                            if (a > 1) {
                                this.url = function(t, e) {
                                    var i = "";
                                    return T(new Uint8Array(t), function(t) {
                                        i += et(t)
                                    }), "data:" + e + ";base64," + btoa(i)
                                }(t, "image/jpeg");
                                var h = function(t) {
                                    var e = 0,
                                        i = 1,
                                        a = 1;
                                    switch (t) {
                                        case 2:
                                            i = -1;
                                            break;
                                        case 3:
                                            e = -180;
                                            break;
                                        case 4:
                                            a = -1;
                                            break;
                                        case 5:
                                            e = 90, a = -1;
                                            break;
                                        case 6:
                                            e = 90;
                                            break;
                                        case 7:
                                            e = 90, i = -1;
                                            break;
                                        case 8:
                                            e = -90
                                    }
                                    return {
                                        rotate: e,
                                        scaleX: i,
                                        scaleY: a
                                    }
                                }(a);
                                n = h.rotate, o = h.scaleX, r = h.scaleY
                            }
                            e.rotatable && (i.rotate = n), e.scalable && (i.scaleX = o, i.scaleY = r), this.clone()
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            var t = this.element,
                                e = this.url,
                                i = void 0,
                                a = void 0;
                            this.options.checkCrossOrigin && Z(e) && ((i = t.crossOrigin) ? a = e : (i = "anonymous", a = K(e))), this.crossOrigin = i, this.crossOriginUrl = a;
                            var n = document.createElement("img");
                            i && (n.crossOrigin = i), n.src = a || e;
                            var o = this.start.bind(this),
                                r = this.stop.bind(this);
                            this.image = n, this.onStart = o, this.onStop = r, this.isImg ? t.complete ? this.timeout = setTimeout(o, 0) : q(t, "load", o, {
                                once: !0
                            }) : (n.onload = o, n.onerror = r, z(n, "cropper-hide"), t.parentNode.insertBefore(n, t.nextSibling))
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            var e = this,
                                i = this.isImg ? this.element : this.image;
                            t && (i.onload = null, i.onerror = null), this.sizing = !0;
                            var a = r.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(r.navigator.userAgent),
                                n = function(t, i) {
                                    W(e.imageData, {
                                        naturalWidth: t,
                                        naturalHeight: i,
                                        aspectRatio: t / i
                                    }), e.sizing = !1, e.sized = !0, e.build()
                                };
                            if (!i.naturalWidth || a) {
                                var o = document.createElement("img"),
                                    h = document.body || document.documentElement;
                                this.sizingImage = o, o.onload = function() {
                                    n(o.width, o.height), a || h.removeChild(o)
                                }, o.src = i.src, a || (o.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", h.appendChild(o))
                            } else n(i.naturalWidth, i.naturalHeight)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            var t = this.image;
                            t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null
                        }
                    }, {
                        key: "build",
                        value: function() {
                            if (this.sized && !this.ready) {
                                var t = this.element,
                                    e = this.options,
                                    i = this.image,
                                    a = t.parentNode,
                                    n = document.createElement("div");
                                n.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>';
                                var o = n.querySelector(".cropper-container"),
                                    r = o.querySelector(".cropper-canvas"),
                                    s = o.querySelector(".cropper-drag-box"),
                                    c = o.querySelector(".cropper-crop-box"),
                                    d = c.querySelector(".cropper-face");
                                this.container = a, this.cropper = o, this.canvas = r, this.dragBox = s, this.cropBox = c, this.viewBox = o.querySelector(".cropper-view-box"), this.face = d, r.appendChild(i), z(t, h), a.insertBefore(o, t.nextSibling), this.isImg || L(i, "cropper-hide"), this.initPreview(), this.bind(), e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, z(c, h), e.guides || z(c.getElementsByClassName("cropper-dashed"), h), e.center || z(c.getElementsByClassName("cropper-center"), h), e.background && z(o, "cropper-bg"), e.highlight || z(d, "cropper-invisible"), e.cropBoxMovable && (z(d, "cropper-move"), j(d, "action", "all")), e.cropBoxResizable || (z(c.getElementsByClassName("cropper-line"), h), z(c.getElementsByClassName("cropper-point"), h)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), k(e.ready) && q(t, "ready", e.ready, {
                                    once: !0
                                }), $(t, "ready")
                            }
                        }
                    }, {
                        key: "unbuild",
                        value: function() {
                            this.ready && (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), L(this.element, h))
                        }
                    }, {
                        key: "uncreate",
                        value: function() {
                            var t = this.element;
                            this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? this.xhr.abort() : this.isImg ? t.complete ? clearTimeout(this.timeout) : U(t, "load", this.onStart) : this.image && this.stop()
                        }
                    }], [{
                        key: "noConflict",
                        value: function() {
                            return window.Cropper = dt, t
                        }
                    }, {
                        key: "setDefaults",
                        value: function(t) {
                            W(g, B(t) && t)
                        }
                    }]), t
                }();
            if (W(lt.prototype, nt, ot, rt, ht, st, ct), n.fn) {
                var pt = n.fn.cropper;
                n.fn.cropper = function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) i[a - 1] = arguments[a];
                    var o = void 0;
                    return this.each(function(e, a) {
                        var r = n(a),
                            h = "destroy" === t,
                            s = r.data("cropper");
                        if (!s) {
                            if (h) return;
                            var c = n.extend({}, r.data(), n.isPlainObject(t) && t);
                            s = new lt(a, c), r.data("cropper", s)
                        }
                        if ("string" == typeof t) {
                            var d = s[t];
                            n.isFunction(d) && ((o = d.apply(s, i)) === s && (o = void 0), h && r.removeData("cropper"))
                        }
                    }), void 0 !== o ? o : this
                }, n.fn.cropper.Constructor = lt, n.fn.cropper.setDefaults = lt.setDefaults, n.fn.cropper.noConflict = function() {
                    return n.fn.cropper = pt, this
                }
            }
        },
        297: function(t, e, i) {
            i(296)
        }
    });
    if ("object" == typeof i) {
        var a = ["object" == typeof module && "object" == typeof module.exports ? module.exports : null, "undefined" != typeof window ? window : null, t && t !== window ? t : null];
        for (var n in i) a[0] && (a[0][n] = i[n]), a[1] && "__esModule" !== n && (a[1][n] = i[n]), a[2] && (a[2][n] = i[n])
    }
    
}(this);