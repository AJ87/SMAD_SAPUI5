sap.ui.jsfragment("SMADJS.view.AttendanceFragment", {
	createContent: function(oController) {

		var oText1 = new sap.m.Text({
			text:"I understand that my child/ren cannot attend SMAD Camp if they are showing any symptoms of Covid or have been in a Covid hotspot two weeks prior to the week of SMAD."
		});

		var oPanel = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText1]
		});

		var oText2 = new sap.m.Text({
			text:"Please refer to the ACT website: https://www.covid19.act.gov.au/community/travel"
		});

		var oPanel2 = new sap.m.Panel({
			class:"SapUiResponsiveMargin",
			width:"auto",
			content:[oText2]
		});

		var oButtonAccept = new sap.m.Button({
			text:"Accept",
			type:"Accept",
			press:[oController.handleAcceptAttendance,oController]
		});

		var oButtonCancel = new sap.m.Button({
			text:"Cancel",
			type:"Reject",
			press:[oController.handleCancelAttendance,oController]
		});

		var oBar = new sap.m.Bar({
			contentRight:[oButtonAccept,oButtonCancel]
		});

		var oAttendancePage = new sap.m.Page({
			title:"Attendance Policy",
			content: [oPanel,oPanel2],
			showFooter:true,
			footer:[oBar],
			showNavButton:true,
			navButtonTap:[oController.backToWizard,oController]
		});

		return [oAttendancePage];
	}
});
