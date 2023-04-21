import { styled } from "@/src/styles"

export const HeaderButton = styled('button', { 
  display: 'grid',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray800',
  padding: '0.8rem',
  borderRadius: '6px',
  height: '50px',
  color: '$gray500',
  cursor: 'pointer',
})

export const Icon = styled('div', {
  position: 'absolute',
  right: '24px',
  marginTop: '2rem',
  cursor: 'pointer',
  color: '$gray500',
})


export const ShopSection = styled('section', {
  overflowY: 'scroll',
  position: 'fixed',
  zIndex: 1, 
  right: '0px',
  top: '0px',
  width: '35rem',
  display: 'block',
  height: '100vh',
  backgroundColor: '$gray800',

  '@media (max-width: 864px)': {
    width: '40vw',
    height: '100%',
    overflow: 'scroll',
  }
})


export const ShopContent = styled('div', {
  display: 'grid',

  main: {
    display: 'grid',
    marginTop: '1rem',
    marginLeft: '3rem',
    
    section: {
      display: 'flex',
      gap: '1rem',
      '@media (max-width: 864px)': {
        flexDirection: 'column',
      },
    },

    div: {
      marginTop: '1rem',
      display: 'flex',
      gap: '1.25rem',
      backgroundColor: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      
      '@media (max-width: 864px)': {
        flexDirection: 'column',
      },

    },

    img: {
      maxWidth: '8rem',
      borderRadius: '6px',
      objectFit: 'cover'
    },

    '@media (max-width: 864px)': {
      margin: 0,
      width: '40vw',
    }
  },

  h2: {
    marginTop: '7rem',
    marginLeft: '3rem',

    '@media (max-width: 864px)': {
      margin: '5rem 0',
    },
  }
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '0.5rem',

  p: {
    color: '$gray300',
    fontSize: '1.2rem',
    display: 'flex',
    flex: '1',
  },

  span: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '$white'
  },

  
  button: {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    backgroundColor: '$gray800',
    fontSize: '1rem',
    padding: 0,
    margin: 0,
    color: '$green500',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
      cursor: 'pointer'
    }
  }
})

export const Footer = styled('footer', {
  position: 'relative',
  marginTop: '6rem',
  bottom: 0,
  gap: '0.5rem',
  marginLeft: '3.5rem',
  display: 'flex',
  maxWidth: '28.25rem',
  flexDirection: 'column',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '28rem',

    '@media (max-width: 864px)': {
      flexDirection: 'column',
        marginTop: '1rem',
        width: '35vw',
        alignItems: 'flex-start',
    }
  },

  strong: {
    fontSize: '1.5rem',
  },

  span: {
    fontSize: '1.1rem',
  },

  button: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '3.5rem',
    width: '100%',
    color: '$white',
    padding: '1.5rem',
    backgroundColor: '$green500',
    borderRadius: 8,
    border: 'none',
    marginBottom: '1.5rem',

    fontWeight: 'bold',
    fontSize: '1.2rem',
    transitionDuration: '500ms',

    '&:disabled': {
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      background: '$green300',
      cursor: 'pointer'
    }
  },

  '@media (max-width: 864px)': {
    margin: '0.8rem',
    width: '35vw',
    alignItems: 'flex-start',
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})