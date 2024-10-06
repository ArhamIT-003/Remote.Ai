import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/upload/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

export default function Upload({ setImg }) {
  const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_URL_ENDPOINT;
  const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

  const ikUploadRefTest = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
    setImg((prev) => ({ ...prev, isError: true }));
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImg((prev) => ({ ...prev, isLoading: false, dbData: res }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress", progress);
    setImg((prev) => ({ ...prev, isLoading: true }));
  };

  const onUploadStart = (evt) => {
    console.log("Start", evt);
  };
  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="test-upload.png"
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
        hidden={true}
        ref={ikUploadRefTest}
      />

      <label htmlFor="upload-button">
        <img
          src="/attachment.png"
          alt=""
          onClick={() => ikUploadRefTest.current.click()}
        />
      </label>
    </IKContext>
  );
}
