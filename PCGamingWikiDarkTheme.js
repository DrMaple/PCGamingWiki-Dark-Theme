// ==UserScript==
// @name         PCGamingWiki Dark Mode
// @version      0.1
// @description  Dark Mode for PcGamingWiki
// @author       Maple
// @match        https://www.pcgamingwiki.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/DrMaple/PCGamingWiki-Dark-Theme/master/PCGamingWikiDarkTheme.js
// @downloadURL  https://raw.githubusercontent.com/DrMaple/PCGamingWiki-Dark-Theme/master/PCGamingWikiDarkTheme.js
// ==/UserScript==

(function (window, undefined) {
    var css = [
        'body {',
		'	background-color: #292a2d !important',
		'}',
		'#main-content {',
		'	background-color: #252525 !important',
		'}',
		 'tr:nth-child(even) {',
		'	background-color: #252525 !important',
		'}',
		'tr:nth-child(odd) {',
		'	background-color: #292a2d !important',
		'}',
        '.pcgwikitable {',
		'	color: #ffffff !important',
		'}',
        '#toc, .toc {',
		'	border: 1px solid #ffffff !important',
		'}',
        '#toc, .toc {',
		'	background-color: #292a2d !important',
		'}',
        'h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12 {',
		'	color: #ffffff !important',
		'}',
        'body {',
		'	color: #ffffff !important',
		'}',
        'element.style {',
		'	color: #ffffff !important',
		'}',
        'html, body {',
		'	background-color: #292a2d !important',
		'}',
        '.template-infobox {',
		'	color: #ffffff !important',
		'}',
        '.pcgw-footer {',
		'	background-color: #333333 !important',
		'}',
        '#catlinks {',
		'	background-color: #252525 !important',
		'}',
        'a {',
		'	color: #93d0ed !important',
		'}',
        'code {',
		'	background-color: #333333 !important',
		'}',
        'code {',
		'	color: #ffffff !important',
		'}',
        'code {',
		'	border: 1px solid #ffffff !important',
		'}',
        '.article-image-text {',
		'	background-color: #292a2d !important',
		'}',
        '#preferences {',
		'	background-color: #292a2d !important',
		'}',
        '#preferences legend {',
		'	color: #ffffff !important',
		'}',
        '.htmlform-tip {',
		'	color: #ffffff !important',
		'}',
        '.page-Home .home-card {',
		'	background-color: #292a2d !important',
		'}',
        '.page-Home .home-card {',
		'	color: #ffffff !important',
		'}',
        '.project-intro {',
		'	color: #ffffff !important',
		'}',
        '.project-intro {',
		'	background-color: #292a2d !important',
		'}',
        '.editing-guide-list-item {',
		'	background-color: #292a2d !important',
		'}'



    ].join('\n');
    addStyle(css);

    function addStyle(text) {
        var style = document.createElement('style');
        style.textContent = text;
        document.querySelector('head').appendChild(style);
    }
}) (window);