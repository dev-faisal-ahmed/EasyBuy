export type CustomerFormFieldType = {
  title: string;
  name: string;
  placeholder: string;
  type: string;
  textArea?: boolean;
};
export const customerFormField: CustomerFormFieldType[] = [
  {
    title: 'Name',
    name: 'name',
    placeholder: "Input Customer's Name",
    type: 'text',
  },
  {
    title: 'Phone',
    name: 'phone',
    placeholder: "Input Customer's Phone",
    type: 'number',
  },
  {
    title: 'Address',
    name: 'address',
    placeholder: "Input Customer's Address",
    type: 'text',
    textArea: true,
  },
];
