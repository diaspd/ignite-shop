import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  minHeight: '100vh',
  
  height: '100vh',

  '@media (max-width: 864px)': {
    overflow: 'scroll',
  },
})