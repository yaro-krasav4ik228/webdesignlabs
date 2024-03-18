import { controller } from "./controller.js";
import { view } from "./view.js";
import { model } from "./model.js";

window.addEventListener("DOMContentLoaded", () => {
    controller.init();

    controller.addContactBtn.addEventListener("click", (e) => {
        view.openAddModal();
    });
    
    controller.exitAddModal.addEventListener("click", (e) => {
        view.clearAddModal();
        view.closeAddModal();
    });
    
    controller.buttonAddModal.addEventListener("click", (e) => {
        e.preventDefault();
        const name = controller.nameAddModal.value;
        const surname = controller.surnameAddModal.value;
        const phone = controller.phoneAddModal.value;
        if(!model.validatePhone(phone) && name.length == 0) {
            controller.errorMessage.innerHTML = "Wrong data";
        }
        else if(!model.validatePhone(phone)) {
            controller.errorMessage.innerHTML = "Wrong number";
        } 
        else if (name.length == 0) {
            controller.errorMessage.innerHTML = "Wrong name";
        }
        else if (surname.length == 0) {
            controller.errorMessage.innerHTML = "Wrong surname";
        }
        else {
            view.addContact(name, surname, phone);
            view.clearAddModal();
            view.closeAddModal();
            controller.getContacts();
        }
    });
    
    controller.contactsTable.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("table-main__data")) {
            let index = target.parentNode.innerHTML.indexOf("main__data_1") + 14;
            view.selectContact(target.parentNode.innerHTML[index]);
        }
    });
    
    controller.deleteContactBtn.addEventListener("click", (e) => {
        if (controller.selectedContacts.size > 0) {
            model.deleteContacts();
        }
    });
    
    controller.editContactBtn.addEventListener("click", (e) => {
        if (controller.selectedContacts.size > 0) {
            view.openEditModal();
        }
    });
    
    controller.exitEditModal.addEventListener("click", (e) => {
        view.clearEditModal();
        view.closeEditModal();
    });
    
    controller.buttonEditModal.addEventListener("click", (e) => {
        e.preventDefault();
        const name = controller.nameEditModal.value;
        const surname = controller.surnameEditModal.value;
        const phone = controller.phoneEditModal.value;
        if(!model.validatePhone(phone) && phone != "") {
            controller.editErrorMessage.innerHTML = "Wrong phone number type";
        }
        else {
            view.editContact(name, surname, phone);
            view.clearEditModal();
            view.closeEditModal();
            controller.getContacts();
        }
    });
    
    controller.sortContactsBtn.addEventListener("click", (e) => {
        controller.contactsArray.sort(model.sortContacts);
        view.sortTable(); 
    });    
});