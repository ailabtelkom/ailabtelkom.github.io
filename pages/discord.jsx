import { useEffect } from 'react'
import { Heading } from "@chakra-ui/core";
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('https://discord.gg/GAQ5SFu495')
    }
  }, [user, loading])

  return (
    <Heading as="h2" fontSize={{ default: "lg", lg: "xl" }}>
      Redirecting to Discord...
    </Heading>
  )
}