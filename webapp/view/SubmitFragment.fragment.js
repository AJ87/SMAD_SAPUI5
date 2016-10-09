sap.ui.jsfragment("SMADJS.view.SubmitFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:oController.message
		});

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		if (oController.status === 200) {
			var text2 = "Registration is not complete until you have paid (cost is $80/child for the week). Payment details:\n\n" +
			"Account Name: CANBERRA BAPTIST CHURCH - SMAD CAMP\nBSB: 062 901\nAccount Number: 1021 7815\nReference: Your child/ren's last name";
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

		var title = (oController.status === 200) ? "Registration Successful" : "Registration Error";

		var oSubmitPage = new sap.m.Page({
			title:title,
			content: [oPanel,oPanel2],
			showNavButton:false
		});

		return [oSubmitPage];
	}
});
