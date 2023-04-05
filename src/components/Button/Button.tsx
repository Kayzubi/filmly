import React, { FC, ReactNode } from 'react'

interface Props {
  type?: 'submit' | 'button' | 'reset'
  loading?: boolean
  disabled?: boolean
  text: string
  icon?: ReactNode
  onClick?: () => void
  className: string
}

const Button: FC<Props> = ({
  text,
  icon,
  className,
  loading,
  disabled,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={className}
      onClick={onClick}>
      {text}
      {icon && <>{icon}</>}
    </button>
  )
}

export default Button
