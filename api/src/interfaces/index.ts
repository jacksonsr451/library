import type Config from "@settings/config";
import rest from "@interfaces/rest";

const start = (config: Config) => {
    rest(config)
}

export default start