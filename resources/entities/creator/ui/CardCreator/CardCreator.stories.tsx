import React from "react";
import { CardCreator, type CardCreatorProps } from './CardCreator'
import { ComponentStory } from "@storybook/react";

export default {
    title: 'entities/creator/CardCreator',
    component: CardCreator
}

const Template: ComponentStory<typeof CardCreator> = (args: CardCreatorProps) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardCreator {...args} />
        <CardCreator {...args} />
        <CardCreator {...args} />
    </div >
)

export const Default = Template.bind({})

Default.args = {
    id: 1,
    rate: 1,
    avatar: '/public/images/creator/1.png',
    username: 'Keepitreal',
    amount: 34.50,
    description: "description"
}