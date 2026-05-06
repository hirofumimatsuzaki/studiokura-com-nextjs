import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const OnlineCard = () => (
  <ClassPlaceCard
    placeName="オンライン"
    imageSrc="placecard-online.jpg"
    linkHref="/online"
    adultsClass={false}
    kidsClass={false}
    programmingClass={true}
  >
    オンラインで受講できる少人数レッスンです。
  </ClassPlaceCard>
);

export { OnlineCard };
