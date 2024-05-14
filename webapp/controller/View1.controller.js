sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("sap.btp.helloworldui52.controller.View1", {
            onInit: function () {

            },
            onPress: function () {
                MessageBox.alert("You have been alerted!");
                MessageToast.show("Action selected!");
            }
        });
    });
