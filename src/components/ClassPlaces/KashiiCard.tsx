import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const KashiiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="鬥呎､取｡"
    imageSrc="placecard-kashii.jpg"
    linkHref="/kashii"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・13-0016 遖丞ｲ｡逵檎ｦ丞ｲ｡蟶よ擲蛹ｺ鬥呎､取ｵ懶ｼ謎ｸ∫岼・托ｼ停・・・繧､繧ｪ繝ｳ鬥呎､取ｵ懷ｺ・
    JEUGIA繧ｫ繝ｫ繝√Ε繝ｼ繧ｻ繝ｳ繧ｿ繝ｼ蜀・
  </ClassPlaceCard>
);

export { KashiiCard };
