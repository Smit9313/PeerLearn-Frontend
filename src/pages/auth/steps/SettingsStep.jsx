import { useFormContext } from 'react-hook-form';
import { useState, useEffect } from 'react';

const SettingsStep = () => {
  const { register, formState: { errors } } = useFormContext();
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    // Get all available timezones
    const zones = Intl.supportedValuesOf('timeZone');
    setTimezones(zones);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
          Preferred Language
        </label>
        <div className="mt-1">
          <select
            id="language"
            {...register('settings.language')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
          Timezone
        </label>
        <div className="mt-1">
          <select
            id="timezone"
            {...register('settings.timezone')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select timezone</option>
            {timezones.map(timezone => (
              <option key={timezone} value={timezone}>
                {timezone.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SettingsStep; 