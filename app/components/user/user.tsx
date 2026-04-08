import Image from "next/image";
import ImgAvatar from "../../assets/img/avatar.svg";
import { style } from "./user.style";


export const User = () => (
    <div className={style.user}>
        Joana da Silva Oliveira
        <Image src={ImgAvatar} alt="Avatar" />
    </div>
);
