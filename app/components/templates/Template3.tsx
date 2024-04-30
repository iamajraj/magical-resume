import React from 'react';

type Props = {};

export default function Template3({}: Props) {
  return (
    <main className="w-[800px] flex flex-col px-7 py-12 bg-white text-black">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-medium">Mohsin Alshammari</h1>
        <p className="text-2xl">Product Manager</p>
      </div>

      {/* Social Info */}
      <div className="flex items-center gap-2 text-[13px] justify-center font-medium">
        <p>in/mohsinalshammari</p>
        <p className="text-[11px]">•</p>
        <p>Santa Monica, California</p>
        <p className="text-[11px]">•</p>
        <p>7759978644</p>
        <p className="text-[11px]">•</p>
        <p>mohsinalshammari.jobs@gmail.com</p>
      </div>

      {/* SUMMARY */}
      <section>
        <h1 className="font-bold border-b-2 border-b-black">SUMMARY</h1>
        <p className="text-[13px] border-b-2">
          Experienced Product Manager with a proven track record of successfully
          launching and managing products from ideation to market. Skilled in
          conducting market research, analyzing data, and developing product
          strategies that align with business objectives. Adept at collaborating
          cross-functionally with teams such as engineering, design, sales, and
          marketing to ensure product success. Strong communication skills and
          ability to lead teams towards achieving goals.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-5">
        <h1 className="font-bold border-b-2 border-b-black">EXPERIENCE</h1>
        <ul>
          <li>
            <div className="flex items-center gap-1 font-bold text-[13px]">
              <p>Founder</p>
              <p>|</p>
              <p>Magical Resume</p>
              <p>|</p>
              <p>San Francisco, California, United States</p>
              <p>|</p>
              <p>1 2022-4/2023</p>
            </div>

            <ul className="ml-10 list-disc text-[13px]/[17px] mt-1">
              <li>
                Partnered in the development of an AI-enabled resume writing
                software, improving resume generation, personal branding, and
                ATS compatibility.
              </li>
              <li>
                Guided the product journey from conception to launch,
                maintaining alignment with market needs and company goals.
              </li>
              <li>
                Facilitated the creation of more than 3000 personalized resumes
                using AI technology.
              </li>
              <li>
                Administered A/B testing and optimized UI designs, contributing
                to a 20% enhancement in user experience scores and a 15% lift in
                conversion rates.
              </li>
              <li>
                Orchestrated product development using visual roadmaps, ensuring
                timely introduction of new features while continually refining
                them based on customer feedback and API integration.
              </li>
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-1 font-bold text-[13px]">
              <p>Product Manager</p>
              <p>|</p>
              <p>Claimyr</p>
              <p>|</p>
              <p>San Francisco, California, United States</p>
              <p>|</p>
              <p>2021-/2021</p>
            </div>

            <ul className="ml-10 list-disc text-[13px]/[17px] mt-1">
              <li>
                Oversaw the introduction of digital products in 15 states,
                thereby expanding market reach and achieving over a million
                dollars in monthly revenue
              </li>
              <li>
                Streamlined strategic business operations and planning, leading
                to improved team collaboration, prioritization, and customer
                satisfaction
              </li>
              <li>
                Directed business software products, incorporating client
                feedback into product enhancements that increased cross-team
                collaboration by 30%.
              </li>
              <li>
                Coordinated diverse teams, practicing agile methodologies, which
                led to clear project objectives and transparent deliverables
              </li>
              <li>
                Hired and trained team members, advocating for an
                employee-centric approach and open-door policy.
              </li>
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-1 font-bold text-[13px]">
              <p>Product Manager</p>
              <p>|</p>
              <p>Network Operation Telecom CO.</p>
              <p>|</p>
              <p>Riyad, Saudi Arabia</p>
              <p>|</p>
              <p>2019-/2021</p>
            </div>

            <ul className="ml-10 list-disc text-[13px]/[17px] mt-1">
              <li>
                Developed and executed product strategies as a Senior Product
                Manager, gaining a strong understanding of Riyadh's tech
                industry trends.
              </li>
              <li>
                Adopted agile development practices, enhancing team knowledge
                and expediting the software development environment.
              </li>
              <li>
                Utilized my degree in Economics and technical expertise to
                collaborate with tech teams in creating innovative construction
                management solutions.
              </li>
              <li>
                Conducted economic feasibility studies for future planning,
                attracting more investments into the area and fostering a
                thriving business ecosystem.
              </li>
              <li>
                Cooperated with cross-functional teams in a matrix organization
                to ensure successful program management and delivery of complex,
                scalable products.
              </li>
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-1 font-bold text-[13px]">
              <p>Project Manager</p>
              <p>|</p>
              <p>Network Operation Telecom CO.</p>
              <p>|</p>
              <p>Saudi Arabia</p>
              <p>|</p>
              <p>2014-/2016</p>
            </div>

            <ul className="ml-10 list-disc text-[13px]/[17px] mt-1">
              <li>
                Managed project personnel to ensure on-time and within-budget
                project progression.
              </li>
              <li>
                Formulated detailed project plans, including scope, budget, and
                schedule, and monitored project performance to meet all
                objectives.
              </li>
              <li>
                Cultivated relationships with all stakeholders, maintaining
                clear communication and alignment on project goals.
              </li>
              <li>
                Established risk management processes to identify, assess, and
                mitigate project risks.
              </li>
              <li>
                Conducted post-project evaluations to glean insights for future
                initiatives.
              </li>
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-1 font-bold text-[13px]">
              <p>Interpreter</p>
              <p>|</p>
              <p>Northern Nevada International Center</p>
              <p>|</p>
              <p>Reno, Nevada</p>
              <p>|</p>
              <p>2011-/2012</p>
            </div>

            <ul className="ml-10 list-disc text-[13px]/[17px] mt-1">
              <li>
                Translated complex English documents into Arabic and vice versa,
                providing the highest level of accuracy and cultural relevance.
              </li>
              <li>
                Performed simultaneous interpretation for high-level meetings
                and conferences.
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
                strategies to improve bilingual communication skills within the
                organization.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h1 className="font-bold border-b-2 border-b-black">EDUCATION</h1>
        <ul className="max-w-[400px] text-[13px]">
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
          <li>
            <p className="font-bold opacity-60">Visiting Student Program</p>
            <ul>
              <li className="w-full flex items-center justify-between opacity-70">
                <div className="ml-3 space-x-2 flex items-center">
                  <p>-</p>
                  <p>New York University - Stern School of Business</p>
                </div>
                <p>2013</p>
              </li>
              <li className="w-full flex items-center justify-between opacity-70">
                <div className="ml-3 space-x-2 flex items-center">
                  <p>-</p>
                  <p>London School of Economics</p>
                </div>
                <p>2014</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-5">
        <h1 className="font-bold border-b-2 border-b-black">Skills</h1>
        <div className="grid grid-cols-3 text-[13px]">
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
        </div>
      </section>
    </main>
  );
}
