import {
  Text,
  Center,
  Heading,
  Stack,
  AspectRatio,
  Tag,
  TagLabel,
  Box,
  Button
} from '@chakra-ui/react'
import { EditIcon, PhoneIcon, CheckCircleIcon } from '@chakra-ui/icons'

import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''

const ProgrammingClass = () => (
  <Layout title="Studio Kura 電子工作教室 | Studio Kura 絵画美術教室（福岡県 糸島市 二丈 西新 武雄 橋本 久留米）">
    <Navigation />
    <Container
      // TODO: Add p5.js script
      height={'300px'}
      bgImage={`https://${cdnDomain}/${cdnDirectory}adults-headercarousel-2.jpg`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    ></Container>
    <Center>
      <Container maxW={['95%', '80%', '70%']}>
        <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
          電子工作教室
        </Heading>
        <Stack direction={['column', 'column', 'row']}>
          <Box minW={'40vw'}>
            <Tag
              size={'lg'}
              key={'lg'}
              borderRadius="full"
              variant="solid"
              colorScheme="yellow"
            >
              <CheckCircleIcon />
              &nbsp;<TagLabel>10年以上の実績 </TagLabel>
            </Tag>
            <Heading mt={'1em'} mb={'1em'}>
              プログラミングをはじめよう
            </Heading>
            <Text mt={'1em'} mb={'1em'}>
              キーボードがまだ打てない方からアプリやウェブサイトを既にリリースされている方まで
            </Text>
            <Button
              as={'a'}
              fontWeight={600}
              color={'white'}
              bg={'blue.500'}
              href={'/trial'}
              _hover={{
                bg: 'blue.400'
              }}
            >
              <EditIcon />
              &nbsp;体験レッスン
            </Button>{' '}
            <Button
              as={'a'}
              fontWeight={600}
              href={'tel:092-325-1773'}
              color={'text'}
              _hover={{
                bg: 'green.100'
              }}
            >
              <PhoneIcon />
              &nbsp;092-325-1773
            </Button>{' '}
          </Box>
          <Box minW={'40vw'}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/Ph9gzC7ytsM"
              />
            </AspectRatio>
          </Box>
        </Stack>
      </Container>
    </Center>
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </Layout>
)

export default ProgrammingClass
