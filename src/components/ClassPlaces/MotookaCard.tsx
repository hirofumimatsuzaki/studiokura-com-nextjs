import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const MotookaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="蜈・ｲ｡譬｡"
    imageSrc="placecard-motooka.jpg"
    linkHref="/motooka"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶り･ｿ蛹ｺ蜈・ｲ｡・托ｼ包ｼ呻ｼ・縺後ｄ縺後ｄ髢 蜀・
  </ClassPlaceCard>
);

export { MotookaCard };
