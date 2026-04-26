import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const MeinohamaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="蟋ｪ豬懈｡"
    imageSrc="placecard-meinohama.jpg"
    linkHref="/meinohama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・19-0002 遖丞ｲ｡逵檎ｦ丞ｲ｡蟶り･ｿ蛹ｺ蟋ｪ縺ｮ豬懶ｼ謎ｸ∫岼・凪・・難ｼ・繝上う繝・鴻蟲ｰ
  </ClassPlaceCard>
);

export { MeinohamaCard };
