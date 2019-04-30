// Copyright (c) 2019, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction', {
	refresh: function(frm) {

	},
	//fill member name library member is selected
	library_member: function(frm){
		frappe.call({
			"method": "frappe.client.get",
			args:{
				doctype: "Library Member",
				name: frm.doc.library_member
			},
			callback: function(data){
				console.log("data", data);
				frm.set_value("member_name", data.message.first_name + (data.message.last_name ? 
					(" " + data.message.last_name) : ""));
			}
		})
	}
});