import React from 'react';

type Props = {};

function Template1({}: Props) {
  return (
    <main className="w-full max-w-[718px] h-[1010px] bg-white flex">
      <section className="text-white w-[30%] h-full pt-2 bg-[#013C74]">
        <div className="px-3">
          <h1 className="text-[30px]/[35px] font-semibold">John Smith</h1>
          <p className="opacity-80">IT Project Manager</p>
        </div>

        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Personal Info
          </h1>
          <ul className="mt-2 px-3 max-w-[70%] flex flex-col gap-2">
            <li className="text-[13px]">
              <span className="font-medium">Address</span>
              <p className="text-[12px] opacity-80 mt-1">
                134 Rightward Way Portland, ME, 04019
              </p>
            </li>
            <li className="text-[13px]">
              <span className="font-medium">Phone</span>
              <p className="text-[12px] mt-1">774-987-4009</p>
            </li>
            <li className="text-[13px]">
              <span className="font-medium">E-mail</span>
              <p className="text-[12px] opacity-80 mt-1">
                j.smith@uptowork.com
              </p>
            </li>
            <li className="text-[13px]">
              <span className="font-medium">Linkedin</span>
              <p className="text-[12px] opacity-80 mt-1">
                linkedin.com/johnutw
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Skills
          </h1>
          <ul className="mt-2 px-3 flex flex-col gap-2">
            <li className="text-[12px] opacity-80">
              <p>Business Process Improvement</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Vendor Management</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Project Schedulign</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Sales Analysis</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Strategic Planning</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p>Communication Skills</p>
            </li>
          </ul>
        </section>

        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Software
          </h1>
          <ul className="mt-2 px-3 flex flex-col gap-2">
            <li className="text-[12px] opacity-80">
              <p className="font-medium">Microsoft Project</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-full bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Execellent</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">MS Windows Server</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[80%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Very Good</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">Linux/Unix</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[80%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Very Good</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">Microsoft Excel</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[60%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Good</p>
            </li>
          </ul>
        </section>
        <section className="mt-3">
          <h1 className="text-[15px] py-1 px-3 bg-[#002E58] font-medium">
            Languages
          </h1>
          <ul className="mt-2 px-3 flex flex-col gap-2">
            <li className="text-[12px] opacity-80">
              <p className="font-medium">French</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[60%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Intermediate</p>
            </li>
            <li className="text-[12px] opacity-80">
              <p className="font-medium">German</p>
              <div className="relative w-full bg-[#002E5B] h-[8px] mt-1">
                <div className="absolute top-0 left-0 w-[30%] bg-white h-full"></div>
              </div>
              <p className="text-[11px] text-end mt-1">Basic</p>
            </li>
          </ul>
        </section>
      </section>
      <aside></aside>
    </main>
  );
}

export default Template1;
