import {ReactNode} from "react";

export type DisabledPropsType = boolean | ''
export type TagPropsType = 'div' | 'a' | 'button' | 'label' | 'strong'
export type DirectionPropsType = 'row' | 'column'

export type Maybe<T> = null | undefined | T
export type IconName =
    | 'placeholder'
    | 'plus'
    | 'script'
    | 'target'
    | 'teach'
    | 'tik-tok'
    | 'book-open'
    | 'chevron-left'
    | 'chevron-right'
    | 'close'
    | 'facebook'
    | 'headset'
    | 'instagram'
    | 'message'
    | 'mood-happy'
    | 'trending-up'
    | 'user-plus'
    | 'users'
    | 'vk'
    | 'zap'
    | 'clock'
    | 'repeat'

export type DefaultProps = {
    className?: string
    children?: ReactNode
}