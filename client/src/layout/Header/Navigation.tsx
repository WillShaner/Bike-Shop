import React from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuLink{
    link?: string,
    icon?: React.ReactNode,
    url: string,
}
type Props = {
    navLinks: IMenuLink[],
}

export default function Navigation({navLinks}: Props) {
  return (
    <div>
        {navLinks.map((x) => {
            return(
                <NavLink to={x.url}>{x.icon? x.icon: x.link}</NavLink>
            )
        })}
    </div>
  )
}