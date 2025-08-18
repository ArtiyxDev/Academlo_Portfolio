import { BiUser, BiEnvelope, BiMessage, BiSend } from 'react-icons/bi';
import { FormInput } from './FormInput';
import { useContactForm } from '../../hooks/useContactForm';
import { toast } from 'react-hot-toast';
import ScrollReveal from '../ScrollReveal';
import { useLanguage } from '../../i18n';

export const ContactForm = () => {
   const { t } = useLanguage();
   const { formData, setFormData, errors, isSubmitting, handleSubmit } =
      useContactForm();

   const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const success = await handleSubmit();
      if (success) {
         toast.success(t('contact.form.success'));
      } else {
         toast.error(t('contact.form.error'));
      }
   };

   return (
      <form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
         <ScrollReveal>
            <FormInput
               icon={BiUser}
               placeholder={t('contact.form.name')}
               value={formData.name}
               onChange={(value) =>
                  setFormData((prev) => ({ ...prev, name: value }))
               }
               error={errors.name}
            />
         </ScrollReveal>
         <ScrollReveal>
            <FormInput
               icon={BiEnvelope}
               type="email"
               placeholder={t('contact.form.email')}
               value={formData.email}
               onChange={(value) =>
                  setFormData((prev) => ({ ...prev, email: value }))
               }
               error={errors.email}
            />
         </ScrollReveal>
         <ScrollReveal>
            <FormInput
               icon={BiMessage}
               type="textarea"
               placeholder={t('contact.form.message')}
               value={formData.message}
               onChange={(value) =>
                  setFormData((prev) => ({ ...prev, message: value }))
               }
               error={errors.message}
            />
         </ScrollReveal>
         <ScrollReveal>
            <button
               type="submit"
               className="dark:bg-purple-600dark:text-purple-200 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-300 bg-purple-300 py-3 text-purple-600 enabled:cursor-pointer disabled:opacity-50 dark:border-purple-400 dark:bg-purple-500 dark:text-white"
               disabled={isSubmitting}
            >
               <BiSend size={24} />
               {isSubmitting
                  ? t('contact.form.submitting')
                  : t('contact.form.submit')}
            </button>
         </ScrollReveal>
      </form>
   );
};
