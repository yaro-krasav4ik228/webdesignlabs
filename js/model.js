import { controller } from "./controller.js";
import { view } from "./view.js";

export const model = {
    validatePhone(phone) {
        let regex = /^\+\d+(\s\d+)*$/;
        return regex.test(phone);
    },

    deleteContacts() {
        let selectedContactsArray = Array.from(controller.selectedContacts);
        for (let i = 0; i < selectedContactsArray.length; i++) {
            view.deleteContact(selectedContactsArray[i]);
    
            for (let j = i + 1; j < selectedContactsArray.length; j++) {
                if (selectedContactsArray[i] < selectedContactsArray[j]) {
                    selectedContactsArray[j]--;
                }
            }
        }
    
        controller.selectedContacts.clear();
    },

    sortContacts(a, b) {
        return a.name.localeCompare(b.name);
    },
};