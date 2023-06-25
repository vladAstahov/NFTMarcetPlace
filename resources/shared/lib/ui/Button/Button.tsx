import React from "react";
// import ReactTransitionGroup from 'react-addons-transition-group'
import {DefaultProps, IconName } from "../../../types/helpers";

export type ButtonProps = {
    size?: 'primary' | 'secondary' | 'tertiary'
    tag: 'a' | 'button'
    loading?: boolean
    disabled?: boolean
    href?: string
    icon?: IconName
    ariaLabel: string
} & ButtonHandlers & DefaultProps

export type ButtonHandlers = {
    onClick: () => void
}

export const Button = React.memo<ButtonProps & React.PropsWithChildren>(({ size, loading, disabled, href, icon, ariaLabel, tag, children, onClick }) => {
    const buttonWrapper = <>
        {tag === 'a' && <a href={href}>{children}</a>}
        {tag === 'button' && <button onClick={onClick}>{children}</button>}
    </>

    return buttonWrapper
})