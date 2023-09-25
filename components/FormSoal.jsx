import React from "react"
import {
  Button,
  Box,
  Center,
  Input,
  Collapse,
  Text,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
// import cookieCutter from "cookie-cutter";

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key)
    // const stickyValue = cookieCutter.get(key)

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue))
    }
  }, [key])

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
    // cookieCutter.set(key, JSON.stringify(value), { expires: (new Date() + 30*1000) })
  }, [key, value])

  return [value, setValue]
}

const FormSoal = () => {
  const [nim, setNim] = React.useState("")
  const [jawaban, setJawaban] = React.useState("")
  const [link, setLink] = React.useState("/pengumuman/")
  const [show, setShow] = React.useState(false)
  const [showButton, setShowButton] = React.useState({
    show: false,
    pesan: "Jangan Pencet , Source : Trust me Bro",
  })
  const [mode, setMode] = useStickyState(false, "jawabBener")
  const [lsNim, setLsNim] = useStickyState(0, "checkNim")

  const handleChangeNim = (event) => {
    const nim = event.target.value
    setNim(nim)
    setLink(`/siapayaa?nim=${nim}`)
  }
  const handleChangeJawaban = (event) => {
    const textnya = event.target.value
    setJawaban(textnya)
    if (textnya.toLowerCase() === "gpt2023") {
      setShow(true)
      setMode(true)
      setLsNim(nim)
    } else {
      setShow(false)
    }
  }
  const MotionButton = motion(Button)
  return (
    <Box mx="auto" h="80vh">
      <Center mt={{ base: "40%", md: "30%", lg: "15%" }}>
        <Box w="sm">
          <Input
            value={nim}
            onChange={handleChangeNim}
            variant="flushed"
            placeholder="Masukkan NIM"
          />

          <Input
            value={jawaban}
            onChange={handleChangeJawaban}
            variant="flushed"
            placeholder="Masukkan Password (from OA Line)"
          />
          <Collapse mt={4} in={show}>
            <Stack direction="row" justifyContent="center" my="2">
              <Button hidden={showButton.show} as="a" href={link}>
                Pencet
              </Button>
              <MotionButton
                // as="a"
                // href="/pengumuman"
                whileHover={{ opacity: 0.2, y: 50 }}
                onClick={() =>
                  setShowButton({
                    show: true,
                    pesan: "MWEHEHHEHEHEHEHEHE",
                  })
                }
              >
                {showButton.pesan}
              </MotionButton>
            </Stack>
          </Collapse>
          <Text fontSize="sm">
            *jika terdapat masalah dapat DM ke ig{" "}
            <Link href="https://instagram.com/ailabtelkom">@ailabtelkom</Link>
          </Text>
        </Box>
      </Center>
      {/* <Image
        width={{ base: "100px", md: "150px", lg: "200px" }}
        position="absolute"
        top="160px"
        left={{ base: "0", md: "-20px" }}
        // right={0}
        src="https://cdn130.picsart.com/260832909030212.png?type=webp&to=min&r=640"
        alt="check it check it"
      /> */}
      {/* <Image
        width={{ base: "100px", md: "150px", lg: "200px" }}
        position="absolute"
        top="160px"
        left={{ base: "0", md: "-20px" }}
        src="http://assets.stickpng.com/images/5ee7713799588c0004aa6848.png?type=webp&to=min&r=640"
        alt="lets check it out"
      /> */}
    </Box>
  )
}

export default FormSoal
