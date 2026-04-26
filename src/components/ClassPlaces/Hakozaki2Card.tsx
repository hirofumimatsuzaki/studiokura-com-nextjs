import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const Hakozaki2Card = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="箱崎校II"
    imageSrc="placecard-hakozaki2.jpg"
    linkHref="/hakozaki2"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市東区箱崎エリア
  </ClassPlaceCard>
);

export { Hakozaki2Card };
