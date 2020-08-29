// ==UserScript==
// @name         Google去广告
// @namespace    all-round
// @version      1.0.0
// @description  Google去广告
// @author       You
// @match        https://www.google.com/*
// @includ       https://www.google.com/*
// @grant        none
// @author       BennieNiu: ibaeniu@gmail.com
// ==/UserScript==

(function () {
    'use strict';

    function deleteGoogleAds() {
        document.getElementById("tads").remove();
    }
    deleteGoogleAds();
})();