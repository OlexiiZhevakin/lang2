import { Edit, SimpleForm, TextInput } from 'react-admin';

export const HomeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="key_name" />
      <TextInput source="translation_text" />
      <TextInput source="language" />
    </SimpleForm>
  </Edit>
);