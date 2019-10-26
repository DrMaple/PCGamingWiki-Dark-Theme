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
        'body, tr:nth-child(odd), #toc, .toc, html, .article-image-text, #preferences, .page-Home .home-card, .project-intro, .editing-guide-list-item, .page-Home .home-subheader {',
		'	background-color: #292a2d !important',
		'}',
		'#main-content, tr:nth-child(even), #catlinks, .page-Home .table-assignment-body-row:nth-of-type(2n) .table-assignment-body-game, .page-Home .table-assignment-body-row:nth-of-type(2n) .table-assignment-body-status {',
		'	background-color: #252525 !important',
		'}',
        '.pcgwikitable, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, body, .template-infobox, code, #preferences legend, .htmlform-tip, .page-Home .home-card, .project-intro, .page-Home .home-subheader, table.wikitable {',
		'	color: #ffffff !important',
		'}',
        '#toc, .toc, code {',
		'	border: 1px solid #ffffff !important',
		'}',
        '.pcgw-footer, code {',
		'	background-color: #333333 !important',
		'}',
        'a {',
		'	color: #93d0ed !important',
		'}',
        'a:visited {',
		'	color: #5d8496 !important',
		'}',
		'kbd {',
		'	color: black !important',
		'}'



    ].join('\n');
    addStyle(css);

    function addStyle(text) {
        var style = document.createElement('style');
        style.textContent = text;
        document.querySelector('head').appendChild(style);
    }
}) (window);