sap.ui.jsfragment("SMADJS.view.SubmitFragment", {
	createContent: function(oController,status,text) {
		
		var oText1 = new sap.m.Text({
			text:text
		});
		
		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});
		
		if (status === 200) {
			var text2 = "Registration is not complete until you have paid. You will receive an email with instructions shortly. If you receive no email within 24 hours then email smadcamp@hotmail.com";
		} else {
			text2 = "Please email smadcamp@hotmail.com";
		}
		
		var oText2 = new sap.m.Text({
			text:text2
		});
		
		var oPanel2 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText2]
		});
		
		var title = (status === 200) ? "Registration Successful" : "Registration Error";
		
		var oSubmitPage = new sap.m.Page({
			title:title,
			content: [oPanel,oPanel2],
			showNavButton:false
		});
		
		return [oSubmitPage];
	}
});