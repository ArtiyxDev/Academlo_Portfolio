import { useLanguage } from '../../i18n';

export default function Footer() {
   const { t } = useLanguage();

   return (
      <footer>
         <div className="mx-auto w-full border-t border-purple-600 py-4 text-center dark:border-gray-700">
            <p className="text-sm text-gray-500">
               &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
         </div>
      </footer>
   );
}
