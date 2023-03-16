import React from "react"
import { Button } from '@mui/material';

type Props = {
  title: string;
}

const SwipeButton = ({ title }: Props) => {

  return (
    <Button size="large">
      {title}
    </Button>
  )
}

export default SwipeButton;