import { inputObjectType, objectType, queryType } from "nexus";



export const Customer = objectType({
    name: "Customer",
    // description: Customer.$description,
    definition(t) {
        t.id("id"),
            t.string("name"),
            t.string("email")

    }

});

export const CustomerWhereUniqueInput = inputObjectType({
    name: "CustomerWhereUniqueInput",
    definition(t) {
        t.nonNull.id("id");
    }
});



