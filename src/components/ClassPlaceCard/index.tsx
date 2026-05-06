import { Box, Button, Center, Heading, Image, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type ReactNode } from 'react';
import { LuCalendarCheck, LuChevronRight, LuMapPin } from 'react-icons/lu';

type ClassPlaceCardProps = {
  placeName: string;
  imageSrc: string;
  linkHref: string;
  adultsClass?: boolean;
  kidsClass?: boolean;
  programmingClass?: boolean;
  children?: ReactNode;
};

const ClassPlaceCard = (props: ClassPlaceCardProps) => {
  const {
    placeName,
    imageSrc,
    linkHref,
    adultsClass,
    kidsClass,
    programmingClass,
    children,
  } = props;
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

  return (
    <Center py={6} px={4}>
      <Box
        minW="320px"
        maxW="320px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="xl"
        p={0}
        pb={4}
      >
        <Image
          src={`https://${cdnDomain}/${cdnDirectory}${imageSrc}`}
          alt={`${placeName}の写真`}
          mb={4}
          minW="100%"
          pos="relative"
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Box px={4}>
          <Heading fontSize="2xl" fontFamily="body">
            <Button
              href={linkHref}
              as={NextLink}
              w="full"
              justifyContent="space-between"
              variant="outline"
              minH="52px"
              px={4}
            >
              {placeName}
              <LuChevronRight />
            </Button>
          </Heading>
          <Box py={4}>
            {adultsClass && (
              <>
                <Tag size="md" variant="solid" colorScheme="red">
                  大人の絵画教室
                </Tag>{' '}
              </>
            )}
            {kidsClass && (
              <>
                <Tag size="md" variant="solid" colorScheme="yellow">
                  子ども絵画教室
                </Tag>{' '}
              </>
            )}
            {programmingClass && (
              <>
                <Tag size="md" variant="solid" colorScheme="green">
                  電子工作教室
                </Tag>{' '}
              </>
            )}
          </Box>
          <Text color={useColorModeValue('gray.700', 'gray.400')} textAlign="left">
            <>{children}</>
          </Text>
          <Stack direction={['column', 'row']} spacing={3}>
            <Button
              as={NextLink}
              href="/trial"
              colorScheme="blue"
              leftIcon={<LuCalendarCheck />}
              flex={1}
              minH="52px"
            >
              体験レッスン
            </Button>
            <Button
              as={NextLink}
              href={linkHref}
              variant="ghost"
              leftIcon={<LuMapPin />}
              flex={1}
              minH="52px"
            >
              教室詳細を見る
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export { ClassPlaceCard };
