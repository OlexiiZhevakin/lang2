import { Datagrid, List, TextField } from 'react-admin';

export const HomeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="key_name" />
      <TextField source="translation_text" />
      <TextField source="language" />
    </Datagrid>
  </List>
);