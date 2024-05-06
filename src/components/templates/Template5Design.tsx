import React from 'react';
import Img from '../Img';

type Props = {
  isPremium?: boolean;
};

export default function Template5Design({ isPremium }: Props) {
  return (
    <main className="w-full max-w-[800px] h-max flex flex-col bg-white text-black relative">
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}

      {/* INFO */}
      <section className="flex justify-between gap-5 bg-[#34678C] px-5 py-7 pb-6">
        {/* USER INFO */}
        <div>
          <h1 className="text-4xl text-white">Mohsinzxb Sorari</h1>
          <p className="text-[#F26464]">Professional Title</p>
          <p className="mt-2 text-white/70 text-[13px]">
            Short and engaging pitch about yourself.
          </p>
        </div>
        {/* USER PROFILE */}
        <div className="w-[120px] h-[120px] rounded-full border-[5px] border-[#F26464] overflow-hidden">
          <Img
            src="/profile.webp"
            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div>
      </section>
      {/* SOCIAL INFO */}
      <section className="bg-[#2B5670] flex items-center gap-5 text-[12px] text-white justify-center py-2">
        <div className="flex items-center gap-1">
          <Img src="/mail.svg" alt="mail" className="w-3" />
          <p> mohsinb.alshammari@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <Img src="/phone.svg" alt="phone" className="w-3" />
          <p>Phone Number</p>
        </div>
      </section>

      {/* WORK EXPERIENCE | SKILLS */}
      <div className="flex justify-between gap-10 pt-5 px-7 pb-5">
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            WORK EXPERIENCE
          </h1>

          <div className="mt-3 flex flex-col gap-3">
            <div>
              <p className="font-bold">Title/Position</p>
              <p>Workplace/Company</p>
            </div>
          </div>
        </section>
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            SKILLS
          </h1>

          <div className="mt-3">
            <p className="bg-[#2B567080] text-white text-[13px] w-max px-2 rounded-md">
              Skill
            </p>
          </div>
        </section>
      </div>

      {/* CERTIFICATES | VOLUNTEER EXPERIENCE */}
      <div className="flex justify-between gap-10 pt-5 px-7 pb-5">
        {/* CERTIFICATES */}
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            CERTIFICATES
          </h1>

          <div className="mt-3 text-[14px]">
            <p>Certificate Name</p>
          </div>
        </section>

        {/* VOLUNTEER EXPERIENCE */}
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            VOLUNTEER EXPERIENCE
          </h1>

          <div className="mt-3 flex flex-col gap-3">
            <div>
              <p className="font-bold">Title/Position</p>
              <p>Workplace/Company</p>
            </div>
          </div>
        </section>
      </div>

      {/* EDUCATION |  ORGANIZATIONS | HONOR AWARDS | LANGUAGES | SUPPORTED CAUSES | INTERESTS */}
      <div className="flex justify-between gap-10 pt-5 px-7 pb-10">
        {/* EDUCATION */}
        <section className="w-1/2">
          <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
            EDUCATION
          </h1>

          <div className="mt-3 flex flex-col gap-3">
            <div>
              <p className="font-bold">Student Program</p>
              <p>Institution/Place of Education</p>
            </div>
          </div>
        </section>

        {/* ORGANIZATIONS | HONOR AWARDS | LANGUAGES | SUPPORTED CAUSES | INTERESTS */}
        <div className="w-1/2">
          {/* ORGANIZATIONS */}
          <section className="pb-10">
            <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
              ORGANIZATIONS
            </h1>

            <div className="mt-3 text-[14px]">
              <p>Organization Name</p>
            </div>
          </section>
          {/* HONOR AWARDS */}
          <section className="pb-10">
            <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
              HONOR AWARDS
            </h1>

            <div className="mt-3 flex flex-col gap-3">
              <div className="text-[14px]">
                <p className="font-bold">Title/Award Name</p>
                <p className="text-gray-600 italic text-[12px]">
                  Name of the Institution that issued/awarded it
                </p>
              </div>
            </div>
          </section>
          {/* LANGUAGES */}
          <section className="pb-10">
            <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
              LANGUAGES
            </h1>

            <div className="mt-3 flex flex-col gap-3">
              <div className="text-[14px]">
                <p>Language</p>
                <p className="text-[#F26464] italic text-[12px]">
                  Full Professional Proficiency
                </p>
              </div>
            </div>
          </section>
          {/* SUPPORTED CAUSES */}
          <section className="pb-10">
            <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
              SUPPORTED CAUSES
            </h1>

            <div className="mt-3 flex gap-3 text-[13px]">
              <div className="border-2 px-2 py-1 rounded-md font-medium">
                Cause
              </div>
            </div>
          </section>
          {/* INTERESTS */}
          <section className="pb-10">
            <h1 className="w-max border-b-[3px] border-b-[#F26464] text-[#F26464] font-bold">
              INTERESTS
            </h1>

            <div className="mt-3 flex gap-3 text-[13px]">
              <div className="border-2 px-2 py-1 rounded-md font-medium">
                Interest
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
