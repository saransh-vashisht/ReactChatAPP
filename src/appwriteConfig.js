import { Client, Databases,Account } from 'appwrite';

export const PROJECT_ID = '6578b08d517d172bd92e'
export const DATABASE_ID = '6578d36128d0b10af4aa'
export const COLLECTION_ID_MESSAGES = '6578d3767f0bc93c17e3'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6578b08d517d172bd92e');
export const databases = new Databases(client);
export const account= new Account(client);
export default client;