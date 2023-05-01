import { VerticalTabs } from "../VerticalTabs";

import { job } from "@/types";

export const Work = ({listJobs}:{listJobs: job[]}) => {
  return (
    <section id='work' className='container'>
      <div className='title-section reveal'>
        <h2>
          <span className='code-number'>02.</span> Where i worked?
        </h2>
        <span className='line-title'></span>
      </div>
      <div className='work-content reveal'>
        <VerticalTabs works={listJobs} />
      </div>
    </section>
  );
};
