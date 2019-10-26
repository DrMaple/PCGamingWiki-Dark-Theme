// ==UserScript==
// @name         PCGamingWiki Dark Mode
// @version      0.1
// @description  Dark Mode for PcGamingWiki
// @author       Maple
// @match        *.pcgamingwiki.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/DrMaple/PCGamingWiki-Dark-Theme/master/PCGamingWikiDarkTheme.js
// @downloadURL  https://raw.githubusercontent.com/DrMaple/PCGamingWiki-Dark-Theme/master/PCGamingWikiDarkTheme.js
// ==/UserScript==

(function (window, undefined) {
    var css = [
        'body, tr:nth-child(odd), #toc, .toc, html, .article-image-text, #preferences, .page-Home .home-card, .project-intro, .editing-guide-list-item, .page-Home .home-subheader, .ipsPad, .ipsApp ul.ipsPad, .ipsApp ol.ipsPad, .ipsWidget.ipsWidget_horizontal:not( .ipsWidgetHide ) + .ipsWidget {',
		'	background-color: #292929 !important',
		'}',
		'#main-content, tr:nth-child(even), #catlinks, .page-Home .table-assignment-body-row:nth-of-type(2n) .table-assignment-body-game, .page-Home .table-assignment-body-row:nth-of-type(2n) .table-assignment-body-status, .ipsDataList_large .ipsDataItem_main, .ipsDataList_large .ipsDataItem_stats, .ipsDataList_large .ipsDataItem_lastPoster, .ipsDataList_large .ipsDataItem_generic, ipsDataItem_category, .ipsDataItem_main, .ipsDataItem_stats, .ipsDataItem_lastPoster, .ipsDataItem_generic, .ipsDataItem_modCheck, .ipsDataItem_icon, .ipsWidget.ipsWidget_vertical .ipsWidget_title, .ipsWidget.ipsWidget_horizontal .ipsWidget_title, #ipsLayout_header nav, .ipsNavBar_primary:not( .ipsNavBar_noSubBars ) > ul:before, .ipsPad_half, .ipsApp ul.ipsPad_half, .ipsApp ol.ipsPad_half, .ipsNavBar_secondary, #elSearchExpanded, html[dir="ltr"] .ipsSideMenu_withChecks .ipsSideMenu_item a, html[dir="ltr"] .ipsSideMenu_withChecks a.ipsSideMenu_item, html[dir="ltr"] .ipsSideMenu_withChecks span.ipsSideMenu_item, html[dir="ltr"] .ipsSideMenu_withRadios .ipsSideMenu_item a, html[dir="ltr"] .ipsSideMenu_withRadios a.ipsSideMenu_item, html[dir="ltr"] .ipsSideMenu_withRadios span.ipsSideMenu_item {',
		'	background-color: #252525 !important',
		'}',
        '.pcgwikitable, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, body, .template-infobox, code, #preferences legend, .htmlform-tip, .page-Home .home-card, .project-intro, .page-Home .home-subheader, table.wikitable, .ipsType_richText, .ipsBreadcrumb > ul > li > a {',
		'	color: #ffffff !important',
		'}',
        '#toc, .toc, code {',
		'	border: 1px solid #ffffff !important',
		'}',
        '.pcgw-footer, code, .ipsTabs.ipsTabs_stretch.ipsTabs_small .ipsTabs_item {',
		'	background-color: #333333 !important',
		'}',
        'a {',
		'	color: #93d0ed !important',
		'}',
        'a:visited {',
		'	color: #5d8496 !important',
		'}',
		'kbd, .ipsItemStatus.ipsItemStatus_large {',
		'	color: black !important',
		'}',
        '#ipsLayout_header header {',
		'	background-color: #485873 !important',
		'}',
        '.ipsNavBar_primary > ul > li > a {',
		'	background: #232c48 !important',
		'}',
        '#elSearchExpanded .ipsMenu_title {',
		'	background: #292929 !important',
		'}'



    ].join('\n');
    addStyle(css);

    function addStyle(text) {
        var style = document.createElement('style');
        style.textContent = text;
        document.querySelector('head').appendChild(style);
    }
}) (window);