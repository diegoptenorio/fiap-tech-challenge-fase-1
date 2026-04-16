import Template from "./template";
import User from "./components/user";
import Menu from "./components/menu";
import Balance from "./components/balance";

const Home = () => (
    <Template>
        <Template.Header>
            <User />
        </Template.Header>
        <Template.Main>
            <Menu />
            <Balance />
        </Template.Main>
    </Template>
);

export default Home;
