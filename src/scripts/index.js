import {characters} from "./database.js"
import { registerEvent } from "./register.js";
import { render, renderModal } from "./render.js";

render(characters)

registerEvent(characters)