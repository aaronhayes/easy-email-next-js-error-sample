import React from "react";
import dynamic from "next/dynamic";

import type { Editor as ComponentType } from "../components/Editor";

import { NextPage } from "next";

const EmailTemplateDesigner = dynamic(
  () => import("../components/Editor").then((lib) => lib.Editor as any),
  { ssr: false }
) as typeof ComponentType;

const Editor: NextPage = () => {
    
  return <EmailTemplateDesigner />;
};

export default Editor;
