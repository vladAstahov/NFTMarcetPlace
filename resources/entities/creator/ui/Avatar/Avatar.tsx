import React, { useMemo } from "react";
import { DefaultProps } from "resources/shared/types/helpers";

export type AvatarProps = DefaultProps & {
    source: string
}

export const Avatar = React.memo<AvatarProps>(({source, className = ''}) => {
    const classes = useMemo(() => [
        'avatar',
        ...(className && [
            className
        ])
    ].join(' '), [className])

    return <div className={classes}>
        <img className="avatar__image" src={source} />
    </div>   
})