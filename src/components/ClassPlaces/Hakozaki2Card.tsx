import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const Hakozaki2Card = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="邂ｱ蟠守ｬｬ莠梧｡"
    imageSrc="placecard-hakozaki2.jpg"
    linkHref="/hakozaki2"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶よ擲蛹ｺ邂ｱ蟠趣ｼ剃ｸ∫岼・托ｼ絶・・難ｼ・
  </ClassPlaceCard>
);

export { Hakozaki2Card };
