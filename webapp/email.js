'use strict';
const nodemailer = require('nodemailer');

var password;
var reminderError;
var colourReminderError;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'smadcamp@hotmail.com',
        pass: password
    }
});

function send_registration_confirmation(data) {
  var email_address = data.email;
  var first_name = data.firstName;

  var htmlText = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><title></title><style type="text/css" id="media-query">body{margin:0;padding:0}table,tr,td{vertical-align:top;border-collapse:collapse}.ie-browser table, .mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit !important;text-decoration:none !important}[owa] .img-container div, [owa] .img-container button{display:block !important}[owa] .fullwidth button{width:100% !important}[owa] .block-grid .col{display:table-cell;float:none !important;vertical-align:top}.ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid{width:500px !important}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height:100%}.ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4{width:164px !important}.ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8{width:328px !important}.ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col{width:250px !important}.ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col{width:166px !important}.ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col{width:125px !important}.ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col{width:100px !important}.ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col{width:83px !important}.ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col{width:71px !important}.ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col{width:62px !important}.ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col{width:55px !important}.ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col{width:50px !important}.ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col{width:45px !important}.ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col{width:41px !important}@media only screen and (min-width: 520px){.block-grid{width:500px !important}.block-grid .col{vertical-align:top}.block-grid .col.num12{width:500px !important}.block-grid.mixed-two-up .col.num4{width:164px !important}.block-grid.mixed-two-up .col.num8{width:328px !important}.block-grid.two-up .col{width:250px !important}.block-grid.three-up .col{width:166px !important}.block-grid.four-up .col{width:125px !important}.block-grid.five-up .col{width:100px !important}.block-grid.six-up .col{width:83px !important}.block-grid.seven-up .col{width:71px !important}.block-grid.eight-up .col{width:62px !important}.block-grid.nine-up .col{width:55px !important}.block-grid.ten-up .col{width:50px !important}.block-grid.eleven-up .col{width:45px !important}.block-grid.twelve-up .col{width:41px !important}}@media (max-width: 520px){.block-grid,.col{min-width:320px !important;max-width:100% !important;display:block !important}.block-grid{width:calc(100% - 40px) !important}.col{width:100% !important}.col>div{margin:0 auto}img.fullwidth{max-width:100% !important}}</style></head><body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF"><style type="text/css" id="media-query-bodytag">@media (max-width: 520px){.block-grid{min-width:320px!important;max-width:100%!important;width:100%!important;display:block!important}.col{min-width:320px!important;max-width:100%!important;width:100%!important;display:block!important}.col>div{margin:0 auto}img.fullwidth{max-width:100%!important}}</style><!--[if IE]><div class="ie-browser"><![endif]--> <!--[if mso]><div class="mso-container"><![endif]--><div class="nl-container" style="min-width: 320px;Margin: 0 auto;background-color: #FFFFFF"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]--><div style="background-color:transparent;"><div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid "><div style="border-collapse: collapse;display: table;width: 100%;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]--><div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;background-color: transparent;"><div style="background-color: transparent; width: 100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px">Hi ${first_name},</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px">This is an email to confirm we have received your registration form for SMAD Camp 2018. Your place at SMAD is guaranteed provided we receive payment within the week.</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br></p><p style="margin: 0;font-size: 12px;line-height: 14px">What to do now?</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;color:#555555;text-align:left;"><span style="font-size:14px; line-height:17px;"><strong>1. Make Payment</strong></span><br><span style="font-size:12px; line-height:14px;">Please complete payment to secure your spot. Cost is $80 per child for the 4 days. Payment must be received by 21st October otherwise we may offer your spot to a family on the waitlist.</span></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px"><span style="font-size: 12px; line-height: 14px;">Payment Details</span><br><span style="font-size: 12px; line-height: 14px;">Name: CANBERRA BAPTIST CHURCH - SMAD CAMP</span><br><span style="font-size: 12px; line-height: 14px;">Account Number: 1021 7815</span><br><span style="font-size: 12px; line-height: 14px;">BSB: 062 901</span><br><span style="font-size: 12px; line-height: 14px;">Reference: Your last name</span></p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 14px; line-height: 16px;"><strong>2. Wait for Receipt of Payment</strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 12px; line-height: 14px;">On the 21st October we will send a receipt confirming your payment for SMAD Camp 2018. Please don't contact SMAD Camp before this date.</span></p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 14px; line-height: 16px;"><strong><span style="line-height: 16px; font-size: 14px;">3. Get Excited for SMAD Camp</span></strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 12px; line-height: 14px;"><span style="line-height: 14px; font-size: 12px;">Once all forms and payment have been received you are all set for SMAD Camp 2018. Simply put the dates in your calendar and wait to hear final details about camp in mid January.</span></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br></p><p style="margin: 0;font-size: 12px;line-height: 14px">SMAD Camp Details</p><p style="margin: 0;font-size: 12px;line-height: 14px">Dates: Monday 22nd - Thursday 25th January 2018</p><p style="margin: 0;font-size: 12px;line-height: 14px">Times: 9:00am - 3:00pm</p><p style="margin: 0;font-size: 12px;line-height: 14px">Location: Canberra Baptist Church (11 Currie Crescent, Kingston ACT)</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 14px; line-height: 16px;"><strong><span style="line-height: 16px; font-size: 14px;">4. Have a question or query</span></strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 12px; line-height: 14px;"><span style="line-height: 14px; font-size: 12px;" id="_mce_caret" data-mce-bogus="true"><span style="line-height: 14px; font-size: 12px;">﻿Call our office on (02) 6295 9470. Office hours are 8:00am-2:00pm Monday-Friday.</span></span></span></p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px">Alison and Penny Jackson</p></div><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px">SMAD Camp Directors</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--></div> <!--[if (mso)|(IE)]></div><![endif]--></body></html>`;

  return new Promise( function pr(resolve,reject) {
    //email function is not currently working so just reject
    reject(email_address);

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"SMAD Camp" <smadcamp@hotmail.com>', // sender address
        to: email_address,
        subject: 'SMAD CAMP Registration', // Subject line
        //text: 'This is a test email sent from the SMAD server via my gmail account/n/nThanks,/nAndrew', // plain text body
        html: htmlText
    };

    //send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject(error);
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        resolve();
    });
  });
}

function send_reminder(data) {
  var email_address = data.email;
  console.log(email_address);

  var htmlText = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><title></title><style type="text/css" id="media-query">body{margin:0;padding:0}table,tr,td{vertical-align:top;border-collapse:collapse}.ie-browser table, .mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit !important;text-decoration:none !important}[owa] .img-container div, [owa] .img-container button{display:block !important}[owa] .fullwidth button{width:100% !important}[owa] .block-grid .col{display:table-cell;float:none !important;vertical-align:top}.ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid{width:500px !important}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height:100%}.ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4{width:164px !important}.ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8{width:328px !important}.ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col{width:250px !important}.ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col{width:166px !important}.ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col{width:125px !important}.ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col{width:100px !important}.ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col{width:83px !important}.ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col{width:71px !important}.ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col{width:62px !important}.ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col{width:55px !important}.ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col{width:50px !important}.ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col{width:45px !important}.ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col{width:41px !important}@media only screen and (min-width: 520px){.block-grid{width:500px !important}.block-grid .col{vertical-align:top}.block-grid .col.num12{width:500px !important}.block-grid.mixed-two-up .col.num4{width:164px !important}.block-grid.mixed-two-up .col.num8{width:328px !important}.block-grid.two-up .col{width:250px !important}.block-grid.three-up .col{width:166px !important}.block-grid.four-up .col{width:125px !important}.block-grid.five-up .col{width:100px !important}.block-grid.six-up .col{width:83px !important}.block-grid.seven-up .col{width:71px !important}.block-grid.eight-up .col{width:62px !important}.block-grid.nine-up .col{width:55px !important}.block-grid.ten-up .col{width:50px !important}.block-grid.eleven-up .col{width:45px !important}.block-grid.twelve-up .col{width:41px !important}}@media (max-width: 520px){.block-grid,.col{min-width:320px !important;max-width:100% !important;display:block !important}.block-grid{width:calc(100% - 40px) !important}.col{width:100% !important}.col>div{margin:0 auto}img.fullwidth{max-width:100% !important}}</style></head><body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF"><style type="text/css" id="media-query-bodytag">@media (max-width: 520px){.block-grid{min-width:320px!important;max-width:100%!important;width:100%!important;display:block!important}.col{min-width:320px!important;max-width:100%!important;width:100%!important;display:block!important}.col>div{margin:0 auto}img.fullwidth{max-width:100%!important}}</style><!--[if IE]><div class="ie-browser"><![endif]--> <!--[if mso]><div class="mso-container"><![endif]--><div class="nl-container" style="min-width: 320px;Margin: 0 auto;background-color: #FFFFFF"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]--><div style="background-color:transparent;"><div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid "><div style="border-collapse: collapse;display: table;width: 100%;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]--><div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;background-color: transparent;"><div style="background-color: transparent; width: 100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px">This is a reminder that registration for SMAD Camp 2018 opens at 10am on the 14th October 2017. Places are limited so we advise you to register ASAP after registration opens.</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--></div> <!--[if (mso)|(IE)]></div><![endif]--></body></html>`;

  return new Promise( function pr(resolve,reject) {

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"SMAD Camp" <smadcamp@hotmail.com>', // sender address
        to: email_address,
        subject: 'SMAD CAMP Registration Reminder', // Subject line
        html: htmlText
    };

    //send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
          return;
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        resolve();
    });

  });
}

function getColourOutput(colour) {
  var colourText;

  switch (colour) {
    case 'unassigned':
      colourText = 'Unassigned';
      break;
    case 'maroon':
      colourText = 'Maroon';
      break;
    case 'red':
      colourText = 'Red';
      break;
    case 'orange':
      colourText = 'Orange';
      break;
    case 'yellow':
      colourText = 'Yellow';
      break;
    case 'lightgreen':
      colourText = 'Light Green';
      break;
    case 'darkgreen':
      colourText = 'Dark Green';
      break;
    case 'lightblue':
      colourText = 'Light Blue';
      break;
    case 'darkblue':
      colourText = 'Dark Blue';
      break;
    case 'lightpurple':
      colourText = 'Light Purple';
      break;
    case 'darkpurple':
      colourText = 'Dark Purple';
      break;
    case 'lightpink':
      colourText = 'Light Pink';
      break;
    case 'darkpink':
      colourText = 'Dark Pink';
      break;
  }

  return colourText;
}

function createColourGroupText(children) {
  var text = '';

  for (var i = 0; i < children.length; i++) {
    var child = children[i].firstName;
    var colour = children[i].colour;

    var colourText = getColourOutput(colour);

// create first line
    if (i == 0) {
      var line1 = `<p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br>${child} - ${colourText}</p>`;
      text = line1;
// create subsequent lines
    } else {
      var line2 = `<p style="margin: 0;font-size: 12px;line-height: 14px">${child} - ${colourText}</p>`;
      text = text + line2;
    }
  }

  return text;

}

function send_pre_smad_email(data) {
  var email_address = data.email;
  console.log(email_address);

var colourGroupHtmlPart = createColourGroupText(data.children);

var htmlText = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><title></title><style type="text/css" id="media-query">body{margin:0;padding:0}table,tr,td{vertical-align:top;border-collapse:collapse}.ie-browser table, .mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit !important;text-decoration:none !important}[owa] .img-container div, [owa] .img-container button{display:block !important}[owa] .fullwidth button{width:100% !important}[owa] .block-grid .col{display:table-cell;float:none !important;vertical-align:top}.ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid{width:500px !important}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height:100%}.ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4{width:164px !important}.ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8{width:328px !important}.ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col{width:250px !important}.ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col{width:166px !important}.ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col{width:125px !important}.ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col{width:100px !important}.ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col{width:83px !important}.ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col{width:71px !important}.ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col{width:62px !important}.ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col{width:55px !important}.ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col{width:50px !important}.ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col{width:45px !important}.ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col{width:41px !important}@media only screen and (min-width: 520px){.block-grid{width:500px !important}.block-grid .col{vertical-align:top}.block-grid .col.num12{width:500px !important}.block-grid.mixed-two-up .col.num4{width:164px !important}.block-grid.mixed-two-up .col.num8{width:328px !important}.block-grid.two-up .col{width:250px !important}.block-grid.three-up .col{width:166px !important}.block-grid.four-up .col{width:125px !important}.block-grid.five-up .col{width:100px !important}.block-grid.six-up .col{width:83px !important}.block-grid.seven-up .col{width:71px !important}.block-grid.eight-up .col{width:62px !important}.block-grid.nine-up .col{width:55px !important}.block-grid.ten-up .col{width:50px !important}.block-grid.eleven-up .col{width:45px !important}.block-grid.twelve-up .col{width:41px !important}}@media (max-width: 520px){.block-grid,.col{min-width:320px !important;max-width:100% !important;display:block !important}.block-grid{width:calc(100% - 40px) !important}.col{width:100% !important}.col>div{margin:0 auto}img.fullwidth{max-width:100% !important}}</style></head><body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF"><style type="text/css" id="media-query-bodytag">@media (max-width: 520px){.block-grid{min-width:320px!important;max-width:100%!important;width:100%!important;display:block!important}.col{min-width:320px!important;max-width:100%!important;width:100%!important;display:block!important}.col>div{margin:0 auto}img.fullwidth{max-width:100%!important}}</style><!--[if IE]><div class="ie-browser"><![endif]--> <!--[if mso]><div class="mso-container"><![endif]--><table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]--><div style="background-color:transparent;"><div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid "><div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]--><div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;"><div style="background-color: transparent; width: 100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]--><div style="color:#555555;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><div style="font-size:12px;line-height:14px;color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px">Hello SMAD Camp Family,</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br>We are looking forward to seeing you at SMAD Camp from Monday 22nd to Thursday 25th January (four days). Below is some important information:</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong>Groups</strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">To assist you with drop-off first thing Monday morning please take note of your child/ren’s group colour.</p>` + colourGroupHtmlPart + `<p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong>Drop-off and Pick-up</strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">SMAD Camp begins at 9:00am each day. Sign-in will be available each morning from 8:45am and parents will not be permitted to leave their children until this time. SMAD Camp finishes at 3:00pm each day. Sign in and out is required each day up at the sign in desk.</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br>The address for the Canberra Baptist Church is 11 Currie Crescent, Kingston ACT.</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong><span style="line-height: 16px; font-size: 14px;">Label belongings</span></strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">Please label your children’s belongings; in particular their hat, drink bottle and lunch box. In all the fun it is easy for your child to misplace their things. If it has a name on it we can return it to its owner.</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong>Photos</strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">We encourage you to like, share and comment on our SMAD Camp Facebook page. During the week you and your family can see photos of all the fun on our page. Like it here: https://www.facebook.com/smadcampcanberra</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong><span style="line-height: 16px; font-size: 14px;">Nut-free</span></strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">We have a nut-free policy as we have a number of children with allergies. Please ensure you do not pack food that contains nuts.</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong>What to bring</strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">Please ensure your child brings a hat, water bottle and packed lunch (morning tea is provided). Please label your children’s belongings. Electronics and toys should not be brought to camp. Please have your child wear appropriate shoes. Runners are ideal for the sorts of activities at SMAD Camp.&#160;&#160;</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong>Special days</strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">Wednesday – Group Colour day. Campers wear clothes and accessories of their group’s colour!</p><p style="margin: 0;font-size: 12px;line-height: 14px">&#160;<br><span style="font-size: 14px; line-height: 16px;"><strong><span style="line-height: 16px; font-size: 14px;">Instructions for Crafts</span></strong></span></p><p style="margin: 0;font-size: 12px;line-height: 14px">Some of the crafts campers make will return home with follow-up work required (e.g. tie-dye shirts and painted plates). The instructions can be found on our website. Go to: http://canbap.org/connect/smad-camp/&#160;</p><p style="margin: 0;font-size: 12px;line-height: 14px"><br>Alison and Penny Jackson<br>SMAD Camp Directors</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table> <!--[if (mso)|(IE)]></div><![endif]--></body></html>`;

  return new Promise( function pr(resolve,reject) {

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"SMAD Camp" <smadcamp@hotmail.com>', // sender address
        to: email_address,
        subject: 'SMAD CAMP 2018', // Subject line
        html: htmlText
    };

    //send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

  });

}

function initialise(db) {
  // get password from db
    db.getRecord({id:'email_password'},'config')
    .then(
      function fullfilled(result) {
        password = result.password;
        console.log(`Email password successfully retrieved`);
      },
      function rejected(reason) {
        console.log(reason);
      }
    );
}

var email = {
  initialise: initialise,
  send_registration_confirmation: send_registration_confirmation,
  send_reminder: send_reminder,
  send_pre_smad_email: send_pre_smad_email
};

module.exports = email;
