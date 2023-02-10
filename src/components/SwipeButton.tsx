import React from "react"

type Props = {
  title: string;
}

const SwipeButton = ({ title }: Props) => {

  return (
    <button>
      {title}
    </button>
  )
}

export default SwipeButton;