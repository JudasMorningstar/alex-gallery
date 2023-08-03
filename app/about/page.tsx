import Navigation from "@/components/Navigation";
import { getAboutMe } from "@/sanity/lib/utils";

// type Props = {
//   params: { about: string };
// };

export default async function About() {
  const aboutMe = await getAboutMe();

  return (
    <>
      <div className="text-white text-center">{aboutMe.name}</div>
    </>
  );
}
