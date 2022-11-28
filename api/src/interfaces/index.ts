import type Config from "../config";
import rest from "./rest";

const start = (config: Config) => {
    rest(config)
}

export default start