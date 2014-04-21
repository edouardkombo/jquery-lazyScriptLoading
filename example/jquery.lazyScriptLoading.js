/*
 * jQuery lazyScriptLoading
 * Version 0.1 (@edouardkombo / breezeframework.com)
 * https://github.com/edouardkombo/jquery-lazyScriptLoading
 *
 * Capture img and videos in html dom with javascript.
 *
 * Copyright (c) 2014 Edouard Kombo (@edouardkombo / breezeframework.com)
 * Dual licensed under the MIT and GPL licenses.
*/
(function($){
    $.lazySL = function (settings){
        
        //Settings
        var config = {
            url: ''
        };       
        
        if (settings) {
            $.extend(config, settings);
        }
        
        //variables
        var script      = document.createElement('script');
        var loaded      = false;
        var loadScript  = '';

        script.setAttribute('src', config.url);
        script.setAttribute('type', 'text/javascript');

        var loadScript = function () {
            if (loaded) return;
            loaded = true;
        };
        script.onload = loadScript;
        script.onreadystatechange = loadScript;
        document.getElementsByTagName("head")[0].appendChild(script);               
        
        return this;
    };
    
})(jQuery);