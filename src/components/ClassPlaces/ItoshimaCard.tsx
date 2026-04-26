import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const ItoshimaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="邉ｸ蟲ｶ譬｡"
    imageSrc="placecard-itoshima.jpg"
    linkHref="/itoshima"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    縲・19-1613 遖丞ｲ｡逵檎ｳｸ蟲ｶ蟶ゆｺ御ｸ域收譛ｫ586
  </ClassPlaceCard>
);

export { ItoshimaCard };
