import { Fragment, useContext, useRef } from "react"
import { Fragment_1914b80923a46dd4ca987d26bf099f35, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Center, Container, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { StateContexts } from "/utils/context"
import { isTrue, refs } from "/utils/state"
import NextHead from "next/head"



export function Fragment_74489b6192a1fd7046509028f251db9f () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(state__state.signed_out) ? (
  <Fragment>
  <Link as={NextLink} href={`https://play.google.com/store/apps/details?id=com.vedvaani.app`}>
  <Button size={`md`} sx={{"bg": "#F5750D", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "border": "2px solid black", "_hover": {"boxShadow": "0 0 .12em .07em #FD0, 0 0 .25em .11em #F5750D"}}}>
  {`Download Now`}
</Button>
</Link>
</Fragment>
) : (
  <Fragment>
  <Link as={NextLink} href={`https://play.google.com/store/apps/details?id=com.vedvaani.app`}>
  <Button size={`md`} sx={{"bg": "#F5750D", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "border": "2px solid black", "_hover": {"boxShadow": "0 0 .12em .07em #FD0, 0 0 .25em .11em #F5750D"}}}>
  {`Download Now`}
</Button>
</Link>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_acb25659f173d949bf56e25b1df7025a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(state__state.signed_out) ? (
  <Fragment>
  <Link as={NextLink} href={`https://play.google.com/store/apps/details?id=com.vedvaani.app`}>
  <Button size={`md`} sx={{"bg": "#F5750D", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "_hover": {"boxShadow": "0 0 .12em .07em #FD0, 0 0 .25em .11em #F5750D"}}}>
  {`Download now!`}
</Button>
</Link>
</Fragment>
) : (
  <Fragment>
  <Link as={NextLink} href={`/dashboard`}>
  <Button size={`sm`} sx={{"bg": "white", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "border": "2px solid white", "_hover": {"boxShadow": "0 0 .12em .07em #6495ED, 0 0 .25em .11em #6495ED"}}}>
  {`Try it for free`}
</Button>
</Link>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {
  const ref_features = useRef(null); refs['ref_features'] = ref_features;

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
  <Box sx={{"paddingTop": "7.5%"}}>
  <VStack spacing={`1em`} sx={{"fontSize": "2em"}}>
  <Box>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Container sx={{"maxWidth": "80%"}}>
  <Text sx={{"fontSize": "1.7em", "fontWeight": 800, "textAlign": "center"}}>
  {`Converse with AI characters, with creators also participating in the conversations!`}
</Text>
</Container>
  <HStack alignItems={`baseline`} justifyContent={`center`} sx={{"width": "100%", "textAlign": "center"}}>
  <Text sx={{"fontSize": "1.8em", "fontWeight": 800, "backgroundImage": "linear-gradient(45deg, #F5750D, #Fd0)", "backgroundClip": "text", "textAlign": "center"}}>
  {`Vedvaani`}
</Text>
  <Text sx={{"fontSize": "1em", "fontWeight": 700, "textAlign": "center"}}>
  {`by`}
</Text>
  <Text sx={{"fontSize": "1.2em", "fontWeight": 700, "textAlign": "center"}}>
  {`discoze`}
</Text>
</HStack>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <Container sx={{"textAlign": "center", "padding": "0px 10px 0px 10px"}}>
  <Text sx={{"fontSize": "1em", "fontWeight": 800}}>
  {`Converse with AI characters, with creators also participating in the conversations!`}
</Text>
</Container>
  <HStack alignItems={`baseline`} justifyContent={`center`} sx={{"width": "100%", "textAlign": "center"}}>
  <Text sx={{"fontSize": "1em", "fontWeight": 800, "backgroundImage": "linear-gradient(45deg, #F5750D, #Fd0)", "backgroundClip": "text", "textAlign": "center", "justifyContent": "center"}}>
  {`Vedvaani`}
</Text>
  <Text sx={{"fontSize": "0.6em", "fontWeight": 700, "textAlign": "center"}}>
  {`by`}
</Text>
  <Text sx={{"fontSize": "0.7em", "fontWeight": 700, "textAlign": "center"}}>
  {`Discoze`}
</Text>
</HStack>
</Box>
</Box>
  <Container sx={{"color": "#F5750D", "fontSize": "0.6em", "textAlign": "center", "fontWeight": "bold"}}>
  {`Get instant voice and text replies from characters at ease.`}
</Container>
  <HStack justify={`center`} shouldWrapChildren={true} spacing={`0.2em`}>
  <Fragment_74489b6192a1fd7046509028f251db9f/>
  <Link as={NextLink} href={`mailto: hello@discoze.com`} sx={{"_hover": {"textDecoration": "none"}}}>
  <Button size={`md`} sx={{"bg": "white", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "border": "2px solid black", "_hover": {"boxShadow": "0 0 .12em .07em #FD0, 0 0 .25em .11em #F5750D"}}}>
  {`Say hello@discoze.com`}
</Button>
</Link>
</HStack>
</VStack>
</Box>
  <Box id={`features`} ref={ref_features} sx={{"paddingTop": "10%", "width": "70%"}}>
  <Box sx={{"textAlign": "center", "lineHeight": "1.15", "paddingBottom": "0.5em", "display": ["none", "block", "block", "block"]}}>
  <Text sx={{"fontSize": "2em", "fontWeight": 700}}>
  {`How it works`}
</Text>
</Box>
  <Box sx={{"textAlign": "center", "lineHeight": "1.15", "paddingBottom": "0.5em", "display": ["block", "none", "none", "none"]}}>
  <Text sx={{"fontSize": "1.5em", "fontWeight": 700}}>
  {`How it works`}
</Text>
</Box>
  <Container sx={{"color": "#F5750D", "fontSize": "1.25em", "textAlign": "center", "paddingBottom": "1.5em"}}>
  {`Users can interact with AI Astrologers, Movie Characters, Career and Love Coaches,Influencers, and even participate in an Adventure Game`}
</Container>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Center>
  <VStack>
  <HStack spacing={`1em`} sx={{"width": "100%"}}>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "18em", "alignItems": "left", "width": "22em", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em", "paddingTop": "2em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Astrology and Horoscope`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Get personalized daily horoscope & free birth chart readings with our astrology app. Explore astrology signs & natal charts today!`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "18em", "alignItems": "left", "width": "22em", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em", "paddingTop": "2em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Truth and Dare Game Questions`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Explore spicy never have I ever & truth or dare questions for adults. Couples edition!`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "18em", "alignItems": "left", "width": "22em", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em", "paddingTop": "2em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Pickup Lines & Relationship Advice`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Elevate your relationship with couples advice and witty pickup lines!`}
</Text>
</VStack>
</Box>
</HStack>
  <HStack spacing={`1em`} sx={{"width": "100%"}}>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "18em", "alignItems": "left", "width": "22em", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em", "paddingTop": "2em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`General Knowledge Questions`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Increase knowledge with Text based General Knowledge Questions.`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "18em", "alignItems": "left", "width": "22em", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em", "paddingTop": "2em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Kaun Banega Crorepati Game`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Play Kaun Banega Crorepati with Amitabh Bachchan`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "18em", "alignItems": "left", "width": "22em", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em", "paddingTop": "2em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Career counseling & Guidance`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Navigate your career path with expert guidance and counseling.`}
</Text>
</VStack>
</Box>
</HStack>
</VStack>
</Center>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <VStack spacing={`1em`}>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "100%", "alignItems": "left", "width": "100%", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Astrology and Horoscope`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Get personalized daily horoscope & free birth chart readings with our astrology app. Explore astrology signs & natal charts today!`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "100%", "alignItems": "left", "width": "100%", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Truth and Dare Game Questions`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Explore spicy never have I ever & truth or dare questions for adults. Couples edition!`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "100%", "alignItems": "left", "width": "100%", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Pickup Lines & Relationship Advice`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Elevate your relationship with couples advice and witty pickup lines!`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "100%", "alignItems": "left", "width": "100%", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`General Knowledge Questions`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Increase knowledge with Text based General Knowledge Questions.`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "100%", "alignItems": "left", "width": "100%", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Kaun Banega Crorepati Game`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Play Kaun Banega Crorepati with Amitabh Bachchan. Text based General Knowledge Questions.`}
</Text>
</VStack>
</Box>
  <Box>
  <VStack sx={{"background": "white", "border": "1px solid #e5e5e5", "borderRadius": "1em", "padding": "2em", "boxShadow": "\n    rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset\n    ", "height": "100%", "alignItems": "left", "width": "100%", "minHeight": "15em", "bg": "rgba(248, 248, 248, .75)", "_hover": {"boxShadow": "\n        rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px\n        "}, "marginBottom": "1em"}}>
  <Text sx={{"fontSize": ["1.8em", "1.9em", "2em"], "fontWeight": "800", "color": "black"}}>
  {`Career counseling & Guidance`}
</Text>
  <Text sx={{"color": "#F5750D"}}>
  {`Navigate your career path with expert guidance and counseling.`}
</Text>
</VStack>
</Box>
</VStack>
</Box>
</Box>
  <Box sx={{"paddingTop": "10%", "width": "100%"}}>
  <Box sx={{"paddingX": ["1em", "2em", "10em"], "fontSize": "1.2em", "paddingY": "4em", "color": "white", "bg": "black"}}>
  <VStack alignItems={`center`} justify={`center`} spacing={`1em`} sx={{"maxWidth": "38em", "marginX": "auto"}}>
  <Heading sx={{"fontWeight": "800", "fontSize": "1.35em", "color": "white"}}>
  {`We respond lightning fast. Say hello@discoze.com`}
</Heading>
  <Fragment_acb25659f173d949bf56e25b1df7025a/>
</VStack>
</Box>
</Box>
  <Box sx={{"width": "85%"}}>
  <VStack sx={{"paddingTop": "10%"}}>
  <HStack alignItems={`top`} justify={`space-between`} sx={{"color": "#94a3b8", "paddingBottom": "3em", "minWidth": "100%"}}>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <Link as={NextLink} href={`/`}>
  <Image src={`/logo.svg`} sx={{"width": ["5.568em", "5.568em", "5.21em"], "height": ["5.4em", "5.4em", "5em"]}}/>
</Link>
</Box>
  <VStack alignItems={`start`}>
  <Text sx={{"color": "#666666"}}>
  {`Product`}
</Text>
  <Link as={NextLink} href={`/#features`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Features`}
</Link>
  <Link as={NextLink} href={`/blog`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Blog`}
</Link>
</VStack>
  <VStack alignItems={`start`}>
  <Text sx={{"color": "#666666"}}>
  {`Social`}
</Text>
  <Link as={NextLink} href={`https://www.instagram.com/vedvaani9/`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Instagram`}
</Link>
  <Link as={NextLink} href={`mailto: hello@discoze.com`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Contact Us`}
</Link>
  <Link as={NextLink} href={`https://github.com/rushout09/discoze_website`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`GitHub`}
</Link>
  <Link as={NextLink} href={`https://twitter.com/Vedvaani_`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Twitter`}
</Link>
</VStack>
  <VStack alignItems={`start`}>
  <Text sx={{"color": "#666666"}}>
  {`Legal`}
</Text>
  <Link as={NextLink} href={`/terms`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Terms & Conditions`}
</Link>
  <Link as={NextLink} href={`/privacy`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Privacy Policy`}
</Link>
  <Link as={NextLink} href={`/cookies`} sx={{"fontWeight": "500", "_hover": {"color": "#6495ED"}}}>
  {`Cookie Policy`}
</Link>
</VStack>
</HStack>
  <HStack justify={`center`} sx={{"color": "#94a3b8", "paddingBottom": "2em", "minWidth": "100%"}}>
  <Text sx={{"fontWeight": "500"}}>
  {`Artificial Intelligence for the Real World`}
</Text>
</HStack>
</VStack>
</Box>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Vedvaani`}
</title>
  <meta content={`converse with AI characters, with creators also participating the conversations!`} name={`description`}/>
  <meta content={`/preview.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
