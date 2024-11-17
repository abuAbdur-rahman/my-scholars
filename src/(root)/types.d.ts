type Lecture = {
  id: string;
  lecturer_name: string;
  lecture_title: string;
  audio_url: string;
  date_uploaded: string;
  description: string;
  duration: string;
  tags: string;
  category: string;
};
type Lectures = Record<string, Lecture>[]
