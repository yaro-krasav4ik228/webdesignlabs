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
        const phone = controller.phoneAddModal.value;
        if(!model.validatePhone(phone) && name.length == 0) {
            controller.errorMessage.innerHTML = "Некоректний формат імені та номеру";
        }
        else if(!model.validatePhone(phone)) {
            controller.errorMessage.innerHTML = "Некоректний формат номеру";
        } else if (name.length == 0) {
            controller.errorMessage.innerHTML = "Некоректний формат імені";
        }
        else {
            view.addContact(name, phone);
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
        const phone = controller.phoneEditModal.value;
        if(!model.validatePhone(phone) && phone != "") {
            controller.editErrorMessage.innerHTML = "Некоректний формат номеру";
        }
        else {
            view.editContact(name, phone);
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