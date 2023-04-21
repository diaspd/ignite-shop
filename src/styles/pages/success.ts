import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    marginTop: '2rem',
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    color: '$green500',
    marginTop: '5rem',
    fontSize: '$lg',
    display: 'block',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  minWidth: 120,
  height: 120,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '1000%',
  padding: '0.50rem',
  marginBottom: '4rem',
  marginLeft: '-2.8rem',
  position: 'relative',
  left: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  img: {
    objectFit: 'cover'
  }
})