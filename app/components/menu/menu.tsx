import { style } from "./menu.style";

export const Menu = () => (
    <nav className={style.menu}>
        <ul>
            <li className={`${style.item} ${style.active}`}>Início</li>
            <li className={style.item}>Transferências</li>
            <li className={style.item}>Investimentos</li>
            <li className={style.item}>Outros serviços</li>
        </ul>
    </nav>
);