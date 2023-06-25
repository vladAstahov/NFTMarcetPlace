import { ComponentStory} from '@storybook/react';
import {ButtonProps, Button} from "./Button";

export default {
    title: 'shared/lib/Button',
    component: Button
}

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}>Button</Button>

export const Default = Template.bind({})

Default.args = {
    iconLeft: 'placeholder',
    children: 'Text',
    tag: 'a'
}
