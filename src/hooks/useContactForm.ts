import { useState } from 'react';
import useEmailJS from './useEmailJS';

interface ContactForm {
   name: string;
   email: string;
   message: string;
}

export const useContactForm = () => {
   const [formData, setFormData] = useState<ContactForm>({
      name: '',
      email: '',
      message: '',
   });
   const [errors, setErrors] = useState<Partial<ContactForm>>({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const { sendEmail } = useEmailJS();

   const validateForm = () => {
      const newErrors: Partial<ContactForm> = {};

      if (!formData.name.trim()) {
         newErrors.name = 'Name is required';
      }

      if (!formData.email.trim()) {
         newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.message.trim()) {
         newErrors.message = 'Message is required';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async () => {
      if (!validateForm()) return false;

      setIsSubmitting(true);
      try {
         const result = await sendEmail(
            formData.name,
            formData.email,
            formData.message
         );
         if (result.success) {
            setFormData({ name: '', email: '', message: '' });
            return true;
         }
         return false;
      } finally {
         setIsSubmitting(false);
      }
   };

   return {
      formData,
      setFormData,
      errors,
      isSubmitting,
      handleSubmit,
   };
};
