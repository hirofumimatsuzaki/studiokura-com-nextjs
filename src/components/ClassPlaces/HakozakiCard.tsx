import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const HakozakiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="箱崎校"
    imageSrc="placecard-hakozaki.jpg"
    linkHref="/hakozaki"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市東区箱崎エリア
  </ClassPlaceCard>
);

export { HakozakiCard };
