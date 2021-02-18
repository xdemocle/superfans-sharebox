import uniqid from 'uniqid'
import useLocalStorage from 'react-use-localstorage'
import pkg from '../../package.json'

interface Props {
  username: string
}

const useUniqueLink = (props: Props) => {
  const { username } = props
  const rootWebsite =
    process.env.NODE_ENV !== 'development'
      ? pkg.homepage
      : 'http://localhost:3000'
  const [randomUserString, setRandomUserString] = useLocalStorage(
    `randomUserString-${username}`
  )

  if (!randomUserString.length) {
    setRandomUserString(`${rootWebsite}/share/${username}/${uniqid.time()}`)
  }

  return { uniqueLink: randomUserString }
}

export default useUniqueLink
