import type Config from "../config";
import rest from "@interfaces/rest";

const start = (config: Config) => {
    rest(config)
}

export default start