import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const MeinohamaCard = () => (
  <ClassPlaceCard
    placeName="姪浜校"
    imageSrc="placecard-meinohama.jpg"
    linkHref="/meinohama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市西区姪浜エリア
  </ClassPlaceCard>
);

export { MeinohamaCard };
