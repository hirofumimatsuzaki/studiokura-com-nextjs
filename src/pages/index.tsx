import { Heading } from '@chakra-ui/react'

import { Layout, CardStack } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ClassTypeCard } from '@/components/ClassTypeCard'
import {
  BefuCard,
  HakozakiCard,
  HashimotoCard,
  ItoshimaCard,
  KaratsuCard,
  KashiiCard,
  KasuyaCard,
  KurumeCard,
  MomochiCard,
  MotookaCard,
  NagazumiCard,
  NishijinCard,
  OnlineCard,
  OnojyoCard,
  SarayamaCard,
  TakeoCard
} from '@/components/ClassPlaces'

const Index = () => (
  <Layout>
    <Navigation />
    <Container height="100vh" pt="12em">
      <Main>
        <CardStack>
          <ClassTypeCard
            title="こども絵画造形教室"
            imageSrc="card-kodomo.jpg"
            linkHref="/kids"
          >
            スタジオ
            クラ絵画造形教室は、現代の子どもを取り巻く環境の中で、どんどん減ってきている創造的に遊ぶ場、創作活動する場を子どもたちに提供しています。
            発展段階に応じたカリキュラムを通じて、こどもの心をのびのびと育て、創造性をぐんぐん伸ばします。
          </ClassTypeCard>
          <ClassTypeCard
            title="大人の絵画教室"
            imageSrc="card-otona.jpg"
            linkHref="/adults"
          >
            Studio
            Kuraの絵画教室は全く初めての方も気軽にいらしていただけるアトリエです。
            当教室では様々な素材(アクリル，水彩，油絵，鉛筆，木炭など）を使った絵画表現を習得し、楽しく美術に親しんでいただくことを目的としています。
          </ClassTypeCard>
          <ClassTypeCard
            title="電子工作教室"
            imageSrc="card-denshi.jpg"
            linkHref="/programming"
          >
            Studio
            Kuraの電子工作室ではProcessingやArduino、Scratchなどのプログラミング言語を使って制作します。プログラミングの基礎を楽しく学びながら、ゲームやアプリ、アート作品を作ります。
            大人の方もお子様も受講できます。
          </ClassTypeCard>
        </CardStack>
        <Heading>教室一覧</Heading>
        <CardStack>
          <ItoshimaCard />
          <NishijinCard />
          <TakeoCard />
        </CardStack>
        <CardStack>
          <KaratsuCard />
          <HakozakiCard />
          <HashimotoCard />
        </CardStack>
        <CardStack>
          <SarayamaCard />
          <MomochiCard />
        </CardStack>
        <CardStack>
          <KashiiCard />
          <MotookaCard />
          <BefuCard />
        </CardStack>
        <CardStack>
          <KurumeCard />
          <KasuyaCard />
        </CardStack>
        <CardStack>
          <OnojyoCard />
          <NagazumiCard />
          <OnlineCard />
        </CardStack>
      </Main>
      <Footer />
    </Container>
  </Layout>
)

export default Index
