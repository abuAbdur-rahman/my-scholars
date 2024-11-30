import LectureCard from "@/components/LectureCatd";

let lecturesData: Lecture[]

const History = () => {

  return (
    <div className='p-6'>
      <h2 className='text-3xl font-semibold mb-4'>Your Listening History</h2>
      <div className='space-y-4'>
        {lecturesData.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </div>
  );
}

export default History