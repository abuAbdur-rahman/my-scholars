import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { Skeleton } from "./ui/skeleton";
import { queryNew, querySearch } from "@/db/query";
import { getRelativeTime } from "@/lib/helpers";
import { useLecture } from "@/hooks/useLectursPlay";
import { Link } from "react-router-dom";

const LectureList = ({ page }: { page: string }) => {

  const { state: { id, isPlaying } } = useLecture()
  const {
    data: lectures,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["Lecture Page", page],
    queryFn: () => {
      if (page === "New") {
        return queryNew();
      } else {
        return querySearch(page);
      }
    },
  });

  if (isError) {
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-30 h-10'>
        <p>
          Error Loading {page} Page : {error as string}
        </p>
      </div>
    </div>;
  }

  if (isLoading) {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <Card key={idx} className='shadow-lg'>
            <CardHeader className='flex items-center gap-4'>
              {/* Skeleton for Avatar */}
              <Skeleton className='h-12 w-12 rounded-full' />
              {/* Skeleton for Title and Description */}
              <div className='flex flex-col gap-2'>
                <Skeleton className='h-4 w-32' />
                <Skeleton className='h-3 w-24' />
              </div>
            </CardHeader>
            <CardContent>
              {/* Skeleton for Description */}
              <Skeleton className='h-3 w-full mb-2' />
              <Skeleton className='h-3 w-5/6 mb-4' />
              {/* Skeleton for Tags */}
              <div className='flex gap-2 mb-4'>
                <Skeleton className='h-6 w-12 rounded' />
                <Skeleton className='h-6 w-16 rounded' />
              </div>
              {/* Skeleton for Actions */}
              <div className='flex justify-between items-center'>
                <Skeleton className='h-3 w-20' />
                <Skeleton className='h-8 w-16 rounded' />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {/* @ts-expect-error Lecture */}
      {lectures?.map((lecture: Lecture) => (
        // eslint-disable-directive

        <Card
          key={lecture.id}
          className='shadow-lg hover:shadow-xl transition-shadow'
        >
          <CardHeader className='flex items-center gap-4'>
            {/* Avatar or Placeholder */}
            <Avatar>
              <AvatarImage
                src='https://via.placeholder.com/300x400'
                alt={lecture.lecturer_name}
              />
              <AvatarFallback>{lecture.lecturer_name[0]}</AvatarFallback>
            </Avatar>
            {/* Lecture Info */}
            <div>
              <CardTitle className='text-xl font-semibold'>
                {lecture.lecture_title}
              </CardTitle>
              <CardDescription className='text-sm text-gray-500'>
                By {lecture.lecturer_name}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            {/* Description */}
            <p className='text-gray-700 text-sm mb-4'>
              {lecture.lecturer_name || "No description available."}
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 mb-4'>
              {lecture.tags?.split(" ").map((tag) => (
                <Badge key={tag} variant='secondary' className='capitalize'>
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className='flex justify-between items-center'>
              <p className='text-xs text-gray-500'>
                Uploaded: {getRelativeTime(lecture.date_uploaded)}
              </p>
              <Button
                variant='link'
                size='lg'
                asChild
              >
                <Link to={'/play/' + lecture.id}>
                  {(isPlaying && (id === lecture.id)) ? "Playing" : "Play"}
              </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LectureList;
