import { Container, Box, Heading  } from '@chakra-ui/react'

const Page = () => {
  return (
  <Container>
    <Box borderRadius="lg" bg="DarkRed" p={3} mb={6} align="center">
    Have you discovered the lair of the beast? Congratulations and be careful..    </Box>
   
    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          0xMetamoth
        </Heading>
        <p>CreativeMonster3.0  (Graphic designer / Web Developer / Sound Engineer) </p>
      </Box>
    </Box>
  </Container>
  )
}

export default Page