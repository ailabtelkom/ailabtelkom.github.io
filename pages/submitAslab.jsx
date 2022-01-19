import { useEffect } from 'react'
import { Heading } from "@chakra-ui/react";
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('https://forms.gle/ohRcqWvc64gudac27')
    }
  }, [user, loading])

  return (
    <Heading as="h2" fontSize={{ base: "lg", lg: "xl" }}>
      Redirecting to Form Recruitment...
    </Heading>
  )
}