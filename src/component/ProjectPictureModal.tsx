import { IoMdCloseCircle } from "react-icons/io";

const ProjectPictureModal = ({ images, hideModal, setHideModal }: any) => {
  const handleHideModal = () => {
    setHideModal(true);
  };
  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center ${
        hideModal && "hidden"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black opacity-80 ${
          hideModal && "hidden"
        }`}
      ></div>
      <div
        className={`relative w-[90%] h-[90%] z-[60] bg-white rounded-lg ${
          hideModal && "hidden"
        }`}
      >
        <button
          onClick={handleHideModal}
          className="absolute top-6 right-0 z-[100] w-full flex justify-end"
        >
          <IoMdCloseCircle className="text-5xl pointer-events-none mr-10 text-red-500" />
        </button>
        <div className="carousel carousel-center bg-neutral rounded-box w-full h-full space-x-4 p-4">
          {images.map((item: any) => {
            const image = `https:${item.fields.file.url}`;

            return (
              <div key={item.sys.id} className="w-full h-full carousel-item">
                <img src={image} className="rounded-box object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPictureModal;
