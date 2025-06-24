"use client";
import Link from "next/link";

const BreadcrumbsStatic = ({ title, breadcrumbs }) => {
  return (
    <div data-aos="fade-right" className="sectionPaddingX w-full bg-white">
      <div
        className={`mb-20 flex items-center gap-2 overflow-x-auto pb-2 pt-10`}
      >
        <Link className={`text-base font-light`} href={`/`}>
          Anker
        </Link>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <div key={index} className="flex">
              <span className={`mr-2 text-base`}>/</span>
              {breadcrumb.url ? (
                <Link
                  href={breadcrumb.url}
                  className={`whitespace-nowrap font-light ${index + 1 === breadcrumbs.length && "text-primary underline"}`}
                >
                  {breadcrumb.name}
                </Link>
              ) : (
                <div
                  className={`whitespace-nowrap font-light ${index + 1 === breadcrumbs.length && "text-primary underline"}`}
                >
                  {breadcrumb.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {title && (
        <div className="flex flex-col gap-1.5 pb-10">
          <h1 className="text-2xl font-light lg:text-[29px]">{title}</h1>
          <div className="h-[2px] w-[200px] bg-primary" />
        </div>
      )}
    </div>
  );
};

export default BreadcrumbsStatic;
