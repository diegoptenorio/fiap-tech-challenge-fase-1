import { Template } from "./template";
import { TemplateType } from "./template.props";
import { Header } from "./header";
import { Main } from "./main";

(Template as TemplateType).Header = Header;
(Template as TemplateType).Main = Main;

export default Template;
