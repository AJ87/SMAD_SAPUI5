sap.ui.jsfragment("SMADJS.view.PickUpFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:"I understand that no parents will be permitted on the premises."
		});

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		var oText2 = new sap.m.Text({
			text:"I will remain in the car during drop-off and pick-up."
		});

		var oPanel2 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText2]
		});

		var oText3 = new sap.m.Text({
			text:"I will email if I require a special consideration."
		});

		var oPanel3 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText3]
		});

		var oButtonAccept = new sap.m.Button({
			text:"Accept",
			type:"Accept",
			press:[oController.handleAcceptPickUp,oController]
		});

		var oButtonCancel = new sap.m.Button({
			text:"Cancel",
			type:"Reject",
			press:[oController.handleCancelPickUp,oController]
		});

		var oBar = new sap.m.Bar({
			contentRight:[oButtonAccept,oButtonCancel]
		});

		var oPickUpPage = new sap.m.Page({
			title:"Pick-up and Drop-off Policy",
			content: [oPanel,oPanel2,oPanel3],
			showFooter:true,
			footer:[oBar],
			showNavButton:true,
			navButtonTap:[oController.backToWizard,oController]
		});

		return [oPickUpPage];
	}
});
