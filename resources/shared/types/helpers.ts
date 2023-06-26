import { ReactNode } from "react";

export type DisabledPropsType = boolean | ''
export type TagPropsType = 'div' | 'a' | 'button' | 'label' | 'strong'
export type DirectionPropsType = 'row' | 'column'

export type Maybe<T> = null | undefined | T
export type IconName =
    | 'YoutubeLogo'
    | 'WalletConnect'
    | 'Wallet'
    | 'UserCircle'
    | 'User'
    | 'TwitterLogo'
    | 'TrendUp'
    | 'Storefront'
    | 'RocketLaunch'
    | 'Rocket'
    | 'Plus'
    | 'Metamask'
    | 'MagnifyingGlass'
    | 'LockKey'
    | 'List'
    | 'InstagramLogo'
    | 'Globe'
    | 'EyeSlash'
    | 'EnvelopeSimple'
    | 'DiscordLogo'
    | 'Copy'
    | 'Coinbase'
    | 'ArrowRight'
    | 'ArrowLeft'

export type DefaultProps = {
    className?: string
    children?: ReactNode
}