import React from "react";
import { BlockManager, BasicType } from "easy-email-core";
import { EmailEditor, EmailEditorProvider } from "easy-email-editor";
import { SimpleLayout } from "easy-email-extensions";

import { testMergeTags } from "./testMergeTags";

import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";
import "@arco-themes/react-easy-email-theme/css/arco.css"; // theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color

const initialValues = {
  subject: "Welcome to Easy-email",
  subTitle: "Nice to meet you!",
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};

const Editor = () => {
  console.log(initialValues);
  return (
    <div>
      <EmailEditorProvider
        data={initialValues}
        height={"calc(100vh - 72px)"}
        fontList={[{ value: "Arial", label: "Arial" }]}
        autoComplete
        dashed={false}
        mergeTagGenerate={(m) => `{{tag}}`}
        mergeTags={testMergeTags}
      >
        {({ values }) => {
          return (
            // @ts-ignore
            <SimpleLayout
              defaultShowLayer={true}
              showSourceCode={false}
              renderTitle={() => "Hello"}
            >
              <EmailEditor />
            </SimpleLayout>
          );
        }}
      </EmailEditorProvider>
    </div>
  );
};

export default Editor;

export { Editor };
