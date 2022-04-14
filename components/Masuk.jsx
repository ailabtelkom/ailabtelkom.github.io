import React from "react"
import {
  Heading,
  Divider,
  Box,
  Center,
  Stack,
  Image,
  Text,
  useColorModeValue,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaDiscord, FaLine } from "react-icons/fa"
// import cookieCutter from 'cookie-cutter'

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
    // cookieCutter.set(key, JSON.stringify(value), { expires: (Date.now() + 30*1000) })
  }, [key, value])

  return [value, setValue]
}

const Masuk = (props) => {
  const { data, nim } = props
  const [show, setShow] = React.useState(false)
  const [showSkelton, setShowSkelton] = React.useState(false);
  const [mode, setMode] = useStickyState(false, "jawabBener")
  const [lsNim, setLsNim] = useStickyState(0, "checkNim")

  const MotionBox = motion(Box)
  const MotionButton = motion(Button)
  const bgColor = useColorModeValue("white", "gray.700")
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  }
  const handle = (data) => {
    if (data.lolos == "nodata") return true
    else if (lsNim!=nim) return true
    else if (!mode) return true
    else return false
  }

  // const MotionButton = motion(Button)
  const lolos = `Hi Chagi👋 Selamat! Kamu lolos dan menjadi bagian dari Keluarga Lab AI!✨`
  const belom = "HAPPINESS~ Jangan berkecil hati yaa, tetap semangat. Much better chances are always waiting for you!" 
  const checkNim = lsNim==nim
  return (
    <Box mt="2">
      <Heading hidden={handle(data)}>{data.lolos ? lolos : belom}</Heading>
      <Heading hidden={data.lolos == "nodata" ? false : true}>
        Nim Tidak Terdaftar
      </Heading>
      <Heading hidden={mode}>Anda belum menjawab Pertanyaan</Heading>
      <Heading hidden={checkNim}>Silahkan menjawab pertanyaan terlebih dahulu</Heading>
      <Text hidden={checkNim}>tidak bisa melakukan pengecekan dengan hanya mengganti param :) </Text>
      <Divider mt="2" mb="4" />
      {/* <Center> */}
      <Stack
          hidden={data.lolos ? false : true}
          direction="row"
          justifyContent="center"
          my="2"
      >
        <Heading as="h4" fontSize="xl" mb="1rem">
          ciee lolos:p dijaga komitmennya yaa!
        </Heading>
      </Stack>
      <Box hidden={handle(data)}>
        <MotionBox
          backgroundColor={bgColor}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariant}
          borderWidth="1px"
          maxW="300px"
          mx="auto"
        >
          <Skeleton isLoaded={showSkelton} h="300px">
            <Image
              alt={data.nama}
              src={data.image}
              fallbackSrc={data.fallback}
              onLoad={ () => setShowSkelton(true) }
              maxH="300px"
              mx="auto"
            />
          </Skeleton>
          <Heading as="h4" fontSize="xl">
            {data.nama}
          </Heading>
          <Heading as="h4" fontSize="xl" mb="1rem">
            {nim}
          </Heading>
        </MotionBox>
        <Stack
          hidden={data.lolos ? false : true}
          direction="row"
          justifyContent="center"
          my="2"
        >
          <MotionButton
            leftIcon={<FaDiscord />}
            as="a"
            href="https://ailabtelkom.github.io/discord"
            target="_blank"
            variants={itemVariant}
          >
            Join Discord
          </MotionButton>
        </Stack>
        <Text hidden={data.lolos ? false : true}>
          *jika tidak dapat join dapat DM ke ig{" "}
          <Link href="https://instagram.com/ailabtelkom">@ailabtelkom</Link>
        </Text>
      </Box>
    </Box>
  )
}

export default Masuk
