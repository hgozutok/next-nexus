import { declarativeWrappingPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

const schema = makeSchema(
    {
        types,
        plugins: [declarativeWrappingPlugin({ disable: true })],
        contextType: {
            module: join(process.cwd(), "./graphql/types/Context.ts"),
            export: "Context"
        },
        outputs: {
            schema: join(process.cwd(), "./graphql/generated/schema.graphql"),
            typegen: join(process.cwd(), "./graphql/generated/nexus-typegen.d.ts")


        },
        nonNullDefaults: {
            output: true,
        },
    }
)
export { schema };