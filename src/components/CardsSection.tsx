import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getWords } from "@/lib/helpers";


type Props = {
  name: string;
  lectures: Lectures | undefined;
};

const CardsSection = ({ name, lectures }: Props) => {
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

      {lectures ? (
        <div className='flex gap-5 items-center overflow-scroll'>
          {/* @ts-expect-error Lecture */}
          {lectures.map((lecture: Lecture) => {
            // eslint-disable-directive
            return (
              <Card key={lecture.id}>
                <CardContent className='truncatej'>
                  <p>{getWords(lecture.lecture_title)}</p>
                </CardContent>
                <CardFooter>{lecture.duration}</CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className='flex gap-5 items-center overflow-scroll'>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className='flex flex-col space-y-3'>
              <Skeleton className='h-[125px] w-[150px] rounded-xl' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-[250px]' />
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CardsSection;
