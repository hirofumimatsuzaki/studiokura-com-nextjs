import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const OnojyoCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="大野城校"
    imageSrc="placecard-onojyo.jpg"
    linkHref="/onojyo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡県大野城市エリア
  </ClassPlaceCard>
);

export { OnojyoCard };
