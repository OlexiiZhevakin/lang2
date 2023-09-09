
"use client"
// in app/[locale]/components/AdminApp.jsx
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { HomeList } from './admin/home/HomeList';
import { HomeEdit } from './admin/home/HomeEdit';
import { HomeCreate } from './admin/home/HomeCreate';


const apiUrl = '/api';
const dataProvider = simpleRestProvider(apiUrl);

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="home" list={HomeList} edit={HomeEdit} create={HomeCreate} />
  </Admin>
);

export default AdminApp;
