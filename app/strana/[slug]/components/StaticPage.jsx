import Image from "next/image";

// HELPER: dekodira HTML entitete (ako CMS escape-uje sadržaj)
const decodeHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
};

const StaticPage = ({ data }) => {
  const staticData = data?.items?.map((item) => {
    return item;
  });

  const keyGenerator = (prefix) => {
    return `${prefix}-${Math.random().toString(36)}`;
  };

  return (
    <>
      {staticData?.map((item) => {
        switch (item?.type) {
          case "multiple_images":
            return (
              <div
                key={keyGenerator("multiple_images")}
                className="mt-10 grid !max-w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
              >
                {item?.content?.map((image) => (
                  <div
                    key={keyGenerator("image")}
                    className="relative col-span-1 flex justify-center"
                  >
                    <div className="max-sm:h-[280px] sm:h-[300px] lg:h-[450px] 2xl:h-[500px]">
                      <Image
                        src={image?.file}
                        alt=""
                        fill
                        sizes="100vw"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            );

          case "html_editor":
          case "textarea":
            return (
              <div
                key={keyGenerator(item?.type)}
                className="prose !max-w-full"
                dangerouslySetInnerHTML={{
                  __html: decodeHtml(item?.content),
                }}
              ></div>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default StaticPage;
