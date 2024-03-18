import { controller } from "./controller.js";

export const view = {
    addContact(name, phone) {
        const newContact = `
        <div class="table-main__row">
            <div class="table-main__data table-main__data_1">${controller.currentContacts + 1}</div>
            <div class="table-main__data table-main__data_2">${name}</div>
            <div class="table-main__data table-main__data_3">${phone}</div>
        </div>
        `;
        controller.contactsTable.innerHTML += newContact;
        controller.getContacts();
    },

    closeAddModal() {
        controller.addModal.classList.remove("add-modal_active");
    },
    
    openAddModal() {
        controller.addModal.classList.add("add-modal_active");
    },
    
    clearAddModal() {
        controller.nameAddModal.value = "";
        controller.phoneAddModal.value = "";
        controller.errorMessage.innerHTML = "";
    },

    selectContact(i) {
        if (controller.selectedContacts.has(i)) {
            controller.contacts[i].style.backgroundColor = "white";
            controller.selectedContacts.delete(i);
        } else {
            controller.contacts[i].style.backgroundColor = "rgba(24, 46, 242, 0.1)";
            controller.selectedContacts.add(i);
        }
    
        if (controller.selectedContacts.size > 1) {
            controller.editContactBtn.classList.add("button-disabled");
            controller.editContactBtn.disabled = true;
        } else {
            controller.editContactBtn.classList.remove("button-disabled");
            controller.editContactBtn.disabled = false;
        }
    },

    updateTable() {
        for (let i = 0; i < controller.currentContacts; i++) {
            document.querySelectorAll(".table-main__data_1")[i].innerHTML = i + 1;
        }
        controller.getContacts();
    },

    deleteContact(number) {
        controller.contactsTable.removeChild(document.querySelectorAll(".table-main__row")[number]);
        controller.currentContacts--;
        this.updateTable();
    },

    closeEditModal() {
        controller.editModal.classList.remove("edit-modal_active");
    },

    openEditModal() {
        controller.editModal.classList.add("edit-modal_active");
    },

    clearEditModal() {
        controller.nameEditModal.value = "";
        controller.phoneEditModal.value = "";
        controller.editErrorMessage.innerHTML = "";
    },

    editContact(name, phone) {
        let selectedContact = Array.from(controller.selectedContacts)[0];
        if (name != "") {
            document.querySelectorAll(".table-main__data_2")[selectedContact - 1].innerHTML = name;
        }
        if (phone != "") {
            document.querySelectorAll(".table-main__data_3")[selectedContact - 1].innerHTML = phone;
        }
    
        controller.getContacts();
    },

    clearTable() {
        while (controller.contactsTable.childElementCount != 1) {
            controller.contactsTable.removeChild(document.querySelectorAll(".table-main__row")[1]);
        }
    },

    sortTable() {
        this.clearTable();
        for (let i = 0; i < controller.contactsArray.length; i++) {
            const newContact = `
            <div class="table-main__row">
                <div class="table-main__data table-main__data_1">${i + 1}</div>
                <div class="table-main__data table-main__data_2">${controller.contactsArray[i].name}</div>
                <div class="table-main__data table-main__data_3">${controller.contactsArray[i].phone}</div>
            </div>
            `;
            controller.contactsTable.innerHTML += newContact;
        }
        controller.getContacts();
    },
}