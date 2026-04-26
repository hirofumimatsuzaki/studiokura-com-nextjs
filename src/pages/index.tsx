import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
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
import type { TopMemoMap } from '@/utils/classPlacePage';

const normalizeAvailabilityText = (value: string | null | undefined): string | undefined => {
  if (!value) return undefined;
  const normalized = value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return normalized || undefined;
};

const defaultTopMemos: TopMemoMap = {};

const Index = () => {
  const [topMemos, setTopMemos] = useState<TopMemoMap>(defaultTopMemos);

  useEffect(() => {
    let cancelled = false;

    const loadAvailability = async () => {
      try {
        const response = await fetch('/api/homepage-availability');
        if (!response.ok) return;
        const payload = (await response.json()) as { topMemos?: TopMemoMap };
        if (!cancelled && payload.topMemos) {
          setTopMemos(payload.topMemos);
        }
      } catch {
        // Keep the card-level fallback copy when availability data is unavailable.
      }
    };

    void loadAvailability();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout title="福岡・糸島の子ども絵画教室と造形教室の体験レッスン | Studio Kura">
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
            Studio Kura絵画教室
          </Text>
          <Heading mt={3} size={['xl', '2xl']} lineHeight="1.4">
            福岡・糸島で、創造力を育てる絵画教室
          </Heading>
          <Text mt={4} maxW="4xl" color="gray.700" fontSize={['md', 'lg']}>
            Studio Kura絵画教室は、福岡・糸島エリアで子どもから大人まで参加できる
            絵画・造形教室です。絵画、工作、素材を使った表現、電子工作など、
            幅広い創作体験を通して、一人ひとりの感性と好奇心を育てます。
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
              体験レッスンを申し込む
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
            お近くの教室を探して、体験レッスンにお申し込みいただけます。
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
            一人ひとりの発想と表現を育てます。初めての方は体験レッスンから始められます。
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
          <Heading mt="2em">教室一覧</Heading>
          <Text mt={3} color="gray.700">
            福岡・糸島を中心に、通いやすい教室を掲載しています。気になる教室が見つかったら、
            各カードの「体験レッスン」からすぐにお申し込みいただけます。
          </Text>
        </Box>
        <CardStack>
          <ItoshimaCard availabilityText={normalizeAvailabilityText(topMemos.itoshima)} />
          <NishijinCard availabilityText={normalizeAvailabilityText(topMemos.nishijin)} />
          <TakeoCard availabilityText={normalizeAvailabilityText(topMemos.takeo)} />
        </CardStack>
        <CardStack>
          <HakozakiCard availabilityText={normalizeAvailabilityText(topMemos.hakozaki)} />
          <Hakozaki2Card availabilityText={normalizeAvailabilityText(topMemos.hakozaki2)} />
        </CardStack>
        <CardStack>
          <HashimotoCard availabilityText={normalizeAvailabilityText(topMemos.hashimoto)} />
          <MeinohamaCard availabilityText={normalizeAvailabilityText(topMemos.meinohama)} />
          <SarayamaCard availabilityText={normalizeAvailabilityText(topMemos.sarayama)} />
        </CardStack>
        <CardStack>
          <MomochiCard availabilityText={normalizeAvailabilityText(topMemos.momochi)} />
          <KashiiCard availabilityText={normalizeAvailabilityText(topMemos.kashii)} />
          <MotookaCard availabilityText={normalizeAvailabilityText(topMemos.motooka)} />
        </CardStack>
        <CardStack>
          <BefuCard availabilityText={normalizeAvailabilityText(topMemos.befu)} />
          <OnojyoCard availabilityText={normalizeAvailabilityText(topMemos.onojyo)} />
          <NagazumiCard availabilityText={normalizeAvailabilityText(topMemos.nagazumi)} />
        </CardStack>
        <CardStack>
          <TomariCard availabilityText={normalizeAvailabilityText(topMemos.tomari)} />
          <KurumeCard availabilityText={normalizeAvailabilityText(topMemos.kurume)} />
          <OnlineCard availabilityText={normalizeAvailabilityText(topMemos.online)} />
        </CardStack>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Index;
