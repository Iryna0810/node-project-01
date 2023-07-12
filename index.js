import contactsServices from "./contacts.js";
import yargs from "yargs";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const allContacts = await contactsServices.listContacts();
          return console.log(allContacts);     
      case 'get':
          const contact = await contactsServices.getContactById(id)
          return console.log(contact)
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

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);


