"use client";
import { useEffect } from "react";

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  useEffect(() => {
    console.log("first");

    return () => {
      console.log("second");
    };
  }, []);

  return <div>CaseStudyPage {params.id}</div>;
};

export default CaseStudyPage;
