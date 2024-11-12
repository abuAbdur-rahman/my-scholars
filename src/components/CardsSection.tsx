import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Props = {
  name: string;
};

const CardsSection = ({ name }: Props) => {
  return (
    <section className='w-full p-2 mt-6'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-mono'>{name}</p>
        <Button variant='link' className='center gap-3' asChild>
          <Link to={"/" + name}>
            <p>More</p>
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CardsSection;
