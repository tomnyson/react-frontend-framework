import { useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { postAPI } from "../../utils/api"
import { API_MEDIA, API_STATIC } from "../../utils/const"

const Editor = ({ value, handleChangeData }) => {
  const [data, setData] = useState(value || "")
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()
          loader.file.then((file) => {
            body.append("files", file)
            postAPI(API_MEDIA, body)
              .then((res) => {
                console.log("rest", res)
                resolve({
                  default: `${API_STATIC}/${res.data[0]}`,
                })
              })
              .catch((err) => {
                reject(err)
              })
          })
        })
      },
    }
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader)
    }
  }
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        extraPlugins: [uploadPlugin],
        maxHeight: "400px",
      }}
      data={data}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor)
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        setData(data)
        handleChangeData(data)
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor)
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor)
      }}
    />
  )
}

export default Editor
