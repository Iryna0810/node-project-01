import fs from "fs/promises";
import { listContacts, getContactById } from "./contacts.js";

console.log("Welcome to Node, girls");
listContacts();
getContactById("1DEXoP8AuCGYc1YgoQ6hw");
