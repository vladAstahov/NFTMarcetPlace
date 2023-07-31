import React from "react";
import { DefaultProps } from "resources/shared/types/helpers";
import { Avatar, AvatarProps } from "../Avatar";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";

export type CardCreatorProps = DefaultProps & {
    id: number
    rate: number
    avatar: AvatarProps['source']
    username: string
    amount: number | string
    description: string
}

export const CardCreator = React.memo<CardCreatorProps>(({ id, avatar, username, amount, className, description }) => (
    <Link className={`card-creator ${className || ''}`} to={`creator/${id}`}>
        <div className="card-creator__front">
            <span className="card-creator__rate">{id}</span>
            <Avatar className="card-creator__avatar" source={avatar} />
            <div className="card-creator__main">
                <h3 className="card-creator__username">{username}</h3>
                <h3 className="card-creator__sales">
                    Total sales: <span className="card-creator__amount">{amount} ETH</span>
                </h3>
            </div>
        </div>
        <div className="card-creator__back">
            <p className="card-creator__description">{description}</p>
            <Button className="card-creator__button" size='tertiary' view='outline' ariaLabel="button" onClick={() => { }}>Button</Button>
        </div>
    </Link>
))