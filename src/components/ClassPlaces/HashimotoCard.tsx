import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const HashimotoCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="讖区悽譬｡"
    imageSrc="placecard-hashimoto.jpg"
    linkHref="/hashimoto"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶り･ｿ蛹ｺ讖区悽2-27-2 譛ｨ縺ｮ闡峨Δ繝ｼ繝ｫ讖区悽 JEUGIA繧ｫ繝ｫ繝√Ε繝ｼ繧ｻ繝ｳ繧ｿ繝ｼ蜀・
  </ClassPlaceCard>
);

export { HashimotoCard };
