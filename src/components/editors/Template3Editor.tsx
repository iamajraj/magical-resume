'use client';

import React, { ChangeEvent, ReactNode, useState } from 'react';
import EditorInput from '../shared/EditorInput';
import Template3Design from '../templates/Template3Design';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';

type Props = {};

const DEFAULT_DATA = {
  info: {
    name: 'Mohsin Alshammari',
    title: 'Product Manager',
  },
  socialInfo: {
    linkedin: 'mohsinalshammari',
    address: 'Santa Monica, California',
    phone: '7759978644',
    email: 'mohsinalshammari.jobs@gmail.com',
  },
  summary: `Experienced Product Manager with a proven track record of successfully
  launching and managing products from ideation to market. Skilled in
  conducting market research, analyzing data, and developing product
  strategies that align with business objectives. Adept at collaborating
  cross-functionally with teams such as engineering, design, sales, and
  marketing to ensure product success. Strong communication skills and
  ability to lead teams towards achieving goals.`,
  experience: [
    {
      title: 'Founder',
      company: 'Magical Resume',
      location: 'San Francisco, California, United States',
      start: '2022',
      end: '2023',
      points: [
        `Partnered in the development of an AI-enabled resume writing
        software, improving resume generation, personal branding,
        and ATS compatibility.`,
        `Guided the product journey from conception to launch,
        maintaining alignment with market needs and company goals.`,
        `Facilitated the creation of more than 3000 personalized
        resumes using AI technology.`,
        `Administered A/B testing and optimized UI designs,
        contributing to a 20% enhancement in user experience scores
        and a 15% lift in conversion rates.`,
        `Orchestrated product development using visual roadmaps,
        ensuring timely introduction of new features while
        continually refining them based on customer feedback and API
        integration.`,
      ],
    },
  ],
  education: [
    {
      institute: 'University of Nevada, Reno',
      degree: 'Master of Business Administration - MBA (GPA: 3.8)',
      passingYear: '2018',
    },
  ],
  skills: [
    'Ai Applications',
    'Agile Management',
    'JavaScript',
    'Ai programming and content writing',
    'MongoDB',
    'Roadmaps',
  ],
};

export type Template3DataType = typeof DEFAULT_DATA;

function Template3Editor({}: Props) {
  const [data, setData] = useState<Template3DataType>(DEFAULT_DATA);

  return (
    <div className="flex gap-5">
      <Template3SidePanel data={data} setData={setData} />
      <div className="w-full overflow-x-scroll">
        <Template3Design data={data} />
      </div>
    </div>
  );
}

function Template3SidePanel({
  data,
  setData,
}: {
  data: Template3DataType;
  setData: React.Dispatch<React.SetStateAction<Template3DataType>>;
}) {
  const saveAsPDF = () => {
    htmlToImage
      .toCanvas(document.getElementById('template-3')!, { quality: 1 })
      .then(function (canvas) {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const imgProps = pdf.getImageProperties(canvas.toDataURL());
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(
          canvas.toDataURL(),
          'PNG',
          0,
          0,
          pdfWidth,
          pdfHeight,
          'DKJFDSKF',
          'NONE'
        );
        pdf.save('download.pdf');
      });
  };

  const handleExperienceChange = (experience: any[]) => {
    setData((data) => ({
      ...data,
      experience: experience,
    }));
  };

  const handleEducationChange = (education: any[]) => {
    setData((data) => ({
      ...data,
      education: education,
    }));
  };

  const handleSkillChange = (skills: any[]) => {
    setData((data) => ({
      ...data,
      skills: skills,
    }));
  };

  return (
    <div className="shrink-0 min-w-[250px] text-white w-[25%] border-r pr-4">
      {/* BASIC INFO */}
      <ContainerWrapper title="Basic Info">
        <BasicInfoEditor data={data} setData={setData} />
      </ContainerWrapper>
      {/* SOCIAL INFO */}
      <ContainerWrapper title="Social Info">
        <SocialInfoEditor data={data} setData={setData} />
      </ContainerWrapper>
      {/* SUMMARY INFO */}
      <ContainerWrapper title="Summary">
        <textarea
          defaultValue={data.summary}
          className="h-[100px] text-black w-full rounded-sm p-2 text-sm"
          onChange={(ev) => {
            setData((data: any) => ({
              ...data,
              summary: ev.target.value,
            }));
          }}></textarea>
      </ContainerWrapper>

      {/* EXPERIENCE */}
      <ContainerWrapper title="Experience">
        <ExperienceEditor
          data={data}
          handleExperienceChange={handleExperienceChange}
        />
      </ContainerWrapper>

      {/* EDUCATION */}
      <ContainerWrapper title="Education">
        <EducationEditor
          data={data}
          handleEducationChange={handleEducationChange}
        />
      </ContainerWrapper>
      {/* SKILLS */}
      <ContainerWrapper title="SKILLS">
        <SkillEditor data={data} handleSkillChange={handleSkillChange} />
      </ContainerWrapper>

      {/* <button
        onClick={saveAsPDF}
        className="mt-5 border rounded-full px-4 py-2 cursor-pointer bg-white text-black hover:bg-[#191919] hover:text-white transition-all active:scale-95">
        Save as PDF
      </button> */}
    </div>
  );
}

function ContainerWrapper({
  children,
  title,
  smallTitle = false,
}: {
  children: ReactNode;
  title: string;
  smallTitle?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative border px-2 pt-2 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="select-none text-sm absolute top-1 right-1 cursor-pointer">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
      <p
        onClick={() => setOpen(!open)}
        className={`pb-4 select-none w-full cursor-pointer ${
          smallTitle ? 'text-sm' : 'text-lg'
        }`}>
        {title}
      </p>
      <div className={`${open ? 'h-auto' : 'h-0'} overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}

function BasicInfoEditor({
  data,
  setData,
}: {
  data: Template3DataType;
  setData: React.Dispatch<React.SetStateAction<Template3DataType>>;
}) {
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <p className="text-sm">Name</p>
        <EditorInput
          value={data.info.name}
          onChange={(ev) => {
            setData((data) => ({
              ...data,
              info: { ...data.info, name: ev.target.value },
            }));
          }}
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm">Title</p>
        <EditorInput
          value={data.info.title}
          onChange={(ev) => {
            setData((data) => ({
              ...data,
              info: { ...data.info, title: ev.target.value },
            }));
          }}
          placeholder="Web Developer"
        />
      </div>
    </div>
  );
}

function SocialInfoEditor({
  data,
  setData,
}: {
  data: Template3DataType;
  setData: React.Dispatch<React.SetStateAction<Template3DataType>>;
}) {
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <p className="text-sm">LinkedIn</p>
        <EditorInput
          value={data.socialInfo.linkedin}
          onChange={(ev) => {
            setData((data) => ({
              ...data,
              socialInfo: { ...data.socialInfo, linkedin: ev.target.value },
            }));
          }}
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm">Address</p>
        <EditorInput
          value={data.socialInfo.address}
          onChange={(ev) => {
            setData((data) => ({
              ...data,
              socialInfo: { ...data.socialInfo, address: ev.target.value },
            }));
          }}
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm">Phone</p>
        <EditorInput
          value={data.socialInfo.phone}
          onChange={(ev) => {
            setData((data) => ({
              ...data,
              socialInfo: { ...data.socialInfo, phone: ev.target.value },
            }));
          }}
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm">Email</p>
        <EditorInput
          value={data.socialInfo.email}
          onChange={(ev) => {
            setData((data) => ({
              ...data,
              socialInfo: { ...data.socialInfo, email: ev.target.value },
            }));
          }}
        />
      </div>
    </div>
  );
}

function ExperienceEditor({
  data,
  handleExperienceChange,
}: {
  data: Template3DataType;
  handleExperienceChange: (exp: Template3DataType['experience']) => void;
}) {
  function addMore() {
    let experience = [...data.experience];
    experience.push(Object.assign({}, DEFAULT_DATA.experience[0]));
    handleExperienceChange(experience);
  }

  return (
    <div className="flex flex-col">
      <div>
        {data?.experience?.map((exp, i: number) => (
          <ContainerWrapper
            key={`Experience-Container-${i}`}
            smallTitle
            title={`Experience - ${i + 1}`}>
            <ExperienceInputsContainer
              data={data}
              i={i}
              handleExperienceChange={handleExperienceChange}
            />
          </ContainerWrapper>
        ))}
      </div>
      <button
        onClick={addMore}
        className="bg-white px-2 py-1 rounded-full text-black text-sm my-2 ml-auto">
        Add More
      </button>
    </div>
  );
}

function ExperienceInputsContainer({
  i,
  data,
  handleExperienceChange,
}: {
  data: Template3DataType;
  i: number;
  handleExperienceChange: (exp: Template3DataType['experience']) => void;
}) {
  function deleteOne(i: number) {
    let experience = [...data.experience];
    experience.splice(i, 1);
    handleExperienceChange(experience);
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    let key = ev.target.name as keyof Template3DataType['experience'][0];
    let idx = Number(ev.target.getAttribute('data-id')) as any as number;
    let experience = [...data.experience];
    if (key !== 'points') experience[idx][key] = ev.target.value;
    handleExperienceChange(experience);
  }

  const handlePointsChange = (
    points: Template3DataType['experience'][0]['points']
  ) => {
    let experience = [...data.experience];
    experience[i].points = points;
    handleExperienceChange(experience);
  };

  return (
    <div className="relative flex flex-col gap-3" key={`experience-${i}`}>
      <button
        className="absolute top-2 right-2 text-red-500 cursor-pointer bg-white w-max rounded-full p-2"
        onClick={() => {
          deleteOne(i);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      <div className="mt-8">
        <p className="text-sm">Title</p>
        <EditorInput
          value={data.experience[i].title}
          name="title"
          data-id={i}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="text-sm">Company</p>
        <EditorInput
          value={data.experience[i].company}
          name="company"
          data-id={i}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="text-sm">Location</p>
        <EditorInput
          value={data.experience[i].location}
          name="location"
          data-id={i}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="text-sm">Start</p>
        <EditorInput
          value={data.experience[i].start}
          name="start"
          data-id={i}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="text-sm">End</p>
        <EditorInput
          value={data.experience[i].end}
          name="end"
          data-id={i}
          onChange={handleChange}
        />
      </div>
      <div>
        <ExperiencePointsEditor
          points={data.experience[i].points}
          handlePointsChange={handlePointsChange}
        />
      </div>
    </div>
  );
}

function ExperiencePointsEditor({
  points,
  handlePointsChange,
}: {
  points: Template3DataType['experience'][0]['points'];
  handlePointsChange: (
    points: Template3DataType['experience'][0]['points']
  ) => void;
}) {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const idx = Number(ev.target.getAttribute('point-id'));
    points.splice(idx, 1, ev.target.value);
    handlePointsChange(points);
  };

  return (
    <ContainerWrapper title="Points" smallTitle>
      <div className={`flex flex-col gap-3 overflow-hidden`}>
        {points?.map((point: any, i: number) => (
          <EditorInput
            key={`points-${i}`}
            value={point}
            point-id={i}
            onChange={handleChange}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
}

function EducationEditor({
  data,
  handleEducationChange,
}: {
  data: Template3DataType;
  handleEducationChange: (ed: Template3DataType['education']) => void;
}) {
  function addMore() {
    let education = [...data.education];
    education.push(Object.assign({}, DEFAULT_DATA.education[0]));
    handleEducationChange(education);
  }

  function deleteOne(i: number) {
    let education = [...data.education];
    education.splice(i, 1);
    handleEducationChange(education);
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    let key = ev.target.name as keyof Template3DataType['education'][0];
    let idx = Number(ev.target.getAttribute('data-id'));
    let education = [...data.education];
    education[idx][key] = ev.target.value;
    handleEducationChange(education);
  }

  return (
    <div className="flex flex-col">
      <div>
        {data?.education?.map((ed, i: number) => (
          <ContainerWrapper
            key={`Education-${i}`}
            smallTitle
            title={`Education - ${i + 1}`}>
            <div
              className="relative flex flex-col gap-3"
              key={`education-${i}`}>
              <button
                className="absolute top-2 right-2 text-red-500 cursor-pointer bg-white w-max rounded-full p-2"
                onClick={() => {
                  deleteOne(i);
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <div className="mt-8">
                <p className="text-sm">University/College</p>
                <EditorInput
                  value={ed.institute}
                  name="institute"
                  data-id={i}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="text-sm">Degree</p>
                <EditorInput
                  value={ed.degree}
                  name="degree"
                  data-id={i}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="text-sm">Passing Year</p>
                <EditorInput
                  value={ed.passingYear}
                  name="passingYear"
                  data-id={i}
                  onChange={handleChange}
                />
              </div>
            </div>
          </ContainerWrapper>
        ))}
      </div>
      <button
        onClick={addMore}
        className="bg-white px-2 py-1 rounded-full text-black text-sm my-2 ml-auto">
        Add More
      </button>
    </div>
  );
}

function SkillEditor({
  data,
  handleSkillChange,
}: {
  data: Template3DataType;
  handleSkillChange: (ed: Template3DataType['skills']) => void;
}) {
  function addMore() {
    let skills = [...data.skills];
    skills.push('Add Your Skill');
    handleSkillChange(skills);
  }

  function deleteOne(i: number) {
    let skills = [...data.skills];
    skills.splice(i, 1);
    handleSkillChange(skills);
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    let idx = ev.target.getAttribute('data-id') as any as number;
    let skills = [...data.skills];
    skills[idx] = ev.target.value;
    handleSkillChange(skills);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        {data?.skills?.map((skill, i: number) => (
          <div className="relative flex gap-3" key={`skills-${i}`}>
            <EditorInput value={skill} data-id={i} onChange={handleChange} />
            <button
              className="text-red-500 cursor-pointer bg-white w-max rounded-full p-2"
              onClick={() => {
                deleteOne(i);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addMore}
        className="bg-white px-2 py-1 rounded-full text-black text-sm my-2 ml-auto">
        Add More
      </button>
    </div>
  );
}

export default Template3Editor;
