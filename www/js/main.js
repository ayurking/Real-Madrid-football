(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        e = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var b, d = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
            ], f = 0, c = d.length, e = {}; f < c; f++)
                if ((b = d[f]) && b[1] in a) {
                    for (f = 0; f < b.length; f++) e[d[0][f]] =
                        b[f];
                    return e
                }
            return !1
        }(),
        f = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        c = {
            request: function(f) {
                var c = d.requestFullscreen;
                f = f || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[c]();
                else f[c](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[d.exitFullscreen]()
            },
            toggle: function(b) {
                this.isFullscreen ? this.exit() : this.request(b)
            },
            onchange: function(b) {
                this.on("change", b)
            },
            onerror: function(b) {
                this.on("error", b)
            },
            on: function(b, d) {
                var c = f[b];
                c && a.addEventListener(c, d, !1)
            },
            off: function(b,
                d) {
                var c = f[b];
                c && a.removeEventListener(c, d, !1)
            },
            raw: d
        };
    d ? (Object.defineProperties(c, {
        isFullscreen: {
            get: function() {
                return !!a[d.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[d.fullscreenEnabled]
            }
        }
    }), e ? module.exports = c : window.screenfull = c) : e ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function isChrome() {
    var a = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
    var e = a.toLowerCase(),
        b = window.document,
        d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var f = b.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var c = b.createElement("div");
        c.id = "vpw-test-d";
        c.style.cssText = "position:absolute;top:-1000px";
        c.innerHTML = "<style>@media(" + e + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
        f.appendChild(c);
        d.insertBefore(f, b.head);
        a = 7 == c["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(f)
    } else a = window["inner" + a];
    return a
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var e = getSize("Width");
        _checkOrientation(e, a);
        s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH);
        var b = CANVAS_WIDTH * s_iScaleFactor,
            d = CANVAS_HEIGHT * s_iScaleFactor;
        if (d < a) {
            var f = a - d;
            d += f;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * f
        } else b < e && (f = e - b, b += f, d += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = a / 2 - d / 2;
        var c = e / 2 - b / 2,
            g = CANVAS_WIDTH / b;
        if (c * g < -EDGEBOARD_X || f * g < -EDGEBOARD_Y) s_iScaleFactor =
            Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * s_iScaleFactor, d = CANVAS_HEIGHT * s_iScaleFactor, f = (a - d) / 2, c = (e - b) / 2, g = CANVAS_WIDTH / b;
        s_iOffsetX = -1 * c * g;
        s_iOffsetY = -1 * f * g;
        0 <= f && (s_iOffsetY = 0);
        0 <= c && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos();
        null !== s_oSelectPlayer && s_oSelectPlayer.refreshButtonPos();
        s_bIsIphone ? (canvas = document.getElementById("canvas"),
            s_oStage.canvas.width = 2 * b, s_oStage.canvas.height = 2 * d, canvas.style.width = b + "px", canvas.style.height = d + "px", s_iScaleFactor = 2 * Math.min(b / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = b, s_oStage.canvas.height = d, s_iScaleFactor = Math.min(b / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top",
            "0px");
        $("#canvas").css("left", c + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, e) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function randomFloatBetween(a, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(b))
}

function randomIntBetween(a, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseInt(Math.min(a + Math.random() * (e - a), e).toFixed(b))
}

function createBitmap(a, e, b) {
    var d = new createjs.Bitmap(a),
        f = new createjs.Shape;
    e && b ? f.graphics.beginFill("#fff").drawRect(-e / 2, -b / 2, e, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = f;
    return d
}

function createSprite(a, e, b, d, f, c) {
    a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
    e = new createjs.Shape;
    e.graphics.beginFill("#000000").drawRect(-b, -d, f, c);
    a.hitArea = e;
    return a
}

function randomFloatBetween(a, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(b))
}

function shuffle(a) {
    for (var e = a.length, b, d; 0 !== e;) d = Math.floor(Math.random() * e), --e, b = a[e], a[e] = a[d], a[d] = b;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var e = Math.floor(a / 60);
    a = parseFloat(a - 60 * e).toFixed(1);
    var b = "";
    b = 10 > e ? b + ("0" + e + ":") : b + (e + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, e) {
    var b = getBounds(a, .9);
    var d = getBounds(e, .98);
    return calculateIntersection(b, d)
}

function calculateIntersection(a, e) {
    var b, d, f, c;
    var g = a.x + (b = a.width / 2);
    var m = a.y + (d = a.height / 2);
    var h = e.x + (f = e.width / 2);
    var k = e.y + (c = e.height / 2);
    g = Math.abs(g - h) - (b + f);
    m = Math.abs(m - k) - (d + c);
    return 0 > g && 0 > m ? (g = Math.min(Math.min(a.width, e.width), -g), m = Math.min(Math.min(a.height, e.height), -m), {
        x: Math.max(a.x, e.x),
        y: Math.max(a.y, e.y),
        width: g,
        height: m,
        rect1: a,
        rect2: e
    }) : null
}

function getBounds(a, e) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children,
            f = d.length,
            c;
        for (c = 0; c < f; c++) {
            var g = getBounds(d[c], 1);
            g.x < b.x && (b.x = g.x);
            g.y < b.y && (b.y = g.y);
            g.x + g.width > b.x2 && (b.x2 = g.x + g.width);
            g.y + g.height > b.y2 && (b.y2 = g.y + g.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            f =
                a.sourceRect || a.image;
            c = f.width * e;
            var m = f.height * e
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                f = a.spriteSheet.getFrame(a.currentFrame);
                c = f.rect.width;
                m = f.rect.height;
                d = f.regX;
                var h = f.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        d = d || 0;
        c = c || 0;
        h = h || 0;
        m = m || 0;
        b.regX = d;
        b.regY = h;
        f = a.localToGlobal(0 - d, 0 - h);
        g = a.localToGlobal(c - d, m - h);
        c = a.localToGlobal(c - d, 0 - h);
        d = a.localToGlobal(0 - d, m - h);
        b.x =
            Math.min(Math.min(Math.min(f.x, g.x), c.x), d.x);
        b.y = Math.min(Math.min(Math.min(f.y, g.y), c.y), d.y);
        b.width = Math.max(Math.max(Math.max(f.x, g.x), c.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(f.y, g.y), c.y), d.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", !0, !0);
            a.dispatchEvent(e)
        }
    }
};
(function() {
    function a(b) {
        var a = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        b = b || window.event;
        b.type in a ? document.body.className = a[b.type] : (document.body.className = this[e] ? "hidden" : "visible", s_oMain && ("hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate()))
    }
    var e = "hidden";
    e in document ? document.addEventListener("visibilitychange", a) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (e =
        "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function playSound(a, e, b) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds[a].play(), s_aSounds[a].volume(e), s_aSounds[a].loop(b);
    return null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, e) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(e)
}

function setMute(a, e) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(e)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var e = window.location.search.substring(1).split("&"), b = 0; b < e.length; b++) {
        var d = e[b].split("=");
        if (d[0] == a) return d[1]
    }
}

function distanceV2(a, e) {
    var b = a.x - e.x,
        d = a.y - e.y;
    return Math.sqrt(b * b + d * d)
}

function randomRange(a, e) {
    return Math.floor(Math.random() * (e - a)) + a
}

function saveItem(a, e) {
    s_bStorageAvailable && localStorage.setItem(a, e)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function clearAllItem() {
    localStorage.clear()
}

function getRandomColor() {
    return "rgba(" + (Math.floor(127 * Math.random() + 255) - 127) + "," + (Math.floor(127 * Math.random() + 255) - 127) + "," + (Math.floor(127 * Math.random() + 255) - 127) + ",1)"
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut(), null !== s_oSelectPlayer && s_oSelectPlayer.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut();
    null !== s_oSelectPlayer && s_oSelectPlayer.resetFullscreenBut()
});

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var e = a.split("."),
        b = e.length;
    2 < b && (a = e[b - 2] + "." + e[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            e = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    e = !0;
                    break
                }
        } catch (b) {
            e = !0
        }
        return {
            topFrame: a,
            err: e
        }
    },
    getBestPageUrl = function(a) {
        var e = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (f) {
                var d = window.location.ancestorOrigins;
                b = d[d.length - 1]
            }
        } catch (f) {
            b = e.document.referrer
        } else b = e.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), e = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < e.length; b++)
        if (e[b] === a) return !0;
    return !1
}

function CSpriteLibrary() {
    var a, e, b, d, f, c;
    this.init = function(g, m, h) {
        b = e = 0;
        d = g;
        f = m;
        c = h;
        a = {}
    };
    this.addSprite = function(b, d) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: d,
            oSprite: new Image
        }, e++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f.call(c)
    };
    this._onSpriteLoaded = function() {
        d.call(c);
        ++b == e && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return e
    }
}
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 840,
    EDGEBOARD_X = 120,
    EDGEBOARD_Y = 122,
    PRIMARY_FONT = "walibi",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    s_oPhysicsController, s_oPhysicsObjects, TIME_STEP_BOX2D = 1 / 60,
    ITINERATION_BOX2D = 7,
    POSITION_ITINERATION_BOX2D = 3,
    DRAW_BOX2D_CONTEXT = !1,
    NUM_PLAYERS = 8,
    OBSTACLES_INFO, TEAMMATES_INFO, STARS_INFO, VERTICAL_DUCK = 1,
    CUBE = 2,
    TRAINING_CONE = 3,
    DYNAMIC_CUBE = 4,
    WEDGE = 5,
    CONE = 6,
    HORIZONTAL_DUCK = 7,
    BALL_RADIUS, BALL_DENSITY = 1,
    BALL_FRICTION = .4,
    BALL_RESTITUTION = .4,
    BALL_LINEAR_DAMPING = .5,
    BALL_CATEGORY_COLLISION = 1,
    FIELD_CATEGORY_COLLISION = 2,
    ON_CONTROLLER_ROLL = 0,
    ON_CONTROLLER_END = 1,
    ON_CONTROLLER_REMOVE = 3,
    WORLD_SCALE = 30,
    MS_ANIM_BALL_FADE = 500,
    TIME_FOR_LAUNCH = 400,
    HIT_BALL_MIN_FORCE = 3,
    VERTEX_SCALE = {
        x: 53,
        y: 53
    },
    HIT_BALL_MAX_FORCE = 50,
    FORCE_MULTIPLIER = .008,
    OFFSET_ANGLE_ARROW = 0,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    MIN_VELOCITY_FOR_LAUNCH = .16;
TIME_FOR_LAUNCH = 400;
var BALL_OUT_OF_RANGE = {
        xMax: CANVAS_WIDTH - 140,
        xMin: 0
    },
    BALL = 0,
    STAR = 1,
    GOAL = 2,
    TEAMMATE = 3,
    CUBE_WOOD = 4,
    CUBE_METAL = 5,
    DUCK = 6,
    GOAL_POST = 7,
    BALL_START_Y = 582.5,
    NUM_ROWS_PAGE_LEVEL = 3,
    NUM_COLS_PAGE_LEVEL = 5,
    s_b2Players, STAR_SCORE, NUM_LEVELS;
STATE_LOADING = 0;
STATE_HELP = STATE_MENU = 1;
STATE_GAME = 3;
var STATE_LEVEL_SELECTION = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    LS_SCORES = "freekick_training_scores",
    LS_STARS = "freekick_training_stars",
    LS_LAST_LEVEL = "freekick_training_level",
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;

function CPhysicsController() {
    var a = Box2D.Common.Math.b2Vec2,
        e = Box2D.Dynamics.b2World,
        b = Box2D.Dynamics.b2DebugDraw,
        d, f, c = this,
        g = document.getElementById("canvas").getContext("2d");
    this.init = function() {
        d = new a(0, 9.81);
        f = new e(d, !0);
        f.Step(TIME_STEP_BOX2D, ITINERATION_BOX2D, POSITION_ITINERATION_BOX2D);
        if (DRAW_BOX2D_CONTEXT) {
            var c = new b;
            c.SetSprite(g);
            c.SetDrawScale(WORLD_SCALE);
            c.SetFillAlpha(.5);
            c.SetLineThickness(1);
            c.SetFlags(b.e_shapeBit | b.e_jointBit);
            f.SetDebugDraw(c);
            window.setInterval(this.updateDrawDebug,
                1E3 / 120)
        }
    };
    this.startComputing = function(b) {
        b.GetBody().SetActive(!0)
    };
    this.applyImpulse = function(b, a) {
        b.GetBody().ApplyImpulse(a, b.GetBody().GetWorldCenter())
    };
    this.applyForce = function(b, a) {
        b.GetBody().ApplyForce(a, b.GetBody().GetWorldCenter())
    };
    this.decreaseSpeedRotation = function(b) {
        var a = .99 * b.GetBody().GetAngularVelocity();
        b.GetBody().SetAngularVelocity(a)
    };
    this.destroyAllBody = function() {
        for (var b = f.GetBodyList(); b.GetNext();) {
            var a = b.GetNext();
            f.DestroyBody(a)
        }
    };
    this.destroyAllJoint = function() {
        for (var b =
            f.GetJointList(); b.GetNext();) {
            var a = b.GetNext();
            f.DestroyJoint(a)
        }
    };
    this.destroyWorld = function() {
        f = null
    };
    this.getSpeedRotation = function(b) {
        return b.GetBody().GetAngularVelocity()
    };
    this.moveObject = function(b, a, d) {
        a = {
            x: a / WORLD_SCALE,
            y: d / WORLD_SCALE
        };
        b.GetBody().SetPosition(a)
    };
    this.destroyBody = function(b) {
        f.DestroyBody(b.GetBody())
    };
    this.destroyJoint = function(b) {
        f.DestroyJoint(b)
    };
    this.getJointAngle = function(b) {
        return b.GetJointAngle() * (180 / Math.PI)
    };
    this.getInstance = function() {
        null === c && (c = new CPhysicsController);
        return c
    };
    this.getJointTranslation = function(b) {
        return b.GetJointTranslation()
    };
    this.update = function() {
        f.Step(.05, 3, 3);
        f.ClearForces()
    };
    this.updateDrawDebug = function() {
        f.DrawDebugData()
    };
    this.getWorld = function() {
        return f
    };
    this.setElementLinearDamping = function(b, a) {
        b.GetBody().SetLinearDamping(a)
    };
    this.setElementAngularVelocity = function(b, a) {
        b.GetBody().SetAngularVelocity(a)
    };
    this.setElementPosition = function(b, a) {
        var d = {
            x: a.x / WORLD_SCALE,
            y: a.y / WORLD_SCALE
        };
        b.GetBody().SetPosition(d)
    };
    this.getElementPosition =
        function(b) {
            var a = b.GetBody().GetPosition();
            return {
                x: a.x * WORLD_SCALE,
                y: a.y * WORLD_SCALE,
                angle: 180 * b.GetBody().GetAngle() / Math.PI
            }
        };
    this.setElementAngle = function(b, a) {
        b.GetBody().SetAngle(a * Math.PI / 180)
    };
    this.getElementAngle = function(b) {
        return 180 * b.GetBody().GetAngle() / Math.PI
    };
    this.getElementVelocity = function(b) {
        return b.GetBody().GetLinearVelocity()
    };
    this.setElementLinearVelocity = function(b, a) {
        b.GetBody().SetLinearVelocity(a)
    };
    this.init()
}

function CPhysicsObject() {
    var a = Box2D.Common.Math.b2Vec2,
        e = Box2D.Dynamics.b2BodyDef,
        b = Box2D.Dynamics.b2Body,
        d = Box2D.Dynamics.b2FixtureDef,
        f = Box2D.Collision.Shapes.b2PolygonShape,
        c = Box2D.Collision.Shapes.b2CircleShape,
        g = Box2D.Dynamics.Joints.b2RevoluteJointDef,
        m, h;
    this.init = function() {
        h = s_oPhysicsController.getInstance();
        m = h.getWorld();
        s_oPhysicsObjects = this
    };
    this.addWall = function(a, c, l, h, g, n, t, x) {
        var k = new d;
        k.density = n;
        k.friction = t;
        k.restitution = x;
        n = new e;
        n.type = b.b2_staticBody;
        k.shape = new f;
        k.shape.SetAsBox(a /
            WORLD_SCALE, c / WORLD_SCALE);
        n.position.Set(l / WORLD_SCALE, h / WORLD_SCALE);
        n.angle = g * Math.PI / 180;
        m.CreateBody(n).CreateFixture(k)
    };
    this.addLine = function(c, h, l, g, q, n, t, x) {
        var k = new d;
        k.density = n;
        k.friction = t;
        k.restitution = x;
        k.filter.categoryBits = FIELD_CATEGORY_COLLISION;
        k.filter.maskBits = -1;
        k.filter.groupIndex = 1;
        n = new e;
        n.type = b.b2_staticBody;
        n.position.Set(c / WORLD_SCALE, h / WORLD_SCALE);
        n.angle = q * Math.PI / 180;
        n.userData = {
            type: WALL
        };
        k.shape = new f;
        c = [];
        h = new a;
        h.Set(l.x / WORLD_SCALE, l.y / WORLD_SCALE);
        c.push(h);
        l = new a;
        l.Set(g.x / WORLD_SCALE, g.y / WORLD_SCALE);
        c.push(l);
        k.shape.SetAsBox(200, .3);
        k.shape.SetAsArray(c, c.length);
        return m.CreateBody(n).CreateFixture(k)
    };
    this.addPolygon = function(c, h, l, g) {
        var k = new d;
        k.density = h.density;
        k.friction = h.friction;
        k.restitution = h.restitution;
        k.isSensor = l;
        l = new e;
        l.type = b.b2_staticBody;
        l.position.Set(h.position.x / WORLD_SCALE, h.position.y / WORLD_SCALE);
        l.angle = h.angle * Math.PI / 180;
        l.userData = g;
        l.allowSleep = !1;
        k.shape = new f;
        c = c.vertices;
        h = [];
        for (g = c.length - 1; - 1 < g; g--) {
            var p =
                new a;
            p.Set(c[g].x * VERTEX_SCALE.x / WORLD_SCALE, c[g].y * VERTEX_SCALE.y / WORLD_SCALE);
            h.push(p)
        }
        k.shape.SetAsArray(h, h.length);
        return m.CreateBody(l).CreateFixture(k)
    };
    this.addCollisionPolygon = function(c) {
        var k = new d;
        k.density = c.density;
        k.friction = c.friction;
        k.restitution = c.restitution;
        c.info.type === PLAYER ? (k.filter.categoryBits = FIELD_CATEGORY_COLLISION, k.filter.maskBits = BALL_CATEGORY_COLLISION, k.filter.groupIndex = 1) : c.info.type === OPPONENT && (k.filter.categoryBits = OPPONENT_CATEGORY_COLLISION, k.filter.maskBits =
            BALL_CATEGORY_COLLISION, k.filter.groupIndex = 1);
        var l = new e;
        l.type = b.b2_kinematicBody;
        l.position.Set(c.x / WORLD_SCALE, c.y / WORLD_SCALE);
        l.angle = c.angle * Math.PI / 180;
        l.userData = c.info;
        k.shape = new f;
        for (var h = c.vertex, g = [], n = 0; n < h.length; n++) {
            for (var t = [], x = 0; x < h[n].length; x++) {
                var v = new a;
                c.info.type === OPPONENT ? v.Set(h[n][x].x / WORLD_SCALE, (h[n][x].y + 11) / WORLD_SCALE) : v.Set(h[n][x].x / WORLD_SCALE, h[n][x].y / WORLD_SCALE);
                t.push(v)
            }
            k.shape.SetAsArray(t, t.length);
            g[n] = m.CreateBody(l).CreateFixture(k)
        }
        return g
    };
    this.addCollisionShape = function(a) {
        var k = new d;
        k.density = a.density;
        k.friction = a.friction;
        k.restitution = a.restitution;
        k.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
        k.filter.maskBits = BALL_CATEGORY_COLLISION;
        k.filter.groupIndex = 1;
        var h = new e;
        h.type = b.b2_dynamicBody;
        k.shape = new f;
        k.shape.SetAsBox(a.recWidth / WORLD_SCALE, a.recHeight / WORLD_SCALE);
        h.position.Set((a.x + a.rec_offset.x) / WORLD_SCALE, (a.y + a.rec_offset.y) / WORLD_SCALE);
        h.fixedRotation = !0;
        var p = m.CreateBody(h),
            q = p.CreateFixture(k);
        h = new e;
        var n =
            new d;
        n.density = a.density;
        n.friction = a.friction;
        n.restitution = a.restitution;
        n.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
        n.filter.maskBits = -1;
        n.filter.groupIndex = 1;
        h.type = b.b2_dynamicBody;
        n.shape = new c(a.radius / WORLD_SCALE);
        h.position.x = (a.x + a.sph_offset.x) / WORLD_SCALE;
        h.position.y = (a.y + a.sph_offset.y) / WORLD_SCALE;
        h.fixedRotation = !0;
        h.allowSleep = !1;
        h.bullet = !0;
        var t = m.CreateBody(h);
        n = t.CreateFixture(n);
        h = new e;
        h.type = b.b2_dynamicBody;
        k.shape = new f;
        k.shape.SetAsBox(a.rec_neck.width / WORLD_SCALE,
            a.rec_neck.height / WORLD_SCALE);
        h.position.Set((a.x + a.rec_neck.x) / WORLD_SCALE, (a.y + a.rec_neck.y) / WORLD_SCALE);
        h.angle = Math.PI / 180 * a.rec_neck.angle;
        h.fixedRotation = !0;
        a = m.CreateBody(h);
        k = a.CreateFixture(k);
        h = new g;
        h.Initialize(p, t, t.GetWorldCenter());
        t = m.CreateJoint(h);
        h = new g;
        h.Initialize(p, a, a.GetWorldCenter());
        p = m.CreateJoint(h);
        return {
            fixture1: q,
            fixture2: n,
            fixture3: k,
            jointA: t,
            jointB: p
        }
    };
    this.createAContactListener = function() {
        var b = new Box2D.Dynamics.b2ContactListener;
        b.BeginContact = function(b) {
            var a =
                b.GetFixtureA().GetBody().GetUserData();
            b = b.GetFixtureB().GetBody().GetUserData();
            if (null !== a && null !== b) {
                b.type === STAR && a.type === BALL && s_oGame.starCollision(b.index);
                a.type === STAR && b.type === BALL && s_oGame.starCollision(a.index);
                if (a.type === GOAL && b.type === BALL) s_oGame.onGoal();
                if (a.type === GOAL_POST && b.type === BALL) s_oGame.onHitPost();
                if (a.type === CUBE_WOOD && b.type === BALL) s_oGame.onHitWoodCase();
                if (a.type === CUBE_METAL && b.type === BALL) s_oGame.onHitMetalCase();
                a.type === TEAMMATE && b.type === BALL && s_oGame.teamMateCollision(a.index);
                b.type === DUCK && s_oGame.duckCollision(b.index);
                a.type === DUCK && s_oGame.duckCollision(a.index);
                a.type !== BALL && b.type !== BALL || void 0 !== a.isSensor || void 0 !== b.isSensor || playSound("kick", 1, !1)
            }
        };
        m.SetContactListener(b)
    };
    this.addBall = function(a, f, h, g, q, n) {
        var k = new d;
        k.density = g;
        k.friction = q;
        k.restitution = n;
        k.filter.categoryBits = BALL_CATEGORY_COLLISION;
        k.filter.maskBits = -1;
        k.filter.groupIndex = 1;
        g = new e;
        g.type = b.b2_dynamicBody;
        k.shape = new c(a / WORLD_SCALE);
        g.allowSleep = !1;
        g.userData = {
            type: BALL
        };
        g.position.x =
            f / WORLD_SCALE;
        g.position.y = h / WORLD_SCALE;
        g.linearDamping = BALL_LINEAR_DAMPING;
        g.bullet = !0;
        return m.CreateBody(g).CreateFixture(k)
    };
    this.addCircle = function(a, f, h, g, q, n, t, x) {
        var k = new d;
        k.density = g;
        k.friction = q;
        k.restitution = n;
        k.isSensor = t;
        g = new e;
        g.type = b.b2_staticBody;
        g.userData = x;
        k.shape = new c(a / WORLD_SCALE);
        g.position.x = f / WORLD_SCALE;
        g.position.y = h / WORLD_SCALE;
        return m.CreateBody(g).CreateFixture(k)
    };
    this.addStaticCircle = function(a, f, h, g, q, n) {
        var k = new d;
        k.density = g;
        k.friction = q;
        k.restitution = n;
        g = new e;
        g.type = b.b2_staticBody;
        k.shape = new c(a / WORLD_SCALE);
        g.position.x = f / WORLD_SCALE;
        g.position.y = h / WORLD_SCALE;
        return m.CreateBody(g).CreateFixture(k)
    };
    this.addRectangle = function(a, c) {
        var h = new d;
        h.density = a.density;
        h.friction = a.friction;
        h.restitution = a.restitution;
        h.isSensor = a.sensor;
        h.filter.categoryBits = 3;
        h.filter.maskBits = 1;
        h.filter.groupIndex = 1;
        var k = new e;
        k.type = b.b2_staticBody;
        c && (k.type = b.b2_dynamicBody);
        void 0 !== a.info && (k.userData = a.info);
        h.shape = new f;
        h.shape.SetAsBox(a.width / WORLD_SCALE,
            a.height / WORLD_SCALE);
        k.position.Set(a.x / WORLD_SCALE, a.y / WORLD_SCALE);
        k.angle = a.angle * Math.PI / 180;
        return m.CreateBody(k).CreateFixture(h)
    };
    this.addTriangle = function(c, h, g, p, q, n, t, x, v, z) {
        var k = [],
            l = new d;
        l.density = p;
        l.friction = q;
        l.restitution = n;
        l.isSensor = v;
        p = new e;
        p.type = b.b2_staticBody;
        z && (p.type = b.b2_dynamicBody);
        p.userData = x;
        l.shape = new f;
        for (x = 0; 3 > x; x++) k.push(new a(g[x].i1, g[x].i2));
        l.shape.SetAsVector(k, 3);
        p.position.Set(c / WORLD_SCALE, h / WORLD_SCALE);
        p.angle = t * Math.PI / 180;
        return m.CreateBody(p).CreateFixture(l)
    };
    this.setRotation = function(a) {
        this.rotation = a
    };
    this._update = function(a) {};
    this.init()
}
var s_fBallMagnitude;

function CObstacles(a, e, b, d, f) {
    var c, g, m, h, k, u, l, p, q, n;
    this.init = function(a, b, d, f, e) {
        c = a;
        g = b;
        m = d;
        u = f;
        k = new createjs.Container;
        u.addChild(k);
        p = this;
        q = !1;
        e.push(this);
        n = e.length - 1;
        switch (c) {
            case VERTICAL_DUCK:
                a = s_oSpriteLibrary.getSprite("duck");
                b = {
                    images: [a],
                    frames: {
                        width: 120,
                        height: 122,
                        regX: 60,
                        regY: 61
                    },
                    animations: {
                        idle: [0, 5, "idle"],
                        hit: [6, 13, "idle"]
                    }
                };
                b = new createjs.SpriteSheet(b);
                l = createSprite(b, "idle", 60, 61, 120, 122);
                l.x = CANVAS_WIDTH / 2;
                l.y = CANVAS_HEIGHT / 2;
                k.addChild(l);
                h = s_oPhysicsObjects.addCircle(2 *
                    BALL_RADIUS, g, m, 99, BALL_FRICTION, 1.2, !1, {
                        type: DUCK,
                        index: n
                    });
                break;
            case CUBE:
                a = s_oSpriteLibrary.getSprite("cube");
                l = createBitmap(a);
                l.regX = a.width / 2;
                l.regY = a.height / 2;
                l.x = g;
                l.y = m;
                k.addChild(l);
                h = s_oPhysicsObjects.addRectangle({
                    x: g,
                    y: m,
                    width: 35,
                    height: 35,
                    density: 2.5,
                    friction: .5,
                    restitution: .1,
                    angle: 0,
                    sensor: !1,
                    info: {
                        type: CUBE_METAL,
                        iIndex: e.length - 1
                    }
                });
                break;
            case TRAINING_CONE:
                a = s_oSpriteLibrary.getSprite("training_cone");
                l = createBitmap(a);
                l.x = g;
                l.y = m;
                k.addChild(l);
                e = [{
                    x: .8194444179534912,
                    y: .277777761220932
                }, {
                    x: .7916666865348816,
                    y: .2083333283662796
                }, {
                    x: .6527777910232544,
                    y: .0972222089767456
                }, {
                    x: .4444444477558136,
                    y: .01388886570930481
                }, {
                    x: .3194444477558136,
                    y: .027777761220932007
                }, {
                    x: .1388888955116272,
                    y: .1111111044883728
                }, {
                    x: .013888888992369175,
                    y: .2361111044883728
                }];
                h = s_oPhysicsObjects.addPolygon({
                    vertices: e
                }, {
                    position: {
                        x: b + 8,
                        y: d + 6
                    },
                    angle: 0,
                    density: 0,
                    friction: 1,
                    restutution: 1
                }, !1, null);
                break;
            case DYNAMIC_CUBE:
                a = s_oSpriteLibrary.getSprite("cube_2");
                l = createBitmap(a);
                l.regX = a.width / 2;
                l.regY = a.height / 2;
                l.x = g;
                l.y = m;
                k.addChild(l);
                h = s_oPhysicsObjects.addRectangle({
                    x: g,
                    y: m,
                    width: 35,
                    height: 35,
                    density: 5,
                    friction: .5,
                    restitution: 0,
                    angle: 0,
                    sensor: !1,
                    info: {
                        type: CUBE_WOOD,
                        iIndex: e.length - 1
                    }
                }, !0);
                s_oPhysicsController.setElementLinearDamping(h, .7);
                break;
            case WEDGE:
                a = s_oSpriteLibrary.getSprite("wedge");
                l = createBitmap(a);
                l.x = g;
                l.y = m;
                k.addChild(l);
                b = [];
                b[0] = {
                    i1: 40 / WORLD_SCALE,
                    i2: -20 / WORLD_SCALE
                };
                b[1] = {
                    i1: -50 / WORLD_SCALE,
                    i2: -18 / WORLD_SCALE
                };
                b[2] = {
                    i1: 40 / WORLD_SCALE,
                    i2: -50 / WORLD_SCALE
                };
                h = s_oPhysicsObjects.addTriangle(g +
                    46, m + 60, b, 2.5, .5, 0, 0, null, !1, !1);
                break;
            case CONE:
                a = s_oSpriteLibrary.getSprite("cone");
                l = createBitmap(a);
                l.x = g;
                l.y = m;
                l.regX = a.width / 2;
                l.regY = a.height;
                k.addChild(l);
                b = [];
                b[0] = {
                    i1: 30 / WORLD_SCALE,
                    i2: -15 / WORLD_SCALE
                };
                b[1] = {
                    i1: -30 / WORLD_SCALE,
                    i2: -15 / WORLD_SCALE
                };
                b[2] = {
                    i1: 0 / WORLD_SCALE,
                    i2: -100 / WORLD_SCALE
                };
                h = s_oPhysicsObjects.addTriangle(g - 1, m + 15, b, 4, 0, .3, 0, null, !1, !0);
                s_oPhysicsController.setElementLinearDamping(h, .7);
                break;
            case HORIZONTAL_DUCK:
                a = s_oSpriteLibrary.getSprite("duck"), b = {
                    images: [a],
                    frames: {
                        width: 120,
                        height: 122,
                        regX: 60,
                        regY: 61
                    },
                    animations: {
                        idle: [0, 5, "idle", .5],
                        hit: [6, 13, "idle", .5]
                    }
                }, b = new createjs.SpriteSheet(b), l = createSprite(b, "idle", 60, 61, 120, 122), l.x = CANVAS_WIDTH / 2, l.y = CANVAS_HEIGHT / 2, k.addChild(l), h = s_oPhysicsObjects.addCircle(2 * BALL_RADIUS, g, m, 99, BALL_FRICTION, 1.2, !1, {
                    type: DUCK,
                    index: n
                })
        }
    };
    this.init(a, e, b, d, f);
    this.update = function() {
        var a = s_oPhysicsController.getElementPosition(h);
        switch (c) {
            case VERTICAL_DUCK:
                !q && a.y <= m + 250 ? s_oPhysicsController.setElementPosition(h, {
                    x: a.x,
                    y: a.y + 7
                }) : q = !0;
                q && a.y >= m ? s_oPhysicsController.setElementPosition(h, {
                    x: a.x,
                    y: a.y - 7
                }) : q = !1;
                a = s_oPhysicsController.getElementPosition(h);
                l.x = a.x - BALL_RADIUS + 17;
                l.y = a.y - BALL_RADIUS + 8;
                break;
            case DYNAMIC_CUBE:
                l.x = a.x;
                l.y = a.y;
                l.rotation = a.angle;
                break;
            case CONE:
                l.x = a.x;
                l.y = a.y - 12;
                l.rotation = a.angle;
                break;
            case HORIZONTAL_DUCK:
                !q && a.x <= g + 350 ? (l.scaleX = -1, s_oPhysicsController.setElementPosition(h, {
                        x: a.x + 7,
                        y: a.y
                    })) : q = !0, q && a.x >= g ? (l.scaleX = 1, s_oPhysicsController.setElementPosition(h, {
                        x: a.x - 7,
                        y: a.y
                    })) : q = !1, a = s_oPhysicsController.getElementPosition(h),
                    l.x = a.x - BALL_RADIUS + 17, l.y = a.y - BALL_RADIUS + 8
        }
    };
    this.getPhysics = function() {
        return h
    };
    this.destroyObstacle = function() {
        s_oPhysicsController.destroyBody(h);
        (new createjs.Tween.get(l)).to({
            alpha: 0
        }, 700).call(p.unload)
    };
    this.onDuckCollision = function() {
        c !== VERTICAL_DUCK && c !== HORIZONTAL_DUCK || l.gotoAndPlay("hit")
    };
    this.getY = function() {
        return l.y
    };
    this.unload = function() {
        u.removeChild(k); - 1 < f.indexOf(p) && f.splice(f.indexOf(p), 1)
    }
}

function CTeamMate(a, e, b, d) {
    var f, c, g, m, h;
    this.init = function(b, d, e) {
        f = b;
        c = d;
        m = e;
        g = new createjs.Container;
        m.addChild(g);
        b = {
            images: [s_oSpriteLibrary.getSprite("player_" + s_iIndexPlayer)],
            frames: {
                width: 105,
                height: 136,
                regX: 52.5,
                regY: 68
            },
            animations: {
                idle: [0, 11, "idle", .8],
                shot: [12, 16, "idle"]
            }
        };
        b = new createjs.SpriteSheet(b);
        h = createSprite(b, "idle", 52.5, 68, 105, 136);
        g.addChild(h);
        b = s_oPhysicsObjects.addRectangle({
            x: f,
            y: c,
            width: 20,
            height: 35,
            density: 0,
            friction: 0,
            restitution: 0,
            sensor: !0,
            info: {
                type: TEAMMATE,
                index: a,
                isSensor: !0
            },
            angle: 0
        });
        b = s_oPhysicsController.getElementPosition(b);
        h.x = b.x;
        h.y = b.y - 27
    };
    this.onShot = function() {
        h.gotoAndPlay("shot")
    };
    this.init(e, b, d)
}

function CSelectPlayer() {
    var a, e, b, d, f, c, g, m, h, k, u, l, p, q, n, t, x, v, z, y, A;
    this.init = function() {
        n = 0;
        k = new createjs.Container;
        s_oStage.addChild(k);
        var r = s_oSpriteLibrary.getSprite("bg_menu");
        r = createBitmap(r, r.width, r.height);
        k.addChild(r);
        r = new createjs.Shape;
        r.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.alpha = .7;
        k.addChild(r);
        r = s_oSpriteLibrary.getSprite("msg_box");
        var w = createBitmap(r, r.width, r.height);
        w.regX = r.width / 2;
        w.regY = r.height / 2;
        w.scaleX = 1.1;
        w.scaleY = w.scaleX;
        w.x =
            CANVAS_WIDTH / 2;
        w.y = CANVAS_HEIGHT / 2;
        k.addChild(w);
        w = createBitmap(r, r.width, r.height);
        w.regX = r.width / 2;
        w.regY = r.height / 2;
        w.scaleX = .25;
        w.scaleY = .42;
        w.x = CANVAS_WIDTH / 2 + 215;
        w.y = CANVAS_HEIGHT / 2;
        k.addChild(w);
        u = new createjs.Text(TEXT_TITLE_SELECT_PLAYERS, " 40px " + PRIMARY_FONT, "#FFFFFF");
        u.textBaseline = "middle";
        u.textAlign = "center";
        u.x = CANVAS_WIDTH / 2;
        u.y = CANVAS_HEIGHT / 2 - 230;
        k.addChild(u);
        g = [];
        m = [];
        h = [];
        p = [];
        for (r = 0; r < NUM_PLAYERS; r++) g.push(s_oSpriteLibrary.getSprite("player_" + r)), m.push(s_oSpriteLibrary.getSprite("flag_" +
            r)), 4 > r ? p.push(new CGfxButton(CANVAS_WIDTH / 2 - 240, CANVAS_HEIGHT / 2 - 140 + 100 * r, m[r], k)) : p.push(new CGfxButton(CANVAS_WIDTH / 2 - 240 + 200, CANVAS_HEIGHT / 2 - 140 + 100 * (r - 4), m[r], k)), p[r].addEventListenerWithParams(ON_MOUSE_DOWN, this.onSelectedFlag, this, r);
        h.push(TEXT_SELECT_PLAYER_0);
        h.push(TEXT_SELECT_PLAYER_1);
        h.push(TEXT_SELECT_PLAYER_2);
        h.push(TEXT_SELECT_PLAYER_3);
        h.push(TEXT_SELECT_PLAYER_4);
        h.push(TEXT_SELECT_PLAYER_5);
        h.push(TEXT_SELECT_PLAYER_6);
        h.push(TEXT_SELECT_PLAYER_7);
        q = this.getSpritePlayer(g[0]);
        q.x = CANVAS_WIDTH / 2 + 215;
        q.y = CANVAS_HEIGHT / 2;
        q.scaleX = 1.3;
        q.scaleY = q.scaleX;
        k.addChild(q);
        l = new createjs.Text(TEXT_SELECT_PLAYER_0, " 30px " + PRIMARY_FONT, "#FFFFFF");
        l.textBaseline = "middle";
        l.textAlign = "center";
        l.x = q.x;
        l.y = q.y - 130;
        k.addChild(l);
        r = s_oSpriteLibrary.getSprite("but_next");
        t = new CGfxButton(CANVAS_WIDTH - 460, CANVAS_HEIGHT - 260, r, k);
        t.addEventListener(ON_MOUSE_UP, this.onSelectedPlayer, this);
        r = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - (r.width / 2 + 10);
        c = r.height / 2 + 10;
        v = new CGfxButton(f,
            c, r, k);
        v.addEventListener(ON_MOUSE_UP, this.onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = f - (r.width + 10), d = c, r = s_oSpriteLibrary.getSprite("audio_icon"), z = new CToggle(b, d, r, s_bAudioActive, k), z.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = window.document;
        w = r.documentElement;
        y = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
        A = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN &&
            (y = !1);
        y && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), a = r.width / 4 + 10, e = r.height / 2 + 10, x = new CToggle(a, e, r, s_bFullscreen, k), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos();
        s_oSelectPlayer = this
    };
    this.refreshButtonPos = function() {
        v.setPosition(f - s_iOffsetX, c + s_iOffsetY);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || z.setPosition(b - s_iOffsetX, d + s_iOffsetY);
        y && screenfull.enabled && x.setPosition(a + s_iOffsetX, e + s_iOffsetY)
    };
    this.resetFullscreenBut =
        function() {
            y && screenfull.enabled && x.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? A.call(window.document) : y.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.onSelectedFlag = function(a) {
        n !== a && (n = a, l.text = h[a], k.removeChild(q), q = this.getSpritePlayer(g[a]), q.x = CANVAS_WIDTH / 2 + 215, q.y = CANVAS_HEIGHT / 2, q.scaleX = 1.3, q.scaleY = q.scaleX, k.addChild(q))
    };
    this.onSelectedPlayer = function() {
        s_iIndexPlayer =
            n;
        this.unload();
        s_oMain.gotoLevelMenu()
    };
    this.getSpritePlayer = function(a) {
        a = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: 105,
                height: 136,
                regX: 52.5,
                regY: 68
            },
            animations: {
                idle: [0, 11, "idle"]
            }
        });
        return createSprite(a, "idle", 52.5, 68, 105, 136)
    };
    this.unload = function() {
        for (var a = 0; a < p.length; a++) p[a].unload();
        t.unload();
        v.unload();
        s_oSelectPlayer = null;
        s_oStage.removeChild(k)
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this.init()
}
var s_oSelectPlayer = null;

function CPlayer(a, e, b) {
    var d, f, c;
    this.init = function(a, b, h) {
        f = h;
        d = new createjs.Container;
        d.x = a;
        d.y = b;
        f.addChild(d);
        a = {
            images: [s_oSpriteLibrary.getSprite("player_" + s_iIndexPlayer)],
            frames: {
                width: 105,
                height: 136,
                regX: 52.5,
                regY: 68
            },
            animations: {
                idle: [0, 11, "idle", .8],
                shot: [12, 16, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        c = createSprite(a, "idle", 52.5, 68, 105, 136);
        d.addChild(c)
    };
    this.onShot = function() {
        c.gotoAndPlay("shot")
    };
    this.init(a, e, b)
}

function CRollingTextController(a, e, b, d, f) {
    var c, g, m, h, k, u, l, p, q, n, t, x, v;
    this._init = function(a, b, c, d, f) {
        q = [];
        n = [];
        k = d;
        this.setUpdateInfo(c);
        p = f;
        x = a;
        v = b
    };
    this.unload = function() {
        clearInterval(l)
    };
    this.setUpdateInfo = function(a) {
        m = 0;
        h = m + a;
        c = 0;
        g = Math.round(k / FPS);
        u = 0;
        var b = this;
        l = setInterval(function() {
            b.update()
        }, FPS_TIME)
    };
    this.addEventListener = function(a, b, c) {
        q[a] = b;
        n[a] = c
    };
    this.addRollingListener = function(a, b, c) {
        q[ON_CONTROLLER_ROLL] = a;
        n[ON_CONTROLLER_ROLL] = b;
        t = [];
        for (a = 0; a < c.length; a++) t[a] = {
            step: c[a],
            flag: !1
        }
    };
    this.increaseValue = function(a) {
        u = a
    };
    this.getTarget = function() {
        return x
    };
    this.update = function() {
        c++;
        if (c > g) c = 0, x.text = h.toFixed(0), null !== v && (v.text = h.toFixed(0)), clearInterval(l), null !== q[ON_CONTROLLER_END] && q[ON_CONTROLLER_END].call(n[ON_CONTROLLER_END], this), 0 < u ? this.setUpdateInfo(u) : q[ON_CONTROLLER_REMOVE].call(n[ON_CONTROLLER_REMOVE], this);
        else {
            switch (p) {
                case EASE_BACKIN:
                    var a = s_oTweenController.easeInBack(c, 0, 1, g);
                    break;
                case EASE_BACKOUT:
                    a = s_oTweenController.easeOutBack(c, 0, 1, g);
                    break;
                case EASE_CUBIC_IN:
                    a = s_oTweenController.easeInCubic(c, 0, 1, g);
                    break;
                case EASE_CUBIC_OUT:
                    a = s_oTweenController.easeOutCubic(c, 0, 1, g);
                    break;
                case EASE_ELASTIC_OUT:
                    a = s_oTweenController.easeOutElastic(c, 0, 1, g);
                    break;
                case EASE_LINEAR:
                    a = s_oTweenController.easeLinear(c, 0, 1, g);
                    break;
                case EASE_QUART_BACKIN:
                    a = s_oTweenController.easeBackInQuart(c, 0, 1, g);
                    break;
                default:
                    a = s_oTweenController.easeLinear(c, 0, 1, g)
            }
            a = s_oTweenController.tweenValue(m, h, a);
            for (var b = 0; b < t.length; b++) a >= t[b].step && !t[b].flag && (t[b].flag = !0,
                null !== q[ON_CONTROLLER_ROLL] && q[ON_CONTROLLER_ROLL].call(n[ON_CONTROLLER_ROLL], b));
            x.text = a.toFixed(0);
            null !== v && (v.text = a.toFixed(0))
        }
    };
    this._init(a, e, b, d, f)
}
var EASE_LINEAR = 0,
    EASE_CUBIC_IN = 1,
    EASE_QUART_BACKIN = 2,
    EASE_BACKIN = 3,
    EASE_SIN_IN = 4,
    EASE_QUAD_IN = 5,
    EASE_CUBIC_OUT = 6,
    EASE_ELASTIC_OUT = 7,
    EASE_BACKOUT = 8,
    EASE_QUINT_OUT = 9,
    EASE_CUBIC_INOUT = 10;

function CTweenController() {
    this.tweenValue = function(a, e, b) {
        return a + b * (e - a)
    };
    this.easeLinear = function(a, e, b, d) {
        return b * a / d + e
    };
    this.easeInCubic = function(a, e, b, d) {
        d = (a /= d) * a * a;
        return e + b * d
    };
    this.easeBackInQuart = function(a, e, b, d) {
        d = (a /= d) * a;
        return e + b * (2 * d * d + 2 * d * a + -3 * d)
    };
    this.easeInBack = function(a, e, b, d) {
        return b * (a /= d) * a * (2.70158 * a - 1.70158) + e
    };
    this.easeInSine = function(a, e, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + e
    };
    this.easeInQuad = function(a, e, b, d) {
        return b * (a /= d) * a + e
    };
    this.easeOutCubic = function(a,
        e, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + e
    };
    this.easeOutElastic = function(a, e, b, d) {
        if (0 === a) return e;
        if (1 === (a /= d)) return e + b;
        var f = .3 * d;
        return b * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - f / 4) * Math.PI / f) + b + e
    };
    this.easeOutBack = function(a, e, b, d) {
        return b * ((a = a / d - 1) * a * (2.70158 * a + 1.70158) + 1) + e
    };
    this.easeInOutCubic = function(a, e, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a + e : b / 2 * ((a -= 2) * a * a + 2) + e
    };
    this.easeOutQuint = function(a, e, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + e
    }
}

function CGoal(a, e, b, d) {
    var f, c, g, m, h, k;
    this.init = function(a, b, d, e) {
        g = a;
        m = b;
        h = d;
        k = e;
        a = s_oSpriteLibrary.getSprite("goal_front");
        f = createBitmap(a, a.width, a.height);
        f.x = CANVAS_WIDTH / 2 + 435;
        f.y = CANVAS_HEIGHT / 2 + 50;
        m.addChild(f);
        a = s_oSpriteLibrary.getSprite("goal_back");
        c = createBitmap(a, a.width, a.height);
        c.x = f.x - 6;
        c.y = f.y - 6;
        g.addChild(c)
    };
    this.getPhysics = function() {
        return h
    };
    this.getSensor = function() {
        return k
    };
    this.init(a, e, b, d)
}
TEXT_TITLE_SELECT_PLAYERS = "SELECT A PLAYER";
TEXT_SELECT_PLAYER_0 = "ARGENTINA";
TEXT_SELECT_PLAYER_1 = "BRAZIL";
TEXT_SELECT_PLAYER_2 = "ENGLAND";
TEXT_SELECT_PLAYER_3 = "FRANCE";
TEXT_SELECT_PLAYER_4 = "GERMANY";
TEXT_SELECT_PLAYER_5 = "ITALY";
TEXT_SELECT_PLAYER_6 = "NETHERLAND";
TEXT_SELECT_PLAYER_7 = "SPAIN";
TEXT_SCORE = "SCORE: ";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_GAMEOVER = "YOU PASSED THIS TRAINING STAGE!";
TEXT_GAMEOVER_2 = "YOU FAILED THIS TRAINING STAGE";
TEXT_GAMEOVER_3 = "YOU'VE FINALLY COMPLETED YOUR WORKOUT!";
TEXT_LEVEL = "LEVEL";
TEXT_TOT_SCORE = "TOTAL SCORE";
TEXT_HELP1_PC = "CLICK THE BALL AND DRAG TO SET POWER AND DIRECTION";
TEXT_HELP1_MOBILE = "TOUCH THE BALL AND DRAG THE FINGER TO SET POWER AND DIRECTION";
TEXT_DEVELOPED = "DEVELOPED BY";
TEXT_DELETE_SAVE = "ALL YOUR PROGRESSES WILL BE DELETED\n\nARE YOU SURE?";
TEXT_SELECT_MODE_MENU = "SELECT MODE";
TEXT_SELECT_LEVEL = "SELECT A LEVEL";
TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, e, b, d, f, c, g;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        g = new createjs.Container;
        s_oStage.addChild(g)
    };
    this.unload = function() {
        g.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(c).to({
                alpha: 1
            }, 500).call(function() {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        g.addChild(m);
        m = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(m);
        d.x = CANVAS_WIDTH / 2 - m.width / 2;
        d.y = CANVAS_HEIGHT - 200;
        g.addChild(d);
        a = m.width;
        e = m.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, 1, e);
        g.addChild(f);
        d.mask =
            f;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 155;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        g.addChild(b);
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        g.addChild(c)
    };
    this.refreshLoader = function(c) {
        b.text = c + "%";
        f.graphics.clear();
        c = Math.floor(c * a / 100);
        f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, c, e)
    };
    this._init()
}

function CMain(a) {
    var e, b = 0,
        d = 0,
        f = STATE_LOADING,
        c, g;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oTweenController = new CTweenController;
        // seekAndDestroy() ? c = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
        c = new CPreloader;
    };
    this.preloaderReady = function() {
        jQuery.getJSON("level_info.json", this.onLoadedJSON);
        e = !0
    };
    this.onLoadedJSON = function(a) {
        s_oLevelSettings = new CLevelSettings(a);
        try {
            saveItem("ls_available", "ok"), s_oMain.loadUserData()
        } catch (k) {
            s_bStorageAvailable = !1;
            s_aScores = [];
            for (a = 0; a < NUM_LEVELS; a++) s_aScores[a] =
                0;
            s_aStars = [];
            for (a = 0; a < NUM_LEVELS; a++) s_aStars[a] = 0;
            s_iLastLevel = 1
        }
        s_oMain._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds()
    };
    this.loadUserData = function() {
        var a = getItem(LS_SCORES);
        if (null === a)
            for (s_aScores = [], a = 0; a < NUM_LEVELS; a++) s_aScores[a] = 0;
        else s_aScores = JSON.parse(a);
        a = getItem(LS_STARS);
        if (null === a)
            for (s_aStars = [], a = 0; a < NUM_LEVELS; a++) s_aStars[a] = 0;
        else s_aStars = JSON.parse(a);
        s_iLastLevel = null === getItem(LS_LAST_LEVEL) ? 1 : parseInt(getItem(LS_LAST_LEVEL))
    };
    this.soundLoaded =
        function() {
            b++;
            c.refreshLoader(Math.floor(b / d * 100));
            b === d && this._onPreloaderComplete()
        };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "applause",
            loop: !1,
            volume: 1,
            ingamename: "applause"
        });
        a.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        a.push({
            path: "./sounds/",
            filename: "kick",
            loop: !0,
            volume: 1,
            ingamename: "kick"
        });
        a.push({
            path: "./sounds/",
            filename: "goal",
            loop: !0,
            volume: 1,
            ingamename: "goal"
        });
        a.push({
            path: "./sounds/",
            filename: "star",
            loop: !0,
            volume: 1,
            ingamename: "star"
        });
        a.push({
            path: "./sounds/",
            filename: "post",
            loop: !0,
            volume: 1,
            ingamename: "post"
        });
        a.push({
            path: "./sounds/",
            filename: "duck_hit",
            loop: !0,
            volume: 1,
            ingamename: "duck_hit"
        });
        a.push({
            path: "./sounds/",
            filename: "wood_hit",
            loop: !0,
            volume: 1,
            ingamename: "wood_hit"
        });
        a.push({
            path: "./sounds/",
            filename: "metal_hit",
            loop: !0,
            volume: 1,
            ingamename: "metal_hit"
        });
        d += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("goal_text", "./sprites/goal_text.png");
        s_oSpriteLibrary.addSprite("but_delete_save", "./sprites/but_delete_save.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_restart_big", "./sprites/but_restart_big.png");
        s_oSpriteLibrary.addSprite("but_next_big", "./sprites/but_next_big.png");
        s_oSpriteLibrary.addSprite("arrow_ball", "./sprites/arrow_ball.png");
        s_oSpriteLibrary.addSprite("arrow_fill", "./sprites/arrow_fill.png");
        s_oSpriteLibrary.addSprite("arrow_frame", "./sprites/arrow_frame.png");
        s_oSpriteLibrary.addSprite("star",
            "./sprites/star.png");
        s_oSpriteLibrary.addSprite("goal_front", "./sprites/goal_front.png");
        s_oSpriteLibrary.addSprite("goal_back", "./sprites/goal_back.png");
        s_oSpriteLibrary.addSprite("player", "./sprites/player.png");
        s_oSpriteLibrary.addSprite("star_outline", "./sprites/star_outline.png");
        s_oSpriteLibrary.addSprite("cube", "./sprites/cube.png");
        s_oSpriteLibrary.addSprite("cube_2", "./sprites/cube_2.png");
        s_oSpriteLibrary.addSprite("training_cone", "./sprites/training_cone.png");
        s_oSpriteLibrary.addSprite("player_0",
            "./sprites/argentina.png");
        s_oSpriteLibrary.addSprite("player_1", "./sprites/brazil.png");
        s_oSpriteLibrary.addSprite("player_2", "./sprites/england.png");
        s_oSpriteLibrary.addSprite("player_3", "./sprites/france.png");
        s_oSpriteLibrary.addSprite("player_4", "./sprites/germany.png");
        s_oSpriteLibrary.addSprite("player_5", "./sprites/italy.png");
        s_oSpriteLibrary.addSprite("player_6", "./sprites/netherland.png");
        s_oSpriteLibrary.addSprite("player_7", "./sprites/spain.png");
        s_oSpriteLibrary.addSprite("panel_0",
            "./sprites/argentina_panels.png");
        s_oSpriteLibrary.addSprite("panel_1", "./sprites/brazil_panels.png");
        s_oSpriteLibrary.addSprite("panel_2", "./sprites/england_panels.png");
        s_oSpriteLibrary.addSprite("panel_3", "./sprites/france_panels.png");
        s_oSpriteLibrary.addSprite("panel_4", "./sprites/germany_panels.png");
        s_oSpriteLibrary.addSprite("panel_5", "./sprites/italy_panels.png");
        s_oSpriteLibrary.addSprite("panel_6", "./sprites/netherland_panels.png");
        s_oSpriteLibrary.addSprite("panel_7", "./sprites/spain_panels.png");
        s_oSpriteLibrary.addSprite("flag_0", "./sprites/flag_0.png");
        s_oSpriteLibrary.addSprite("flag_1", "./sprites/flag_1.png");
        s_oSpriteLibrary.addSprite("flag_2", "./sprites/flag_2.png");
        s_oSpriteLibrary.addSprite("flag_3", "./sprites/flag_3.png");
        s_oSpriteLibrary.addSprite("flag_4", "./sprites/flag_4.png");
        s_oSpriteLibrary.addSprite("flag_5", "./sprites/flag_5.png");
        s_oSpriteLibrary.addSprite("flag_6", "./sprites/flag_6.png");
        s_oSpriteLibrary.addSprite("flag_7", "./sprites/flag_7.png");
        s_oSpriteLibrary.addSprite("wedge",
            "./sprites/wedge.png");
        s_oSpriteLibrary.addSprite("cone", "./sprites/cone.png");
        s_oSpriteLibrary.addSprite("duck", "./sprites/duck.png");
        s_oSpriteLibrary.addSprite("arrow_select_level", "./sprites/arrow_select_level.png");
        s_oSpriteLibrary.addSprite("but_kick", "./sprites/but_kick.png");
        s_oSpriteLibrary.addSprite("starbox", "./sprites/starbox.png");
        s_oSpriteLibrary.addSprite("contact_ball", "./sprites/contact_ball.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("supporters_0",
            "./sprites/supporters/supporters_0.png");
        s_oSpriteLibrary.addSprite("supporters_1", "./sprites/supporters/supporters_1.png");
        s_oSpriteLibrary.addSprite("supporters_2", "./sprites/supporters/supporters_2.png");
        s_oSpriteLibrary.addSprite("supporters_3", "./sprites/supporters/supporters_3.png");
        s_oSpriteLibrary.addSprite("supporters_4", "./sprites/supporters/supporters_4.png");
        s_oSpriteLibrary.addSprite("supporters_5", "./sprites/supporters/supporters_5.png");
        s_oSpriteLibrary.addSprite("supporters_6", "./sprites/supporters/supporters_6.png");
        s_oSpriteLibrary.addSprite("supporters_7", "./sprites/supporters/supporters_7.png");
        s_oSpriteLibrary.addSprite("supporters_8", "./sprites/supporters/supporters_8.png");
        s_oSpriteLibrary.addSprite("supporters_9", "./sprites/supporters/supporters_9.png");
        s_oSpriteLibrary.addSprite("supporters_10", "./sprites/supporters/supporters_10.png");
        s_oSpriteLibrary.addSprite("supporters_11", "./sprites/supporters/supporters_11.png");
        s_oSpriteLibrary.addSprite("supporters_12", "./sprites/supporters/supporters_12.png");
        s_oSpriteLibrary.addSprite("supporters_13", "./sprites/supporters/supporters_13.png");
        s_oSpriteLibrary.addSprite("supporters_14", "./sprites/supporters/supporters_14.png");
        s_oSpriteLibrary.addSprite("supporters_15", "./sprites/supporters/supporters_15.png");
        s_oSpriteLibrary.addSprite("supporters_16", "./sprites/supporters/supporters_16.png");
        s_oSpriteLibrary.addSprite("supporters_17", "./sprites/supporters/supporters_17.png");
        s_oSpriteLibrary.addSprite("supporters_18", "./sprites/supporters/supporters_18.png");
        s_oSpriteLibrary.addSprite("supporters_19", "./sprites/supporters/supporters_19.png");
        s_oSpriteLibrary.addSprite("supporters_20", "./sprites/supporters/supporters_20.png");
        s_oSpriteLibrary.addSprite("supporters_21", "./sprites/supporters/supporters_21.png");
        s_oSpriteLibrary.addSprite("supporters_22", "./sprites/supporters/supporters_22.png");
        s_oSpriteLibrary.addSprite("supporters_23", "./sprites/supporters/supporters_23.png");
        s_oSpriteLibrary.addSprite("supporters_24", "./sprites/supporters/supporters_24.png");
        s_oSpriteLibrary.addSprite("supporters_25", "./sprites/supporters/supporters_25.png");
        s_oSpriteLibrary.addSprite("supporters_26", "./sprites/supporters/supporters_26.png");
        s_oSpriteLibrary.addSprite("supporters_27", "./sprites/supporters/supporters_27.png");
        s_oSpriteLibrary.addSprite("supporters_28", "./sprites/supporters/supporters_28.png");
        s_oSpriteLibrary.addSprite("supporters_29", "./sprites/supporters/supporters_29.png");
        s_oSpriteLibrary.addSprite("supporters_30", "./sprites/supporters/supporters_30.png");
        s_oSpriteLibrary.addSprite("help_touch", "./sprites/help_touch.png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        c.refreshLoader(Math.floor(b / d * 100));
        b === d && this._onPreloaderComplete()
    };
    this._onAllImagesLoaded = function() {};
    this._onPreloaderComplete = function() {
        c.unload();
        isIOS() || (s_oSoundtrack = playSound("soundtrack", 1, !0));
        this.gotoMenu()
    };
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        f =
            STATE_MENU
    };
    this.gotoGame = function() {
        g = new CGame(m);
        f = STATE_GAME
    };
    this.gotoLevelMenu = function() {
        new CLevelMenu;
        f = STATE_LEVEL_SELECTION
    };
    this.gotoSelectMode = function() {
        new CSelectMode
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        e = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        e = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display",
            "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== e) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && g.update();
            s_oStage.update(a)
        }
    };
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    STAR_SCORE = a.star_score;
    var m = a;
    s_oMain = this;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_aScores, s_aStars, s_iLastLevel = 1,
    s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack = null,
    s_oCanvas, s_iIndexPlayer, s_oTweenController;

function CArrow(a, e, b) {
    var d, f, c, g, m, h, k;
    this._init = function(a, b) {
        d = new createjs.Container;
        d.x = a;
        d.y = b;
        u.addChild(d);
        var e = s_oSpriteLibrary.getSprite("arrow");
        c = createBitmap(e);
        c.regY = .5 * e.height;
        d.addChild(c);
        g = createBitmap(s_oSpriteLibrary.getSprite("arrow_fill"));
        g.regY = .5 * e.height;
        d.addChild(g);
        h = e.width;
        k = e.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, h, k);
        f.regY = .5 * k;
        d.addChild(f);
        e = s_oSpriteLibrary.getSprite("arrow_frame");
        m = createBitmap(e);
        m.regX = 0;
        m.regY = .5 * e.height;
        d.addChild(m);
        g.mask = f
    };
    this.unload = function() {
        createjs.Tween.removeTweens(f);
        u.removeChild(d)
    };
    this.setVisible = function(a) {
        d.visible = a
    };
    this.setAngle = function(a) {
        d.rotation = a
    };
    this.animHelp = function(a) {
        f.scaleX = 0;
        createjs.Tween.get(f).to({
            scaleX: 1
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(f).to({
                scaleX: 0
            }, a, createjs.Ease.cubicInOut).call(function() {
                l.animHelp(a)
            })
        })
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.setX = function(a) {
        d.x = a
    };
    this.setY = function(a) {
        d.y =
            a
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this.mask = function(a) {
        f.graphics.clear();
        a = Math.floor(a * h / 100);
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, a, k)
    };
    var u = b;
    var l = this;
    this._init(a, e)
}

function CStar(a, e, b, d, f) {
    var c, g, m, h;
    this.init = function(a, b, d, f, e) {
        c = f.width;
        g = f.height;
        m = createBitmap(f);
        m.x = a;
        m.y = b;
        h = d;
        e.addChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.setAngle = function(a) {
        m.rotation = a
    };
    this.animCollected = function(a) {
        (new createjs.Tween.get(m)).to({
            x: a.x - c / 2,
            y: a.y + s_iOffsetY - g / 2
        }, 1E3, createjs.Ease.backInOut)
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    this.getImage = function() {
        return m
    };
    this.getPhysics =
        function() {
            return h
        };
    this.unload = function() {
        f.removeChild(m);
        h = m = null
    };
    this.animFade = function() {
        createjs.Tween.get(m).to({
            alpha: 0
        }, MS_ANIM_BALL_FADE, createjs.Ease.cubicOut)
    };
    this.init(e, b, d, a, f)
}

function CToggle(a, e, b, d, f) {
    var c, g, m, h, k, u, l;
    this._init = function(a, b, d, f, e) {
        k = [];
        u = [];
        var g = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        c = f;
        l = createSprite(g, "state_" + c, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        l.x = a;
        l.y = b;
        l.stop();
        e.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? l.off("mousedown", g) : (l.off("mousedown", g), l.off("mouseover", h));
        l.off("pressup", m);
        f.removeChild(l)
    };
    this._initListener = function() {
        s_bMobile ? g = l.on("mousedown", this.buttonDown) : (g = l.on("mousedown", this.buttonDown), h = l.on("mouseover", this.buttonOver));
        m = l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        u[a] = c
    };
    this.setActive = function(a) {
        c = a;
        l.gotoAndStop("state_" + c)
    };
    this.buttonRelease = function() {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("click");
        c = !c;
        l.gotoAndStop("state_" + c);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(u[ON_MOUSE_UP], c)
    };
    this.buttonDown = function() {
        l.scaleX = .9;
        l.scaleY =
            .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this._init(a, e, b, d, f)
}

function CGfxButton(a, e, b, d) {
    var f, c, g = [],
        m, h, k, u, l, p, q;
    this._init = function(a, b, d, e) {
        q = f = !1;
        c = 1;
        u = [];
        l = [];
        p = createBitmap(d);
        p.x = a;
        p.y = b;
        p.scaleX = p.scaleY = c;
        p.regX = d.width / 2;
        p.regY = d.height / 2;
        e.addChild(p);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? p.off("mousedown", m) : (p.off("mousedown", m), p.off("mouseover", k));
        p.off("pressup", h);
        d.removeChild(p)
    };
    this.setVisible = function(a) {
        p.visible = a
    };
    this.setClickable = function(a) {
        f = !a
    };
    this._initListener = function() {
        s_bMobile ? m = p.on("mousedown", this.buttonDown) :
            (m = p.on("mousedown", this.buttonDown), k = p.on("mouseover", this.buttonOver));
        h = p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        u[a] = b;
        l[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        u[a] = b;
        l[a] = c;
        g = d
    };
    this.buttonRelease = function() {
        f || (p.scaleX = c, p.scaleY = c, u[ON_MOUSE_UP] && u[ON_MOUSE_UP].call(l[ON_MOUSE_UP], g))
    };
    this.buttonDown = function() {
        f || (p.scaleX = .9 * c, p.scaleY = .9 * c, q || playSound("click", 1, 0), u[ON_MOUSE_DOWN] && u[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], g))
    };
    this.buttonOver =
        function(a) {
            s_bMobile || f || (a.target.cursor = "pointer")
        };
    this.pulseAnimation = function() {
        createjs.Tween.get(p).to({
            scaleX: .9 * c,
            scaleY: .9 * c
        }, 850, createjs.Ease.quadOut).to({
            scaleX: c,
            scaleY: c
        }, 650, createjs.Ease.quadIn).call(function() {
            n.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(p).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            n.trebleAnimation()
        })
    };
    this.setPosition = function(a,
        b) {
        p.x = a;
        p.y = b
    };
    this.setX = function(a) {
        p.x = a
    };
    this.setY = function(a) {
        p.y = a
    };
    this.getButtonImage = function() {
        return p
    };
    this.getX = function() {
        return p.x
    };
    this.getY = function() {
        return p.y
    };
    this.setMuted = function(a) {
        q = a
    };
    var n = this;
    this._init(a, e, b, d);
    return this
}

function CMenu() {
    var a, e, b, d, f, c, g, m, h, k, u, l, p, q, n, t = null,
        x = null,
        v, z;
    this._init = function() {
        s_b2Players = !1;
        null !== s_oSoundtrack && void 0 !== s_oSoundtrack && setVolume("soundtrack", 1);
        u = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(u);
        var y = s_oSpriteLibrary.getSprite("but_play");
        a = CANVAS_WIDTH / 2;
        e = CANVAS_HEIGHT - y.height / 2 - 20;
        v = new CGfxButton(a, e, y, s_oStage);
        v.addEventListener(ON_MOUSE_DOWN, this._onButTournamentRelease, this);
        y = s_oSpriteLibrary.getSprite("but_info");
        h = y.height / 2 + 10;
        k = y.height / 2 + 10;
        q = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, y, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        y = s_oSpriteLibrary.getSprite("but_delete_save");
        s_bStorageAvailable && (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (b = CANVAS_WIDTH - 1.5 * y.height - 5, d = y.height / 2 + 10) : (b = CANVAS_WIDTH - y.width / 2 - 10, d = y.height / 2 + 10), z = new CGfxButton(b, d, y, s_oStage), z.addEventListener(ON_MOUSE_UP, s_oLevelSettings.deleteSaveData, this));
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y = s_oSpriteLibrary.getSprite("audio_icon"),
            g = CANVAS_WIDTH - y.height / 2, m = y.height / 2 + 10, p = new CToggle(g, m, y, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        y = window.document;
        var A = y.documentElement;
        t = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
        x = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.enabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), f = h + y.width / 2 + 10, c = y.height / 2 + 10,
            n = new CToggle(f, c, y, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 1E3).call(function() {
            l.visible = !1
        });
        s_bStorageAvailable || new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos()
    };
    this.unload = function() {
        v.unload();
        s_bStorageAvailable && z.unload();
        l.visible = !1;
        q.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(),
            p = null;
        t && screenfull.enabled && n.unload();
        s_oStage.removeAllChildren();
        s_oMenu = u = null
    };
    this.refreshButtonPos = function() {
        v.setPosition(a, e - s_iOffsetY);
        s_bStorageAvailable && z.setPosition(b - s_iOffsetX, d + s_iOffsetY);
        q.setPosition(h + s_iOffsetX, s_iOffsetY + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(g - s_iOffsetX, s_iOffsetY + m);
        t && screenfull.enabled && n.setPosition(f + s_iOffsetX, c + s_iOffsetY)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut =
        function() {
            new CCreditsPanel
        };
    this.resetFullscreenBut = function() {
        t && screenfull.enabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? x.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButTournamentRelease = function() {
        this.unload();
        jQuery.event.trigger("start_session");
        new CSelectPlayer;
        !isIOS() || null !== s_oSoundtrack && void 0 !== s_oSoundtrack || (s_oSoundtrack = playSound("soundtrack", 1, !0))
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame() {
    var a, e, b, d = null,
        f, c, g, m, h;
    var k = !0;
    var u = !1,
        l, p = !1,
        q, n, t, x, v, z, y, A, r, w, C, B, I, E, D, H, G, F, J, M, K, L;
    this._init = function() {
        setVolume("soundtrack", .3);
        k = !0;
        w = B = !1;
        A = [];
        r = [];
        H = !1;
        for (var l = e = a = 0; l < s_oLevelSettings.getCurrentLevel(); l++) e += s_aScores[l];
        x = new createjs.Container;
        s_oStage.addChild(x);
        I = new createjs.Container;
        s_oStage.addChild(I);
        this.addStarBg();
        z = new createjs.Container;
        s_oStage.addChild(z);
        v = new createjs.Container;
        s_oStage.addChild(v);
        G = J = 0;
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        for (var p = [], n = 0; 31 > n; n++) p.push(s_oSpriteLibrary.getSprite("supporters_" + n));
        p = new createjs.SpriteSheet({
            images: p,
            frames: {
                width: 1360,
                height: 245
            },
            animations: {
                idle: [0, 0, "idle"],
                anim: [0, 30, "idle"]
            }
        });
        M = createSprite(p, "idle", 0, 0, 1360, 245);
        x.addChild(l, M);
        s_oPhysicsController = new CPhysicsController;
        f = new CPhysicsObject;
        f.createAContactListener();
        g = TIME_FOR_LAUNCH;
        l = s_oSpriteLibrary.getSprite("ball");
        BALL_RADIUS = .5 * l.width;
        this._createBall(l, CANVAS_WIDTH / 2 - 400, BALL_START_Y, BALL_DENSITY, BALL_FRICTION, BALL_RESTITUTION);
        y = new CPlayer(c.getX() - 30, c.getY() - 40, x);
        for (n = 0; n < OBSTACLES_INFO.length; n++) new CObstacles(OBSTACLES_INFO[n].type, OBSTACLES_INFO[n].x, OBSTACLES_INFO[n].y, I, A);
        for (n = 0; n < TEAMMATES_INFO.length; n++) r.push(new CTeamMate(n, TEAMMATES_INFO[n].x, TEAMMATES_INFO[n].y, I));
        f.addRectangle({
            density: 1,
            friction: .7,
            width: CANVAS_WIDTH,
            height: 10,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 + 190,
            angle: 0,
            restitution: .5,
            isSensor: !1
        });
        m = new CArrow(0, 0, v);
        m.setVisible(!1);
        E = [];
        D = [];
        for (n = 0; n < STARS_INFO.length; n++) this.createStar(STARS_INFO[n].x,
            STARS_INFO[n].y, n, E);
        for (n = 0; 3 > n; n++) D.push(!0);
        this._createGoal();
        l = s_oSpriteLibrary.getSprite("contact_ball");
        F = new createBitmap(l, l.width, l.height);
        F.regX = l.width / 2;
        F.regY = l.height / 2;
        F.alpha = 0;
        z.addChild(F);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.on("mousedown", this.onMouseDown);
        h.on("pressmove", this.onPressMove);
        h.on("pressup", this.onPressUp);
        s_oStage.addChild(h);
        b = new CInterface(e);
        d = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        0 === s_oLevelSettings.getCurrentLevel() && new CHelpPanel(s_oStage);
        this.refreshButtonPos();
        jQuery.event.trigger("start_level", s_oLevelSettings.getCurrentLevel())
    };
    this.refreshButtonPos = function() {
        for (var a = 0; 3 > a; a++) K[a].y = L + s_iOffsetY;
        b.refreshButtonPos()
    };
    this._createBall = function(a, b, d, e, g, h) {
        e = f.addBall(a.width / 2, b, d, e, g, h);
        c = new CBall(b, d, e, a, z)
    };
    this.addStarBg = function() {
        var a = s_oSpriteLibrary.getSprite("star_outline"),
            b = CANVAS_WIDTH / 2 - a.width - 10;
        L = a.height / 2 + 10;
        K = [];
        for (var c = 0; 3 > c; c++) {
            var d =
                createBitmap(a);
            d.regX = a.width / 2;
            d.regY = a.height / 2;
            d.x = b;
            d.y = L;
            s_oStage.addChild(d);
            b += a.width + 10;
            K.push(d)
        }
    };
    this.createStar = function(a, b, d) {
        var c = s_oSpriteLibrary.getSprite("star");
        d = f.addCircle(c.width / 2, a + c.width / 2, b + c.height / 2, 0, 0, 0, !0, {
            type: STAR,
            index: d,
            isSensor: !0
        });
        E.push(new CStar(c, a, b, d, z))
    };
    this._createGoal = function() {
        var a = [];
        a.push(new f.addRectangle({
            x: 1130,
            y: 485,
            width: 20,
            height: 4,
            density: 10,
            friction: 0,
            restitution: 1,
            angle: 50,
            sensor: !0,
            info: {
                type: GOAL_POST,
                isSensor: !0
            }
        }));
        a.push(new f.addRectangle({
            x: 1150,
            y: 470,
            width: 25,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .6,
            angle: 0,
            sensor: !1
        }));
        a.push(new f.addRectangle({
            x: 1180,
            y: 485,
            width: 20,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .6,
            angle: 55,
            sensor: !1
        }));
        a.push(new f.addRectangle({
            x: 1210,
            y: 550,
            width: 60,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .2,
            angle: 73,
            sensor: !1
        }));
        var b = new f.addRectangle({
            x: 1150,
            y: 555,
            width: 60,
            height: 4,
            density: 2,
            friction: 0,
            restitution: .2,
            angle: 90,
            sensor: !0,
            info: {
                type: GOAL,
                isSensor: !0
            }
        });
        new CGoal(x, v, a, b)
    };
    this.onGoal = function() {
        if (!B) {
            B = !0;
            M.gotoAndPlay("anim");
            playSound("goal", 1, !1);
            s_oGame.showGoalText();
            for (var a = 0; a < D.length; a++) D[a] = !1
        }
    };
    this.onHitPost = function() {
        playSound("post", 1, !1)
    };
    this.onHitWoodCase = function() {
        playSound("wood_hit", 1, !1)
    };
    this.onHitMetalCase = function() {
        playSound("metal_hit", 1, !1)
    };
    this.duckCollision = function(a) {
        A[a].onDuckCollision();
        playSound("duck_hit", 1, !1)
    };
    this.showGoalText = function() {
        var c = new createjs.Shape;
        c.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = .01;
        c.on("mousedown",
            function() {}, this);
        s_oStage.addChild(c);
        var f = {
            images: [s_oSpriteLibrary.getSprite("goal_text")],
            frames: {
                width: 1158,
                height: 210,
                regX: 579,
                regY: 105
            },
            animations: {
                idle: [0, 1, "idle", .3]
            }
        };
        f = new createjs.SpriteSheet(f);
        C = createSprite(f, "idle", 579, 105, 1158, 210);
        C.x = .5 * CANVAS_WIDTH;
        C.y = .5 * CANVAS_HEIGHT;
        C.alpha = 0;
        C.scaleX = .3;
        C.scaleY = .3;
        s_oStage.addChild(C);
        a += G * STAR_SCORE;
        s_aStars[s_oLevelSettings.getCurrentLevel()] < G && (s_aStars[s_oLevelSettings.getCurrentLevel()] = G, saveItem(LS_STARS, JSON.stringify(s_aStars)));
        s_aScores[s_oLevelSettings.getCurrentLevel()] < a && (s_aScores[s_oLevelSettings.getCurrentLevel()] = a, saveItem(LS_SCORES, JSON.stringify(s_aScores)));
        s_iLastLevel < s_oLevelSettings.getNextLevel() && (s_iLastLevel = s_oLevelSettings.getNextLevel(), saveItem(LS_LAST_LEVEL, s_iLastLevel));
        e += a;
        b.refreshTotScore(e);
        (new createjs.Tween.get(C)).to({
            scaleX: .8,
            scaleY: .8,
            alpha: 1
        }, 900, createjs.Ease.cubicOut).wait(1300).to({
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        }, 300, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(C, c);
            d.show(a, 0, e)
        })
    };
    this.setPause = function(a) {
        w = a
    };
    this.starCollision = function(a) {
        !0 === D[a] && (E[a].animCollected({
            x: K[G].x,
            y: L
        }), G++, D[a] = !1, playSound("star", 1, !1))
    };
    this.teamMateCollision = function(a) {
        r[a].onShot();
        s_oGame.addImpulseToBall({
            x: CANVAS_WIDTH,
            y: -1 * randomIntBetween(1, 200)
        })
    };
    this.onMouseDown = function(a) {
        u || (q = {
            x: s_oStage.mouseX * s_iScaleFactor,
            y: s_oStage.mouseY * s_iScaleFactor
        }, m.setVisible(!0), m.setPosition(c.getX(), c.getY()))
    };
    this.onPressMove = function() {
        u || (l = {
            x: s_oStage.mouseX * s_iScaleFactor,
            y: s_oStage.mouseY * s_iScaleFactor
        }, s_oGame.arrowUpdate(), p = !0)
    };
    this._updatePlay = function() {
        if (k) {
            t = s_oPhysicsController.getElementVelocity(c.getPhysics());
            c.update(t);
            for (var a = 0; a < A.length; a++) A[a].update();
            H || (this.detectBallVelocityForLaunch(), this.detectBallOutOfRange());
            s_oPhysicsController.update();
            1 === F.alpha && (4 === J ? J = F.alpha = 0 : J++)
        }
    };
    this.detectBallOutOfRange = function() {
        if (c.getX() < BALL_OUT_OF_RANGE.xMin || c.getX() > BALL_OUT_OF_RANGE.xMax) H = !0, c.animFadeOut()
    };
    this.restartBallPos = function() {
        0 <
            a ? (s_oPhysicsController.setElementPosition(c.getPhysics(), c.getStartPos()), s_oPhysicsController.setElementLinearVelocity(c.getPhysics(), {
                x: 0,
                y: 0
            }), s_oPhysicsController.setElementAngularVelocity(c.getPhysics(), 0), c.animFadeIn()) : !1 === B && d.show(0, 1, e)
    };
    this.setBooleanLaunch = function(a) {
        u = a
    };
    this.restartGame = function() {
        this.unload();
        s_oMain.gotoGame()
    };
    this.detectBallVelocityForLaunch = function() {
        u && (t.x < MIN_VELOCITY_FOR_LAUNCH && t.x > -MIN_VELOCITY_FOR_LAUNCH && t.y < MIN_VELOCITY_FOR_LAUNCH && t.y > -MIN_VELOCITY_FOR_LAUNCH ?
            0 > g ? (H = !0, s_oPhysicsController.setElementAngularVelocity(c.getPhysics(), 0), s_oPhysicsController.setElementLinearVelocity(c.getPhysics(), {
                x: 0,
                y: 0
            }), c.animFadeOut()) : g -= s_iTimeElaps : g = TIME_FOR_LAUNCH)
    };
    this.unload = function() {
        k = !1;
        b.unload();
        this.destroyPhysicsEngine();
        h.removeAllEventListeners();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oGame = null
    };
    this.onPressUp = function() {
        m.setVisible(!1);
        if (p && !u) {
            var a = new CVector2(q.x - l.x, q.y - l.y);
            a.scalarProduct(n);
            var b = a.length();
            b > HIT_BALL_MIN_FORCE &&
                (b > HIT_BALL_MAX_FORCE && (a.normalize(), a.scalarProduct(HIT_BALL_MAX_FORCE)), s_oGame.addImpulseToBall({
                    x: a.getX(),
                    y: a.getY()
                }), H = !1, y.onShot(), u = !0);
            l.x = 0;
            n = l.y = 0;
            p = !1
        }
    };
    this.arrowUpdate = function() {
        this.angleArrow();
        this.arrowMask()
    };
    this.angleArrow = function() {
        m.setAngle(180 / Math.PI * Math.atan2(q.y - l.y, q.x - l.x) + OFFSET_ANGLE_ARROW)
    };
    this.onExit = function() {
        N.unload();
        jQuery.event.trigger("end_session");
        s_oMain.gotoLevelMenu()
    };
    this.destroyPhysicsEngine = function() {
        s_oPhysicsController.destroyAllBody();
        s_oPhysicsController.destroyWorld();
        s_oPhysicsController = null
    };
    this.arrowMask = function() {
        var a = Math.ceil(distanceV2(q, l));
        100 < a && (a = 100);
        this.setForce(a);
        m.mask(a)
    };
    this.setForce = function(a) {
        n = a * FORCE_MULTIPLIER
    };
    this.addImpulseToBall = function(a) {
        s_oPhysicsController.applyImpulse(c.getPhysics(), a);
        F.x = c.getX() - c.getRadius();
        F.y = c.getY();
        F.alpha = 1;
        playSound("kick", 1, !1)
    };
    this.addImpulseToCube = function(a, b) {
        s_oPhysicsController.applyImpulse(A[b].getPhysics(), a)
    };
    this.update = function() {
        w || this._updatePlay()
    };
    s_oGame = this;
    var N = this;
    this._init()
}
var s_oGame = null;

function CInterface(a) {
    var e, b, d, f, c, g, m, h, k, u, l, p, q, n, t, x, v = null,
        z = null,
        y, A, r, w, C;
    this._init = function(a) {
        t = new createjs.Container;
        s_oStage.addChild(t);
        var B = s_oSpriteLibrary.getSprite("but_exit");
        l = CANVAS_WIDTH - B.width / 2 - 10;
        p = B.height / 2 + 10;
        n = new CGfxButton(l, p, B, t);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        k = CANVAS_WIDTH - 1.5 * B.width - 20;
        u = B.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) B = s_oSpriteLibrary.getSprite("audio_icon"), q = new CToggle(k, u, B, s_bAudioActive, t), q.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        var E = window.document,
            D = E.documentElement;
        v = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        z = E.exitFullscreen || E.mozCancelFullScreen || E.webkitExitFullscreen || E.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (v = !1);
        v && screenfull.enabled ? (B = s_oSpriteLibrary.getSprite("but_fullscreen"), m = B.width / 4 + 10, h = B.height / 2 + 10, d = m + B.width / 2 + 10, f = h, x = new CToggle(m, h, B, s_bFullscreen, t), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this)) :
            (d = B.width / 4 + 10, f = B.height / 2 + 10);
        B = s_oSpriteLibrary.getSprite("but_restart");
        y = new CGfxButton(d, f, B, t);
        y.addEventListener(ON_MOUSE_UP, this._onButRestartRelease, this);
        c = 10;
        g = CANVAS_HEIGHT - 20;
        A = new createjs.Text(TEXT_LEVEL + " " + (s_oLevelSettings.getCurrentLevel() + 1), " 30px " + PRIMARY_FONT, "#000064");
        A.x = c;
        A.y = g;
        A.textAlign = "left";
        A.textBaseline = "alphabetic";
        A.outline = 3;
        s_oStage.addChild(A);
        r = new createjs.Text(A.text, " 30px " + PRIMARY_FONT, "#ff6c00");
        r.x = c;
        r.y = g;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        s_oStage.addChild(r);
        e = CANVAS_WIDTH - 10;
        b = CANVAS_HEIGHT - 20;
        C = new createjs.Text(TEXT_TOT_SCORE + " " + a, " 30px " + PRIMARY_FONT, "#000064");
        C.x = c;
        C.y = g;
        C.textAlign = "right";
        C.textBaseline = "alphabetic";
        C.outline = 3;
        s_oStage.addChild(C);
        w = new createjs.Text(C.text, " 30px " + PRIMARY_FONT, "#ff6c00");
        w.x = e;
        w.y = b;
        w.textAlign = "right";
        w.textBaseline = "alphabetic";
        s_oStage.addChild(w);
        this.refreshButtonPos()
    };
    this.starFadeOut = function() {
        (new createjs.Tween.get(void 0)).to({
            alpha: 0
        }, 700)
    };
    this.unload = function() {
        if (!1 ===
            DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
        n.unload();
        s_oStage.removeChild(t);
        v && screenfull.enabled && x.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function() {
        y.setPosition(d + s_iOffsetX, f + s_iOffsetY);
        n.setPosition(l - s_iOffsetX, s_iOffsetY + p);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(k - s_iOffsetX, s_iOffsetY + u);
        v && screenfull.enabled && x.setPosition(m + s_iOffsetX, h + s_iOffsetY);
        A.x = c + s_iOffsetX;
        A.y = g - s_iOffsetY;
        r.x = c + s_iOffsetX;
        r.y = g - s_iOffsetY;
        C.x = e - s_iOffsetX;
        C.y = b - s_iOffsetY;
        w.x = e - s_iOffsetX;
        w.y = b - s_iOffsetY
    };
    this.refreshTotScore = function(a) {
        w.text = TEXT_TOT_SCORE + " " + a;
        C.text = TEXT_TOT_SCORE + " " + a
    };
    this.setOnTop = function() {
        s_oStage.addChildAt(t, s_oStage.numChildren)
    };
    this._onButRestartRelease = function() {
        var a = new createjs.Shape;
        a.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = 0;
        s_oStage.addChild(a);
        (new createjs.Tween.get(a)).to({
            alpha: 1
        }, 250).wait(200).call(function() {
            s_oGame.restartGame();
            s_oStage.addChildAt(a, s_oStage.numChildren);
            (new createjs.Tween.get(a)).to({
                    alpha: 0
                },
                250)
        })
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.resetFullscreenBut = function() {
        v && screenfull.enabled && x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? z.call(window.document) : v.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CHelpPanel(a) {
    var e, b, d, f, c, g, m, h;
    this._init = function(a) {
        var k = s_bMobile ? TEXT_HELP1_MOBILE : TEXT_HELP1_PC;
        b = new createjs.Text(k, "24px " + PRIMARY_FONT, "#000");
        b.textAlign = "center";
        b.lineWidth = 500;
        b.textBaseline = "alphabetic";
        b.outline = 4;
        b.x = .5 * CANVAS_WIDTH;
        b.y = .5 * CANVAS_HEIGHT;
        e = new createjs.Text(k, "24px " + PRIMARY_FONT, "#fff");
        e.textAlign = "center";
        e.lineWidth = 500;
        e.textBaseline = "alphabetic";
        e.x = b.x;
        e.y = b.y;
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .7;
        d = new createjs.Container;
        h = d.on("mousedown", this.unload);
        d.addChild(f, b, e);
        a.addChild(d);
        m = new CArrow(CANVAS_WIDTH / 2 - 400, BALL_START_Y, d);
        m.setAngle(-25);
        m.animHelp(1E3);
        a = s_oSpriteLibrary.getSprite("ball");
        c = createBitmap(a);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        c.x = CANVAS_WIDTH / 2 - 400;
        c.y = BALL_START_Y;
        d.addChild(c);
        a = s_oSpriteLibrary.getSprite("help_touch");
        g = createBitmap(a);
        g.regX = .33 * a.width;
        g.regY = .1 * a.height;
        g.x = c.x;
        g.y = c.y + 20;
        d.addChild(g);
        this._helpCursorAnim(1E3)
    };
    this.unload = function() {
        createjs.Tween.removeTweens(g);
        a.removeChild(d);
        d.off("mousedown", h)
    };
    this._helpCursorAnim = function(a) {
        createjs.Tween.get(g).to({
            x: c.x - 150,
            y: c.y + 60
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(g).to({
                x: c.x,
                y: c.y
            }, a, createjs.Ease.cubicInOut).call(function() {
                k._helpCursorAnim(a)
            })
        })
    };
    this._onExitHelp = function() {
        this.unload();
        s_oGame._onExitHelp()
    };
    var k = this;
    this._init(a)
}

function CCreditsPanel() {
    var a, e, b, d, f;
    this._init = function() {
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        e.on("mousedown", function() {});
        s_oStage.addChild(e);
        (new createjs.Tween.get(e)).to({
            alpha: .7
        }, 500);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var c = s_oSpriteLibrary.getSprite("msg_box"),
            g = createBitmap(c);
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        b.addChild(g);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + c.height / 2;
        a = b.y;
        (new createjs.Tween.get(b)).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.quartIn);
        g = new createjs.Text(TEXT_DEVELOPED, " 30px " + PRIMARY_FONT, "#ffffff");
        g.y = -c.height / 2 + 180;
        g.textAlign = "center";
        g.textBaseline = "middle";
        b.addChild(g);
        c = new createjs.Text("www.codethislab.com", " 30px " + PRIMARY_FONT, "#ffffff");
        c.y = 80;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 300;
        b.addChild(c);
        c = s_oSpriteLibrary.getSprite("ctl_logo");
        f = createBitmap(c);
        f.on("mousedown", this._onLogoButRelease);
        f.regX = c.width / 2;
        f.regY = c.height / 2;
        b.addChild(f);
        f.on("mouseover", this.changePointer,
            this);
        c = s_oSpriteLibrary.getSprite("but_exit");
        d = new CGfxButton(300, -195, c, b);
        d.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.changePointer = function(a) {
        !1 === s_bMobile && (a.target.cursor = "pointer")
    };
    this.unload = function() {
        d.setClickable(!1);
        (new createjs.Tween.get(e)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(e);
            s_oStage.removeChild(b);
            d.unload()
        });
        e.off("mousedown", function() {});
        f.off("mousedown", this._onLogoButRelease)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._onMoreGamesReleased = function() {
        window.open("http://codecanyon.net/collections/5409142-games")
    };
    this._init()
}

function CAreYouSurePanel(a) {
    var e, b, d, f, c, g;
    this._init = function(a) {
        g = a;
        s_oGame.setPause(!0);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function() {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
        }, 500);
        c = new createjs.Container;
        s_oStage.addChild(c);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var k = createBitmap(a);
        k.regX = a.width / 2;
        k.regY = a.height / 2;
        c.addChild(k);
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT + a.height / 2;
        e =
            c.y;
        (new createjs.Tween.get(c)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);
        k = new createjs.Text(TEXT_ARE_SURE, "74px " + PRIMARY_FONT, "#000000");
        k.y = -a.height / 2 + 120;
        k.textAlign = "center";
        k.textBaseline = "middle";
        k.lineWidth = 400;
        k.outline = 5;
        c.addChild(k);
        a = new createjs.Text(TEXT_ARE_SURE, "74px " + PRIMARY_FONT, "#FFFFFF");
        a.y = k.y;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 400;
        c.addChild(a);
        b = new CGfxButton(260, 130, s_oSpriteLibrary.getSprite("but_yes_big"), c);
        b.addEventListener(ON_MOUSE_UP,
            this._onButYes, this);
        d = new CGfxButton(-260, 130, s_oSpriteLibrary.getSprite("but_no"), c);
        d.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        d.pulseAnimation()
    };
    this._onButYes = function() {
        d.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(c)).to({
            y: e
        }, 400, createjs.Ease.backIn).call(function() {
            m.unload();
            g()
        })
    };
    this._onButNo = function() {
        d.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(c)).to({
                y: e
            },
            400, createjs.Ease.backIn).call(function() {
            m.unload();
            s_oGame.setPause(!1)
        })
    };
    this.unload = function() {
        d.unload();
        b.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(c);
        f.off("mousedown", function() {})
    };
    var m = this;
    this._init(a)
}

function CEndPanel(a) {
    var e, b, d, f, c, g, m, h, k, u, l, p, q, n, t, x, v, z, y, A, r;
    this._init = function(a) {
        y = this;
        r = 0;
        l = new createjs.Shape;
        l.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .5;
        A = l.on("mousedown", function() {});
        e = createBitmap(a);
        a = e.getBounds();
        e.regX = a.width / 2;
        e.regY = a.height / 2;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        d = new createjs.Text("", " 33px " + PRIMARY_FONT, "#000");
        d.x = CANVAS_WIDTH / 2 + 106;
        d.y = CANVAS_HEIGHT / 2 - 180;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.lineWidth =
            450;
        f = new createjs.Text("", " 33px " + PRIMARY_FONT, "#ffffff");
        f.x = CANVAS_WIDTH / 2 + 105;
        f.y = CANVAS_HEIGHT / 2 - 178;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = 450;
        c = new createjs.Text("", " 30px " + PRIMARY_FONT, "#000");
        c.x = CANVAS_WIDTH / 2 + 71;
        c.y = d.y + 130;
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.lineWidth = 550;
        g = new createjs.Text("", " 30px " + PRIMARY_FONT, "#ffffff");
        g.x = CANVAS_WIDTH / 2 + 70;
        g.y = c.y - 2;
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.lineWidth = 550;
        t = new createjs.Text("0",
            " 30px " + PRIMARY_FONT, "#000");
        t.x = CANVAS_WIDTH / 2 + 181;
        t.y = d.y + 130;
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 550;
        x = new createjs.Text("0", " 30px " + PRIMARY_FONT, "#ffffff");
        x.x = CANVAS_WIDTH / 2 + 180;
        x.y = c.y - 2;
        x.textAlign = "center";
        x.textBaseline = "alphabetic";
        x.lineWidth = 550;
        v = new createjs.Text("", " 30px " + PRIMARY_FONT, "#000");
        v.x = CANVAS_WIDTH / 2 + 101;
        v.y = t.y + 130;
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.lineWidth = v;
        z = new createjs.Text("", " 30px " + PRIMARY_FONT, "#ffffff");
        z.x = CANVAS_WIDTH /
            2 + 100;
        z.y = v.y - 2;
        z.textAlign = "center";
        z.textBaseline = "alphabetic";
        z.lineWidth = 550;
        a = s_oSpriteLibrary.getSprite("panel_" + s_iIndexPlayer);
        a = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: 320,
                height: 430,
                regX: 160,
                regY: 215
            },
            animations: {
                lose: [0, 0, 0],
                win: [1, 1, 1],
                final_win: [2, 2, 2]
            }
        });
        p = createSprite(a, "win", 160, 215, 320, 430);
        p.stop();
        p.x = CANVAS_WIDTH / 2 - 240;
        p.y = CANVAS_HEIGHT / 2;
        a = s_oSpriteLibrary.getSprite("starbox");
        q = [];
        for (var k = 0; 3 > k; k++) q.push(createBitmap(a, a.width, a.height)), q[k].regX = a.width / 2, q[k].regY =
            a.height / 2, q[k].y = CANVAS_HEIGHT / 2;
        q[0].x = CANVAS_WIDTH / 2 + 20;
        q[1].x = CANVAS_WIDTH / 2 + 100;
        q[2].x = CANVAS_WIDTH / 2 + 180;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        b.addChild(l, e, t, x, c, g, d, f, p, q[0], q[1], q[2], v, z)
    };
    this.onButNext = function() {
        s_oGame.unload();
        s_oLevelSettings.nextLevel() ? s_oMain.gotoGame() : s_oMain.gotoMenu();
        s_oStage.removeChild(b);
        jQuery.event.trigger("share_event", m)
    };
    this.unload = function() {
        l.off("mousedown", A)
    };
    this._initListener = function() {
        k.addEventListener(ON_MOUSE_DOWN, this._onExit,
            this);
        h.addEventListener(ON_MOUSE_DOWN, this._onRestart, this)
    };
    this.show = function(a, e, l) {
        jQuery.event.trigger("save_score", l);
        jQuery.event.trigger("end_level", s_oLevelSettings.getCurrentLevel());
        jQuery.event.trigger("show_interlevel_ad");
        s_oGame.setPause(!0);
        v.text = TEXT_TOT_SCORE + " " + l;
        z.text = TEXT_TOT_SCORE + " " + l;
        l = s_oSpriteLibrary.getSprite("but_restart_big");
        h = new CGfxButton(CANVAS_WIDTH / 2 + 180, CANVAS_HEIGHT / 2 + 150, l, b);
        l = s_oSpriteLibrary.getSprite("but_home");
        k = new CGfxButton(CANVAS_WIDTH / 2 - 20, CANVAS_HEIGHT /
            2 + 150, l, b);
        s_oStage.addChild(b);
        s_oLevelSettings.getCurrentLevel() < NUM_LEVELS && 0 === e && (h.setX(CANVAS_WIDTH / 2 + 100), k.setX(h.getX() - 120), l = s_oSpriteLibrary.getSprite("but_next_big"), u = new CGfxButton(CANVAS_WIDTH / 2 + 220, CANVAS_HEIGHT / 2 + 150, l, b), u.addEventListener(ON_MOUSE_DOWN, this.onButNext, this));
        0 === e ? playSound("applause") : playSound("game_over");
        m = a;
        0 === e ? (s_oLevelSettings.getCurrentLevel() === s_oLevelSettings.getNumLevel() - 1 ? (p.gotoAndStop("final_win"), d.text = TEXT_GAMEOVER_3, f.text = TEXT_GAMEOVER_3,
            f.lineHeight = 40, d.lineHeight = 40) : (p.gotoAndStop("win"), d.text = TEXT_GAMEOVER, f.text = TEXT_GAMEOVER), n = new CRollingTextController(x, t, m, 2500, EASE_CUBIC_OUT), n.addEventListener(ON_CONTROLLER_REMOVE, function() {
            n.unload();
            n = null
        }), n.addEventListener(ON_CONTROLLER_END, function() {}), n.addRollingListener(y.onCollectStar, y, [STAR_SCORE, 2 * STAR_SCORE, 3 * STAR_SCORE])) : (p.gotoAndStop("lose"), m = a = 0, d.text = TEXT_GAMEOVER_2, f.text = TEXT_GAMEOVER_2);
        c.text = TEXT_SCORE;
        g.text = TEXT_SCORE;
        b.visible = !0;
        var w = this;
        createjs.Tween.get(b).to({
                alpha: 1
            },
            500).call(function() {
            w._initListener()
        })
    };
    this.onCollectStar = function() {
        var a = s_oSpriteLibrary.getSprite("star"),
            c = createBitmap(a, a.width, a.height);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        c.x = q[r].x;
        c.y = q[r].y;
        c.scaleX = .1;
        c.scaleY = .1;
        b.addChild(c);
        (new createjs.Tween.get(c)).to({
            scaleX: 1,
            scaleY: 1
        }, 1200, createjs.Ease.backOut);
        r++
    };
    this._onExit = function() {
        jQuery.event.trigger("share_event", m);
        b.off("mousedown", this._onExit);
        s_oStage.removeChild(b);
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onRestart = function() {
        s_oStage.removeChild(b);
        var a = new createjs.Shape;
        a.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = 0;
        s_oStage.addChild(a);
        (new createjs.Tween.get(a)).to({
            alpha: 1
        }, 250).wait(200).call(function() {
            s_oGame.restartGame();
            s_oStage.addChildAt(a, s_oStage.numChildren);
            (new createjs.Tween.get(a)).to({
                alpha: 0
            }, 250)
        });
        jQuery.event.trigger("share_event", m)
    };
    this._init(a);
    return this
}

function CEdgeModel(a, e, b, d) {
    var f = null,
        c = null,
        g = null,
        m = null,
        h = null;
    this._init = function(a, b, c, d) {
        this.set(a, b, c, d)
    };
    this.destroy = function() {
        h = m = g = c = f = null
    };
    this.render = function(a) {
        a.moveTo(f.x, f.y);
        a.lineTo(c.x, c.y)
    };
    this.toString = function(a) {
        trace(a + " " + f.x + " " + f.y + " " + c.x + " " + c.y)
    };
    this.add = function(a) {
        f.addV(a);
        c.addV(a)
    };
    this.set = function(a, b, d, e) {
        f = new CVector2;
        c = new CVector2;
        f.set(a, b);
        c.set(d, e);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.moveY = function(a) {
        f.add(0, a);
        c.add(0, a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.scale = function(a) {
        f.scalarProduct(a);
        c.scalarProduct(a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.calculateNormal = function() {
        h = null;
        h = new CVector2;
        h.setV(c);
        h.subtract(f);
        h.rot90CCW();
        h.normalize()
    };
    this.calculateCenter = function() {
        g = null;
        g = centerBetweenPointsV2(f, c);
        m = new CVector2;
        m.setV(h);
        m.scalarProduct(5);
        m.addV(g)
    };
    this.getPointA = function() {
        return f
    };
    this.m_pCenter = function() {
        return g
    };
    this.getPointB = function() {
        return c
    };
    this.getNormal = function() {
        return h
    };
    this.renderNormal = function(a) {
        a.moveTo(g.x, g.y);
        a.lineTo(m.x, m.y)
    };
    this.getLength = function() {
        return Math.sqrt(Math.pow(b - a, 2) + Math.pow(d - e, 2))
    };
    this._init(a, e, b, d);
    return this
}

function CEdgeViewer(a, e, b, d, f, c) {
    var g;
    this.init = function(a, b, c, d, f, e) {
        a = a > c || b > d ? b === d ? (new createjs.Graphics).beginFill("#000").drawRect(c, d, f, e) : (new createjs.Graphics).beginFill("#000").drawRect(c, d, e, f) : b === d ? (new createjs.Graphics).beginFill("#000").drawRect(a, b, f, e) : (new createjs.Graphics).beginFill("#000").drawRect(a, b, e, f);
        g = new createjs.Shape(a);
        g.y = -e / 2;
        s_oStage.addChild(g)
    };
    this.moveY = function(a) {
        g.y += a
    };
    this.init(a, e, b, d, f, c)
}

function CEdge(a, e, b, d, f, c) {
    var g, m;
    this.init = function(a, b, d, f, e) {
        g = new CEdgeModel(a, b, d, f);
        var k = g.getLength();
        c && (m = new CEdgeViewer(a, b, d, f, k, e))
    };
    this.getModel = function() {
        return g
    };
    this.moveY = function(a) {
        c && m.moveY(a);
        g.moveY(a)
    };
    this.init(a, e, b, d, f)
}

function CVector2(a, e) {
    var b, d;
    this._init = function(a, c) {
        b = a;
        d = c
    };
    this.add = function(a, c) {
        b += a;
        d += c
    };
    this.addV = function(a) {
        b += a.getX();
        d += a.getY()
    };
    this.scalarDivision = function(a) {
        b /= a;
        d /= a
    };
    this.subtract = function(a) {
        b -= a.getX();
        d -= a.getY()
    };
    this.scalarProduct = function(a) {
        b *= a;
        d *= a
    };
    this.invert = function() {
        b *= -1;
        d *= -1
    };
    this.dotProduct = function(a) {
        return b * a.getX() + d * a.getY()
    };
    this.set = function(a, c) {
        b = a;
        d = c
    };
    this.setV = function(a) {
        b = a.getX();
        d = a.getY()
    };
    this.length = function() {
        return Math.sqrt(b * b + d * d)
    };
    this.length2 = function() {
        return b * b + d * d
    };
    this.normalize = function() {
        var a = this.length();
        0 < a && (b /= a, d /= a)
    };
    this.angleBetweenVectors = function(a) {
        a = Math.acos(this.dotProduct(a) / (this.length() * a.length()));
        return !0 === isNaN(a) ? 0 : a
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(b, d);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = b;
        b = -d;
        d = a
    };
    this.rot90CW = function() {
        var a = b;
        b = d;
        d = -a
    };
    this.getRotCCW = function(a) {
        a.set(b, d);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(b, d);
        a.rot90CW()
    };
    this.ceil = function() {
        b =
            Math.ceil(b);
        d = Math.ceil(d)
    };
    this.round = function() {
        b = Math.round(b);
        d = Math.round(d)
    };
    this.toString = function() {
        return "Vector2: " + b + ", " + d
    };
    this.print = function() {
        trace("Vector2: " + b + ", " + d + "")
    };
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return d
    };
    this.rotate = function(a) {
        var c = b,
            e = d;
        b = c * Math.cos(a) + e * Math.sin(a);
        d = c * -Math.sin(a) + e * Math.cos(a)
    };
    this._init(a, e)
}

function CBall(a, e, b, d, f) {
    var c, g, m, h;
    this._init = function(a, b, d) {
        m = {
            x: a,
            y: b
        };
        c = createBitmap(d);
        c.x = a;
        c.y = b;
        c.regX = .5 * d.width;
        c.regY = .5 * d.height;
        h = d.width / 2;
        f.addChild(c);
        a = s_oSpriteLibrary.getSprite("arrow_ball");
        g = createBitmap(a);
        g.regX = a.width;
        g.y = s_iOffsetY;
        g.visible = !1;
        f.addChild(g)
    };
    this.unload = function() {
        f.removeChild(c)
    };
    this.setVisible = function(a) {
        c.visible = a
    };
    this.setPosition = function(a, b) {
        c.x = a;
        c.y = b
    };
    this.setAngle = function(a) {
        c.rotation = a
    };
    this.getRadius = function() {
        return h
    };
    this.getX =
        function() {
            return c.x
        };
    this.getY = function() {
        return c.y
    };
    this.scale = function(a) {
        c.scaleX = a;
        c.scaleY = a
    };
    this.getPhysics = function() {
        return b
    };
    this.getScale = function() {
        return c.scaleX
    };
    this.childIndex = function(a) {
        s_oStage.setChildIndex(c, a)
    };
    this.setAlpha = function(a) {
        c.alpha = a
    };
    this.animFadeOut = function() {
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, MS_ANIM_BALL_FADE).call(s_oGame.restartBallPos)
    };
    this.animFadeIn = function() {
        (new createjs.Tween.get(c)).to({
            alpha: 1
        }, MS_ANIM_BALL_FADE).call(function() {
            s_oGame.setBooleanLaunch(!1)
        })
    };
    this.arrowUpdate = function(a) {
        a.y < s_iOffsetY ? (g.visible = !0, g.y = s_iOffsetY, g.x = a.x) : g.visible = !1
    };
    this.getStartPos = function() {
        return m
    };
    this.update = function() {
        var a = s_oPhysicsController.getElementPosition(b);
        this.setPosition(a.x, a.y);
        this.setAngle(a.angle);
        this.arrowUpdate(a)
    };
    this._init(a, e, d)
}

function CLevelSettings(a) {
    var e, b;
    this.init = function(a) {
        b = 0;
        e = a;
        NUM_LEVELS = Object.keys(e).length;
        s_oLevelSettings = this
    };
    this.loadLevel = function(a) {
        b = a;
        OBSTACLES_INFO = e[a].obstacles;
        TEAMMATES_INFO = e[a].teammates;
        STARS_INFO = [e[a].star_0, e[a].star_1, e[a].star_2]
    };
    this.nextLevel = function() {
        b++;
        return b < e.length ? (this.loadLevel(b), !0) : !1
    };
    this.getNextLevel = function() {
        return b < e.length ? b + 2 : b + 1
    };
    this.getCurrentLevel = function() {
        return b
    };
    this.getNumLevel = function() {
        return e.length
    };
    this.deleteSaveData = function() {
        var a =
            s_oSpriteLibrary.getSprite("msg_box"),
            b = new createjs.Container,
            c = new createBitmap(a, a.width, a.height);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        a = new createjs.Text(TEXT_DELETE_SAVE, " 40px " + PRIMARY_FONT, "#FFFFFF");
        a.y = -180;
        a.textAlign = "center";
        a.lineWidth = 700;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.alpha = 0;
        var e = new createjs.Shape;
        e.graphics.beginFill("#000000").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = .5;
        e.on("mousedown", function() {}, this);
        s_oStage.addChild(b);
        b.addChild(e,
            c, a);
        c = new CGfxButton(-100, 110, s_oSpriteLibrary.getSprite("but_yes"), b);
        a = new CGfxButton(100, 110, s_oSpriteLibrary.getSprite("but_exit"), b);
        a.pulseAnimation();
        a.addEventListener(ON_MOUSE_UP, function() {
            (new createjs.Tween.get(b)).to({
                alpha: 0
            }, 500).call(function() {
                s_oStage.removeChild(b)
            })
        }, this);
        c.addEventListener(ON_MOUSE_UP, function() {
            clearAllItem();
            s_oMain.loadUserData();
            (new createjs.Tween.get(b)).to({
                alpha: 0
            }, 500).call(function() {
                s_oStage.removeChild(b)
            })
        }, this);
        (new createjs.Tween.get(b)).to({
                alpha: 1
            },
            500)
    };
    this.init(a)
}
s_oLevelSettings = null;

function CLevelBut(a, e, b, d, f, c, g) {
    var m, h, k, u = [],
        l = [],
        p, q, n, t, x, v;
    this._init = function(a, b, c, d, e, f) {
        h = [];
        k = [];
        n = new createjs.Container;
        z.addChild(n);
        var g = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        m = f;
        q = createSprite(g, "state_" + m, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        q.mouseEnabled = f;
        q.x = a;
        q.y = b;
        q.stop();
        !s_bMobile && m && (n.cursor = "pointer");
        n.addChild(q);
        u.push(q);
        p = new createjs.Text(c,
            "50px " + PRIMARY_FONT, "#ff6c00");
        p.x = a;
        p.y = b;
        p.textAlign = "center";
        p.textBaseline = "middle";
        p.lineWidth = 200;
        v = [];
        for (c = 0; 3 > c; c++) d = e && e > c ? s_oSpriteLibrary.getSprite("star") : s_oSpriteLibrary.getSprite("starbox"), v.push(createBitmap(d, d.width, d.height)), v[c].regX = d.width / 2, v[c].regY = d.height / 2, v[c].scaleX = .7, v[c].scaleY = v[c].scaleX, n.addChild(v[c]);
        v[0].x = a - 35;
        v[0].y = b - 45;
        v[1].x = a;
        v[1].y = b - 60;
        v[2].x = a + 35;
        v[2].y = b - 45;
        n.addChild(p);
        f || (p.color = "#404040");
        this._initListener()
    };
    this.unload = function() {
        n.off("mousedown",
            t);
        n.off("pressup", x);
        n.removeChild(q)
    };
    this._initListener = function() {
        t = n.on("mousedown", this.buttonDown);
        x = n.on("pressup", this.buttonRelease)
    };
    this.viewBut = function(a) {
        n.addChild(a)
    };
    this.addEventListener = function(a, b, c) {
        h[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        h[a] = b;
        k[a] = c;
        l = d
    };
    this.ifClickable = function() {
        return !0 === n.mouseEnabled ? 1 : 0
    };
    this.setActive = function(a, b) {
        m = b;
        u[a].gotoAndStop("state_" + m);
        u[a].mouseEnabled = !0;
        p.color = m ? "#69b8d5" : "#b4b4b4"
    };
    this.buttonRelease = function() {
        m &&
            (playSound("click", 1, 0), h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP], l))
    };
    this.buttonDown = function() {
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], l)
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    var z = g;
    this._init(a, e, b, d, f, c, g)
}

function CLevelMenu() {
    var a, e, b, d, f, c, g, m, h, k, u, l, p, q, n, t = null,
        x = null,
        v, z, y, A = null,
        r = null;
    this._init = function() {
        var w = new createjs.Shape;
        w.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        w.alpha = .7;
        h = 0;
        z = new createjs.Container;
        s_oStage.addChild(z);
        var u = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        z.addChild(u);
        z.addChild(w);
        g = CANVAS_WIDTH / 2;
        m = 18;
        v = new createjs.Text(TEXT_SELECT_LEVEL, "60px " + PRIMARY_FONT, "#fff");
        v.x = g;
        v.textAlign = "center";
        s_oStage.addChild(v);
        w = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - w.width / 2 - 10;
        c = w.height / 2 + 10;
        q = new CGfxButton(f, c, w, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        k = w.height;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = q.getX() - w.width - 10, d = w.height / 2 + 10, n = new CToggle(b, d, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        w = window.document;
        u = w.documentElement;
        A = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        r = w.exitFullscreen ||
            w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && screenfull.enabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"), a = w.width / 4 + 10, e = w.height / 2 + 10, y = new CToggle(a, e, w, s_bFullscreen, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkBoundLimits();
        l = [];
        w = Math.floor((CANVAS_WIDTH - 2 * EDGEBOARD_X) / NUM_COLS_PAGE_LEVEL) / 2 - 15;
        for (var B = u = 0; B < NUM_COLS_PAGE_LEVEL; B++) l.push(u), u += 2 * w;
        p = [];
        this._createNewLevelPage(0, s_oLevelSettings.getNumLevel());
        if (1 < p.length) {
            for (w = 1; w < p.length; w++) p[w].visible = !1;
            t = new CGfxButton(CANVAS_WIDTH / 2 + 300, CANVAS_HEIGHT / 2 + 250, s_oSpriteLibrary.getSprite("arrow_select_level"), s_oStage);
            t.getButtonImage().rotation = 90;
            t.addEventListener(ON_MOUSE_UP, this._onRight, this);
            x = new CGfxButton(CANVAS_WIDTH / 2 - 300, CANVAS_HEIGHT / 2 + 250, s_oSpriteLibrary.getSprite("arrow_select_level"), s_oStage);
            x.getButtonImage().rotation = -90;
            x.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos()
    };
    this.unload = function() {
        for (var a =
            0; a < u.length; a++) u[a].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.unload();
        A && screenfull.enabled && y.unload();
        q.unload();
        null !== x && (x.unload(), t.unload());
        s_oStage.removeAllChildren();
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function() {
        v.y = m + s_iOffsetY;
        q.setPosition(f - s_iOffsetX, c + s_iOffsetY);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(b - s_iOffsetX, s_iOffsetY + d);
        A && screenfull.enabled && y.setPosition(a + s_iOffsetX, e + s_iOffsetY)
    };
    this._checkBoundLimits = function() {
        for (var a = s_oSpriteLibrary.getSprite("but_level"),
            b = 0, c = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * k, d = 0; b < c;) b += a.height + 20, d++;
        NUM_ROWS_PAGE_LEVEL > d && (NUM_ROWS_PAGE_LEVEL = d);
        c = b = 0;
        d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("but_level"); c < d;) c += a.width / 2 + 5, b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    };
    this._createNewLevelPage = function(a, b) {
        var c = new createjs.Container;
        z.addChild(c);
        p.push(c);
        u = [];
        for (var d = 0, e = 0, f = 1, g = !1, h = s_oSpriteLibrary.getSprite("but_level"), k = a; k < b; k++) {
            var m = new CLevelBut(l[d] + h.width / 4, e + h.height / 2 + 30, k + 1, h, s_aStars[k],
                k + 1 > s_iLastLevel ? !1 : !0, c);
            m.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, k);
            u.push(m);
            d++;
            if (d === l.length && k < b - 1 && (d = 0, e += h.height + 50, f++, f > NUM_ROWS_PAGE_LEVEL)) {
                g = !0;
                break
            }
        }
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.regX = c.getBounds().width / 2;
        c.regY = c.getBounds().height / 2;
        g && this._createNewLevelPage(k + 1, b)
    };
    this._onRight = function() {
        p[h].visible = !1;
        h++;
        h >= p.length && (h = 0);
        p[h].visible = !0
    };
    this._onLeft = function() {
        p[h].visible = !1;
        h--;
        0 > h && (h = p.length - 1);
        p[h].visible = !0
    };
    this._onButLevelRelease =
        function(a) {
            s_oLevelSettings.loadLevel(a);
            this.unload();
            s_oMain.gotoGame()
        };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        A && screenfull.enabled && y.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? r.call(window.document) : A.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CMsgBox(a, e) {
    var b, d, f;
    this._init = function(a) {
        f = new createjs.Container;
        g.addChild(f);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .7;
        a.on("click", function() {});
        f.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var c = createBitmap(a);
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT;
        c.regX = .5 * a.width;
        c.regY = .5 * a.height;
        f.addChild(c);
        b = new createjs.Text(TEXT_ERR_LS, "28px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = 220;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 600;
        f.addChild(b);
        d = new CGfxButton(CANVAS_WIDTH / 2, 550, s_oSpriteLibrary.getSprite("but_yes_big"), f);
        d.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function() {
        c.unload()
    };
    this.unload = function() {
        d.unload();
        g.removeChild(f)
    };
    var c = this;
    var g = e;
    this._init(a)
};