import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery} from 'react-query'
import { queryNew, querySearch } from "@/db/query";
import Marquee from 'react-marquee-slider';


type Props = {
  name: string;
};

const CardsSection = ({ name }: Props) => {

  const { status, data, error } = useQuery({
    queryKey: ['Cards', name],
    queryFn: () => {
      switch (name) {
        case 'New':
          return queryNew()
        default:
          return querySearch(name)
      }}
  })

  if(status === 'error') <p>Unable To fetch Lectures: {error as string} </p>
  return (
    <section className='w-full p-2 mt-6 mb-4'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-mono'>{name + ' Lectures'}</p>

        <Button variant='link' className='center gap-3' asChild>
          <Link to={
            name === 'New' ? "/" + name : '/'
          }>
            <p>More</p>
            <ArrowRight />
          </Link>
        </Button>
      </div>

      {data ? (
        <div className='flex gap-5 items-center overflow-scroll py-4'>
          {/* @ts-expect-error Lecture */}
          {data.map((lecture: Lecture) => {
            // eslint-disable-directive
            return (
              <Link to={`/play/${lecture.id}`} key={lecture.id}>
              <Card key={lecture.id}>
                <CardHeader className='p-0'>
                  <img
                    src='https://via.placeholder.com/300x200'
                    alt='Album Cover'
                    className='w-[300px] h-48 object-cover rounded-t-md'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle>
                    <Marquee velocity={50}>
                      <p className="text-lg font-bold">{lecture.lecture_title}</p>
                      <span></span>
                    </Marquee>
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{lecture.lecturer_name}</CardDescription>
                  <p className="text-sm mt-2 text-muted-foreground">Duration: { lecture.duration }</p>
                </CardContent>
              </Card>
              </Link>
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
