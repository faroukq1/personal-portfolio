import { IoMdCloseCircle } from "react-icons/io";

const ProjectPictureModal = ({ pictures, hideModal, setHideModal }: any) => {
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
        <div className="carousel w-full h-full rounded-box">
          {pictures.map((item: string, index: number) => {
            return (
              <div
                key={index}
                id={`slid${index}`}
                className="carousel-item relative w-full"
              >
                <img src={item} alt="item" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPictureModal;
