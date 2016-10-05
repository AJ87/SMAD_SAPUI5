sap.ui.jsfragment("SMADJS.view.childFragment", {
	createContent: function(oController) {

    var columns = [];

    var oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Id"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"First Name"})
    });
    columns.push(oColumn);

    oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Last Name"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Birthdate"})
    });
    columns.push(oColumn);

    oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Gender"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"School"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Year"})
    });
    columns.push(oColumn);

    oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Friend Request"})
    });
    columns.push(oColumn);

    oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Medicare Card"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Number on Card"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Medical Info"})
    });
    columns.push(oColumn);

    oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Dietary Info"})
    });
    columns.push(oColumn);

		oColumn = new sap.m.Column({
      header: new sap.m.Text({text:"Medication"})
    });
    columns.push(oColumn);

    var oTable = new sap.m.Table(this.createId("childTable"), {
      columns: columns,
    });

		var oButtonDownload = new sap.m.Button({
			text:"Download",
			type:"Accept",
			press:[oController.downloadChild,oController]
		});

		var oBar = new sap.m.Bar({
			contentRight:[oButtonDownload]
		});

    var oChildPage = new sap.m.Page(this.createId("ChildTablePage"),{
			title: "{i18n>titleChildView}",
			content: [oTable],
			showNavButton:true,
			navButtonTap:[oController.backToRegistrations,oController],
			showFooter: true,
			footer: [oBar]
		});

		return [oChildPage];
	}
});
