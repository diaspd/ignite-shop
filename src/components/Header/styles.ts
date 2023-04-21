import { styled } from "@/src/styles"

export const HeaderContent = styled('header', {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  button: {
    marginLeft: "auto",
  },

  '@media (max-width: 864px)': {
    marginTop: '60%',
  }
})

