import { useFormContext, useFieldArray } from 'react-hook-form';
import { Plus, Trash } from 'lucide-react';

const SkillsStep = () => {
  const { register, control, formState: { errors } } = useFormContext();
  
  const {
    fields: teachingFields,
    append: appendTeaching,
    remove: removeTeaching
  } = useFieldArray({
    control,
    name: "skillsToTeach"
  });

  const {
    fields: learningFields,
    append: appendLearning,
    remove: removeLearning
  } = useFieldArray({
    control,
    name: "skillsToLearn"
  });

  const skillCategories = [
    'Programming',
    'Languages',
    'Mathematics',
    'Science',
    'Arts',
    'Music',
    'Business',
    'Other'
  ];

  const proficiencyLevels = ['beginner', 'intermediate', 'advanced', 'expert'];

  return (
    <div className="space-y-8">
      {/* Skills to Teach */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Skills to Teach</h3>
        <div className="space-y-4">
          {teachingFields.map((field, index) => (
            <div key={field.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        {...register(`skillsToTeach.${index}.name`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                      {errors.skillsToTeach?.[index]?.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.skillsToTeach[index].name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        {...register(`skillsToTeach.${index}.category`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="">Select category</option>
                        {skillCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Proficiency Level
                      </label>
                      <select
                        {...register(`skillsToTeach.${index}.proficiencyLevel`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        {proficiencyLevels.map(level => (
                          <option key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        type="text"
                        {...register(`skillsToTeach.${index}.description`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeTeaching(index)}
                  className="ml-4 p-1 text-gray-400 hover:text-red-500"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendTeaching({ 
              name: '', 
              proficiencyLevel: 'beginner',
              category: '',
              description: ''
            })}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Teaching Skill
          </button>
        </div>
      </div>

      {/* Skills to Learn */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Skills to Learn</h3>
        <div className="space-y-4">
          {learningFields.map((field, index) => (
            <div key={field.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        {...register(`skillsToLearn.${index}.name`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        {...register(`skillsToLearn.${index}.category`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="">Select category</option>
                        {skillCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Current Level
                      </label>
                      <select
                        {...register(`skillsToLearn.${index}.currentLevel`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="none">None</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Target Level
                      </label>
                      <select
                        {...register(`skillsToLearn.${index}.targetLevel`)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeLearning(index)}
                  className="ml-4 p-1 text-gray-400 hover:text-red-500"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendLearning({
              name: '',
              currentLevel: 'none',
              targetLevel: 'intermediate',
              category: '',
              description: ''
            })}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Learning Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsStep; 