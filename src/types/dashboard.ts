// Course Name
export type CourseName = {
  id: string;
  name: string;
};

// {"registrationCount":864,"title":"How Was Your Day","purchasedCount":4600,"averageMasteryScore":89.6}
// Summary of Course Data
export type CourseData = {
  registrationCount: number;
  title: string;
  purchasedCount: number;
  averageMasteryScore: number;
};

// Context Type Extended
export type DashboardState = {
  course: CourseName;
  data: CourseData | null;
  isLoading: boolean;
  error: string | null;
};
