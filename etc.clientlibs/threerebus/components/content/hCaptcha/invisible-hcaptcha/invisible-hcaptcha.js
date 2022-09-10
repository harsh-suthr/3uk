var enabled = false;
var fun;

$(window).on("load", function() {
    var btn = $('#mybtn').data('custom-property');
    fun = window[$('#myfun').data('custom-property')];
    var contents = $('#' + btn);
    $(contents).click(function(event) {
        validate();
    });

});

function validate() {
    enabled = $('#enabled').data('custom-property');
    //console.log("MSISDN " + $('#MSISDN').val().trim() ); 
    //console.log("whitelistedMSISDNsForDT" + whitelistedMSISDNsForDT)
    if (typeof $('#MSISDN').val() !== 'undefined') {
        if (($('#MSISDN').val().trim() != "" && whitelistedMSISDNsForDT.trim() != "" && whitelistedMSISDNsForDT.indexOf($('#MSISDN').val().trim()) >= 0)) {
            enabled = false;
        }
    } else if (typeof $('#Phone_Anonymous').val() !== 'undefined') {
        if (($('#Phone_Anonymous').val().trim() != "" && whitelistedMSISDNsForDT.trim() != "" && whitelistedMSISDNsForDT.indexOf($('#Phone_Anonymous').val().trim()) >= 0)) {
            enabled = false;
        }
    } else if (typeof $('#ICCID').val() !== 'undefined') {
        if (($('#ICCID').val().trim() != "" && whitelistedMSISDNsForDT.trim() != "" && whitelistedMSISDNsForDT.indexOf($('#ICCID').val().trim()) >= 0)) {
            enabled = false;
        }
    }
    if (enabled) {
        console.log("executing hCaptcha");
        if (typeof _satellite !== "undefined") {
            _satellite.track('hCaptchaStatus', {
                hCstatus: 'hCaptcha is enabled'
            });
        }
        hcaptcha.execute();
    } else {
        console.log("hCaptcha is not enabled");
        if (typeof _satellite !== "undefined") {
            _satellite.track('hCaptchaStatus', {
                hCstatus: 'hCaptcha is not enabled'
            });
        }
        fun();
    }

}

function onSubmit(token) {
    $.ajax({
        url: "/bin/verify-hcaptcha",
        type: "post",
        data: "h-captcha-response=" + token,
        success: function(data) {
            console.log("Is h-captcha-response valid?  - " + data);
            if (data == "true") {
                fun();
            }
        }
    });
}