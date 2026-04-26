import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const TomariCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="豕頑｡"
    imageSrc="placecard-tomari.jpg"
    linkHref="/tomari"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・19-1111 遖丞ｲ｡逵檎ｳｸ蟲ｶ蟶よｳ奇ｼ托ｼ抵ｼ托ｼ問・・・豕顔ｬｬ繝ｼ蜈ｬ豌鷹､ｨ
  </ClassPlaceCard>
);

export { TomariCard };
