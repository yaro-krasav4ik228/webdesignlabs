class Contact {
    constructor(number) {
        this.number = +document.querySelectorAll(".table-main__data_1")[number].innerHTML;
        this.name = document.querySelectorAll(".table-main__data_2")[number].innerHTML;
        this.phone = document.querySelectorAll(".table-main__data_3")[number].innerHTML;
    }
};

export const controller = {
    // contacts
    contacts: undefined,
    currentContacts: undefined,
    contactsArray: [],
    selectedContacts: undefined,
    contactsTable: undefined,

    // add
    addContactBtn: undefined,
    addModal: undefined,
    exitAddModal: undefined,
    nameAddModal: undefined,
    phoneAddModal: undefined,
    buttonAddModal: undefined,
    errorMessage: undefined,

    // delete
    deleteContactBtn: undefined,

    // edit
    editContactBtn: undefined,
    editModal: undefined,
    exitEditModal: undefined,
    nameEditModal: undefined,
    phoneEditModal: undefined,
    buttonEditModal: undefined,
    editErrorMessage: undefined,

    // sort
    sortContactsBtn: undefined,

    getContacts() {
        this.contacts = document.querySelectorAll(".table-main__row");
        this.currentContacts = this.contacts.length - 1;
        this.contactsArray = [];
        for (let i = 1; i <= this.currentContacts; i++) {
            this.contactsArray.push(new Contact(i - 1));
        }
    },

    init() {
        //contacts
        this.selectedContacts = new Set();
        this.contactsTable = document.querySelector(".table-main");

        // add
        this.addContactBtn = document.querySelector(".button-add");
        this.addModal = document.querySelector(".add-modal");
        this.exitAddModal = document.querySelector(".add-modal__close");
        this.nameAddModal = document.querySelector(".add-modal__name");
        this.phoneAddModal = document.querySelector(".add-modal__phone");
        this.buttonAddModal = document.querySelector(".add-modal__button");
        this.errorMessage = document.querySelector("#addErrorMessage");

        // delete
        this.deleteContactBtn = document.querySelector(".button-delete");

        // edit
        this.editContactBtn = document.querySelector(".button-edit");
        this.editModal = document.querySelector(".edit-modal");
        this.exitEditModal = document.querySelector(".edit-modal__close");
        this.nameEditModal = document.querySelector(".edit-modal__name");
        this.phoneEditModal = document.querySelector(".edit-modal__phone");
        this.buttonEditModal = document.querySelector(".edit-modal__button");
        this.editErrorMessage = document.querySelector("#editErrorMessage");

        // sort
        this.sortContactsBtn = document.querySelector(".button-sort"),

        this.getContacts();
    }
};