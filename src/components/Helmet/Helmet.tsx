import React, { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const Helmet = ({ title, children }: Props) => {
  document.title = 'Filmly || ' + { title }
  return <div>{children}</div>
}

export default Helmet
