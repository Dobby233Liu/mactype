// ==UserScript==
// @name              Mactype助手
// @namespace         https://github.com/Dobby233Liu/mactype
// @version           1.0.1
// @icon              https://www.baiduyun.wiki/mactype.png
// @description       配合 Mactype 实现Chrome，Edge等不支持关闭 DirectWrite 浏览器的字体渲染支持
// @author            syhyz1990, Dobby233Liu
// @license           MIT
// @supportURL        https://github.com/Dobby233Liu/mactype
// @updateURL         https://cdn.jsdelivr.net/gh/Dobby233Liu/mactype@master/mactype.user.js
// @downloadURL       https://cdn.jsdelivr.net/gh/Dobby233Liu/mactype@master/mactype.user.js
// @match             *://*/*
// @run-at            document-start
// @grant             GM_addStyle
// ==/UserScript==

GM_addStyle(`body,input,textarea {
    text-shadow: 0px 0px 0.000001px rgba(0,0,0,0.000001);
}`) // force DW off (todo: fix, and check if alpha doesn't matter)
