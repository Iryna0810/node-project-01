import contactsServices from "./contacts.js";
// const argv = require('yargs').argv;

console.log("Welcome to Node, girl");
contactsServices.listContacts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const allContacts = await contactsServices.listContacts();
          return console.log(allContacts);     
      case 'get':
          const contact = await contactsServices.getContactById(id)
          return console.log(contact)
      // ... id
      break;

      case 'add':
          const newContact = await contactsServices.addContact({ name, email, phone })
          return console.log(newContact);

      case 'remove':
          const removeContact = await contactsServices.removeContact(id);
          return console.log(removeContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });
// invokeAction({ action: "add", name: "Adrii", email: "andrii@mail.com", phone: "09945646646" });
invokeAction({ action: "remove", id: "FqBnIYzi4hWomYp2dyH33" });



