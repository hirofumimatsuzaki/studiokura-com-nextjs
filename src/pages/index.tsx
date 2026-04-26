import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuArrowRight, LuMapPin } from 'react-icons/lu';

import {
  BefuCard,
  Hakozaki2Card,
  HakozakiCard,
  HashimotoCard,
  ItoshimaCard,
  KashiiCard,
  KurumeCard,
  MeinohamaCard,
  MomochiCard,
  MotookaCard,
  NagazumiCard,
  NishijinCard,
  OnlineCard,
  OnojyoCard,
  SarayamaCard,
  TakeoCard,
  TomariCard,
} from '@/components/ClassPlaces';
import { ClassTypeCard } from '@/components/ClassTypeCard';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { CardStack, Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';

const Index = () => (
  <Layout title="福岡・糸島の子ども絵画教室と造形教室の無料体験レッスン | Studio Kura">
    <Navigation />
    <Container zIndex={0}>
      <Box
        mt={[6, 8]}
        mb={[8, 10]}
        px={[5, 8]}
        py={[8, 10]}
        bg="white"
        borderRadius="2xl"
        boxShadow="xl"
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="blue.600"
          letterSpacing="0.08em"
          textTransform="uppercase"
        >
          Studio Kuraの子ども絵画造形教室
        </Text>
        <Heading mt={3} size={['xl', '2xl']} lineHeight="1.4">
          福岡・糸島で、近くの教室を見つけて
          <br />
          無料体験レッスンまで迷わず進めます
        </Heading>
        <Text mt={4} maxW="4xl" color="gray.700" fontSize={['md', 'lg']}>
          Studio Kuraは、福岡 絵画教室・糸島 絵画教室を探しているご家庭に向けた
          子ども絵画教室です。絵画だけでなく造形教室や電子工作教室まで、
          好奇心を広げる体験レッスンをご案内しています。
        </Text>
        <Stack direction={['column', 'row']} spacing={4} mt={6} maxW="xl">
          <Button
            as={NextLink}
            href="/trial"
            colorScheme="blue"
            size="lg"
            minH="56px"
            flex={1}
            rightIcon={<LuArrowRight />}
          >
            無料体験レッスンを申し込む
          </Button>
          <Button
            as={NextLink}
            href="/classrooms"
            variant="outline"
            size="lg"
            minH="56px"
            flex={1}
            leftIcon={<LuMapPin />}
          >
            近くの教室を探す
          </Button>
        </Stack>
        <Text mt={4} fontSize="sm" color="gray.600">
          まず教室一覧から場所を確認し、そのまま体験レッスン申込へ進めます。
        </Text>
      </Box>
      <CardStack>
        <ClassTypeCard
          title="子ども絵画造形教室"
          imageSrc="card-kodomo.jpg"
          linkHref="/kids"
          linkText="子ども向けコースを見る"
        >
          Studio Kuraの子ども絵画造形教室では、描く・つくる・試す体験を通じて、
          一人ひとりの発想と表現を育てます。初めての方は無料の体験レッスンから始められます。
        </ClassTypeCard>
        <ClassTypeCard
          title="大人の絵画教室"
          imageSrc="card-otona.jpg"
          linkHref="/adults"
          linkText="大人向けコースを見る"
        >
          Studio Kuraの大人向けクラスは、初心者から経験者まで無理なく続けられる絵画教室です。
          自分のペースで学びたい方に向けて、幅広い表現を楽しめます。
        </ClassTypeCard>
        <ClassTypeCard
          title="電子工作教室"
          imageSrc="card-denshi.jpg"
          linkHref="/programming"
          linkText="電子工作教室を見る"
        >
          ProcessingやArduinoなどを使いながら、つくる楽しさを学べる電子工作教室です。
          アートとテクノロジーの両方に触れたいお子さまにもおすすめです。
        </ClassTypeCard>
      </CardStack>
      <Box mt={8}>
        <Heading mt={'2em'}>教室一覧</Heading>
        <Text mt={3} color="gray.700">
          福岡・糸島を中心に、通いやすい教室を掲載しています。気になる教室が見つかったら、
          各カードの「無料体験レッスン」からすぐにお申し込みいただけます。
        </Text>
      </Box>
      <CardStack>
        <ItoshimaCard />
        <NishijinCard />
        <TakeoCard />
      </CardStack>
      <CardStack>
        <HakozakiCard />
        <Hakozaki2Card />
      </CardStack>
      <CardStack>
        <HashimotoCard />
        <MeinohamaCard />
        <SarayamaCard />
      </CardStack>
      <CardStack>
        <MomochiCard />
        <KashiiCard />
        <MotookaCard />
      </CardStack>
      <CardStack>
        <BefuCard />
        <OnojyoCard />
        <NagazumiCard />
      </CardStack>
      <CardStack>
        <TomariCard />
        <KurumeCard />
        <OnlineCard />
      </CardStack>
      <Footer />
    </Container>
  </Layout>
);

export default Index;
