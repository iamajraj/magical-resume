import React from 'react';
import { Template3DataType } from '../editors/Template3Editor';
import Img from '../Img';
import EditorText from '../shared/EditorText';

type Props = {
  data?: Template3DataType;
  isPremium?: boolean;
};

export default function Template3Design({ data, isPremium }: Props) {
  return (
    <main
      id="template-3"
      className="shrink-0 w-[1212px] h-[1100px] aspect-[16/9] flex flex-col px-7 py-12 bg-white text-black relative">
      {isPremium && (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
          alt="premium"
          className="w-16 absolute -top-6 -right-6"
        />
      )}
      <div className="text-center space-y-2">
        <EditorText className="text-6xl font-medium">
          {data?.info?.name ?? 'Mohsin Alshammari'}
        </EditorText>
        <EditorText className="text-4xl">
          {data?.info?.title ?? 'Product Manager'}
        </EditorText>
      </div>

      {/* Social Info */}
      <div className="mt-2 flex items-center gap-2 justify-center font-medium">
        <div className="text-black flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-3 h-3"
            viewBox="0 0 24 24">
            <path
              fill="#000"
              d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.882 9.648h-2.94v9.412h2.94V9.647zm.265-3.235a1.694 1.694 0 00-1.682-1.706h-.053a1.706 1.706 0 000 3.412 1.694 1.694 0 001.735-1.653v-.053zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 00-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 011.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718z"></path>
          </svg>
          <EditorText>
            in/{data?.socialInfo?.linkedin ?? 'mohsinalshammari'}
          </EditorText>
        </div>
        <p className="text-[11px]">•</p>
        <div className="text-black flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <EditorText>
            {data?.socialInfo?.address ?? 'Santa Monica, California'}
          </EditorText>
        </div>
        <p className="text-[11px]">•</p>
        <div className="text-black flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <EditorText>{data?.socialInfo?.phone ?? '7759978644'}</EditorText>
        </div>
        <p className="text-[11px]">•</p>
        <div className="text-black flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 shrink-0">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <EditorText>
            {data?.socialInfo?.email ?? 'mohsinalshammari.jobs@gmail.com'}
          </EditorText>
        </div>
      </div>

      {/* SUMMARY */}
      <section className="mt-2">
        <h1 className="font-bold border-b-2 border-b-black text-xl">SUMMARY</h1>
        <EditorText className="border-b-2">
          {data?.summary ??
            `Experienced Product Manager with a proven track record of successfully
          launching and managing products from ideation to market. Skilled in
          conducting market research, analyzing data, and developing product
          strategies that align with business objectives. Adept at collaborating
          cross-functionally with teams such as engineering, design, sales, and
          marketing to ensure product success. Strong communication skills and
          ability to lead teams towards achieving goals.`}
        </EditorText>
      </section>

      {/* Experience */}
      <section className="mt-5">
        <h1 className="font-bold border-b-2 border-b-black text-xl">
          EXPERIENCE
        </h1>
        <ul>
          {data?.experience ? (
            data?.experience.map((exp, i) => (
              <li key={`Experience-Design-${i}`}>
                <div className="flex items-center gap-1 font-bold ">
                  <EditorText>{exp?.title}</EditorText>
                  <p>|</p>
                  <EditorText>{exp?.company}</EditorText>
                  <p>|</p>
                  <EditorText>{exp?.location}</EditorText>
                  <p>|</p>
                  <EditorText>
                    {exp?.start}-/{exp?.end}
                  </EditorText>
                </div>

                <ul className="ml-10 list-disc mt-1">
                  {exp?.points?.map((point, i) => (
                    <li key={`Point-Design-${i}`}>
                      <EditorText>{point}</EditorText>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <>
              <li>
                <div className="flex items-center gap-1 font-bold ">
                  <p>Founder</p>
                  <p>|</p>
                  <p>Magical Resume</p>
                  <p>|</p>
                  <p>San Francisco, California, United States</p>
                  <p>|</p>
                  <p>1 2022-4/2023</p>
                </div>

                <ul className="ml-10 list-disc mt-1">
                  <li>
                    Partnered in the development of an AI-enabled resume writing
                    software, improving resume generation, personal branding,
                    and ATS compatibility.
                  </li>
                  <li>
                    Guided the product journey from conception to launch,
                    maintaining alignment with market needs and company goals.
                  </li>
                  <li>
                    Facilitated the creation of more than 3000 personalized
                    resumes using AI technology.
                  </li>
                  <li>
                    Administered A/B testing and optimized UI designs,
                    contributing to a 20% enhancement in user experience scores
                    and a 15% lift in conversion rates.
                  </li>
                  <li>
                    Orchestrated product development using visual roadmaps,
                    ensuring timely introduction of new features while
                    continually refining them based on customer feedback and API
                    integration.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex items-center gap-1 font-bold ">
                  <p>Product Manager</p>
                  <p>|</p>
                  <p>Claimyr</p>
                  <p>|</p>
                  <p>San Francisco, California, United States</p>
                  <p>|</p>
                  <p>2021-/2021</p>
                </div>

                <ul className="ml-10 list-disc mt-1">
                  <li>
                    Oversaw the introduction of digital products in 15 states,
                    thereby expanding market reach and achieving over a million
                    dollars in monthly revenue
                  </li>
                  <li>
                    Streamlined strategic business operations and planning,
                    leading to improved team collaboration, prioritization, and
                    customer satisfaction
                  </li>
                  <li>
                    Directed business software products, incorporating client
                    feedback into product enhancements that increased cross-team
                    collaboration by 30%.
                  </li>
                  <li>
                    Coordinated diverse teams, practicing agile methodologies,
                    which led to clear project objectives and transparent
                    deliverables
                  </li>
                  <li>
                    Hired and trained team members, advocating for an
                    employee-centric approach and open-door policy.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex items-center gap-1 font-bold ">
                  <p>Product Manager</p>
                  <p>|</p>
                  <p>Network Operation Telecom CO.</p>
                  <p>|</p>
                  <p>Riyad, Saudi Arabia</p>
                  <p>|</p>
                  <p>2019-/2021</p>
                </div>

                <ul className="ml-10 list-disc mt-1">
                  <li>
                    Developed and executed product strategies as a Senior
                    Product Manager, gaining a strong understanding of
                    Riyadh&apos;s tech industry trends.
                  </li>
                  <li>
                    Adopted agile development practices, enhancing team
                    knowledge and expediting the software development
                    environment.
                  </li>
                  <li>
                    Utilized my degree in Economics and technical expertise to
                    collaborate with tech teams in creating innovative
                    construction management solutions.
                  </li>
                  <li>
                    Conducted economic feasibility studies for future planning,
                    attracting more investments into the area and fostering a
                    thriving business ecosystem.
                  </li>
                  <li>
                    Cooperated with cross-functional teams in a matrix
                    organization to ensure successful program management and
                    delivery of complex, scalable products.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex items-center gap-1 font-bold ">
                  <p>Project Manager</p>
                  <p>|</p>
                  <p>Network Operation Telecom CO.</p>
                  <p>|</p>
                  <p>Saudi Arabia</p>
                  <p>|</p>
                  <p>2014-/2016</p>
                </div>

                <ul className="ml-10 list-disc mt-1">
                  <li>
                    Managed project personnel to ensure on-time and
                    within-budget project progression.
                  </li>
                  <li>
                    Formulated detailed project plans, including scope, budget,
                    and schedule, and monitored project performance to meet all
                    objectives.
                  </li>
                  <li>
                    Cultivated relationships with all stakeholders, maintaining
                    clear communication and alignment on project goals.
                  </li>
                  <li>
                    Established risk management processes to identify, assess,
                    and mitigate project risks.
                  </li>
                  <li>
                    Conducted post-project evaluations to glean insights for
                    future initiatives.
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex items-center gap-1 font-bold ">
                  <p>Interpreter</p>
                  <p>|</p>
                  <p>Northern Nevada International Center</p>
                  <p>|</p>
                  <p>Reno, Nevada</p>
                  <p>|</p>
                  <p>2011-/2012</p>
                </div>

                <ul className="ml-10 list-disc mt-1">
                  <li>
                    Translated complex English documents into Arabic and vice
                    versa, providing the highest level of accuracy and cultural
                    relevance.
                  </li>
                  <li>
                    Performed simultaneous interpretation for high-level
                    meetings and conferences.
                  </li>
                  <li>
                    Worked closely with clients to understand their needs,
                    delivering tailored interpretation services to enhance
                    cross-cultural interactions.
                  </li>
                  <li>
                    Provided written translation services for various materials
                    including legal documents, technical manuals, and business
                    correspondences.
                  </li>
                  <li>
                    Conducted language proficiency training sessions, sharing
                    strategies to improve bilingual communication skills within
                    the organization.
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </section>

      {/* Education */}
      <section className="mt-2">
        <h1 className="font-bold border-b-2 border-b-black text-xl">
          EDUCATION
        </h1>
        <ul className="max-w-[400px]">
          {data?.education ? (
            data?.education?.map((ed, i) => (
              <li key={`Education-Design-${i}`}>
                <div className="w-full flex items-center justify-between">
                  <EditorText className="font-bold">{ed?.institute}</EditorText>
                  <EditorText>{ed?.passingYear}</EditorText>
                </div>
                <EditorText className="ml-2">{ed?.degree}</EditorText>
              </li>
            ))
          ) : (
            <>
              <li>
                <div className="w-full flex items-center justify-between">
                  <p className="font-bold">University of Nevada, Reno</p>
                  <p>2018</p>
                </div>
                <p className="ml-2">
                  Master of Business Administration - MBA (GPA: 3.8)
                </p>
              </li>
              <li>
                <div className="w-full flex items-center justify-between">
                  <p className="font-bold">University of Nevada, Reno</p>
                  <p>2014</p>
                </div>
                <p className="ml-2">Bachelor of Science (B.S.)</p>
              </li>
              <li>
                <div className="w-full flex items-center justify-between">
                  <p className="font-bold">University of Nevada, Reno</p>
                  <p>2014</p>
                </div>
                <p className="ml-2">Bachelor of Arts (B.A.)</p>
              </li>
              <li>
                <div className="w-full flex items-center justify-between">
                  <p className="font-bold">University of Nevada, Reno</p>
                  <p>2014</p>
                </div>
                <p className="ml-2">Bachelor of Science (B.S.)</p>
              </li>
            </>
          )}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-5">
        <h1 className="font-bold border-b-2 border-b-black text-xl">Skills</h1>
        <div className="grid grid-cols-3">
          {data?.skills ? (
            data?.skills?.map((skill, i) => (
              <EditorText key={`Skill-Design-${i}`}>{skill}</EditorText>
            ))
          ) : (
            <>
              <p>Ai Applications</p>
              <p>Agile Management</p>
              <p>JavaScript</p>
              <p>Ai programming and content writing</p>
              <p>MongoDB</p>
              <p>Roadmaps</p>
              <p>OpenAi and Anthropic Api</p>
              <p>Financial Analysis</p>
              <p>Software as a Service (SaaS)</p>
              <p>Operations Management</p>
              <p>React.js</p>
              <p>Process Improvement</p>
              <p>Team Leadership</p>
              <p>Nextjs</p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
