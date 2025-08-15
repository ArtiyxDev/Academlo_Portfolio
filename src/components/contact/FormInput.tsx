import { type IconType } from 'react-icons';

interface FormInputProps {
   icon: IconType;
   type?: 'text' | 'email' | 'textarea';
   placeholder: string;
   value: string;
   onChange: (value: string) => void;
   error?: string;
}

export const FormInput = ({
   icon: Icon,
   type = 'text',
   placeholder,
   value,
   onChange,
   error,
}: FormInputProps) => {
   const isTextArea = type === 'textarea';
   const InputComponent = isTextArea ? 'textarea' : 'input';

   return (
      <fieldset className="flex w-full flex-col gap-1">
         <div
            className={`flex w-full ${isTextArea ? 'items-start' : 'items-center'} gap-2 rounded-xl border border-gray-300 p-2 text-lg`}
         >
            <Icon size={24} className="text-gray-400" />
            <InputComponent
               type={type}
               placeholder={placeholder}
               className="w-full dark:text-gray-200"
               value={value}
               onChange={(e) => onChange(e.target.value)}
            />
         </div>
         {error && (
            <span className="text-left text-sm text-red-500">{error}</span>
         )}
      </fieldset>
   );
};
