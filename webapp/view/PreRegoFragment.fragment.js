sap.ui.jsfragment("SMADJS.view.PreRegoFragment", {
	createContent: function(oController) {
		
		var oText1 = new sap.m.Text({
			text:"Registration opens 15 October at 12noon."
		});
		
		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});
		
		var oPreRegoPage = new sap.m.Page({
			title:"SMAD Camp Registration 2017",
			content: [oPanel],
			showNavButton:false
		});
		
		return [oPreRegoPage];
	}
});