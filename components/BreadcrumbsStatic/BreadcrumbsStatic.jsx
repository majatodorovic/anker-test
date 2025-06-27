"use client";
import Link from "next/link";

// Mapa slugova u naslove sa dijakritikom
const slugToTitleMap = {
  "uslovi-koriscenja": "Uslovi korišćenja",
  "opsti-uslovi-poslovanja": "Opšti uslovi poslovanja",
  "politika-kolacica": "Politika kolačića",
  // Dodaj ostale slugove koje koristiš
};

// Funkcija koja vraća pravi naslov iz sluga
const slugToTitle = (slug) => {
  if (!slug) return "";
  return (
    slugToTitleMap[slug] ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

const BreadcrumbsStatic = ({ title, breadcrumbs = [] }) => {
  return (
    <div data-aos="fade-right" className="sectionPaddingX w-full bg-white">
      <div className="mb-20 flex items-center gap-2 overflow-x-auto pb-2 pt-10">
        <Link className="text-base font-light" href={`/`}>
          Početna
        </Link>
        {breadcrumbs.map((breadcrumb, index) => {
          const slug = breadcrumb?.url?.slug || breadcrumb.name;
          const label = slugToTitle(slug);

          return (
            <div key={index} className="flex">
              <span className="mx-2 text-base">/</span>
              {breadcrumb.url ? (
                <Link
                  href={`/${slug}`}
                  className={`whitespace-nowrap font-light ${
                    index + 1 === breadcrumbs.length ? "text-primary underline" : ""
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <div
                  className={`whitespace-nowrap font-light ${
                    index + 1 === breadcrumbs.length ? "text-primary underline" : ""
                  }`}
                >
                  {label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {title && (
        <div className="flex flex-col gap-1.5 pb-10">
          <h1 className="text-2xl font-light lg:text-[29px]">
            {slugToTitle(title.toLowerCase().replaceAll(" ", "-"))}
          </h1>
          <div className="h-[2px] w-[200px] bg-primary" />
        </div>
      )}
    </div>
  );
};

export default BreadcrumbsStatic;
