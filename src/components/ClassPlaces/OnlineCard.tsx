import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const OnlineCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="オンライン"
    imageSrc="placecard-online.jpg"
    linkHref="/online"
    adultsClass={false}
    kidsClass={false}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    オンラインで受講できる少人数レッスンです。
  </ClassPlaceCard>
);

export { OnlineCard };
