import { useFormContext, useFieldArray } from 'react-hook-form';
import { Plus, Trash, Clock } from 'lucide-react';

const AvailabilityStep = () => {
  const { register, control, formState: { errors } } = useFormContext();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "availability"
  });

  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  // Generate time slots from 00:00 to 23:30 in 30-minute intervals
  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2).toString().padStart(2, '0');
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const addTimeSlot = (dayIndex) => {
    const slots = fields[dayIndex]?.slots || [];
    if (slots.length < 3) { // Limit to 3 slots per day
      const newSlot = {
        startTime: '09:00',
        endTime: '17:00'
      };
      
      const updatedSlots = [...slots, newSlot];
      if (fields[dayIndex]) {
        // Update existing day's slots
        fields[dayIndex].slots = updatedSlots;
      } else {
        // Add new day with slot
        append({
          day: days[dayIndex],
          slots: [newSlot]
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Availability</h3>
        <p className="text-sm text-gray-500 mb-6">
          Set your weekly availability for teaching and learning sessions. You can add multiple time slots for each day.
        </p>

        <div className="space-y-6">
          {days.map((day, dayIndex) => (
            <div key={day} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-900 capitalize">
                  {day}
                </h4>
                <button
                  type="button"
                  onClick={() => addTimeSlot(dayIndex)}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Slot
                </button>
              </div>

              <div className="space-y-3">
                {fields
                  .find(field => field.day === day)
                  ?.slots.map((slot, slotIndex) => (
                    <div key={slotIndex} className="flex items-center space-x-4">
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Start Time
                          </label>
                          <select
                            {...register(`availability.${dayIndex}.slots.${slotIndex}.startTime`)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                          >
                            {timeSlots.map(time => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            End Time
                          </label>
                          <select
                            {...register(`availability.${dayIndex}.slots.${slotIndex}.endTime`)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                          >
                            {timeSlots.map(time => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const updatedSlots = [...fields[dayIndex].slots];
                          updatedSlots.splice(slotIndex, 1);
                          fields[dayIndex].slots = updatedSlots;
                        }}
                        className="p-1 text-gray-400 hover:text-red-500 mt-6"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                {(!fields.find(field => field.day === day) || 
                  fields.find(field => field.day === day)?.slots.length === 0) && (
                  <div className="text-center py-4 text-sm text-gray-500">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                    No time slots added
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {errors.availability && (
        <p className="mt-2 text-sm text-red-600">
          Please add at least one time slot
        </p>
      )}
    </div>
  );
};

export default AvailabilityStep; 