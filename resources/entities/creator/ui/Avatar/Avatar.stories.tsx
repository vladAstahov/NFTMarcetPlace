import React from "react";
import { Avatar, type AvatarProps } from './Avatar'
import { ComponentStory } from "@storybook/react";

export default {
    title: 'entities/creator/Avatar',
    component: Avatar
}

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
    source: '/public/images/creator/1.png'
}