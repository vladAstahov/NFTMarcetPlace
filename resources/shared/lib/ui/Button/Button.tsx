import React, { ReactNode, useMemo } from "react";
import {DefaultProps, IconName } from "../../../types/helpers";
import { IconBase } from '../IconBase'

export type ButtonProps = {
    view?: 'filled' | 'outline'
    size?: 'primary' | 'secondary' | 'tertiary'
    tag: 'a' | 'button'
    href?: string
    icon?: IconName
    ariaLabel: string
} & ButtonHandlers & DefaultProps

export type ButtonHandlers = {
    onClick: () => void
}

/**
 * @component Button
 * @description Компонент кнопки
 */
export const Button = React.memo<ButtonProps & React.PropsWithChildren>(({ size = 'primary', view = 'filled', href, icon, ariaLabel, tag, children, onClick }) => {
    const classes = useMemo(() => {
        return [
            `button`,
            `button--view-${view}`,
            `button--size-${size}`
        ].join(' ')
    }, [view, size])
    
    const main = useMemo<ReactNode>(() => (
        <>
            {icon && (
                <IconBase className="button__icon" name={icon} />
            )}
            {children}
        </>
    ), [icon, children])

    const buttonWrapper = <>
        {tag === 'a' && (
            <a 
                className={classes} 
                href={href}>
                    {main}
            </a>
        )}
        {tag === 'button' && (
            <button
                className={classes} 
                aria-label={ariaLabel} 
                
                onClick={onClick}>
                    {main}
            </button>
        )}
    </>

    return buttonWrapper
})