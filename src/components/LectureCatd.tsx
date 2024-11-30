import { Link } from "react-router-dom";

interface LectureCardProps {
  lecture: Lecture;
}

const LectureCard: React.FC<LectureCardProps> = ({ lecture }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <h4 className='text-xl font-semibold'>{lecture.lecture_title}</h4>
      <p className='text-sm text-gray-500'>{lecture.lecturer_name}</p>
      <p className='text-xs text-gray-400'>
        Uploaded on: {lecture.date_uploaded}
      </p>
      <p className='mt-2 text-sm text-gray-700'>{lecture.description}</p>
      <div className='flex flex-wrap mt-2'>
        {lecture.tags.split(" ").map((tag, index) => (
          <span
            key={index}
            className='text-xs bg-gray-200 rounded-full px-2 py-1 mr-2 mt-1'
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={`/play/${lecture.id}`}
        className='text-blue-500 mt-4 inline-block hover:underline'
      >
        Play Lecture
      </Link>
    </div>
  );
};

export default LectureCard;
