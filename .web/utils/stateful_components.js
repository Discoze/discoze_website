import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Avatar, Badge, Box, Button, Center, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Spinner, Text, Tooltip, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import { CalendarIcon } from "@chakra-ui/icons"




export function Fragment_fd0e7cb8f9fb4669a6805377d925fba0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_cdc02e41f13efc168f96488c8d95cbcb () {
  const state__state = useContext(StateContexts.state__state)


  return (
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
  <Button size={`sm`} sx={{"bg": "#000000", "boxShadow": "rgba(0, 0, 0, 0.08) 0px 4px 12px", "color": "white", "marginTop": 0, "border": "2px solid black", "_hover": {"boxShadow": "0 0 .12em .07em #6495ED, 0 0 .25em .11em #6495ED"}}}>
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
  )
}

export function Fragment_b27b71a131720ae547c288b4dc26736f () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(state__state.show_spinner) ? (
  <Fragment>
  <Center>
  <Spinner size={`xl`} speed={`1.25s`} sx={{"color": "black"}} thickness={5}/>
</Center>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_71c2f39ed36e931f7598b73f01e24a68 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
  <Link as={NextLink} href={`/`}>
  <Image src={`/logo.svg`} sx={{"width": ["5.568em", "5.568em", "5.21em"], "height": ["5.4em", "5.4em", "5em"]}}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_bd59c093a60db05436f7baa3eeb855ed () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
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
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_105957155a47215e41c317a12241c169 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
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
</VStack>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_1d546a22b29e07e3056f6311b7a98c38 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
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
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_fa5526a721bdbf7c8914b5b4fcd9c68e () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
  <HStack justify={`center`} sx={{"color": "#94a3b8", "paddingBottom": "2em", "minWidth": "100%"}}>
  <Text sx={{"fontWeight": "500"}}>
  {`Artificial Intelligence for the Real World`}
</Text>
</HStack>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_41f40e1172d1ee49e8b22b3675402e7c () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
  <CalendarIcon/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Text_3a6aa2c78b2c09908683f057f3bb4588 () {
  const state__state__post_state = useContext(StateContexts.state__state__post_state)


  return (
    <Text as={`span`}>
  {(" " + state__state__post_state.date)}
</Text>
  )
}

export function Fragment_9609cb036f84d4df47f92fe171ec8fd1 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(!state__state.show_spinner) ? (
  <Fragment>
  <Box dangerouslySetInnerHTML={{"__html": "<hr>"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}
