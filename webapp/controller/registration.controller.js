sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

  return Controller.extend("SMADJS.controller.registration", {
    onInit: function() {
			this._waitlist = false;

			this._oApp = this.getView().byId("myApp");
			this._oPage = this.getView().byId("TablePage");

			this._oChildPage = sap.ui.jsfragment("SMADJS.view.childFragment", this);
			this._oApp.addPage(this._oChildPage);

			var that = this;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState === 4) {
					that.status = this.status;
					if (this.status === 200) {
						var oModel = new JSONModel({regos: jQuery.parseJSON(this.response)});
						that.getView().setModel(oModel);

						that.getView().byId("table").bindAggregation("items",{
							path: "/regos",
							template: new sap.m.ColumnListItem({
			        	cells: [
			          	new sap.m.Text({text:"{parent1/id}"}),
			          	new sap.m.Text({text:"{parent1/firstName}"}),
			          	new sap.m.Text({text:"{parent1/lastName}"}),
									new sap.m.Text({text:"{parent1/mobile}"}),
									new sap.m.Text({text:"{parent1/email}"}),
									new sap.m.Text({text:"{parent1/address}"}),

									new sap.m.Text({text:"{parent2/firstName}"}),
			          	new sap.m.Text({text:"{parent2/lastName}"}),
									new sap.m.Text({text:"{parent2/mobile}"}),
									new sap.m.Text({text:"{parent2/email}"})
			        	]
			      	})
						}).attachSelectionChange(that.rowSelection,that);
					} else {
						var message = "Submission failed";
					}
				}
			};

			xhttp.open("POST", "/registrations?waitlist=false", true);
			xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhttp.send();

		},
		switchWaitlist: function() {
			var that = this;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState === 4) {
					that.status = this.status;
					if (this.status === 200) {
						var oModel = new JSONModel({regos: jQuery.parseJSON(this.response)});
						that.getView().setModel(oModel);

						that.getView().byId("table").bindAggregation("items",{
							path: "/regos",
							template: new sap.m.ColumnListItem({
			        	cells: [
			          	new sap.m.Text({text:"{parent1/id}"}),
			          	new sap.m.Text({text:"{parent1/firstName}"}),
			          	new sap.m.Text({text:"{parent1/lastName}"}),
									new sap.m.Text({text:"{parent1/mobile}"}),
									new sap.m.Text({text:"{parent1/email}"}),
									new sap.m.Text({text:"{parent1/address}"}),

									new sap.m.Text({text:"{parent2/firstName}"}),
			          	new sap.m.Text({text:"{parent2/lastName}"}),
									new sap.m.Text({text:"{parent2/mobile}"}),
									new sap.m.Text({text:"{parent2/email}"})
			        	]
			      	})
						}).attachSelectionChange(that.rowSelection,that);
					} else {
						var message = "Submission failed";
					}
				}
			};

			this._waitlist = this._waitlist ? false : true;

			if (this._waitlist) {
				xhttp.open("POST", "/registrations?waitlist=true", true);
			} else {
				xhttp.open("POST", "/registrations?waitlist=false", true);
			}

			xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhttp.send();
		},
		backToRegistrations: function() {
			this._oApp.backToPage(this._oPage.getId());
		},
		rowSelection: function(oEvent) {
			var oSelectedItem = oEvent.getParameter("listItem");
			var sItemId = oSelectedItem.getBindingContext().getProperty("parent1/id");
			var url = "/registration/" + sItemId;
			this._oApp.to(this._oChildPage);

			var that = this;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState === 4) {
					that.status = this.status;
					if (this.status === 200) {
						var childModel = new JSONModel({child: jQuery.parseJSON(this.response)});
						that._oChildPage.setModel(childModel);

						sap.ui.getCore().byId("childTable").bindAggregation("items",{
							path: "/child",
							template: new sap.m.ColumnListItem({
			        	cells: [
			          	new sap.m.Text({text:"{id}"}),
			          	new sap.m.Text({text:"{firstName}"}),
			          	new sap.m.Text({text:"{lastName}"}),
									new sap.m.Text({text:"{birthdate}"}),
									new sap.m.Text({text:"{gender}"}),
									new sap.m.Text({text:"{school}"}),
									new sap.m.Text({text:"{year}"}),
			          	new sap.m.Text({text:"{friend}"}),
									new sap.m.Text({text:"{medicare1}"}),
									new sap.m.Text({text:"{medicare2}"}),
									new sap.m.Text({text:"{medicalInfo}"}),
									new sap.m.Text({text:"{dietaryInfo}"}),
									new sap.m.Text({text:"{medication}"})
			        	]
			      	})
						}).attachSelectionChange(that.rowSelection);
					} else {
						var message = "Submission failed";
					}
				}
			};

			xhttp.open("POST", url, true);
			xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhttp.send();
		},
		download: function() {
			let a = document.createElement("a");
      a.style = "display: none";
      document.body.appendChild(a);
      //Create a DOMString representing the blob
      //and point the link element towards it
      let url = "/registrations/download";
      a.href = url;
      a.download = 'registrations.csv';
      //programatically click the link to trigger the download
      a.click();
		},
		downloadChild: function() {
			let a = document.createElement("a");
      a.style = "display: none";
      document.body.appendChild(a);
      //Create a DOMString representing the blob
      //and point the link element towards it
      let url = "/registrations/downloadChild";
      a.href = url;
      a.download = 'SMADchildren.csv';
      //programatically click the link to trigger the download
      a.click();
		}
  });
});
