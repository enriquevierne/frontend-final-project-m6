import logoHeader from "/src/assets/logo-header.png";
import logoFooter from "/src/assets/logo-footer.png";

interface LogoProps {
    position: string;
}

export const Logo = ({ position }: LogoProps) => {
  return (
    <a href="/">
      {position == "header" ? (
        <>
          <img src={logoHeader} alt="" />
        </>
      ) : null}

      {position == "footer" ? (
        <>
          <img src={logoFooter} alt="" />
        </>
      ) : null}
    </a>
  );
};
