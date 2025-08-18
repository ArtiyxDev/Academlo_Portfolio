import { useState } from 'react';
import { useLanguage } from '../i18n/hooks';
import useEmailJS from './useEmailJS';

interface ContactForm {
   name: string;
   email: string;
   message: string;
}

export const useContactForm = () => {
   const { t } = useLanguage();
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
         newErrors.name = t('validation.name.required');
      }

      if (!formData.email.trim()) {
         newErrors.email = t('validation.email.required');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         newErrors.email = t('validation.email.invalid');
      }

      if (!formData.message.trim()) {
         newErrors.message = t('validation.message.required');
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
