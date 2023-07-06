import fs from "fs/promises";
    const contactsPath = "./db/contacts.json";


export async function listContacts () {
    const listContacts = await fs.readFile(contactsPath, "utf-8");
    console.log(listContacts);
}

export async function getContactById(contactId) {
    const listContacts = await fs.readFile(contactsPath, "utf-8");
    console.log(listContacts)
    const data = JSON.parse(listContacts)
       const contactById = data.find(contact => contact.id === contactId)
    console.log(contactById);
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}