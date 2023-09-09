import { Create, SimpleForm, TextInput } from 'react-admin';

export const HomeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="key_name" />
      <TextInput source="translation_text" />
      <TextInput source="language" />
    </SimpleForm>
  </Create>
);