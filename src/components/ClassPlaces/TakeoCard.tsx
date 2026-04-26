import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const TakeoCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="豁ｦ髮・｡"
    imageSrc="placecard-takeo.jpg"
    linkHref="/takeo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・43-0022 菴占ｳ逵梧ｭｦ髮・ｸよｭｦ髮・伴螟ｧ蟄玲ｭｦ髮・271 ARTS ITOYA
  </ClassPlaceCard>
);

export { TakeoCard };
