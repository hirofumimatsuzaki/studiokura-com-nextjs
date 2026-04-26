import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const NagazumiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="長住校"
    imageSrc="placecard-nagazumi.jpg"
    linkHref="/nagazumi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市南区長住エリア
  </ClassPlaceCard>
);

export { NagazumiCard };
