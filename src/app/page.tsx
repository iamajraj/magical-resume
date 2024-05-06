import Link from 'next/link';
import { getTemplateDesign, templatesIds } from '../helpers/getTemplate';

export default function Home() {
  return (
    <main className="flex flex-col gap-5 pb-20 bg-[#191919] text-white">
      <div className="flex gap-5 p-24">
        {templatesIds.map((id) => (
          <Link
            key={id}
            className="text-white h-max border px-4 py-1 rounded-lg hover:-translate-y-[4px] transition-transform active:translate-y-[8px]"
            href={`/resume-templates/${id}`}>
            Visit Template {id}
          </Link>
        ))}
      </div>
      <div className="pb-14">
        <h1 className="text-center text-5xl font-bold">Magical Resume</h1>
        <p className="text-center">Coming Soon</p>
      </div>
      <div className="grid grid-cols-2 px-10 gap-5">
        {templatesIds.map((id) => {
          const isPremium = id === 1;
          const TemplateDesign = getTemplateDesign(id)!;
          return (
            <div key={`template-${id}`} className="h-max">
              <p>Template {id}</p>
              <TemplateDesign isPremium={isPremium} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
