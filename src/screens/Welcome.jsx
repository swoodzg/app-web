import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import BtnModal from "../components/BtnModal";
import RegisterForm from "./RegisterForm";
import IngressForm from "./IngressForm";
import { ExitForm } from "./ExitForm";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { FaParking } from "react-icons/fa";
import { Popover, PopoverTrigger, PopoverContent, Button, User, Image } from "@nextui-org/react";
import { UserTwitterCard } from "../components/UserTwitterCard";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";

function capitalizeName(cadena) {
  var palabras = cadena.split(" ");
  var resultado = palabras.map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1));
  return resultado.join(" ");
}

const Welcome = () => {
  const navigate = useNavigate();
  const { user, userRegister } = useContext(UserContext);

  useEffect(() => {
    console.log("Registros", userRegister);
  }, [userRegister]);

  return (
    <section className="flex flex-col items-center pt-20 relative">
      <img className="object-cover absolute top-0 w-screen h-screen" src="/poliParking.jpeg" alt="Poli" />
      <div className="absolute top-0 w-screen h-screen bg-black opacity-80"></div>
      <Popover showArrow placement="bottom">
        <PopoverTrigger>
          <User
            className="absolute top-0 right-0 z-10 pr-4 pt-4 text-white"
            name={user ? capitalizeName(user.username) : ""}
            description="Ing bailarin"
            avatarProps={{
              src: "",
              color: "primary",
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="p-1">
          <UserTwitterCard user={user} />
        </PopoverContent>
      </Popover>
      <Button
        className="bg-transparent text-sm absolute top-0 left-0 z-10 ml-4 mt-4 text-white"
        onClick={() => navigate("/")}
      >
        <RiLogoutCircleLine size={20} />
        Cerrar Sesion
      </Button>
      <header className="z-10 text-white text-center">
        <div className="flex flex-col items-center">
          <Image alt="Logo" src="/senati_eti.jpeg" width="50" height="50" />
          <h4 className="font-bold text-large mb-4">ParkZone</h4>
        </div>
        <p className="text-lg mb-8">
          En este espacio tendrás el control de acceso de vehículos al parqueadero de nuestra institución
        </p>
      </header>
      <main className="flex flex-col gap-4 items-center sm:flex-row sm:gap-5 sm:justify-center w-full max-w-md mx-auto p-4">
        <Button onClick={() => navigate("/parking")} className="bg-primary text-white shadow-lg mb-4 w-full h-24">
          Parqueadero <FaParking fontSize={20} />
        </Button>

        {/* Botón de Ingreso */}
        <div className="w-full">
          <BtnModal title={"Ingreso"} textButton={"Ingreso"} icon={<BsBoxArrowInLeft fontSize={20} />}>
            <IngressForm />
          </BtnModal>
        </div>

        {/* Botón de Registro */}
        <div className="w-full">
          <BtnModal title={"Registro"} textButton={"Registrar"} icon={<BsPencilSquare fontSize={20} />}>
            <RegisterForm />
          </BtnModal>
        </div>

        {/* Botón de Salida */}
        <div className="w-full">
          <BtnModal title={"Salida"} textButton={"Salida"} icon={<BsBoxArrowInRight fontSize={20} />}>
            <ExitForm />
          </BtnModal>
        </div>
      </main>

      <footer className="flex justify-center items-center z-10 w-full mt-auto"> {/* Usa margin-top auto para empujarlo hacia abajo */}
        <p className="text-white text-sm">© 2024 ParkZone. Desarrollado por GRUPO HUEVITO</p>
      </footer>
    </section>
  );
};

export default Welcome;
