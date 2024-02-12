import { Fragment, useContext } from "react"
import { Fragment_1914b80923a46dd4ca987d26bf099f35, Fragment_198369e509047a96dfdfd4de2ad2d9f4, Fragment_1d546a22b29e07e3056f6311b7a98c38, Fragment_41f40e1172d1ee49e8b22b3675402e7c, Fragment_71c2f39ed36e931f7598b73f01e24a68, Fragment_9609cb036f84d4df47f92fe171ec8fd1, Fragment_b27b71a131720ae547c288b4dc26736f, Fragment_bd59c093a60db05436f7baa3eeb855ed, Fragment_fa5526a721bdbf7c8914b5b4fcd9c68e, Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Text_3a6aa2c78b2c09908683f057f3bb4588 } from "/utils/stateful_components"
import { Box, Center, Container, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { StateContexts } from "/utils/context"
import { isTrue } from "/utils/state"
import Script from "next/script"
import NextHead from "next/head"



export function Text_393771cf45b38c8cacebfd56d9681d5d () {
  const state__state__post_state = useContext(StateContexts.state__state__post_state)


  return (
    <Text sx={{"fontSize": "1.5em", "fontWeight": 700}}>
  {state__state__post_state.title}
</Text>
  )
}

export function Container_529ab6cc69251699a6079cbb00821249 () {
  const state__state__post_state = useContext(StateContexts.state__state__post_state)


  return (
    <Container sx={{"color": "grey", "fontSize": "1.25em", "textAlign": "center", "paddingBottom": "0.4em"}}>
  {state__state__post_state.subtitle}
</Container>
  )
}

export function Box_a8d64f8ab67e68e49454eba0812d8865 () {
  const state__state__post_state = useContext(StateContexts.state__state__post_state)


  return (
    <Box>
  {state__state__post_state.paragraphs.map((paragraph, index_32e435454eaa635940cb06e6dac3172b) => (
  <Box key={index_32e435454eaa635940cb06e6dac3172b} sx={{"paddingY": "0.5em"}}>
  {paragraph.map((post_content, index_015200eaa8db03dc0b1f00136ed1a6e7) => (
  <Text as={`span`} key={index_015200eaa8db03dc0b1f00136ed1a6e7}>
  <Fragment>
  {isTrue(post_content.is_heading) ? (
  <Fragment>
  {isTrue(post_content.is_h1) ? (
  <Fragment>
  <Text sx={{"backgroundImage": "linear-gradient(371.68deg, #7F00FF 25%, #6495ED 50%)", "backgroundClip": "text", "fontSize": ["2.2em", "2.4em", "2.5em"], "fontWeight": "800"}}>
  {post_content.content}
</Text>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_h2) ? (
  <Fragment>
  <Text sx={{"backgroundImage": "linear-gradient(371.68deg, #7F00FF 25%, #6495ED 50%)", "backgroundClip": "text", "fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800"}}>
  {post_content.content}
</Text>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_h3) ? (
  <Fragment>
  <Text sx={{"fontSize": "1.35em", "fontWeight": "800"}}>
  {post_content.content}
</Text>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_h4) ? (
  <Fragment>
  <Text sx={{"fontSize": "1.1em", "fontWeight": "800"}}>
  {post_content.content}
</Text>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_image) ? (
  <Fragment>
  <Box>
  <Center>
  <Image src={post_content.url} sx={{"width": "100%", "borderRadius": "5em", "paddingY": "2em"}}/>
</Center>
</Box>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_embed) ? (
  <Fragment>
  <Script strategy={`afterInteractive`}>
  {`window.twttr = (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {}; if (d.getElementById(id)) return t; js = d.createElement(s); js.id = id; js.src = "https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); t._e = []; t.ready = function(f) { t._e.push(f); }; return t; }(document, "script", "twitter-wjs"));`}
</Script>
  <Box dangerouslySetInnerHTML={{"__html": post_content.html}}/>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_text) ? (
  <Fragment>
  <Box dangerouslySetInnerHTML={{"__html": post_content.html}}/>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_ul) ? (
  <Fragment>
  <Box dangerouslySetInnerHTML={{"__html": post_content.html}}/>
</Fragment>
) : (
  <Fragment>
  {isTrue(post_content.is_ol) ? (
  <Fragment>
  <Box dangerouslySetInnerHTML={{"__html": post_content.html}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
)}
</Fragment>
</Text>
))}
</Box>
))}
</Box>
  )
}

export function Container_2e93ed34471c0ffd2c9749dd94f6dec8 () {
  const state__state__post_state = useContext(StateContexts.state__state__post_state)


  return (
    <Container sx={{"color": "grey", "fontSize": "1.25em", "textAlign": "center", "paddingBottom": "0.5em"}}>
  {state__state__post_state.subtitle}
</Container>
  )
}

export function Text_18c24794a7f62de5b615926ae0e2990c () {
  const state__state__post_state = useContext(StateContexts.state__state__post_state)


  return (
    <Text sx={{"fontSize": "2em", "fontWeight": 700}}>
  {state__state__post_state.title}
</Text>
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
  <Box sx={{"width": "60%"}}>
  <Box sx={{"textAlign": "center", "lineHeight": "1.15", "paddingBottom": "0.5em", "display": ["none", "block", "block", "block"]}}>
  <Text_18c24794a7f62de5b615926ae0e2990c/>
</Box>
  <Box sx={{"textAlign": "center", "lineHeight": "1.15", "paddingBottom": "0.4em", "display": ["block", "none", "none", "none"]}}>
  <Text_393771cf45b38c8cacebfd56d9681d5d/>
</Box>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Container_2e93ed34471c0ffd2c9749dd94f6dec8/>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <Container_529ab6cc69251699a6079cbb00821249/>
</Box>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Center>
  <HStack sx={{"color": "black", "fontSize": "1.1em", "fontWeight": "435", "textAlign": "center", "paddingBottom": "1.5em"}}>
  <Fragment_41f40e1172d1ee49e8b22b3675402e7c/>
  <Text_3a6aa2c78b2c09908683f057f3bb4588/>
</HStack>
</Center>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <Center>
  <HStack sx={{"color": "black", "fontSize": "0.95em", "fontWeight": "435", "textAlign": "center", "paddingBottom": "1.1em"}}>
  <Fragment_41f40e1172d1ee49e8b22b3675402e7c/>
  <Text_3a6aa2c78b2c09908683f057f3bb4588/>
</HStack>
</Center>
</Box>
  <Box sx={{"paddingBottom": "1.5em", "display": ["none", "block", "block", "block"]}}>
  <Fragment_9609cb036f84d4df47f92fe171ec8fd1/>
</Box>
  <Box sx={{"paddingBottom": "1.1em", "display": ["block", "none", "none", "none"]}}>
  <Fragment_9609cb036f84d4df47f92fe171ec8fd1/>
</Box>
  <Fragment_b27b71a131720ae547c288b4dc26736f/>
  <Box_a8d64f8ab67e68e49454eba0812d8865/>
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
