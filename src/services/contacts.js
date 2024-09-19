import { contactModel } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactModel.find();
  return contacts;
};
export const getContactById = async (studentId) => {
  const contact = await contactModel.findById(studentId);
  return contact;
};
