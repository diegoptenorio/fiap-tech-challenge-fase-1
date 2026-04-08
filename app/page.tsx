import Template from "./template";
import User from "./components/user";

export default function Home() {
    return (
        <Template>
            <Template.Header><User /></Template.Header>
        </Template>
    );
}
