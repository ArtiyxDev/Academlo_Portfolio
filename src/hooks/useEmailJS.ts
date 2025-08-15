import { init, send } from '@emailjs/browser';
import { useEffect } from 'react';

const useEmailJS = () => {
   useEffect(() => {
      init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
   }, []);

   const sendEmail = async (byName: string, byEmail: string, msg: string) => {
      try {
         const response = await send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
               name: byName,
               email: byEmail,
               message: msg,
            }
         );
         return { success: true, response };
      } catch (error) {
         return { success: false, error };
      }
   };

   return { sendEmail };
};

export default useEmailJS;
