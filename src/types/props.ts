import React from 'react';

export interface Props {
  children?: React.ReactNode;
}

export interface AsideProps extends Props {
  img: string;
  shape?: React.ReactNode;
}
