import Title from "../title";
import { style } from "./balance.style";

export const Balance = () => (
    <div className={style.container}>
        <Title type="h1">
            Olá, Joana! :)
        </Title>
        <p>
            <small>Quinta-feira, 08/09/2024</small>
        </p>
        <div className={style.balance}>
            <button className={style.toggleHideBalance}>
                <strong>Saldo</strong>
            </button>
            <br />
            Conta Corrente
            <br />
            <span className="text-white text-[31px]">R$ 2.500,00</span>
        </div>
    </div>
);