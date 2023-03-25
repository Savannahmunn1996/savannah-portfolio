const RES_URL = "http://localhost:3000/res.png";

export default function Resume() {
  const downloadUrl = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement("a");
        const FileName = url.split("/").pop();
        aTag.href = blobURL;
        aTag.setAttribute("download", FileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => {
          downloadUrl(RES_URL);
        }}
      >
        Download Resume
      </button>
    </div>
  );
}
