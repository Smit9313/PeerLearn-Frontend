import { useFormContext } from 'react-hook-form';

const AcademicInfoStep = () => {
  const { register, formState: { errors } } = useFormContext();
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from(
    { length: 7 }, 
    (_, i) => currentYear + i
  );

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="university" className="block text-sm font-medium text-gray-700">
          University
        </label>
        <div className="mt-1">
          <input
            id="university"
            type="text"
            {...register('academic.university')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your university name"
          />
          {errors.academic?.university && (
            <p className="mt-1 text-sm text-red-600">{errors.academic.university.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700">
          Course/Major
        </label>
        <div className="mt-1">
          <input
            id="course"
            type="text"
            {...register('academic.course')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., Computer Science"
          />
          {errors.academic?.course && (
            <p className="mt-1 text-sm text-red-600">{errors.academic.course.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
          Student ID (Optional)
        </label>
        <div className="mt-1">
          <input
            id="studentId"
            type="text"
            {...register('academic.studentId')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
          Expected Graduation Year
        </label>
        <div className="mt-1">
          <select
            id="graduationYear"
            {...register('academic.graduationYear')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select year</option>
            {graduationYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {errors.academic?.graduationYear && (
            <p className="mt-1 text-sm text-red-600">{errors.academic.graduationYear.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicInfoStep; 