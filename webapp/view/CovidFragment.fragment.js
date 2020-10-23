sap.ui.jsfragment("SMADJS.view.CovidFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:"I understand that in the case ACT health change the guidelines prior or during SMAD Camp and we can’t proceed, all families will be issued a 75% refund."
		});

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		var oText2 = new sap.m.Text({
			text:"I understand that I may need to consider possible alternative childcare arrangements."
		});

		var oPanel2 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText2]
		});

		var oButtonAccept = new sap.m.Button({
			text:"Accept",
			type:"Accept",
			press:[oController.handleAcceptCovid,oController]
		});

		var oButtonCancel = new sap.m.Button({
			text:"Cancel",
			type:"Reject",
			press:[oController.handleCancelCovid,oController]
		});

		var oBar = new sap.m.Bar({
			contentRight:[oButtonAccept,oButtonCancel]
		});

		var oCovidPage = new sap.m.Page({
			title:"Cancellation due to Covid Policy",
			content: [oPanel,oPanel2],
			showFooter:true,
			footer:[oBar],
			showNavButton:true,
			navButtonTap:[oController.backToWizard,oController]
		});

		return [oCovidPage];
	}
});
