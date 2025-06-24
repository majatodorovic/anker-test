"use client";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  return (
    <div className="sectionPaddingX mt-20 bg-black pt-[70px] text-white lg:mt-[100px] 2xl:mt-[120px]">
      <div className="flex items-center justify-between border-b border-l-0 border-r-0 border-t-0 border-b-primary pb-6 max-xl:flex-col">
        <div>
          <Link href={`/`}>
            <Image
              src={"/images/logo/logo.svg"}
              width={214}
              height={45}
              alt="Croonus Logo"
            />
          </Link>
        </div>
        <div className="flex items-center max-xl:mt-10 max-sm:flex-col max-sm:gap-1 sm:gap-5">
          <div className="flex flex-col">
            <div>Pozovite nas:</div>
            <a
              href={`tel:${process.env.TELEPHONE}`}
              className="font-light hover:text-primary"
            >
              {process.env.TELEPHONE}
            </a>
          </div>
          <div className="bg-primary sm:h-8 sm:w-[1px]"></div>
          <div>
            <div>Anker Experience Store:</div>
            <div className="font-light">TC Galerija 2. sprat, Beograd</div>
          </div>
        </div>
        <div className="flex items-center gap-1 max-xl:mt-10 max-sm:flex-col sm:gap-5">
          <a
            href="https://www.facebook.com/Anker.fans"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Facebook
          </a>
          <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>
          <a
            href="https://www.youtube.com/user/AnkerOceanwing"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Youtube
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-10 pt-8 max-xl:flex-col 2xl:gap-20">
        <div className="flex w-full flex-col">
          <div className="flex flex-wrap items-center gap-1.5 text-[15px] max-sm:flex-col">
            <Link
              href={`/strana/uslovi-koriscenja`}
              className="hover:text-primary"
            >
              Uslovi korišćenja
            </Link>
            <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>

            <Link
              href={`/strana/reklamacije#politika-reklamacija`}
              className="hover:text-primary"
            >
              Reklamacije
            </Link>
            <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>

            <Link
              href={`/strana/pravo-na-odustajanje#odustanak-od-ugovora`}
              className="hover:text-primary"
            >
              Pravo na odustajanje
            </Link>
            <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>

            <Link
              href={`/strana/zamena-artikala`}
              className="hover:text-primary"
            >
              Zamena artikala
            </Link>
            <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>

            <Link href={`/strana/kako-kupiti`} className="hover:text-primary">
              Kako kupiti
            </Link>
            <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>

            <Link href={`/strana/o-nama`} className="hover:text-primary">
              O nama
            </Link>
            <div className="bg-primary sm:mx-2 sm:h-3 sm:w-[1px]"></div>

            <Link href={`/kontakt`} className="hover:text-primary">
              Kontakt
            </Link>
          </div>
          <p className="mb-[50px] mt-[50px] max-w-[680px] text-[13px] lg:mt-[90px]">
            Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a
            plaćanje se vrši isključivo u dinarima. Isporuka se vrši SAMO na
            teritoriji Republike Srbije. Nastojimo da budemo što precizniji u
            opisu proizvoda, prikazu slika i samih cena, ali ne možemo
            garantovati da su sve informacije kompletne i bez grešaka. Svi
            artikli prikazani na sajtu su deo naše ponude i ne podrazumeva da su
            dostupni u svakom trenutku. Raspoloživost robe možete proveriti
            pozivanjem Call Centra na +381 11 200 200 (po ceni lokalnog poziva).
          </p>
          <div className="flex items-center gap-1">
            <a
              href={`https://rs.visa.com/pay-with-visa/security-and-assistance/protected-everywhere.html`}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Image
                src={"/icons/bank/visaSecure.webp"}
                width={50}
                height={30}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </a>
            <div>
              <Image
                src={"/icons/bank/dinacard.webp"}
                width={50}
                height={30}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </div>
            <a
              href={`http://www.mastercard.com/rs/consumer/credit-cards.html`}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Image
                src={"/icons/bank/idcheck.webp"}
                width={50}
                height={30}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </a>
            <div>
              <Image
                src={"/icons/bank/visa.webp"}
                width={50}
                height={30}
                alt="Visa"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </div>
            <div>
              <Image
                src={"/icons/bank/maestro.webp"}
                width={50}
                height={30}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </div>
            <a
              href={`https://www.otpbanka.rs`}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Image
                src={"/icons/bank/otp.jpg"}
                width={200}
                height={70}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </a>
            <div>
              <Image
                src={"/icons/bank/mastercard.webp"}
                width={50}
                height={30}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </div>

            <div>
              <Image
                src={"/icons/bank/american.webp"}
                width={50}
                height={30}
                alt="Master Card"
                className="h-[30px] w-auto rounded-md border border-white bg-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:min-w-[360px]">
          <Newsletter />
          <div className="mt-12 text-sm">Generalni zastupnik:</div>
          <div className="mb-2 mt-5">
            <Image
              src={"/images/logo/logo.png"}
              width={168}
              height={30}
              alt="Logo"
            />
          </div>
          <div className="text-[15px]">
            <div>Kneginje Zorke 25, Beograd, Srbija</div>
            <div className="flex items-center max-sm:flex-col max-sm:items-start sm:gap-2">
              <a
                href={`tel:+381 (11) 20 90 801`}
                className="font-light hover:text-primary"
              >
                +381 (11) 20 90 801
              </a>
              <div className="bg-primary sm:h-4 sm:w-[1px]"></div>
              <a
                href={`tel:+381 (11) 20 90 855`}
                className="font-light hover:text-primary"
              >
                +381 (11) 20 90 855
              </a>
            </div>
            <div className="flex items-center max-sm:mt-2 max-sm:flex-col max-sm:items-start sm:gap-2">
              <a
                href={`mailto:${process.env.EMAIL}`}
                className="hover:text-primary"
              >
                {process.env.EMAIL}
              </a>
              <div className="bg-primary sm:h-4 sm:w-[1px]"></div>
              <Link
                target="_blank"
                href={`https://www.atompartner.rs`}
                className="hover:text-primary"
              >
                www.atompartner.rs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-14 max-md:flex-col">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anker Srbija | Sva prava zadržana.
          Powered by{" "}
          <a
            href="https://www.croonus.com"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-primary"
          >
            Croonus Technologies
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
