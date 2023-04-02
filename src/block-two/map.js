import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType('aimee-blocks/map', {
    edit: edit,
    save: save
});