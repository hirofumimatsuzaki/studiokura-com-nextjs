import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const MeinohamaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="姪浜校"
    imageSrc="placecard-meinohama.jpg"
    linkHref="/meinohama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市西区姪浜エリア
  </ClassPlaceCard>
);

export { MeinohamaCard };
