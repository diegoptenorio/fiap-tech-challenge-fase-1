import Image from "next/image";
import Logo from "./assets/img/logo.svg";
import Template from "./template";
import User from "./components/user";
import Menu from "./components/menu";
import Balance from "./components/balance";

const Home = () => (
    <Template>
        <Template.Header>
            <Image src={Logo} alt="Logo" />
            <User />
        </Template.Header>
        <Template.Main>
            <Menu />
            <Balance />
        </Template.Main>
    </Template>
);

export default Home;
