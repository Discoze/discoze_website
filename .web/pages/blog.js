import { Fragment, useContext } from "react"
import { Fragment_1914b80923a46dd4ca987d26bf099f35, Fragment_198369e509047a96dfdfd4de2ad2d9f4, Fragment_1d546a22b29e07e3056f6311b7a98c38, Fragment_71c2f39ed36e931f7598b73f01e24a68, Fragment_b27b71a131720ae547c288b4dc26736f, Fragment_bd59c093a60db05436f7baa3eeb855ed, Fragment_fa5526a721bdbf7c8914b5b4fcd9c68e, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Center, Container, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { StateContexts } from "/utils/context"
import NextHead from "next/head"



export function Box_2b02a4079f88c19a2624d8efc6067696 () {
  const state__state__blog_state = useContext(StateContexts.state__state__blog_state)


  return (
    <Box sx={{"paddingRight": "3em"}}>
  {state__state__blog_state.posts.map((post, index_26fc52c8305ebf147fbb2efd299f2c71) => (
  <VStack alignItems={`left`} key={index_26fc52c8305ebf147fbb2efd299f2c71} sx={{"paddingTop": "1em"}}>
  <HStack spacing={`3em`} sx={{"paddingTop": "2em"}}>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Box>
  <VStack sx={{"width": "25em"}}>
  <Link as={NextLink} href={("/blog/" + post.slug)} sx={{"marginBottom": "1em", "minHeight": "12em", "width": "25em", "paddingLeft": "3em"}}>
  <Image src={post.thumbnail_url} sx={{"width": "100%", "borderRadius": "15px"}}/>
</Link>
</VStack>
</Box>
</Box>
  <Box>
  <VStack alignItems={`left`} sx={{"marginBottom": "1em", "minHeight": "12em"}}>
  <Link as={NextLink} href={("/blog/" + post.slug)} sx={{"_hover": {"color": "#6495ED"}}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800"}}>
  {post.title}
</Text>
</Link>
  <Text sx={{"color": "#676767"}}>
  {post.subtitle}
</Text>
  <Text sx={{"color": "#676767"}}>
  {(post.date + " ")}
  <Text as={`span`} sx={{"fontWeight": "bold"}}>
  {post.tags}
</Text>
</Text>
  <Link as={NextLink} href={("/blog/" + post.slug)} sx={{"_hover": {"textDecoration": "none"}}}>
  <Button size={`sm`} sx={{"bg": "white", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "border": "2px solid black", "_hover": {"boxShadow": "0 0 .12em .07em #6495ED, 0 0 .25em .11em #6495ED"}, "width": "100px"}}>
  {`Read More`}
</Button>
</Link>
</VStack>
</Box>
</HStack>
</VStack>
))}
</Box>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Center>
  <VStack sx={{"width": "100%"}}>
  <Box sx={{"backdropFilter": "blur(10px)", "paddingY": ["0.8em", "0.8em", "0.5em"], "borderBottom": "0.05em solid rgba(100, 116, 139, .2)", "position": "sticky", "width": "100%", "top": "0px", "zIndex": "99"}}>
  <HStack justify={`space-between`} sx={{"paddingX": ["1em", "2em", "5em"]}}>
  <Link as={NextLink} href={`/`} sx={{"_hover": {"textDecoration": "none"}}}>
  <HStack spacing={`1em`}>
  <Image src={`/logo.svg`} sx={{"width": "3.605em", "height": "3.5em"}}/>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Text sx={{"fontSize": ["2.2em", "2.4em", "2.5em"], "fontWeight": 800}}>
  {`Vedvaani`}
</Text>
</Box>
</HStack>
</Link>
  <Fragment_1914b80923a46dd4ca987d26bf099f35/>
</HStack>
</Box>
  <Box sx={{"width": "100%", "paddingTop": "5%"}}>
  <VStack>
  <Box>
  <Box sx={{"textAlign": "center", "lineHeight": "1.15", "paddingBottom": "0.5em", "display": ["none", "block", "block", "block"]}}>
  <Text sx={{"fontSize": "2em", "fontWeight": 700}}>
  {`Blog`}
</Text>
</Box>
  <Box sx={{"textAlign": "center", "lineHeight": "1.15", "paddingBottom": "0.5em", "display": ["block", "none", "none", "none"]}}>
  <Text sx={{"fontSize": "1.5em", "fontWeight": 700}}>
  {`Blog`}
</Text>
</Box>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Container sx={{"color": "grey", "fontSize": "1.25em", "textAlign": "center", "paddingBottom": "3em"}}>
  {`Welcome to your new blog page, built in pure Python.`}
</Container>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <Container sx={{"color": "grey", "fontSize": "1.25em", "textAlign": "center", "paddingBottom": "1.5em"}}>
  {`Welcome to your new blog page, built in pure Python.`}
</Container>
</Box>
  <Fragment_b27b71a131720ae547c288b4dc26736f/>
  <Box_2b02a4079f88c19a2624d8efc6067696/>
</Box>
</VStack>
</Box>
  <Box sx={{"width": "85%"}}>
  <VStack sx={{"paddingTop": "10%"}}>
  <HStack alignItems={`top`} justify={`space-between`} sx={{"color": "#94a3b8", "paddingBottom": "3em", "minWidth": "100%"}}>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <Fragment_71c2f39ed36e931f7598b73f01e24a68/>
</Box>
  <Fragment_bd59c093a60db05436f7baa3eeb855ed/>
  <Fragment_198369e509047a96dfdfd4de2ad2d9f4/>
  <Fragment_1d546a22b29e07e3056f6311b7a98c38/>
</HStack>
  <Fragment_fa5526a721bdbf7c8914b5b4fcd9c68e/>
</VStack>
</Box>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Vedvaani | Blog`}
</title>
  <meta content={`converse with AI characters, with creators also participating the conversations!`} name={`description`}/>
  <meta content={`/preview.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
