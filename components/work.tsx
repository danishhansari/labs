import Image from "next/image";

export const Work = () => {
  return (
    <section className="relative py-2">
      <div className="flex gap-2 overflow-auto relative">
        <div className="flex flex-col gap-2">
          <div className="relative bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden">
            <Image
              alt="kj"
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50716%2Fportfolite-tSdwL2z7uMF6IBuGzhEUgbCmCKfrgt&w=640&q=100"
              fill={true}
            />
          </div>

          <div className="relative bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden">
            <Image
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50561%2Fupreach-ZPerqqHDD2M86y3nVJt2Ah3LUatoCF&w=640&q=100"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative bg-[#BADEDD]/10 h-56 w-60 rounded-sm overflow-hidden">
            <Image
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45423%2Flimitless-iUrhuyeHT4wlKxawc6lNUp0ygapDL4&w=640&q=100"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden">
            <Image
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F50266%2Fgroomify-FSC3w9BV65KrfItLtEvjaylE1GGypS&w=640&q=100"
              alt="Image"
              fill
            />
          </div>

          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-sm relative overflow-hidden">
            <Image
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F56075%2Fally-IvwZ3LkoXYQr2rVY6sePSQiS9CtIFi&w=640&q=100"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm relative overflow-hidden"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden relative"></div>
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-sm overflow-hidden relative"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden relative">
            <Image
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F51619%2Fomnis-4uc7qRIHGQxBduDtkTX8PRzZ3gJqU0&w=640&q=100"
              alt=""
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-sm"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden relative">
            <Image
              alt="kjfsd"
              fill
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49318%2Fhaven-ZoHgbjfQevPZMbQRxDCFX3jGuPSQjz&w=640&q=100"
            />
          </div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm overflow-hidden relative">
            <Image
              src="https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F58050%2Fstudio13-oQKOMZdYQh2jbqJDnjNWQWPoHeNVd0&w=640&q=100"
              alt="Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm"></div>
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-sm"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm"></div>
          <div className="bg-[#BADEDD]/10 h-40 w-60 rounded-sm"></div>
          <div className="bg-[#BADEDD]/10 h-56 w-60 rounded-sm relative overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};
