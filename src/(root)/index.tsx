import Hero from "@/components/ImageHero";
import CardsSection from "@/components/CardsSection";
import { lecturer_Names } from "@/constants/lecturer";
//import { LoaderCircle } from "lucide-react";

const SECTIONS: string[] = [
  "New",
  ...lecturer_Names,
];
const Home = () => {
  /* const [lectures, setlectures] = useState<Lectures | undefined>(undefined);
  const [error, setError] = useState<unknown>("");
  useEffect(() => {
    const fetchAllLectures = async () => {
      try {
        const lectures = await fetchLectures();
        if (lectures) setlectures(lectures);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchAllLectures();
  }, []);
  */
  return (
    <div className='flex flex-col gap-10 px-2 py-6'>
      <Hero />
      {SECTIONS.map((name) => {
        return <CardsSection key={name} name={name} />;
      })}
      {/*(
        <div className="center w-full h-[200px]">
          <LoaderCircle className='animate-spin' />
        </div>
      )*/}
    </div>
  );
};

export default Home;
