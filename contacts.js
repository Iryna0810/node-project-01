import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
  
const contactsPath = path.resolve("db", "contacts.json");
const updateContactsList = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


export async function listContacts () {
    const listContacts = await fs.readFile(contactsPath, "utf-8");
  console.log(JSON.parse(listContacts))  
  return JSON.parse(listContacts);
}

export async function getContactById(contactId) {
    const contacts = await listContacts();
    console.log(listContacts)
    const contact = contacts.find(contact => contact.id === contactId)
    return contact || null;
}

export async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
    const [result] = contacts.splice(index, 1);
    await updateContactsList(contacts);
    return result;
}

export async function addContact({name, email, phone}) {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  }
  
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

export default {
  listContacts,
  getContactById,
  addContact,
  removeContact,
}