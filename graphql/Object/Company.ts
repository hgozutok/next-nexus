import { inputObjectType, objectType, queryType } from "nexus";



export const Company = objectType({
    name: "Company",
    // description: Customer.$description,
    definition(t) {
        t.id("id"),
            t.string("name"),
            t.string("adress")

    }

});
