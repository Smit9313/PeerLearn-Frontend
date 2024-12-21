import * as yup from 'yup';

export const signupSchema = yup.object({
  // Step 1: Basic Info
  email: yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .required('Password is required'),
  profile: yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    bio: yup.string(),
    phoneNumber: yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
    avatar: yup.string().url('Please enter a valid URL'),
    languages: yup.array()
      .of(yup.string())
      .min(1, 'Please select at least one language')
      .required('Languages are required'),
  }),

  // Step 2: Academic Info
  academic: yup.object({
    university: yup.string().required('University name is required'),
    course: yup.string().required('Course is required'),
    studentId: yup.string(),
    graduationYear: yup.number()
      .min(new Date().getFullYear(), 'Graduation year must be in the future')
      .max(new Date().getFullYear() + 6, 'Graduation year seems too far'),
  }),

  // Step 3: Settings
  settings: yup.object({
    language: yup.string().default('en'),
    timezone: yup.string().required('Timezone is required'),
  }),

  // Step 4: Skills
  skillsToTeach: yup.array().of(
    yup.object({
      name: yup.string().required('Skill name is required'),
      proficiencyLevel: yup.string()
        .oneOf(['beginner', 'intermediate', 'advanced', 'expert'], 'Invalid proficiency level')
        .required('Proficiency level is required'),
      category: yup.string().required('Category is required'),
      description: yup.string(),
    })
  ),
  skillsToLearn: yup.array().of(
    yup.object({
      name: yup.string().required('Skill name is required'),
      currentLevel: yup.string()
        .oneOf(['none', 'beginner', 'intermediate'], 'Invalid current level')
        .default('none'),
      targetLevel: yup.string()
        .oneOf(['intermediate', 'advanced', 'expert'], 'Invalid target level')
        .required('Target level is required'),
      category: yup.string().required('Category is required'),
      description: yup.string(),
    })
  ),

  // Step 5: Availability
  availability: yup.array().of(
    yup.object({
      day: yup.string()
        .oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])
        .required('Day is required'),
      slots: yup.array().of(
        yup.object({
          startTime: yup.string().required('Start time is required'),
          endTime: yup.string().required('End time is required'),
        })
      ),
    })
  ),
});
