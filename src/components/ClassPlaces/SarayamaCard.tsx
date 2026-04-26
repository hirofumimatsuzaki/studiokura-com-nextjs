import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const SarayamaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="逧ｿ螻ｱ譬｡"
    imageSrc="placecard-sarayama.jpg"
    linkHref="/sarayama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・11-1365 遖丞ｲ｡蟶ょ漉蛹ｺ逧ｿ螻ｱ2-1-57
  </ClassPlaceCard>
);

export { SarayamaCard };
