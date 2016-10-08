sap.ui.jsfragment("SMADJS.view.PostRegoFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:"Registration is full."
		});

		var oText2 = new sap.m.Text({
			text:"Please email smadcamp@hotmail.com to be put on the waitlist."
		})

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		var oPanel2 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText2]
		});

		var oPostRegoPage = new sap.m.Page({
			title:"SMAD Camp Registration 2017",
			content: [oPanel,oPanel2],
			showNavButton:false
		});

		return [oPostRegoPage];
	}
});
