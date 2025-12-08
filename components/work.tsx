import Image from "next/image";

export const Work = () => {
  return (
    <section className="relative py-2">
      <div className="flex gap-2 overflow-auto">
        <div className="flex flex-col gap-2">
          <div className="relative bg-[#BADEDD]/10 h-40 w-60 rounded-xl overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/45429381/file/6bdda954fb1e533d488b05ce65d9ec8a.png?resize=1504x1128&vertical=center"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative bg-[#BADEDD]/10 h-40 w-60 rounded-xl overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/13549297/file/original-68a380317a961f48b995981f7d275345.png?resize=1600x1200&vertical=center"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative bg-[#BADEDD]/10 h-56 w-60  rounded-xl overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/43384341/file/original-43c41c8e279563365ebd2a7111978cd2.webp?resize=2048x1879&vertical=center"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative bg-[#BADEDD]/10 h-40 w-60 rounded-xl overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/45073278/file/44eb5cf4704ca3d72ba6dd3882185a8f.png?resize=752x&vertical=center"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-xl relative overflow-hidden">
            <Image
              src="https://cdn.dribbble.com/userupload/22021854/file/original-fecea589bcfb26cfb75a0d8572c559e8.webp?resize=1504x1174&vertical=center"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-xl"></div>
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};
