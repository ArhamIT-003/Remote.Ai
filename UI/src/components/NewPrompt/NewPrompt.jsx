import { useEffect, useRef, useState } from "react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { IKImage } from "imagekitio-react";

export default function NewPrompt() {
  const [img, setImg] = useState({
    dbData: "",
    isLoading: false,
    isError: false,
  });

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div ref={endRef} />

      <div className="newPrompt">
        {img.isLoading && <div className="">Loading...</div>}
        {img.isError && <div className="">Error...</div>}
        {img.dbData?.filePath && (
          <div className="image user">
            <IKImage
              urlEndpoint={import.meta.env.VITE_IMAGE_KIT_URL_ENDPOINT}
              path={img.dbData?.filePath}
              transformation={[{ width: "300", height: "300" }]}
              className="file-img"
            />
          </div>
        )}

        <form>
          <Upload setImg={setImg} />
          <input type="file" id="file" multiple={false} hidden />
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" className="btn-image" />
          </button>
        </form>
      </div>
    </>
  );
}
