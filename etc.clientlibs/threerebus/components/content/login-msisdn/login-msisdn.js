$(document).ready(function() {
    $('#MSISDN').keyup(function() {
        var value = $('#MSISDN').val().trim();
        if (value != "") {
            $("#MSISDN").addClass('ng-not-empty');
        } else {
            $("#MSISDN").removeClass('ng-not-empty');

        }
        if (value.match(/^((\s*\+?\s*([4]\s*){2})|\s*(0\s*))(([0-9]\s*){10}$)/)) {
            showErrorBlock(false);
        }
        if (value.match(/^[A-Za-z]+$/)) {
            showErrorBlock(true);
        }
    });

    window.addEventListener("beforeunload", function() {
        loader(false);
    }, false)

    $("body").click(function() {
        value = $('#MSISDN').val();
        if (value != "") {
            $("#MSISDN").addClass('ng-not-empty');
        } else {
            $("#MSISDN").removeClass('ng-not-empty');
        }
        if (value.match(/^((\s*\+?\s*([4]\s*){2})|\s*(0\s*))(([0-9]\s*){10}$)/) || value.match(/^.{0}$/)) {
            console.log("Valid Number");
            showErrorBlock(false);
        } else {
            showErrorBlock(true);
        }
    });
});

function loader(show) {
    if (show) {
        $('#loader_backdrop').removeClass('ng-hide');
        $('#loader_mask').removeClass('ng-hide');
    } else {
        $('#loader_backdrop').addClass('ng-hide');
        $('#loader_mask').addClass('ng-hide');
    }
}

function showErrorBlock(show) {
    if (show) {
        $('#MSISDN-errorblock').show();
        $("span.bar").addClass('error-bar');
    } else {
        $('#MSISDN-errorblock').hide();
        $("span.bar").removeClass('error-bar');
    }
}

$(window).on("load", function() {
    //CR-394 Commented
    /*var dpiMSISDN = localStorage.getItem('DPI-MSISDN');
    	 if(dpiMSISDN){
    	$('#MSISDN').val(dpiMSISDN);
    	localStorage.removeItem('DPI-MSISDN');
    	  }*/

    var errorMsg = localStorage.getItem('errorMsg');
    if (errorMsg) {
        $('#login-error-msg').show();
        $("#MSISDN").addClass('ng-not-empty');
        localStorage.setItem("errorMsg", "");
        var value = localStorage.getItem('MSISDN');
        if (value)
            $('#MSISDN').val(value);
    }
});

function login3ds() {

    if ($('#MSISDN').val().match(/^((\s*\+?\s*([4]\s*){2})|\s*(0\s*))(([0-9]\s*){10}$)/)) {

        $("span.bar").removeClass('error-bar');

        var msisdnNumber = $('#MSISDN').val().trim();
        var formatMsisdn = msisdnNumber.substring(msisdnNumber.length - 10, msisdnNumber.length);
        var urlToRedirect = "";

        formatMsisdn = '44' + formatMsisdn;
        // Start the loading screen
        loader(true);
        // console.log("###INFO... Core Domain " + window.coreDomainURL);
        var startTime = new Date().getTime();

        $.ajax({
            type: "POST",
            url: '/bin/3ds-check',
            data: {
                msisdn: formatMsisdn
            },
            success: function(msg, textStatus, jqXHR) {
                var endTime = new Date().getTime();
                console.log("#3DS Time(in seconds): ", ((endTime - startTime) / 1000), " SResp: ", msg);
                if (msg != "undefined" && msg != "" && msg.statusCode == 200) {
                    Cookies.remove('OID');
                    Cookies.remove('msisdn');
                    localStorage.removeItem("OID", "2C");
                    localStorage.removeItem("MSISDN", msisdn);
                    //console.log("### REP: ", msg);
                    var org = msg.orgId;
                    var msisdn = msg.msisdn;
                    var responseStatus = msg.statusCode;
                    var customerType = msg.customerType;
                    console.log("###INFO... Response org:" + org + " msisdn:" + msisdn + " responseStatus:" + responseStatus + " customerType:" + customerType);
                    urlToRedirect = msg.url;
                    console.log("###INFO... Original URL of amdocsB2BLoginURL from backend is:" + urlToRedirect);
                    localStorage.setItem("MSISDN", msisdn);

                    if (org.indexOf('COM01') >= 0 || org.indexOf('COM05') >= 0) {
                        //The below root path attribute will let the cookie go in the request to akamai
                        Cookies.set('OID', '2C', {
                            secure: true
                        });
                        Cookies.set('msisdn', msisdn, {
                            secure: true
                        });
                        localStorage.setItem("OID", "2C");

                        var url = window.location.href;
                        var urlParts = url.split('?');
                        var params = new URLSearchParams(urlParts[1]);
                        //Getting value to check if this is login or registration journey.
                        var aemPath = params.get('aemPath');

                        //If this is a registration journey (aemPath==login),  then go to CoreIT registration page 
                        if (aemPath == "login") {
                            params.delete('aemPath');
                            urlToRedirect = window.coreDomainURL + window.coreRegistrationUrl;
                            console.log("###INFO... Going for the registration journey..path is " + urlToRedirect);
                        } else {
                            urlToRedirect = window.coreDomainURL + window.coreLoginURL;
                            console.log("###INFO... Going for the login journey...path is " + urlToRedirect);
                        }
                        urlToRedirect = (params.toString() !== "") ? urlToRedirect + "?msisdn=" + msisdn + "&" + params.toString() : urlToRedirect + "?msisdn=" + msisdn;
                        console.log("###INFO... For COM01-COM05: org:" + org);
                        console.log("###INFO... Finally the URL being redirected to is:" + urlToRedirect);
                        window.location.href = urlToRedirect;
                        //} else if (org.indexOf('RET01') >= 0 || org.indexOf('NULL') >= 0) {
                    } else if (org.indexOf('RET01') >= 0) {
                        Cookies.set('OID', '1R', {
                            secure: true
                        });
                        Cookies.set('msisdn', msisdn, {
                            secure: true
                        });
                        Cookies.set('m-key', msisdn, {
                            secure: true
                        });
                        localStorage.setItem("OID", "1R");
                        //No need of adding MSISDN here in the rebus journey - its only in the CoreIT journey there is a need to pass the MSISDN via URL. 
                        console.log("###INFO... For RET01-NULL org is:" + org);
                        window.location.href = urlToRedirect;
                    } else if (org.indexOf('AMD01') >= 0) {
                        //The below root path attribute will let the cookie go in the request to akamai
                        Cookies.set('OID', '1A', {
                            secure: true
                        });
                        Cookies.set('customerType', customerType, {
                            secure: true
                        });
                        Cookies.set('msisdnB2B', msisdn, {
                            secure: true
                        });
                        localStorage.setItem("OID", "1A");
                        localStorage.setItem("msisdn", msg.msisdn);
                        localStorage.setItem("customerType", msg.customerType);

                        var url = window.location.href;
                        var urlParts = url.split('?');
                        var params = new URLSearchParams(urlParts[1]);
                        //Getting value to check if this is login or registration journey.
                        var aemPath = params.get('aemPath');

                        //If this is a registration journey (aemPath==login),  then go to amdocsB2B registration page 
                        if (aemPath == "login") {
                            params.delete('aemPath');
                            urlToRedirect = window.amdocsB2BRegistrationDomainURL + window.amdocsB2BRegistrationUrl;
                            console.log("###INFO... Going for the amdocsB2B registration journey..path is " + urlToRedirect);
                        } else {
                            urlToRedirect = window.amdocsB2BLoginDomainURL + window.amdocsB2BLoginURL;
                            console.log("###INFO... Going for the amdocsB2B login journey...path is " + urlToRedirect);
                        }
                        if (aemPath == "login") //Registration flow for amdocsB2B
                        {
                            urlToRedirect = (params.toString() !== "") ? urlToRedirect + "?msisdn=" + msisdn + "&" + params.toString() : urlToRedirect + "?msisdn=" + msisdn;
                        } else //Login flow for AMDB2B
                        {

                            //urlToRedirect = (params.toString() !== "") ? urlToRedirect + "?" + params.toString() : urlToRedirect ;
                            urlToRedirect = (params.toString() !== "") ? urlToRedirect + "?msisdn=" + msisdn + "&" + params.toString() : urlToRedirect + "?msisdn=" + msisdn;
                        }

                        console.log("###INFO... For AMD01: org:" + org);
                        console.log("###INFO... Finally the amdocs B2B URL being redirected to is:" + urlToRedirect);
                        window.location.href = urlToRedirect;

                    } else if (org.indexOf('UNKNOWN') >= 0) {
                        Cookies.set('OID', 'UNKNOWN', {
                            secure: true
                        });
                        Cookies.set('msisdn', msisdn, {
                            secure: true
                        });
                        Cookies.set('m-key', msisdn, {
                            secure: true
                        });
                        window.localStorage.setItem("OID", "UNKNOWN");
                        //No need of adding MSISDN here in the rebus journey - its only in the CoreIT journey there is a need to pass the MSISDN via URL. 
                        console.log("###INFO... For UNKNOWN org is:" + org);
                        window.location.href = urlToRedirect;
                    } else {
                        console.log("###Error.... 3DS Response  from RI does not contain valid OrgId ..OrgId received from RI:" + org);
                        //urlToRedirect = three_gblURLObj.errorScreen;
                        console.log("###Error.... The URL being redirected to is:" + urlToRedirect);
                        //window.location.href = urlToRedirect;
                        showErrorBlock(true);
                    }
                } else {
                    console.log("###Error.... 3DS Response not received from RI.." + (msg != "" ? " Status Code from RI:" + msg.statusCode : " No value received as response from RI!"));
                    //urlToRedirect = three_gblURLObj.errorScreen;
                    console.log("###Error.... The URL being redirected to is:" + urlToRedirect);
                    //window.location.href = urlToRedirect;
                    showErrorBlock(true);
                }
            },
            error: function(jqxhr, textStatus, error) {
                // Stop loading screen
                loader(false);
                console.log("### ERROR: ", jqxhr, textStatus, error);
                urlToRedirect = three_gblURLObj.errorScreen;
                console.log("###Error.... The URL being redirected to is:" + urlToRedirect);
                window.location.href = urlToRedirect;
            }
        });
    } else {
        showErrorBlock(true);
        event.stopPropagation();
        return false;
    }
}