import React, { Component, useRef, useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// mui
import { Backdrop, CircularProgress } from "@mui/material";

type KeyValuePair = {
  [key: string]: any;
};

export interface TextEditorProps {
  propRef?: any;
  initialData: string;
  onChange: (data: string) => void;
  noEdit: boolean;
  onReady?: () => void;
  onError?: () => void;
  uploadImageRequestHeader?: KeyValuePair;
  uploadImageRequestUrl: string;
}

export const TextEditor = ({
    propRef,
  initialData,
  onChange,
  noEdit,
  onReady,
  onError,
  uploadImageRequestHeader,
  uploadImageRequestUrl,
}: TextEditorProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const editorRef: any = useRef<{
    CKEditor: typeof CKEditor;
    Editor: typeof ClassicEditor;
  }>();
  const { CKEditor, Editor } = editorRef.current || {};

  const uploadImageRequestHeader_ =
    typeof uploadImageRequestHeader !== "undefined"
      ? uploadImageRequestHeader
      : {
          "X-CSRF-TOKEN": "CSRF-Token",
        };

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setIsReady(true);
  }, []);

  //   if (uploadImageRequestUrl === "")
  //     return <p>Please provide image request url!</p>;

  return isReady ? (
    <CKEditor
      id="blog_editor"
      disabled={noEdit}
      editor={Editor}
      data={initialData}
      config={{
        simpleUpload: {
          uploadUrl: uploadImageRequestUrl,
          withCredentials: false,
          // headers: uploadImageRequestHeader_,
        },
        removePlugins: ["Title"],
      }}
      onReady={(editor: any) => {
        if (typeof onReady !== "undefined") onReady();
        console.log("Editor is ready to use!", editor);
        propRef.current = editor;
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        onChange(data);
        console.log({ event, editor, data });
      }}
      // onBlur={(event, editor) => {
      //     console.log('Blur.', editor);
      // }}
      // onFocus={(event, editor) => {
      //     console.log('Focus.', editor);
      // }}
      onError={(error: any, details: any) => {
        if (typeof onError !== "undefined") onError();
        console.log({ error, details });
      }}
    />
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!isReady}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
