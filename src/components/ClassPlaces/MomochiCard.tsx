import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const MomochiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="逋ｾ驕捺｡"
    imageSrc="placecard-momochi.jpg"
    linkHref="/momochi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶よ掠濶ｯ蛹ｺ逋ｾ驕捺ｵ・-3-70繧ｶ繝ｻ繝ｬ繧ｸ繝・Φ繧ｷ繝｣繝ｫ繧ｹ繧､繝ｼ繝育ｦ丞ｲ｡
    繝悶Μ繧ｸ繧ｹ繝医Φ繧｢繝ｪ繝ｼ繝雁・
  </ClassPlaceCard>
);

export { MomochiCard };
