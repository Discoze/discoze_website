import { Fragment, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { isTrue } from "/utils/state"
import { Avatar, Badge, Box, Button, Center, Heading, HStack, Image, Link, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text, Tooltip, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { StateContexts } from "/utils/context"
import { useClientSideRouting } from "/utils/client_side_routing"
import NextHead from "next/head"



export default function Component() {
  const routeNotFound = useClientSideRouting()
  const state__state = useContext(StateContexts.state__state)

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Fragment>
  {isTrue(routeNotFound) ? (
  <Fragment>
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
  <Fragment>
  {isTrue(state__state.signed_out) ? (
  <Fragment>
  <HStack spacing={`1em`}>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Link as={NextLink} href={`/#features`} sx={{"color": "#666666", "_hover": {"color": "#6495ED", "textDecoration": "none"}}}>
  <Text>
  {`Features`}
</Text>
</Link>
</Box>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Link as={NextLink} href={`/blog`} sx={{"color": "#666666", "_hover": {"color": "#6495ED", "textDecoration": "none"}}}>
  <Text>
  {`Blog`}
</Text>
</Link>
</Box>
  <Link as={NextLink} href={`https://play.google.com/store/apps/details?id=com.vedvaani.app`} sx={{"_hover": {"textDecoration": "none"}}}>
  <Button size={`sm`} sx={{"bg": "#F5750D", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "black", "marginTop": 0, "_hover": {"boxShadow": "0 0 .12em .07em #FD0, 0 0 .25em .11em #F5750D"}}}>
  {`Download Now`}
</Button>
</Link>
</HStack>
</Fragment>
) : (
  <Fragment>
  <Box>
  <HStack spacing={`1em`}>
  <Fragment>
  {isTrue(!state__state.plan) ? (
  <Fragment>
  <Tooltip label={`You're on a free plan. Upgrade at any time.`}>
  <Badge colorScheme={`green`} variant={`subtle`}>
  {`Free Plan`}
</Badge>
</Tooltip>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Popover closeOnBlur={true}>
  <PopoverTrigger>
  <Button sx={{"_hover": {"background": "transparent"}, "background": "transparent", "paddingX": "0"}}>
  <Avatar size={`sm`}/>
</Button>
</PopoverTrigger>
  <PopoverContent>
  <PopoverHeader>
  <Text sx={{"fontSize": "0.85em", "color": "#606060"}}>
  {`Signed in as `}
  <Text as={`span`}>
  <Text sx={{"fontSize": "0.85em", "color": "black", "fontWeight": "400"}}>
  {state__state.get_user_email}
</Text>
</Text>
</Text>
</PopoverHeader>
  <Link as={NextLink} href={`/dashboard`} sx={{"_hover": {"textDecoration": "none"}}}>
  <PopoverBody sx={{"_hover": {"backgroundColor": "#f8f8f8"}}}>
  <HStack>
  <Image src={`/dashboard.svg`} sx={{"width": "1em"}}/>
  <Text>
  {`Dashboard`}
</Text>
</HStack>
</PopoverBody>
</Link>
  <Link as={NextLink} href={`/signout`} sx={{"_hover": {"textDecoration": "none"}}}>
  <PopoverBody sx={{"_hover": {"backgroundColor": "#f8f8f8"}}}>
  <HStack>
  <Image src={`/signout.svg`} sx={{"width": "1em"}}/>
  <Text>
  {`Sign out`}
</Text>
</HStack>
</PopoverBody>
</Link>
</PopoverContent>
</Popover>
</HStack>
</Box>
</Fragment>
)}
</Fragment>
</HStack>
</Box>
  <Box sx={{"paddingTop": "10%"}}>
  <VStack alignItems={`center`}>
  <Image src={`/search.svg`} sx={{"width": "4em"}}/>
  <Heading sx={{"fontSize": ["2.2em", "2.4em", "2.5em"], "fontWeight": "700"}}>
  {`Page not found`}
</Heading>
  <Text sx={{"color": "#999999"}}>
  {`The page you are looking for does not exist.`}
</Text>
  <Link as={NextLink} href={`/`} sx={{"paddingTop": "1em"}}>
  <Button size={`md`} sx={{"bg": "black", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "white", "marginTop": 0, "border": "2px solid black", "_hover": {"boxShadow": "0 0 .12em .07em #6495ED, 0 0 .25em .11em #6495ED"}, "width": "8em"}}>
  {`Home`}
</Button>
</Link>
</VStack>
</Box>
</VStack>
</Center>
</Fragment>
) : (
  <Fragment>
  
</Fragment>
)}
</Fragment>
  <NextHead>
  <title>
  {`vedvaani | Page not found`}
</title>
  <meta content={`TBD description.`} name={`description`}/>
  <meta content={`/preview.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
