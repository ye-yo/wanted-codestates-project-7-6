import { createContext, useState } from 'react';

const ApplymentBriefProvider = ({ children }) => {
  const [applymentBrief, setApplymentBrief] = useState({});
  return (
    <ApplymentBriefContext.Provider value={{ applymentBrief, setApplymentBrief }}>
      {children}
    </ApplymentBriefContext.Provider>
  );
};

export const ApplymentBriefContext = createContext({
  applymentBrief: {},
  setApplymentBrief: () => {},
});
export default ApplymentBriefProvider;
