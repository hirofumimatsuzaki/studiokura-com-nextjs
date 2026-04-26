import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const OnlineCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="繧ｪ繝ｳ繝ｩ繧､繝ｳ譬｡"
    imageSrc="placecard-online.jpg"
    linkHref="/online"
    adultsClass={false}
    kidsClass={false}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    窶ｻ skype繧剃ｽｿ縺｣縺・~4莠ｺ縺ｮ蟆台ｺｺ謨ｰ蛻ｶ繝ｬ繝・せ繝ｳ縺ｧ縺吶・
  </ClassPlaceCard>
);

export { OnlineCard };
