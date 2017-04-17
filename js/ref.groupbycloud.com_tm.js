// ==UserScript==
// @name         GBI Ref App Styling
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ref.groupbycloud.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

jQuery(document).ready(function ($) {
    'use strict';
    $('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/jatkinson10/tampermonkey/master/css/ref.groupbycloud.css">');
    $('td[style]').removeAttr('style');
    $('table').each(function (){
        $(this).replaceWith( $(this).html()
            .replace(/<tbody/gi, "<section")
            .replace(/<tr/gi, "<div class='row'")
            .replace(/<\/tr>/gi, "</div>")
            .replace(/<td width="160" valign="top"/gi, "<div class='col _25'")
            .replace(/<\/td>/gi, "</div>")
            .replace(/<td/gi, "<div class='col'")
            .replace(/<\/td>/gi, "</div>")
            .replace(/<\/tbody/gi, "<\/section")
        );
    });
});
