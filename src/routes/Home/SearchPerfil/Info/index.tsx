import ProfileCard from "../../../../components/ProfileCard";
import { profileDTO } from "../../../../models/data";

type Props = {
  profile: profileDTO;
};

export default function Info({ profile }: Props) {
  return (
      <ProfileCard profile={profile} />

  );
}
