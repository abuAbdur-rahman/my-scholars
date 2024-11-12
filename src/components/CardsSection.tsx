import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";

type Props = {
  name: string;
};

const CardsSection = ({ name }: Props) => {
  const data: {
    name: string;
    link: string;
    description: string;
    url: string;
  }[] = [];
  return (
    <section className='w-full p-2 mt-6 mb-4'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-mono'>{name}</p>
        <Button variant='link' className='center gap-3' asChild>
          <Link to={"/" + name}>
            <p>More</p>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className='flex gap-5 items-center overflow-scroll'>
        {data.map((data) => {
          return (
            <Card>
              <CardContent>
                <img src={data.url} />
                <p>{data.name}</p>
              </CardContent>
              <CardFooter>{data.description}</CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default CardsSection;
