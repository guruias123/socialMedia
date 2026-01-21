import React from 'react';
import FormField from './FormField';

const meta = {
    title: 'Components/FormField',
    component: FormField,
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;

const Template = (args) => <FormField {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    label: 'Name',
    name: 'name',
    value: '',
    placeholder: 'Enter name',
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Email',
    name: 'email',
    value: 'invalid',
    error: 'Invalid email address',
    type: 'email',
};

export const Select = Template.bind({});
Select.args = {
    label: 'Role',
    name: 'role',
    type: 'select',
    value: '',
    options: [
        { value: 'dev', label: 'Developer' },
        { value: 'test', label: 'Tester' },
    ],
};
